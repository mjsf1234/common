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
      idx_market_capitalization_date: {keys: {market_capitalization_date: -1}, options: {unique: false}},
      idx_market_capitalization_date_fk_id_instrument: {
        keys: {market_capitalization_date: -1, is_active: 1, fk_id_instrument: 1},
        options: {unique: false}
      }
    },
    postgresql: {tableName: 'equity_details_history'},
    plural: 'EquityDetailsHistory',
    foreignKeys: {
      fkidx_equity_details_history_instrument_fk_id_instrument: {
        name: 'fkidx_equity_details_history_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: ['fk_id_instrument']
  }
})
export class EquityDetailsHistory extends BaseSQLModel {
  @property({
    type: 'number',
    postgresql: {columnName: 'market_capitalization', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 3}
  })
  marketCapitalization?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'market_capitalization_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  marketCapitalizationDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'paid_up_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  paidUpValue?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'risk_rating', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  riskRating?: string;
  
  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  bosCode?: string;

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

  constructor(data?: Partial<EquityDetailsHistory>) {
    super(data);
  }
}

export interface EquityDetailsHistoryRelations {
  // describe navigational properties here
}

export type EquityDetailsHistoryWithRelations = EquityDetailsHistory & EquityDetailsHistoryRelations;
