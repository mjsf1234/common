import {model, property} from '@loopback/repository';
import {BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'incoming_api_call_log'},
    plural: 'IncomingAPICallLogs',
    hiddenProperties: []
  }
})
export class IncomingApiCallLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'url', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  url: string;

  @property({
    type: 'object',
    default: {},
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'request', dataType: 'TEXT', nullable: 'N'}
  })
  request: object;

  @property({
    type: 'object',
    default: {},
    isPseudonym: true,
    postgresql: {columnName: 'response', dataType: 'TEXT', nullable: 'Y'}
  })
  response?: object;

  @property({
    type: 'boolean',
    required: true,
    postgresql: {columnName: 'success', dataType: 'BOOLEAN', nullable: 'N'}
  })
  success: boolean;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'external_system_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  externalSystemName: string;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IncomingApiCallLog>) {
    super(data);
  }
}

export interface IncomingApiCallLogRelations {
  // describe navigational properties here
}

export type IncomingApiCallLogWithRelations = IncomingApiCallLog & IncomingApiCallLogRelations;
