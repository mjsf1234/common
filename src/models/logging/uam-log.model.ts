import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    plural: 'UAMLogs',
    postgresql: {tableName: 'uam_log'},
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_unique_number: {keys: {unique_number: 1}, options: {unique: true}}
    }
  }
})
export class UAMLog extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'unique_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  uniqueNumber: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'isac_status', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  isacStatus?: string;

  @property({
    type: 'string',
    default: {},
    postgresql: {columnName: 'response_object', dataType: 'TEXT', nullable: 'N'}
  })
  responseObject: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  logGenTime?: Date;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UAMLog>) {
    super(data);
  }
}

export interface UAMLogRelations {
  // describe navigational properties here
}

export type UAMLogWithRelations = UAMLog & UAMLogRelations;
