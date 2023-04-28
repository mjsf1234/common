import {belongsTo, model, property} from '@loopback/repository';
import {AppUser, BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_model_name: {keys: {model_name: 1}, options: {unique: false}},
      idx_model_id: {keys: {model_id: 1}, options: {unique: false}},
      idx_transaction_id: {keys: {transaction_id: 1}, options: {unique: false}},
      idx_audit_log_model_name_model_id: {keys: {model_name: 1, model_id: 2}, options: {unique: false}}
    },
    postgresql: {tableName: 'audit_log'},
    plural: 'AuditLogs',
    hiddenProperties: []
  }
})
export class AuditLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'model_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  modelName: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'model_id', dataType: 'INT', nullable: 'N'}
  })
  modelId: number;

  @property({
    type: 'object',
    isPseudonym: true,
    default: {},
    postgresql: {columnName: 'object_before_change', dataType: 'TEXT', nullable: 'Y'}
  })
  objectBeforeChange?: object;

  @property({
    type: 'object',
    isPseudonym: true,
    default: {},
    postgresql: {columnName: 'object_after_change', dataType: 'TEXT', nullable: 'Y'}
  })
  objectAfterChange?: object;

  @property({
    type: 'object',
    isPseudonym: true,
    default: {},
    postgresql: {columnName: 'difference', dataType: 'TEXT', nullable: 'Y'}
  })
  difference?: object;

  @property({
    type: 'string',
    postgresql: {columnName: 'transaction_id', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  transactionId: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'ip_address', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  ipAddress?: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'host_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  hostName?: string;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;




  @belongsTo(
    () => AppUser,
    {
      name: 'changedByAppUser',
      keyFrom: 'changedByAppUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_changed_by_app_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  changedByAppUserId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AuditLog>) {
    super(data);
  }
}

export interface AuditLogRelations {
  // describe navigational properties here
}

export type AuditLogWithRelations = AuditLog & AuditLogRelations;
