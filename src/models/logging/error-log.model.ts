import {model, property} from '@loopback/repository';
import {BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'error_log'},
    plural: 'ErrorLogs',
    hiddenProperties: []
  }
})
export class ErrorLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'error_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  errorCode: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'error_message', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  errorMessage: string;

  @property({
    type: 'object',
    postgresql: {columnName: 'stack_trace', dataType: 'TEXT', nullable: 'Y'}
  })
  stackTrace?: object;

  @property({
    type: 'string',
    postgresql: {columnName: 'remark', dataType: 'TEXT', nullable: 'Y'}
  })
  remark?: string;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_resolved', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isResolved?: boolean;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ErrorLog>) {
    super(data);
  }
}

export interface ErrorLogRelations {
  // describe navigational properties here
}

export type ErrorLogWithRelations = ErrorLog & ErrorLogRelations;
