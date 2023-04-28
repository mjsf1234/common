import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Instrument} from './instrument.model';
import { TransactionalDataRefreshingQueueMessageEventType } from '../../queues';
import moment from 'moment-timezone';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_price_date: {
        keys: {price_date: 1, fk_id_instrument: 1, source: 1},
        options: {unique: false}
      }
    },
    postgresql: {tableName: 'daily_instrument_price_snapshot'},
    plural: 'DailyInstrumentPriceSnapshots',
    foreignKeys: {
      fkidx_dips_instrument_fk_id_instrument: {
        name: 'fkidx_dips_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: ['fk_id_instrument'],
    syncRefresher: {
      eventType: TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_PRICES_REPLICATION_BY_LAST_MODIFIED_DATE,
      defaultValues: {
        lastModifiedDate: moment().startOf('day').format('YYYY-MM-DD')
      }
    }
  }
})
export class DailyInstrumentPriceSnapshot extends BaseSQLModel {
  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'price_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  priceDate: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  return?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'open_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  openPrice?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'high_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  highPrice?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'low_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  lowPrice?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'close_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  closePrice?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'price', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  price: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'adjusted_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  adjustedPrice?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'movement_from_previous_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  movementFromPreviousPrice?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'percentage_movement_from_previous_price',
      dataType: 'NUMERIC',
      nullable: 'Y',
      dataPrecision: 25,
      dataScale: 10
    }
  })
  percentageMovementFromPreviousPrice?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'source', dataType: 'SMALLINT', nullable: 'Y'}
  })
  source?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'accrued_interest', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  accruedInterest?: number;

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

  constructor(data?: Partial<DailyInstrumentPriceSnapshot>) {
    super(data);
  }
}

export interface DailyInstrumentPriceSnapshotRelations {
  // describe navigational properties here
}

export type DailyInstrumentPriceSnapshotWithRelations = DailyInstrumentPriceSnapshot & DailyInstrumentPriceSnapshotRelations;
