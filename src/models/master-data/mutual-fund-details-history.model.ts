import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Instrument} from './instrument.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_effective_date: {keys: {effective_date: -1}, options: {unique: false}},
      idx_effective_date_fk_id_instrument: {
        keys: {effective_date: -1, is_active: 1, fk_id_instrument: 1},
        options: {unique: false}
      }
    },
    postgresql: {tableName: 'mutual_fund_details_history'},
    plural: 'MutualFundDetailsHistories',
    foreignKeys: {
      fkidx_mutual_fund_details_history_instrument_fk_id_instrument: {
        name: 'fkidx_mutual_fund_details_history_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: []
  }
})
export class MutualFundDetailsHistory extends BaseSQLModel {
  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'effective_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  effectiveDate: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'expense_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  expenseRatio?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'yield_to_maturity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  yieldToMaturity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'mod_duration', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  modDuration?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'corpus', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  corpus?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'avg_maturity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  avgMaturity?: number;

  @belongsTo(
    () => Instrument,
    {
      name: 'instrument',
      keyFrom: 'instrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  instrumentId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MutualFundDetailsHistory>) {
    super(data);
  }
}

export interface MutualFundDetailsHistoryRelations {
  // describe navigational properties here
}

export type MutualFundDetailsHistoryWithRelations = MutualFundDetailsHistory & MutualFundDetailsHistoryRelations;
