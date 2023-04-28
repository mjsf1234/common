import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, AppUser} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'mpin_history'},
    plural: 'MpinHistories',
    hiddenProperties: ['mpin']
  }
})
export class MpinHistory extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'mpin', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  mpin?: string;

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

  constructor(data?: Partial<MpinHistory>) {
    super(data);
  }
}

export interface MpinHistoryRelations {
  // describe navigational properties here
}

export type MpinHistoryWithRelations = MpinHistory & MpinHistoryRelations;
