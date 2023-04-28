import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {TransactionalDataRefreshingQueueMessageEventType} from '../../queues';
import {Instrument} from './instrument.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_product_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}},
      idx_product_bos_code: {keys: {bos_code: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    postgresql: {tableName: 'product'},
    plural: 'Products',
    foreignKeys: {
      fkidx_product_fk_id_benchnmark_instrument: {
        name: 'fkidx_product_fk_id_benchnmark_instrument',
        foreignKey: 'fk_id_benchmark',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: ['fk_id_instrument_risk', 'fk_id_benchmark'],
    syncRefresher: {
      eventType: TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_REPLICATION_BY_WHERE_FILTER,
      params: {
        productId : 'id'
      }
    }
  }
})
export class Product extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode: string;

  @belongsTo(
    () => Instrument,
    {
      name: 'benchmarkInstrument',
      keyFrom: 'benchmarkInstrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_benchmark', dataType: 'INT', nullable: 'Y'}
    }
  )
  benchmarkInstrumentId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
