import {model, property} from '@loopback/repository';
import {BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_transaction_id: {keys: {transaction_id: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'outgoing_api_call_log'},
    plural: 'OutgoingAPICallLogs',
    hiddenProperties: []
  }
})
export class OutgoingApiCallLog extends BaseDataDumpModel {
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
    type: 'string',
    required: true,
    postgresql: {columnName: 'transaction_id', dataType: 'VARCHAR', dataLength: 500, nullable: 'N'}
  })
  transactionId: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  logGenTime?: Date;

  @property({
    type: 'object',
    default: {},
    isPseudonym: true,
    postgresql: {columnName: 'extra_info', dataType: 'TEXT', nullable: 'Y'}
  })
  extraInfo?: object;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OutgoingApiCallLog>) {
    super(data);
  }
}

export interface OutgoingApiCallLogRelations {
  // describe navigational properties here
}

export type OutgoingApiCallLogWithRelations = OutgoingApiCallLog & OutgoingApiCallLogRelations;
