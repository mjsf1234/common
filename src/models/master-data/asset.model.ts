import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {TransactionalDataRefreshingQueueMessageEventType} from '../../queues';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_asset_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    postgresql: {tableName: 'asset'},
    plural: 'Assets',
    foreignKeys: {},
    hiddenProperties: [],
    syncRefresher: {
      eventType: TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_REPLICATION_BY_WHERE_FILTER,
      params: {
        assetId : 'id'
      }
    }
  }
})
export class Asset extends BaseSQLModel {
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
    type: 'number',
    required: true,
    optionLabelIdentifier: 'ASSETTYPE',
    postgresql: {columnName: 'asset_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  assetType: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Asset>) {
    super(data);
  }
}

export interface AssetRelations {
  // describe navigational properties here
}

export type AssetWithRelations = Asset & AssetRelations;
