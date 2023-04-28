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
      idx_investor_type_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    postgresql: {tableName: 'investor_type'},
    plural: 'InvestorTypes',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class InvestorType extends BaseSQLModel {
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
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'number',
    default: 1,
    optionLabelIdentifier: 'CLIENTTYPE',
    postgresql: {columnName: 'client_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  clientType?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'category', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  category?: string;

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

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_minor', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isMinor?: boolean;

  @property({
    type: 'array',
    itemType: 'string',
    default: [],
    postgresql: {columnName: 'core_bank_code', dataType: 'TEXT', nullable: 'Y'}
  })
  coreBankCode?: Array<string>;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InvestorType>) {
    super(data);
  }
}

export interface InvestorTypeRelations {
  // describe navigational properties here
}

export type InvestorTypeWithRelations = InvestorType & InvestorTypeRelations;
