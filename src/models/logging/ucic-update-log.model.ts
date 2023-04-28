import {belongsTo, model, property} from '@loopback/repository';
import {AppUser, BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'ucic_update_log'},
    plural: 'UcicUpdateLogs',
    hiddenProperties: []
  }
})
export class UcicUpdateLog extends BaseDataDumpModel {
  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_update', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isUpdate?: boolean;

  @property({
    type: 'date',
    postgresql: {columnName: 'deleted_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  deletedDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  logGenTime?: Date;


  //   "sourceClient": {
  //     "type": "belongsTo",
  //     "model": "AppUser",
  //     "foreignKey": "fk_id_source_user"
  //   },
  //   "targetClient": {
  //     "type": "belongsTo",
  //     "model": "AppUser",
  //     "foreignKey": "fk_id_target_user"
  //   }

  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_source_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  sourceClient: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_target_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  targetClient: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UcicUpdateLog>) {
    super(data);
  }
}

export interface UcicUpdateLogRelations {
  // describe navigational properties here
}

export type UcicUpdateLogWithRelations = UcicUpdateLog & UcicUpdateLogRelations;
