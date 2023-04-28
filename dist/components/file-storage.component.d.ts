/// <reference types="node" />
import { BaseAppFileModel, FileStorageContainer } from '../index';
import { juggler } from '@loopback/service-proxy';
import { Provider } from '@loopback/core';
import { Writable, Stream } from 'stream';
declare type Callback<T> = (err: Error | null, reply: T) => void;
export interface IStorageService {
    createContainer(container: Partial<FileStorageContainer>, cb: Callback<FileStorageContainer>): void;
    destroyContainer(containerName: string, cb: Callback<boolean>): void;
    getContainers(cb: Callback<FileStorageContainer[]>): void;
    getContainer(containerName: string, cb: Callback<FileStorageContainer>): void;
    getFiles(containerName: string, options: Object, cb: Callback<BaseAppFileModel[]>): void;
    getFile(containerName: string, fileName: string, cb: Callback<BaseAppFileModel>): void;
    removeFile(containerName: string, fileName: string, cb: Callback<boolean>): void;
    upload(containerName: string, req: any, res: any, options: Object, cb: Callback<any>): void;
    download(containerName: string, fileName: string, req: any, res: any, cb: Callback<any>): void;
    uploadStream(container: string, file: any, options?: any, cb?: Callback<any>): Writable;
    downloadStream(container: string, file: any, options?: any, cb?: Callback<any>): Stream;
}
export declare class FileStorageComponent implements Provider<IStorageService> {
    protected dataSource: juggler.DataSource;
    constructor(dataSource?: juggler.DataSource);
    value(): Promise<IStorageService>;
}
export {};
