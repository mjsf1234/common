import {model, property, hasMany} from '@loopback/repository';
import {BaseSQLModel, ModelPortfolio, ModelPortfolioInstrument} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'model_portfolio_amount_capping'},
    plural: 'ModelPortfolioAmountCappings',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class ModelPortfolioAmountCapping extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  minAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  maxAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'number_of_schemes', nullable: 'Y', dataType: 'SMALLINT'}
  })
  numberOfSchemes?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'INVESTMENTTYPE',
    postgresql: {columnName: 'investment_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  investmentType?: number;

  @hasMany(() => ModelPortfolio, {keyTo: 'modelPortfolioAmountCappingId'})
  modelPortfolios?: ModelPortfolio[];

  @hasMany(() => ModelPortfolioInstrument, {keyTo: 'modelPortfolioAmountCappingId'})
  modelPortfolioInstruments?: ModelPortfolioInstrument[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ModelPortfolioAmountCapping>) {
    super(data);
  }
}

export interface ModelPortfolioAmountCappingRelations {
  // describe navigational properties here
}

export type ModelPortfolioAmountCappingWithRelations = ModelPortfolioAmountCapping & ModelPortfolioAmountCappingRelations;
