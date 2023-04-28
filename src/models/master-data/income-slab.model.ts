import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    postgresql: {tableName: 'income_slab'},
    plural: 'IncomeSlabs',
    foreignKeys: {},
    hiddenProperties: [],
    indexes: {
      idx_income_slab_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    }
  }
})
export class IncomeSlab extends BaseSQLModel {
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
    type: 'array',
    itemType: 'string',
    default: [],
    postgresql: {columnName: 'core_bank_code', dataType: 'TEXT', nullable: 'Y'}
  })
  coreBankCode?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IncomeSlab>) {
    super(data);
  }
}

export interface IncomeSlabRelations {
  // describe navigational properties here
}

export type IncomeSlabWithRelations = IncomeSlab & IncomeSlabRelations;
