import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_business_type_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    plural: 'BusinessTypes',
    postgresql: {tableName: 'business_type'},
    foreignKeys: {},
    hiddenProperties: ['bosCode', 'nseCode', 'bseCode']
  }
})
export class BusinessType extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  nseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bseCode?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BusinessType>) {
    super(data);
  }
}

export interface BusinessTypeRelations {
  // describe navigational properties here
}

export type BusinessTypeWithRelations = BusinessType & BusinessTypeRelations;
