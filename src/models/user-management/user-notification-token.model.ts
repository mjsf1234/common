import { belongsTo, model, property } from '@loopback/repository';
import { AppUser, BaseSQLModel } from '..';

@model({
  settings: {
    strict: false,
    postgresql: { tableName: 'user_notification_token' },
    plural: 'UserNotificationTokens',
    foreignKeys: {
      fkidx_user_notification_token_fk_id_app_user: {
        name: 'fkidx_user_notification_token_fk_id_app_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    },
    indexes: {
      idx_registration_token: { keys: { registration_token: 1 }, options: { unique: true } },
    }
  }
})
export class UserNotificationToken extends BaseSQLModel {


  @property({
    type: 'object',
    default: {},
    postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
  })
  config?: object;

  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: { columnName: 'fk_id_user', dataType: 'INT', nullable: 'N' }
    }
  )
  appUserId: number;

  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: { columnName: 'registration_token', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
  })
  registrationToken: string;

  @property({
    type: 'string',
    required: false,
    postgresql: { columnName: 'device_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
  })
  deviceName?: string;

  @property({
    type: 'string',
    required: false,
    postgresql: { columnName: 'os_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
  })
  osName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserNotificationToken>) {
    super(data);
  }
}

export interface UserNotificationTokenRelations {
  // describe navigational properties here
}

export type UserNotificationTokenWithRelations = UserNotificationToken & UserNotificationTokenRelations;
