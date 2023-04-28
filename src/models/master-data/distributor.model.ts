import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_distributor_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    postgresql: {tableName: 'distributor'},
    plural: 'Distributors',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class Distributor extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'short_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  shortName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  uniqueId?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'broker_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  brokerCode?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Distributor>) {
    super(data);
  }
}

export interface DistributorRelations {
  // describe navigational properties here
}

export type DistributorWithRelations = Distributor & DistributorRelations;
