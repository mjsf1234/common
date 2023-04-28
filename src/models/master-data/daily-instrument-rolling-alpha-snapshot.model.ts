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
      idx_effective_date: {keys: {effective_date: 1}, options: {unique: false}},
      idx_fk_id_instrument: {keys: {fk_id_instrument: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'daily_instrument_rolling_alpha_snapshot'},
    plural: 'DailyInstrumentRollingAlphaSnapshots',
    foreignKeys: {
      fkidx_diraps_instrument_fk_id_instrument: {
        name: 'fkidx_diraps_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: ['fk_id_instrument']
  }
})
export class DailyInstrumentRollingAlphaSnapshot extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'effective_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  effectiveDate: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_1_week', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor1Week?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_2_week', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor2Week?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_3_week', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor3Week?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_1_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor1Month?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_3_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor3Month?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_6_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor6Month?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor1Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_2_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor2Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor3Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  returnFor5Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sharpe_ratio_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  sharpeRatioFor1Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sharpe_ratio_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  sharpeRatioFor3Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sharpe_ratio_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  sharpeRatioFor5Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'volatility_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  volatilityFor1Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'volatility_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  volatilityFor3Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'volatility_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  volatilityFor5Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'avg_return_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 38, dataScale: 20}
  })
  avgReturn1Year?: number;

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

  constructor(data?: Partial<DailyInstrumentRollingAlphaSnapshot>) {
    super(data);
  }
}

export interface DailyInstrumentRollingAlphaSnapshotRelations {
  // describe navigational properties here
}

export type DailyInstrumentRollingAlphaSnapshotWithRelations = DailyInstrumentRollingAlphaSnapshot &
  DailyInstrumentRollingAlphaSnapshotRelations;
