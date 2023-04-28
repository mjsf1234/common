import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Instrument} from './instrument.model';
import {SystematicMethodSetting} from './systematic-method-setting.model';
import { TransactionalDataRefreshingQueueMessageEventType } from '../../queues';
@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'mutual_fund_details'},
    plural: 'MutualFundDetails',
    foreignKeys: {
      fkidx_mutual_fund_details_instrument_fk_id_instrument: {
        name: 'fkidx_mutual_fund_details_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_mutual_fund_details_fk_id_direct_scheme_instr: {
        name: 'fkidx_mutual_fund_details_fk_id_direct_scheme_instr',
        foreignKey: 'fk_id_direct_scheme_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_mutual_fund_details_fk_id_primary_scheme_instr: {
        name: 'fkidx_mutual_fund_details_fk_id_primary_scheme_instr',
        foreignKey: 'fk_id_primary_scheme_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: [],
    syncRefresher: {
      eventType: TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_REPLICATION_BY_INSTRUMENT_ID,
      params: {
        instrumentId: 'instrumentId' // key in the model
      }
    }
  }
})
export class MutualFundDetails extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'amfi_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  amfiName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'amfi_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  amfiCode?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  startDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  endDate?: Date;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'reinvestment_flag', dataType: 'VARCHAR', dataLength: 30, nullable: 'N'}
  })
  reinvestmentFlag: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fund_manager', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  fundManager?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fund_manager_education', dataType: 'TEXT', nullable: 'Y'}
  })
  fundManagerEducation?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fund_manager_experience', dataType: 'TEXT', nullable: 'Y'}
  })
  fundManagerExperience?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fund_objective', dataType: 'TEXT', nullable: 'Y'}
  })
  fundObjective?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'risk_colour_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  riskColourName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'risk', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  risk?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fund_rating', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  fundRating?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'risk_grade', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  riskGrade?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'return_grade', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  returnGrade?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'entry_load', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  entryLoad?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'exit_load', dataType: 'VARCHAR', nullable: 'Y', dataLength: 500}
  })
  exitLoad?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'expense_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  expenseRatio?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'turnover_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  turnoverRatio?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_investment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  minInvestmentAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_investment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  maxInvestmentAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_additional_investment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  minAdditionalInvestmentAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_additional_investment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  maxAdditionalInvestmentAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_redemption_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  minRedemptionAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_redemption_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  maxRedemptionAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_redemption_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  minRedemptionQuantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_redemption_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  maxRedemptionQuantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'purchase_amount_multiplier', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  purchaseAmountMultiplier?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'redemption_amount_multiplier', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  redemptionAmountMultiplier?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'redemption_quantity_multiplier', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  redemptionQuantityMultiplier?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'settlement_days', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255}
  })
  settlementDays?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'MUTUALFUNDPLANTYPE',
    postgresql: {columnName: 'plan_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  planType?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'MUTUALFUNDTYPE',
    postgresql: {columnName: 'mutual_fund_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  mutualFundType?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'lockin_period', dataType: 'VARCHAR', nullable: 'Y', dataLength: 30}
  })
  lockinPeriod?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'lock_lockin', dataType: 'VARCHAR', nullable: 'Y', dataLength: 100}
  })
  loadLockin?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'redemption_days', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  redemptionDays?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'price_earnings', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  priceEarnings?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'price_to_book', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  priceToBook?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'average_maturity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  averageMaturity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'yield_to_maturity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  yieldToMaturity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'mod_duration', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  modDuration?: number;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'is_purchase_allowed', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isPurchaseAllowed?: boolean;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'is_switch_in_allowed', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSwitchInAllowed?: boolean;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'is_switch_out_allowed', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSwitchOutAllowed?: boolean;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'is_redemption_allowed', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isRedemptionAllowed?: boolean;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'is_sip_allowed', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSIPAllowed?: boolean;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'is_stp_allowed', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSTPAllowed?: boolean;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'is_swp_allowed', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSWPAllowed?: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'purchase_cutoff_time', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  purchaseCutoffTime?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'redemption_cutoff_time', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  redemptionCutoffTime?: string;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'min_sip_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  minSIPAmount?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'max_sip_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  maxSIPAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'absolute_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  absoluteReturn?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'annual_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  annualReturn?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'standard_deviation', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  standardDeviation?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'mean', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  mean?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'alpha', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  alpha?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'beta', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  beta?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'rsquared', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  rsquared?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'alpha_stated', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  alphaStated?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'beta_stated', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  betaStated?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'rsquared_stated', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  rsquaredStated?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'jenson_alpha', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  jensonAlpha?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'volatility', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  volatility?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sortino_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  sortinoRatio?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'treynor_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  treynorRatio?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sharpe_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  sharpeRatio?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'information_ratio', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  informationRatio?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'active_risk', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  activeRisk?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'information_risk', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  informationRisk?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_1_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor1Month?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_1_day', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor1Day?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_3_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor3Month?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_6_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor6Month?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor1Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_2_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor2Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor3Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'return_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor5Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sharpe_ratio_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  sharpeRatioFor1Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sharpe_ratio_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  sharpeRatioFor3Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sharpe_ratio_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  sharpeRatioFor5Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'volatility_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  volatilityFor1Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'volatility_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  volatilityFor3Year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'volatility_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  volatilityFor5Year?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'MUTUALFUNDENDTYPE',
    postgresql: {columnName: 'mutual_fund_end_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  mutualFundEndType?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'DIVIDENDFREQUENCY',
    postgresql: {columnName: 'dividend_frequency', dataType: 'SMALLINT', nullable: 'Y'}
  })
  dividendFrequency?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'REDEMPTIONTYPE',
    postgresql: {columnName: 'redemption_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  redemptionType?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'NAVUPDATEFREQUENCY',
    postgresql: {columnName: 'nav_update_frequency', dataType: 'SMALLINT', nullable: 'Y'}
  })
  navUpdateFrequency?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'min_swp_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5}
  })
  minSWPAmount?: number;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'details', dataType: 'TEXT', nullable: 'Y'}
  })
  bankDetails?: object;

  @property({
    type: 'number',
    postgresql: {columnName: 'face_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  faceValue?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'issue_open_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  issueOpenDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'issue_close_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  issueCloseDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'allotment_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  allotmentDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'maturity_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  maturityDate?: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'product_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  productCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'scheme_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  schemeName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'dep_acc_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  depAccNo?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'dep_bank', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  depBank?: string;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'corpus', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  corpus?: number;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'category_average', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  categoryAverage?: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'exit_load_remarks', dataType: 'VARCHAR', dataLength: 500, nullable: 'Y'}
  })
  exitLoadRemarks?: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'rank', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  rank?: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'scripStyle', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  scripStyle?: string;

  @property({
    type: 'number',
    default: null,
    postgresql: {columnName: 'pe_score', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  peScore?: number;

  @property({
    type: 'number',
    default: null,
    postgresql: {columnName: 'pb_score', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  pbScore?: number;

  @property({
    type: 'number',
    default: null,
    postgresql: {columnName: 'giant_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  giantMarketCapPercentage?: number;

  @property({
    type: 'number',
    default: null,
    postgresql: {columnName: 'large_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  largeMarketCapPercentage?: number;

  @property({
    type: 'number',
    default: null,
    postgresql: {columnName: 'mid_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  midMarketCapPercentage?: number;

  @property({
    type: 'number',
    default: null,
    postgresql: {columnName: 'small_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  smallMarketCapPercentage?: number;

  @property({
    type: 'number',
    default: null,
    postgresql: {columnName: 'tiny_market_cap_percentage', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 20}
  })
  tinyMarketCapPercentage?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'issue_actual_close_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  issueActualCloseDate?: Date;

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
  instrumentId: number;

  @belongsTo(
    () => Instrument,
    {
      name: 'directSchemeInstrument',
      keyFrom: 'directSchemeInstrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_direct_scheme_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  directSchemeInstrumentId?: number;

  @belongsTo(
    () => Instrument,
    {
      name: 'primarySchemeInstrument',
      keyFrom: 'primarySchemeInstrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_primary_scheme_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  primarySchemeInstrumentId?: number;

  @hasMany(() => SystematicMethodSetting, {keyTo: 'mutualFundDetailsId'})
  systematicMethodSettings?: SystematicMethodSetting[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MutualFundDetails>) {
    super(data);
  }
}

export interface MutualFundDetailsRelations {
  // describe navigational properties here
}

export type MutualFundDetailsWithRelations = MutualFundDetails & MutualFundDetailsRelations;
