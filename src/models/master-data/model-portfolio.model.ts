import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel, RiskProfile, Tenure, ModelPortfolioAmountCapping} from '..';
import {ModelPortfolioAsset} from './model-portfolio-asset.model';
import {ModelPortfolioCategory} from './model-portfolio-category.model';
import { ModelPortfolioConfig } from './model-portfolio-config.model';
import {ModelPortfolioInstrument} from './model-portfolio-instrument.model';
import {ModelPortfolioProduct} from './model-portfolio-product.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {},
    postgresql: {tableName: 'model_portfolio'},
    plural: 'ModelPortfolios',
    foreignKeys: {
      fkidx_model_portfolio_risk_profile_fk_id_risk_profile: {
        name: 'fkidx_model_portfolio_risk_profile_fk_id_risk_profile',
        foreignKey: 'fk_id_risk_profile',
        entityKey: 'id',
        entity: 'RiskProfile'
      },
      fkidx_model_portfolio_tenure_fk_id_tenure: {
        name: 'fkidx_model_portfolio_tenure_fk_id_tenure',
        foreignKey: 'fk_id_tenure',
        entityKey: 'id',
        entity: 'Tenure'
      }
    },
    hiddenProperties: ['fk_id_risk_profile', 'fk_id_tenure']
  }
})
export class ModelPortfolio extends BaseSQLModel {
  @property({
    type: 'number',
    required: false,
    id: true,
    postgresql: {columnName: 'id', type: 'number', nullable: 'N'}
  })
  id?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 500, nullable: 'Y'}
  })
  name?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'irr', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10}
  })
  irr?: number;

  //sharad added START
  @property({
    type: 'number',
    postgresql: {columnName: 'fv_lumpsum_10k', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  fvLumpsum10k?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'fv_sip_1k', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  fvSIP1k?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'tenure_months', dataType: 'INT', nullable: 'Y'}
  })
  tenureMonths?: number;

  //sharad add END

  @property({
    type: 'number',
    postgresql: {columnName: 'equity_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10}
  })
  equityReturn?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'debt_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 10}
  })
  debtReturn?: number;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'include_in_tax', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  includeInTax?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'include_in_sip', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  includeInSip?: boolean;

  @property({
    type: 'number',
    optionLabelIdentifier: 'GOALOBJECTIVE',
    postgresql: {columnName: 'objective_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  objectiveType?: number;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'PRODUCTOBJECTIVE',
    postgresql: {columnName: 'product_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  productType: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'recommendation_reasoning', dataType: 'TEXT', nullable: 'Y'}
  })
  recommendationReasoning?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'INVESTMENTTYPE',
    postgresql: {columnName: 'investment_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  investmentType?: number;

  @belongsTo(
    () => Tenure,
    {
      name: 'tenure',
      keyFrom: 'tenureId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_tenure', dataType: 'INT', nullable: 'Y'}
    }
  )
  tenureId?: number;

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

  /*@hasMany(() => ModelPortfolioInstrument, {keyTo: 'modelPortfolioId'})
  modelPortfolioInstruments?: ModelPortfolioInstrument[];*/

  @hasMany(() => ModelPortfolioAsset, {keyTo: 'modelPortfolioId'})
  modelPortfolioAssets?: ModelPortfolioAsset[];

  @hasMany(() => ModelPortfolioCategory, {keyTo: 'modelPortfolioId'})
  modelPortfolioCategories?: ModelPortfolioCategory[];

  @hasMany(() => ModelPortfolioProduct, {keyTo: 'modelPortfolioId'})
  modelPortfolioProducts?: ModelPortfolioProduct[];

  @hasMany(() => ModelPortfolioConfig, {keyTo: 'modelPortfolioId'})
  modelPortfolioConfig?: ModelPortfolioConfig[];

  [prop: string]: any;

  constructor(data?: Partial<ModelPortfolio>) {
    super(data);
  }
}
export interface ModelPortfolioRelations {
  // describe navigational properties here
}

export type ModelPortfolioWithRelations = ModelPortfolio & ModelPortfolioRelations;
