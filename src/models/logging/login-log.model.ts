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
    postgresql: {tableName: 'login_log'},
    plural: 'LoginLogs',
    hiddenProperties: []
  }
})
export class LoginLog extends BaseDataDumpModel {
  @property({
    required: true,
    postgresql: {columnName: 'login_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  loginDate: Date;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'ip_address', dataType: 'VARCHAR', dataLength: 512, nullable: 'N'}
  })
  ipAddress: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'source', dataType: 'VARCHAR', dataLength: 512, nullable: 'N'}
  })
  source: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'version', dataType: 'VARCHAR', dataLength: 512, nullable: 'N'}
  })
  version: string;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'details', dataType: 'TEXT', nullable: 'Y'}
  })
  details?: object;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'transaction_id', dataType: 'VARCHAR', dataLength: 500, nullable: 'Y'}
  })
  transactionId: string;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
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
  appUserId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LoginLog>) {
    super(data);
  }
}

export interface LoginLogRelations {
  // describe navigational properties here
}

export type LoginLogWithRelations = LoginLog & LoginLogRelations;
