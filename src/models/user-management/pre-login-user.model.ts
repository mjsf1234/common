import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'pre_login_user'},
    plural: 'PreLoginUsers',
    foreignKeys: {}
  }
})
export class PreLoginUser extends BaseSQLModel {
  @property({
    type: 'object',
    required: false,
    default: {},
    postgresql: {columnName: 'user_data', dataType: 'TEXT', nullable: 'Y'}
  })
  userData?: object;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_registered', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isRegistered: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PreLoginUser>) {
    super(data);
  }
}

export interface PreLoginUserRelations {
  // describe navigational properties here
}

export type PreLoginUserWithRelations = PreLoginUser & PreLoginUserRelations;
