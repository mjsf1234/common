import {belongsTo, hasMany, model, property} from '@loopback/repository';
//import { Asset } from '.';
import {BaseSQLModel} from '..';
import {Asset} from './asset.model';
import {InstrumentCategory} from './instrument-category.model';

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
    postgresql: {tableName: 'instrument_category_asset_exposure'},
    plural: 'InstrumentCategoryAssetExposures',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class InstrumentCategoryAssetExposure extends BaseSQLModel {
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
    type: 'number',
    default: 100,
    required: true,
    postgresql: {columnName: 'percentage', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 20}
  })
  percentage: number;

  @belongsTo(
    () => InstrumentCategory,
    {
      name: 'instrumentCategory',
      keyFrom: 'instrumentCategoryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_instrument_category', dataType: 'INT', nullable: 'Y'}
    }
  )
  instrumentCategoryId?: number;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstrumentCategoryAssetExposure>) {
    super(data);
  }
}

export interface InstrumentCategoryAssetExposureRelations {
  // describe navigational properties here
}

export type InstrumentCategoryAssetExposureWithRelations = InstrumentCategoryAssetExposure & InstrumentCategoryAssetExposureRelations;
