import {belongsTo, model, property} from '@loopback/repository';
import {AppUser, BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_transaction_id: {keys: {transaction_id: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'http_access_log'},
    plural: 'HTTPAccessLogs',
    hiddenProperties: []
  }
})
export class HTTPAccessLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'transaction_id', dataType: 'VARCHAR', dataLength: 500, nullable: 'N'}
  })
  transactionId: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'request_url', dataType: 'TEXT', nullable: 'Y'}
  })
  requestURL: string;

  @property({
    required: false,
    postgresql: {columnName: 'start_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  startTime: Date;

  @property({
    required: false,
    postgresql: {columnName: 'end_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  endTime: Date;

  @property({
    required: false,
    postgresql: {columnName: 'duration_in_ms', dataType: 'INT', nullable: 'Y'}
  })
  durationInMs: Number;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'request_method', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  requestMethod: string;

  @property({
    type: 'boolean',
    required: false,
    default: false,
    postgresql: {columnName: 'is_error', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isError?: boolean;

  @property({
    type: 'object',
    default: {},
    isPseudonym: true,
    postgresql: {columnName: 'payload', dataType: 'TEXT', nullable: 'Y'}
  })
  payload?: string;

  @property({
    type: 'object',
    default: {},
    isPseudonym: true,
    postgresql: {columnName: 'response_json', dataType: 'TEXT', nullable: 'Y'}
  })
  responseJSON?: object;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'ip_address', dataType: 'VARCHAR', dataLength: 512, nullable: 'Y'}
  })
  ipAddress?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  logGenTime?: Date;



  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  appUserId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HTTPAccessLog>) {
    super(data);
  }
}

export interface HTTPAccessLogRelations {
  // describe navigational properties here
}

export type HTTPAccessLogWithRelations = HTTPAccessLog & HTTPAccessLogRelations;
