import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Instrument} from './instrument.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'mutual_fund_load_history'},
    plural: 'MutualFundLoadHistories',
    foreignKeys: {
      fkidx_mutual_fund_exit_load_instrument_fk_id_instrument: {
        name: 'fkidx_mutual_fund_exit_load_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: ['fk_id_instrument']
  }
})
export class MutualFundLoadHistory extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'sr_no', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  srNo: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'effective_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  effectiveDate: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'from_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  fromAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'upto_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  uptoAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  minValue?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  maxValue?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  value?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_period', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  minPeriod?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_period', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  maxPeriod?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'period', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  period?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'PERIODTYPE',
    postgresql: {columnName: 'period_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  periodType?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'LOADTYPE',
    postgresql: {columnName: 'load_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  loadType?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'operation_flag', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  operationFlag?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'from_percent', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  fromPercent?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'to_percent', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  toPercent?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'percent_condition', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  percentCondition?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'amount_condition', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  amountCondition?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'period_condition', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  periodCondition?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'amount_type', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  amountType?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

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

  constructor(data?: Partial<MutualFundLoadHistory>) {
    super(data);
  }
}

export interface MutualFundLoadHistoryRelations {
  // describe navigational properties here
}

export type MutualFundLoadHistoryWithRelations = MutualFundLoadHistory & MutualFundLoadHistoryRelations;
