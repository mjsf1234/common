import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Instrument} from '..';
/*import {ModelPortfolioAsset} from './model-portfolio-asset.model';
import {ModelPortfolioCategory} from './model-portfolio-category.model';
import {ModelPortfolioProduct} from './model-portfolio-product.model';
import {ModelPortfolio} from './model-portfolio.model';*/
import { RiskProfile } from './risk-profile.model';
import { ModelPortfolioAmountCapping } from './model-portfolio-amount-capping.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {},
    postgresql: {tableName: 'model_portfolio_instrument'},
    plural: 'ModelPortfolioInstruments',
    foreignKeys: {
      fkidx_model_portfolio_instrument_instrument_fk_id_instrument: {
        name: 'fkidx_model_portfolio_instrument_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }/*,
      fkidx_model_portfolio_instrument_portfolio_fk_id_portfolio: {
        name: 'fkidx_model_portfolio_instrument_portfolio_fk_id_portfolio',
        foreignKey: 'fk_id_model_portfolio',
        entityKey: 'id',
        entity: 'ModelPortfolio'
      },
      fkidx_model_portfolio_instrument_category_fk_id_category: {
        name: 'fkidx_model_portfolio_instrument_category_fk_id_category',
        foreignKey: 'fk_id_model_portfolio_category',
        entityKey: 'id',
        entity: 'ModelPortfolioCategory'
      },
      fkidx_model_portfolio_instrument_asset_fk_id_asset: {
        name: 'fkidx_model_portfolio_instrument_asset_fk_id_asset',
        foreignKey: 'fk_id_model_portfolio_asset',
        entityKey: 'id',
        entity: 'ModelPortfolioAsset'
      },
      fkidx_model_portfolio_instrument_product_fk_id_product: {
        name: 'fkidx_model_portfolio_instrument_product_fk_id_product',
        foreignKey: 'fk_id_model_portfolio_product',
        entityKey: 'id',
        entity: 'ModelPortfolioProduct'
      }*/
    },
    hiddenProperties: []
  }
})
export class ModelPortfolioInstrument extends BaseSQLModel {
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

/*
  @property({
    type: 'number',
    postgresql: {columnName: 'priority', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10}
  })
  priority?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'quantity', dataType: 'NUMERIC', dataPrecision: 15, dataScale: 3, nullable: 'Y'}
  })
  quantity?: number;
*/

  @property({
    type: 'number',
    postgresql: {columnName: 'min_tenure_months', dataType: 'INT', nullable: 'Y'}
  })
  minTenureMonths?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_tenure_months', dataType: 'INT', nullable: 'Y'}
  })
  maxTenureMonths?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'INVESTMENTTYPE',
    postgresql: {columnName: 'investment_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  investmentType?: number;

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
  instrumentId?: number;
/*
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
    () => ModelPortfolioCategory,
    {
      name: 'modelPortfolioCategory',
      keyFrom: 'modelPortfolioCategoryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_model_portfolio_category', dataType: 'INT', nullable: 'Y'}
    }
  )
  modelPortfolioCategoryId?: number;

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
*/
  @belongsTo(
    () => RiskProfile,
    {
      name: 'riskProfile',
      keyFrom: 'riskProfileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_risk_profile', dataType: 'INT', nullable: 'Y'}
    }
  )
  riskProfileId?: number;


  @belongsTo(
    () => ModelPortfolioAmountCapping,
    {
      name: 'modelPortfolioAmountCapping',
      keyFrom: 'modelPortfolioAmountCappingId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_model_portfolio_amount_capping', dataType: 'INT', nullable: 'Y'}
    }
  )
  modelPortfolioAmountCappingId?: number;

  [prop: string]: any;

  constructor(data?: Partial<ModelPortfolioInstrument>) {
    super(data);
  }
}
export interface ModelPortfolioInstrumentRelations {
  // describe navigational properties here
}

export type ModelPortfolioInstrumentWithRelations = ModelPortfolioInstrument & ModelPortfolioInstrumentRelations;
