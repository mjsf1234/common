"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerUtils = void 0;
const tslib_1 = require("tslib");
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const logging_utils_1 = require("./logging-utils");
const crypto_1 = (0, tslib_1.__importDefault)(require("crypto"));
const _1 = require(".");
const config_1 = require("../config");
const rest_error_1 = require("./rest-error");
const mb = (0, tslib_1.__importStar)(require("magic-bytes.js"));
const Jimp = require('jimp');
//todo plug in the models created by Dharmil and uncomment this to avoid errors
class ContainerUtils {
    static async downloadFileToServer(storageServiceModel, containerName, fileName, writePath) {
        return new Promise(function (resolve, reject) {
            try {
                let writeStream = fs_1.default.createWriteStream(path_1.default.resolve(writePath));
                writeStream.on('finish', function () {
                    return resolve(writePath);
                });
                storageServiceModel.downloadStream(containerName, fileName).pipe(writeStream);
            }
            catch (e) {
                logging_utils_1.LoggingUtils.error(e);
                return reject(e);
            }
        });
    }
    static async uploadFileFromServer(storageServiceModel, containerName, fileName, readPath) {
        return new Promise(function (resolve, reject) {
            var _a;
            try {
                // Initializing checksum
                const hash = crypto_1.default.createHash((_a = process.env.COMMON_HASH_ALGO) !== null && _a !== void 0 ? _a : 'sha512');
                let checksum;
                // Initializing writeStream
                const writeStream = storageServiceModel.uploadStream(containerName, fileName);
                writeStream.on('success', function () {
                    // returning readPath and calculated checksum
                    return resolve({ readPath, checksum });
                });
                writeStream.on('error', function (err) {
                    logging_utils_1.LoggingUtils.error(err);
                    return reject(err);
                });
                // Initializing readStream
                const readStream = fs_1.default.createReadStream(path_1.default.resolve(readPath));
                readStream.on('data', function (data) {
                    // updating checksum
                    hash.update(data);
                });
                readStream.on('end', function () {
                    // storing checksum
                    checksum = hash.digest('hex');
                });
                readStream.pipe(writeStream);
            }
            catch (e) {
                return reject(e);
            }
        });
    }
    static async loadFileAsBuffer(storageServiceModel, containerName, fileName) {
        return new Promise((resolve, reject) => {
            let buffers = [];
            storageServiceModel
                .downloadStream(containerName, fileName)
                .on('data', chunk => {
                buffers.push(chunk);
            })
                .once('end', async () => {
                const buff = Buffer.concat(buffers);
                // generating checksum for downloaded files
                const checksum = await _1.CryptoUtils.generateFileChecksum(buff);
                return resolve({ file: buff, checksum });
            })
                .on('error', err => {
                return reject(err);
            });
        });
    }
    static async checkMimeType(storageServiceModel, uploadedFiles, extName) {
        var _a;
        try {
            let files = (_a = uploadedFiles.files.file) !== null && _a !== void 0 ? _a : uploadedFiles.files.files;
            if (!files)
                throw 'Cannot access the files';
            //loop over the files
            let isInvalidMimeType = true;
            for (let file of files) {
                // console.log(file);
                //if mime type does not match array the set it to false check size also
                if (config_1.MimeTypesConfig.MimeTypes[extName] &&
                    config_1.MimeTypesConfig.MimeTypes[extName].ext.includes(file.type) &&
                    file.size < config_1.MimeTypesConfig.MimeTypes[extName].size) {
                    isInvalidMimeType = false;
                }
            }
            //delete the uploaded files
            if (isInvalidMimeType) {
                for (let file of files) {
                    storageServiceModel.removeFile(file.container, file.name, status => { });
                }
                //throw the error invalid mime type
                throw 'Invalid Mime Type';
            }
            //returh the same object;
            return uploadedFiles;
        }
        catch (error) {
            logging_utils_1.LoggingUtils.error(error);
            return Promise.reject(new rest_error_1.RestError(400, 'Invalid file type!'));
        }
    }
    //filePath will be the path to download the file from in the temp directory and fileType will be the list of extensions
    static async validateFileType(filePath, expectedType, content) {
        //getting the file extension
        const fileNameParts = filePath.split('.');
        const extensionFromFile = fileNameParts.length ? fileNameParts[fileNameParts.length - 1] : null;
        if (!extensionFromFile)
            return false; // If no extension in file, probably a bad file
        if (!expectedType.includes(extensionFromFile))
            return false; // if extension of file doesn't match the possible list of extensions
        const fileData = content ? content : [...(await fs_1.default.promises.readFile(filePath))];
        const typeOfFile = mb.filetypename(fileData);
        logging_utils_1.LoggingUtils.debug(`checking for file type ${typeOfFile} against expected type ${expectedType}`, 'ContainerUtils.validateFileType');
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
    static async convertBitmapToJpg(bitmapData, basePath) {
        //generate a random name for the file
        const newFileName = new Date().getTime() + _1.RandomizationUtils.generateUniqueId(5);
        const newfilePath = path_1.default.join(basePath, `${newFileName}.jpg`);
        try {
            //use the base64 string to convert to buffer
            const buffer = Buffer.from(bitmapData, 'base64');
            const byteArray = Uint8Array.from(buffer);
            //check the type of file
            const typeOfFile = mb.filetypename(byteArray);
            if (typeOfFile.includes('bmp')) {
                //if typeof file is bmp
                logging_utils_1.LoggingUtils.info('found BMP file for signature');
                const image = await Jimp.read(buffer); // Read image into Jimp
                await image.writeAsync(newfilePath); // Write to JPG format
                const jpgData = fs_1.default.readFileSync(newfilePath); // Read again from JPG file
                fs_1.default.unlinkSync(newfilePath); // delete the jpg file
                return jpgData; //return the base64 of the jpg file
            }
            else {
                return buffer;
            }
        }
        catch (err) {
            if (fs_1.default.existsSync(newfilePath)) {
                fs_1.default.unlinkSync(newfilePath);
            }
            logging_utils_1.LoggingUtils.error(err);
            throw err;
        }
    }
}
exports.ContainerUtils = ContainerUtils;
//# sourceMappingURL=container-utils.js.map