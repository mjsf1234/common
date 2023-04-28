import {belongsTo, model, property} from '@loopback/repository';
import {Asset, BaseSQLModel} from '..';
import {ModelPortfolio} from './model-portfolio.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {},
    postgresql: {tableName: 'model_portfolio_asset'},
    plural: 'ModelPortfolioAssets',
    foreignKeys: {
      fkidx_model_portfolio_asset_portfolio_fk_id_portfolio: {
        name: 'fkidx_model_portfolio_asset_portfolio_fk_id_portfolio',
        foreignKey: 'fk_id_model_portfolio',
        entityKey: 'id',
        entity: 'ModelPortfolio'
      },
      fkidx_model_portfolio_asset_asset_fk_id_asset: {
        name: 'fkidx_model_portfolio_asset_asset_fk_id_asset',
        foreignKey: 'fk_id_asset',
        entityKey: 'id',
        entity: 'Asset'
      }
    },
    hiddenProperties: ['fk_id_model_portfolio', 'fk_id_asset']
  }
})
export class ModelPortfolioAsset extends BaseSQLModel {
  @property({
    type: 'number',
    required: false,
    id: true,
    postgresql: {columnName: 'id', type: 'number', nullable: 'N'}
  })
  id?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'weightage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10}
  })
  weightage?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sip_weightage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10}
  })
  sipWeightage?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'priority', dataType: 'INT', nullable: 'N'}
  })
  priority: number;

  @belongsTo(
    () => ModelPortfolio,
    {
      name: 'modelPortfolio',
      keyFrom: 'modelPortfolioId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_model_portfolio', dataType: 'INT', nullable: 'Y'}
    }
  )
  modelPortfolioId?: number;

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

  [prop: string]: any;

  constructor(data?: Partial<ModelPortfolioAsset>) {
    super(data);
  }
}
export interface ModelPortfolioAssetRelations {
  // describe navigational properties here
}

export type ModelPortfolioAssetWithRelations = ModelPortfolioAsset & ModelPortfolioAssetRelations;
