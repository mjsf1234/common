import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_capital_gain_indexation_from_date_to_date: {
        keys: {from_date: 1, to_date: 1},
        options: {unique: true, caseInsensitiveUnique: true}
      }
    },
    postgresql: {tableName: 'capital_gain_indexation'},
    plural: 'CapitalGainIndexations',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class CapitalGainIndexation extends BaseSQLModel {
  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'from_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  fromDate: Date;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'to_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  toDate: Date;

  @property({
    type: 'number',
    required: true,
    default: 0,
    postgresql: {columnName: 'index', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  index: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CapitalGainIndexation>) {
    super(data);
  }
}

export interface CapitalGainIndexationRelations {
  // describe navigational properties here
}

export type CapitalGainIndexationWithRelations = CapitalGainIndexation & CapitalGainIndexationRelations;
