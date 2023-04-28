import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, InstrumentCategory} from '..';
import {ModelPortfolioAsset} from './model-portfolio-asset.model';
import {ModelPortfolioProduct} from './model-portfolio-product.model';
import {ModelPortfolio} from './model-portfolio.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {},
    postgresql: {tableName: 'model_portfolio_category'},
    plural: 'ModelPortfolioCategories',
    foreignKeys: {
      fkidx_model_portfolio_category_portfolio_fk_id_portfolio: {
        name: 'fkidx_model_portfolio_category_portfolio_fk_id_portfolio',
        foreignKey: 'fk_id_model_portfolio',
        entityKey: 'id',
        entity: 'ModelPortfolio'
      },
      fkidx_model_portfolio_category_category_fk_id_category: {
        name: 'fkidx_model_portfolio_category_category_fk_id_category',
        foreignKey: 'fk_id_instrument_category',
        entityKey: 'id',
        entity: 'InstrumentCategory'
      },
      fkidx_model_portfolio_category_asset_fk_id_asset: {
        name: 'fkidx_model_portfolio_category_asset_fk_id_asset',
        foreignKey: 'fk_id_model_portfolio_asset',
        entityKey: 'id',
        entity: 'ModelPortfolioAsset'
      },
      fkidx_model_portfolio_category_product_fk_id_product: {
        name: 'fkidx_model_portfolio_category_product_fk_id_product',
        foreignKey: 'fk_id_model_portfolio_product',
        entityKey: 'id',
        entity: 'ModelPortfolioProduct'
      }
    },
    hiddenProperties: ['fk_id_model_portfolio', 'fk_id_instrument_category', 'fk_id_model_portfolio_asset', 'fk_id_model_portfolio_product']
  }
})
export class ModelPortfolioCategory extends BaseSQLModel {
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
    postgresql: {columnName: 'priority', dataType: 'INT', nullable: 'Y'}
  })
  priority?: number;
  @property({
    type: 'number',
    postgresql: {columnName: 'sip_priority', dataType: 'INT', nullable: 'Y'}
  })
  sipPriority?: number;
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
    () => ModelPortfolioProduct,
    {
      name: 'modelPortfolioProduct',
      keyFrom: 'modelPortfolioProductId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_model_portfolio_product', dataType: 'INT', nullable: 'Y'}
    }
  )
  modelPortfolioProductId?: number;

  [prop: string]: any;

  constructor(data?: Partial<ModelPortfolioCategory>) {
    super(data);
  }
}
export interface ModelPortfolioCategoryRelations {
  // describe navigational properties here
}

export type ModelPortfolioCategoryWithRelations = ModelPortfolioCategory & ModelPortfolioCategoryRelations;
