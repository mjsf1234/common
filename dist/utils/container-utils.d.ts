/// <reference types="node" />
import { IStorageService } from '../components';
export declare abstract class ContainerUtils {
    static downloadFileToServer(storageServiceModel: IStorageService, containerName: string, fileName: string, writePath: string): Promise<any>;
    static uploadFileFromServer(storageServiceModel: IStorageService, containerName: string, fileName: string, readPath: string): Promise<any>;
    static loadFileAsBuffer(storageServiceModel: IStorageService, containerName: string, fileName: string): Promise<any>;
    static checkMimeType(storageServiceModel: IStorageService, uploadedFiles: any, extName: string): Promise<any>;
    static validateFileType(filePath: string, expectedType: Array<string>, content?: any): Promise<boolean>;
    static convertBitmapToJpg(bitmapData: string, basePath: string): Promise<Buffer>;
}
