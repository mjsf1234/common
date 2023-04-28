import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Product} from '..';
import {ModelPortfolioAsset} from './model-portfolio-asset.model';
import {ModelPortfolio} from './model-portfolio.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {},
    postgresql: {tableName: 'model_portfolio_product'},
    plural: 'ModelPortfolioProducts',
    foreignKeys: {
      fkidx_model_portfolio_product_product_fk_id_product: {
        name: 'fkidx_model_portfolio_product_product_fk_id_product',
        foreignKey: 'fk_id_product',
        entityKey: 'id',
        entity: 'Product'
      },
      fkidx_model_portfolio_product_asset_fk_id_asset: {
        name: 'fkidx_model_portfolio_product_asset_fk_id_asset',
        foreignKey: 'fk_id_model_portfolio_asset',
        entityKey: 'id',
        entity: 'ModelPortfolioAsset'
      },
      fkidx_model_portfolio_product_portfolio_fk_id_portfolio: {
        name: 'fkidx_model_portfolio_product_portfolio_fk_id_portfolio',
        foreignKey: 'fk_id_model_portfolio',
        entityKey: 'id',
        entity: 'ModelPortfolio'
      }
    },
    hiddenProperties: ['fk_id_product', 'fk_id_model_portfolio_asset', 'fk_id_model_portfolio']
  }
})
export class ModelPortfolioProduct extends BaseSQLModel {
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
    required: true,
    postgresql: {columnName: 'priority', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  priority: number;

  @belongsTo(
    () => ModelPortfolioAsset,
    {
      name: 'modelPortfolioAsset',
      keyFrom: 'modelPortfolioAssetId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_model_portfolio_asset', dataType: 'INT', nullable: 'Y'}
    }
  )
  modelPortfolioAssetId?: number;

  @belongsTo(
    () => Product,
    {
      name: 'product',
      keyFrom: 'productId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_product', dataType: 'INT', nullable: 'Y'}
    }
  )
  productId?: number;

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

  [prop: string]: any;

  constructor(data?: Partial<ModelPortfolioProduct>) {
    super(data);
  }
}
export interface ModelPortfolioProductRelations {
  // describe navigational properties here
}

export type ModelPortfolioProductWithRelations = ModelPortfolioProduct & ModelPortfolioProductRelations;
