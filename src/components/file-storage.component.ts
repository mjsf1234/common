import {BaseAppFileModel, FileStorageContainer} from '../index';
import {getService, juggler} from '@loopback/service-proxy';
import {Provider} from '@loopback/core';
import {StorageDataSource} from '../datasources';
import {Writable, Stream} from 'stream';

type Callback<T> = (err: Error | null, reply: T) => void;

export interface IStorageService {
  // container methods
  createContainer(container: Partial<FileStorageContainer>, cb: Callback<FileStorageContainer>): void;
  destroyContainer(containerName: string, cb: Callback<boolean>): void;
  getContainers(cb: Callback<FileStorageContainer[]>): void;
  getContainer(containerName: string, cb: Callback<FileStorageContainer>): void;
  // file methods
  getFiles(containerName: string, options: Object, cb: Callback<BaseAppFileModel[]>): void;
  getFile(containerName: string, fileName: string, cb: Callback<BaseAppFileModel>): void;
  removeFile(containerName: string, fileName: string, cb: Callback<boolean>): void;
  // main methods
  upload(containerName: string, req: any, res: any, options: Object, cb: Callback<any>): void;
  download(containerName: string, fileName: string, req: any, res: any, cb: Callback<any>): void;
  uploadStream(container: string, file: any, options?: any, cb?: Callback<any>): Writable;
  downloadStream(container: string, file: any, options?: any, cb?: Callback<any>): Stream;
}

// storage-gc-service.provider.ts

export class FileStorageComponent implements Provider<IStorageService> {
  constructor(protected dataSource: juggler.DataSource = new StorageDataSource()) {}
  value(): Promise<IStorageService> {
    return getService(this.dataSource);
  }
}
