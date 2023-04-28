import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {Asset} from '.';
import {BaseSQLModel} from '..';
import {CategoryReturnHistory} from './category-return-history.model';
import {Instrument} from './instrument.model';
import {InstrumentCategoryGroup} from './instrument-category-group.model';
import {TransactionalDataRefreshingQueueMessageEventType} from '../../queues';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_instrument_category_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    postgresql: {tableName: 'instrument_category'},
    plural: 'InstrumentCategories',
    foreignKeys: {
      fkidx_instrument_category_fk_id_instrument: {
        name: 'fkidx_instrument_category_fk_id_instrument',
        foreignKey: 'fk_id_benchmark_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: ['config'],
    syncRefresher: {
      eventType: TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_REPLICATION_BY_WHERE_FILTER,
      params: {
        instrumentCategoryId : 'id'
      }
    }
  }
})
export class InstrumentCategory extends BaseSQLModel {
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
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'short_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  shortName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fundoo_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  fundooCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'purchase_cutoff_time', dataType: 'TIME', nullable: 'Y'}
  })
  purchaseCutoffTime?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'redemption_cutoff_time', dataType: 'TIME', nullable: 'Y'}
  })
  redemptionCutoffTime?: string;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: object;

  @property({
    type: 'object',
    default: {riskProfileIds: [1, 2, 3, 4, 5]},
    postgresql: {columnName: 'suitability', dataType: 'TEXT', nullable: 'Y'}
  })
  suitability?: object;

  @belongsTo(
    () => Instrument,
    {
      name: 'benchmarkInstrument',
      keyFrom: 'benchmarkInstrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_benchmark_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  benchmarkInstrumentId?: number;

  @belongsTo(
    () => Asset,
    {
      name: 'asset',
      keyFrom: 'assetId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_asset', dataType: 'INT', nullable: 'Y'}
    }
  )
  assetId?: number;

  @belongsTo(
    () => InstrumentCategoryGroup,
    {
      name: 'instrumentCategoryGroup',
      keyFrom: 'categoryGroupId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_category_group', dataType: 'INT', nullable: 'Y'}
    }
  )
  categoryGroupId?: number;

  @hasMany(() => CategoryReturnHistory, {keyTo: 'instrumentCategoryId'})
  categoryReturnHistories?: CategoryReturnHistory[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstrumentCategory>) {
    super(data);
  }
}

export interface InstrumentCategoryRelations {
  // describe navigational properties here
}

export type InstrumentCategoryWithRelations = InstrumentCategory & InstrumentCategoryRelations;
