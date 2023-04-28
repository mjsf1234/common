import {IStorageService} from '../components';

import _ from 'underscore';
import fs from 'fs';
import path from 'path';
import {LoggingUtils} from './logging-utils';
import crypto from 'crypto';
import {CryptoUtils, RandomizationUtils} from '.';
import {MimeTypesConfig} from '../config';
import {RestError} from './rest-error';
import * as mb from 'magic-bytes.js';
const Jimp = require('jimp')
//todo plug in the models created by Dharmil and uncomment this to avoid errors
export abstract class ContainerUtils {
  public static async downloadFileToServer(
    storageServiceModel: IStorageService,
    containerName: string,
    fileName: string,
    writePath: string
  ): Promise<any> {
    return new Promise(function (resolve, reject) {
      try {
        let writeStream = fs.createWriteStream(path.resolve(writePath));
        writeStream.on('finish', function () {
          return resolve(writePath);
        });
        storageServiceModel.downloadStream(containerName, fileName).pipe(writeStream);
      } catch (e) {
        LoggingUtils.error(e);
        return reject(e);
      }
    });
  }
  public static async uploadFileFromServer(
    storageServiceModel: IStorageService,
    containerName: string,
    fileName: string,
    readPath: string
  ): Promise<any> {
    return new Promise(function (resolve, reject) {
      try {
        // Initializing checksum
        const hash = crypto.createHash(process.env.COMMON_HASH_ALGO ?? 'sha512');
        let checksum: any;
        // Initializing writeStream
        const writeStream = storageServiceModel.uploadStream(containerName, fileName);
        writeStream.on('success', function () {
          // returning readPath and calculated checksum
          return resolve({readPath, checksum});
        });
        writeStream.on('error', function (err: any) {
          LoggingUtils.error(err);
          return reject(err);
        });
        // Initializing readStream
        const readStream = fs.createReadStream(path.resolve(readPath));
        readStream.on('data', function (data: any) {
          // updating checksum
          hash.update(data);
        });

        readStream.on('end', function () {
          // storing checksum
          checksum = hash.digest('hex');
        });

        readStream.pipe(writeStream);
      } catch (e) {
        return reject(e);
      }
    });
  }

  public static async loadFileAsBuffer(storageServiceModel: IStorageService, containerName: string, fileName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let buffers: Array<Buffer> = [];
      storageServiceModel
        .downloadStream(containerName, fileName)
        .on('data', chunk => {
          buffers.push(chunk);
        })
        .once('end', async () => {
          const buff = Buffer.concat(buffers);
          // generating checksum for downloaded files
          const checksum = await CryptoUtils.generateFileChecksum(buff);
          return resolve({file: buff, checksum});
        })
        .on('error', err => {
          return reject(err);
        });
    });
  }

  public static async checkMimeType(storageServiceModel: IStorageService, uploadedFiles: any, extName: string) {
    try {
      let files: Array<any> = uploadedFiles.files.file ?? uploadedFiles.files.files;
      if (!files) throw 'Cannot access the files';
      //loop over the files
      let isInvalidMimeType = true;
      for (let file of files) {
        // console.log(file);
        //if mime type does not match array the set it to false check size also
        if (
          MimeTypesConfig.MimeTypes[extName] &&
          MimeTypesConfig.MimeTypes[extName].ext.includes(file.type) &&
          file.size < MimeTypesConfig.MimeTypes[extName].size
        ) {
          isInvalidMimeType = false;
        }
      }
      //delete the uploaded files
      if (isInvalidMimeType) {
        for (let file of files) {
          storageServiceModel.removeFile(file.container, file.name, status => {});
        }
        //throw the error invalid mime type
        throw 'Invalid Mime Type';
      }
      //returh the same object;
      return uploadedFiles;
    } catch (error) {
      LoggingUtils.error(error);
      return Promise.reject(new RestError(400, 'Invalid file type!'));
    }
  }

  //filePath will be the path to download the file from in the temp directory and fileType will be the list of extensions
  public static async validateFileType(filePath: string, expectedType: Array<string>, content ?: any): Promise<boolean> {
    //getting the file extension
    const fileNameParts = filePath.split('.');
    const extensionFromFile = fileNameParts.length ? fileNameParts[fileNameParts.length - 1] : null;
    if (!extensionFromFile) return false; // If no extension in file, probably a bad file

    if (!expectedType.includes(extensionFromFile)) return false; // if extension of file doesn't match the possible list of extensions

    const fileData = content ? content : [...(await fs.promises.readFile(filePath))];
    const typeOfFile = mb.filetypename(fileData);

    LoggingUtils.debug(`checking for file type ${typeOfFile} against expected type ${expectedType}`, 'ContainerUtils.validateFileType');

    //some files like dbf may have no match with magic bytes in which case we should get an empty array from magic bytes
    // let isGenericType : boolean= false

    for (let i = 0; i < expectedType.length; i++) {
      if (typeOfFile.includes(expectedType[i])) {
        return true;
      }
      // else if(MimeTypesConfig.genericTypes.includes(expectedType[i]) && typeOfFile.length == 0 ){
      //   isGenericType = true
      // }
    }

    // if(isGenericType == true) return true

    return false;
  }

  public static async convertBitmapToJpg(bitmapData : string, basePath : string){

    //generate a random name for the file
    const newFileName =  new Date().getTime() + RandomizationUtils.generateUniqueId(5);
    const newfilePath = path.join(basePath,`${newFileName}.jpg`)
    try{
       //use the base64 string to convert to buffer
        const buffer = Buffer.from(bitmapData, 'base64');
        const byteArray = Uint8Array.from(buffer) as any
        //check the type of file
        const typeOfFile = mb.filetypename(byteArray);

        if(typeOfFile.includes('bmp')){
          //if typeof file is bmp
           LoggingUtils.info('found BMP file for signature')
           const image = await Jimp.read(buffer) // Read image into Jimp
           await image.writeAsync(newfilePath) // Write to JPG format
           const jpgData = fs.readFileSync(newfilePath) // Read again from JPG file
           fs.unlinkSync(newfilePath) // delete the jpg file
           return jpgData//return the base64 of the jpg file
        }
        else{
            return buffer
        }
    }
    catch(err){
        if(fs.existsSync(newfilePath)){
            fs.unlinkSync(newfilePath)
        }
        LoggingUtils.error(err)
        throw err;
    }
  }
}
