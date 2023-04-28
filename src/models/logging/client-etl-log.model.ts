import {model, property} from '@loopback/repository';
import {BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'client_etl_log'},
    plural: 'ClientEtlLogs',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class ClientEtlLog extends BaseDataDumpModel {
  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  date: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'error_message', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  errorMessage?: string;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'CLIENTUPLOADFILETYPE',
    postgresql: {columnName: 'file_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  fileType: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'issuer_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  issuerName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'service_provider_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  serviceProviderName?: string;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ClientEtlLog>) {
    super(data);
  }
}

export interface ClientEtlLogRelations {
  // describe navigational properties here
}

export type ClientEtlLogWithRelations = ClientEtlLog & ClientEtlLogRelations;
