import {model, property} from '@loopback/repository';
import {BaseSQLModel} from './base-sql-model.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'file'},
    plural: 'AppFiles'
  }
})
export class BaseAppFileModel extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'path', dataType: 'TEXT', nullable: 'N'}
  })
  path: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'container_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  containerName: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'checksum', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  checksum?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'original_file_name', dataType: 'TEXT', nullable: 'N'}
  })
  originalFileName: string;

  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'name', dataType: 'TEXT', nullable: 'N'}
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'size', dataType: 'INT', nullable: 'N'}
  })
  size: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'extension', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  extension?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'mime_type', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  mimeType: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'batch_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  batchCode?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BaseAppFileModel>) {
    super(data);
  }
}

export interface BaseAppFileRelations {
  // describe navigational properties here
}

export type BaseAppFileWithRelations = BaseAppFileModel & BaseAppFileRelations;
