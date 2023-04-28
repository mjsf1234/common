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
      idx_transaction_type_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    postgresql: {tableName: 'transaction_type'},
    plural: 'TransactionTypes',
    foreignKeys: {},
    hiddenProperties: ['nseCode', 'bseCode']
  }
})
export class TransactionType extends BaseSQLModel {
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
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 512, nullable: 'Y'}
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
    type: 'number',
    required: true,
    optionLabelIdentifier: 'HOLDINGCALCULATIONBUYSELLTYPE',
    postgresql: {columnName: 'holding_calculation_buy_sell_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  holdingCalculationBuySellType: number;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'include_in_xirr', dataType: 'BOOLEAN', nullable: 'N'}
  })
  includeInXirr?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TransactionType>) {
    super(data);
  }
}

export interface TransactionTypeRelations {
  // describe navigational properties here
}

export type TransactionTypeWithRelations = TransactionType & TransactionTypeRelations;
