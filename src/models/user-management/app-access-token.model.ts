import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {AppUser} from './app-user.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_token: {keys: {token: 1}, options: {unique: true}}
    },
    plural: 'AppAccessTokens',
    postgresql: {tableName: 'access_token'},
    foreignKeys: {
      fkidx_access_token_user_fk_id_user: {
        name: 'fkidx_access_token_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    }
  }
})
export class AppAccessToken extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'token', dataType: 'VARCHAR', dataLength: 64, nullable: 'N'}
  })
  token: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  expiry: Date;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'token_data', dataType: 'TEXT', nullable: 'N'}
  })
  tokenData?: object;

  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'refresh_token', dataType: 'VARCHAR', dataLength: 64, nullable: 'N'}
  })
  refreshToken: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'refres_token_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  refreshTokenExpiry: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'ip_address', dataType: 'VARCHAR',  nullable: 'Y'}
  })
  ipAddress: string;

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

  constructor(data?: Partial<AppAccessToken>) {
    super(data);
  }
}

export interface AppAccessTokenRelations {
  // describe navigational properties here
}

export type AppAccessTokenWithRelations = AppAccessToken & AppAccessTokenRelations;
