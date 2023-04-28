import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel, ModelPortfolioAmountCapping, ModelPortfolio} from '..';

@model({
    settings: {
      strict: false,
      forceId: false,
      indexes: {},
      postgresql: {tableName: 'model_portfolio_config'},
      plural: 'ModelPortfolioConfig'
    }
  })
  export class ModelPortfolioConfig extends BaseSQLModel {
    @property({
        type: 'string',
        required: true,
        postgresql: {columnName: 'model_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
      })
      modelName?: string;

    @property({
        type: 'number',
        required: true,
        postgresql: {columnName: 'model_with_tenure', dataType: 'INT', nullable: 'N'}
      })
      modelWithTenure?: number;

    @property({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'MODELPORTFOLIOMODELTYPE',
        postgresql: {columnName: 'model_type', dataType: 'INT', nullable: 'N'}
      })
      modelType?: number;
    
    @property({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'MODELPORTFOLIOFLOW',
        postgresql: {columnName: 'for_instrument', dataType: 'INT', nullable: 'N'}
      })
      forInstrument?: number;

    @property({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'MODELCONFIGBYWEIGHTORQUATITY',
        postgresql: {columnName: 'weight_or_quantity', dataType: 'INT', nullable: 'N'}
      })
      weightOrQuantity?: number;

      @property({
        type: 'object',
        postgresql: {columnName: 'configuration_for_non_instrument', dataType: 'TEXT', nullable: 'Y'}
      })
      configurationForNonInstrument?: object;

    @property({
        type: 'number',
        optionLabelIdentifier: 'MODELPORTFOLIOGOALTYPE',
        postgresql: {columnName: 'bos_code', dataType: 'INT', nullable: 'Y'}
      })
      bosCode?: number;

    @property({
        type: 'string',
        postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
      })
      description?: string;

      @property({
        type: 'number',
        required: false,
        postgresql: {columnName: 'cagr', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 15, dataScale: 3}
      })
      cagr?: number;

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

    constructor(data?: Partial<ModelPortfolioConfig>) {
        super(data);
      }
  }

  export interface ModelPortfolioConfigRelations {
    // describe navigational properties here
  }

  export type ModelPortfolioConfigWithRelations = ModelPortfolioConfig & ModelPortfolioConfigRelations;