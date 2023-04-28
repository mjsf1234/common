import {belongsTo, model, property} from '@loopback/repository';
import {AppUser, BaseSQLModel, Device} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'idcom_details'},
    plural: 'IdcomDetails',
    foreignKeys: {
      fkidx_idcom_details_user_fk_id_user: {
        name: 'fkidx_idcom_details_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_idcom_details_user_fk_id_device: {
        name: 'fkidx_idcom_details_user_fk_id_device',
        foreignKey: 'fk_id_device',
        entityKey: 'id',
        entity: 'Device'
      }
    },
    hiddenProperties: []
  }
})
export class IdcomDetails extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'redirect_url', dataType: 'Text', nullable: 'N'}
  })
  redirectUrl: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'auth_code', dataType: 'Text', nullable: 'N'}
  })
  authCode: string;

  @property({
    type: 'boolean',
    required: false,
    postgresql: {columnName: 'handle_callback_status', dataType:'BOOLEAN', nullable: 'Y'}
  })
  handleCallbackStatus: boolean;

  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user', dataType: 'INT', nullable: 'N'}
    }
  )
  appUserId: number;

  @belongsTo(
    () => Device,
    {
      name: 'device',
      keyFrom: 'deviceId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_device', dataType: 'INT', nullable: 'N'}
    }
  )
  deviceId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IdcomDetails>) {
    super(data);
  }
}

export interface IdcomDetailsRelations {
  // describe navigational properties here
}

export type IdcomDetailsWithRelations = IdcomDetails & IdcomDetailsRelations;
