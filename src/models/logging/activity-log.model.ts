import {belongsTo, model, property} from '@loopback/repository';
import {AppUser, BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    plural: 'ActivityLogs',
    postgresql: {tableName: 'activity_log'},
    foreignKeys: {
      fkidx_activity_log_user_fk_id_user: {
        name: 'fkidx_activity_log_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    },
    hiddenProperties: ['fk_id_user']
  }
})
export class ActivityLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    isLocale: true,
    postgresql: {columnName: 'page', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  page: string;

  @property({
    type: 'string',
    required: true,
    isLocale: true,
    postgresql: {columnName: 'activity', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  activity: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'ip_address', dataType: 'VARCHAR', dataLength: 15, nullable: 'Y'}
  })
  ipAddress?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  userCode?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'user_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  userName?: string;

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

  constructor(data?: Partial<ActivityLog>) {
    super(data);
  }
}

export interface ActivityLogRelations {
  // describe navigational properties here
}

export type ActivityLogWithRelations = ActivityLog & ActivityLogRelations;
