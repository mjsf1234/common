import {belongsTo, model, property} from '@loopback/repository';
import {AppUser, BaseDataDumpModel, Device} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'notification_log'},
    plural: 'NotificationLogs',
    hiddenProperties: []
  }
})
export class NotificationLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'subject', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  subject: string;

  @property({
    type: 'object',
    postgresql: {columnName: 'content', dataType: 'TEXT', nullable: 'Y'}
  })
  content?: object;

  @property({
    type: 'number',
    optionLabelIdentifier: 'NOTIFICATIONMEDIUMTYPE',
    postgresql: {columnName: 'medium_type', dataType: 'INT', nullable: 'Y'}
  })
  mediumType?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'medium_address', dataType: 'VARCHAR', dataLength: 512, nullable: 'Y'}
  })
  mediumAddress?: string;

  @property({
    type: 'object',
    postgresql: {columnName: 'provider_log', dataType: 'TEXT', nullable: 'Y'}
  })
  providerLog?: object;

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
  appUserId?: number;

  @belongsTo(
    () => Device,
    {
      name: 'device',
      keyFrom: 'deviceId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_device', dataType: 'INT', nullable: 'Y'}
    }
  )
  deviceId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<NotificationLog>) {
    super(data);
  }
}

export interface NotificationLogRelations {
  // describe navigational properties here
}

export type NotificationLogWithRelations = NotificationLog & NotificationLogRelations;
