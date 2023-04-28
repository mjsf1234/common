import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {AppUser, IdcomDetails, PreLoginUser} from '.';
import {BaseSQLModel} from '..';
import {AppVersion} from '../../models';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_unique_id: {keys: {unique_id: 1}, options: {unique: true}}
    },
    postgresql: {tableName: 'device'},
    plural: 'Devices',
    foreignKeys: {
      fkidx_device_user_fk_id_user: {
        name: 'fkidx_device_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_device_pre_login_user_fk_id_pre_login_user: {
        name: 'fkidx_device_pre_login_user_fk_id_pre_login_user',
        foreignKey: 'fk_id_pre_login_user',
        entityKey: 'id',
        entity: 'PreLoginUser'
      }
    },
    hiddenProperties: []
  }
})
export class Device extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  uniqueId: string;
  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: { columnName: 'public_key', dataType: 'TEXT', nullable: 'Y' }
  })
  publicKey: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'device_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  deviceName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'os_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  osName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'version_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  versionName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'version_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  versionCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'os_sdk_version', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  osSDKVersion?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'binding_data', dataType: 'TEXT', nullable: 'Y'}
  })
  bindingData?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'mpin_setup', dataType: 'BOOLEAN', nullable: 'N'}
  })
  mpinSetup?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'biometric_setup', dataType: 'BOOLEAN', nullable: 'N'}
  })
  biometricSetup?: boolean;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'biometric_token', dataType: 'TEXT', nullable: 'N'}
  })
  biometricToken?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'registered_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  registeredDate?: Date;

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
  appUserId?: number | null;

  @belongsTo(
    () => PreLoginUser,
    {
      name: 'preLoginUser',
      keyFrom: 'preLoginUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_pre_login_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  preLoginUserId?: number;

  @belongsTo(
    () => AppVersion,
    {
      name: 'appVersion',
      keyFrom: 'appVersionId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_app_version', dataType: 'INT', nullable: 'Y'}
    }
  )
  appVersionId?: number;

  @hasMany(() => IdcomDetails, {keyTo: 'deviceId'})
  idcomDetails?: IdcomDetails[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Device>) {
    super(data);
  }
}

export interface DeviceRelations {
  // describe navigational properties here
}

export type DeviceWithRelations = Device & DeviceRelations;
