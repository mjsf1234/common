import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'InstrumentsReportings',
    indexes: {},
    elasticsearch: {index: 'instrumentsreporting', type: 'instrument'},
    hiddenProperties: []
  }
})
export class InstrumentsReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentFullName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentDescription?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentServiceProviderSpecificCode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentRTACode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentFundooCodeSubPlan?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentBOSCode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentNSECode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentBSECode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentISINCode?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  instrumentMutualFundsSchemeName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  fundooCode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentFundooRTACode?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentStatus?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentStatusLabel?: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentInceptionPrice?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentInceptionPriceDate?: Date;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentLastPrice?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentLastPriceDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentCreatedDate?: Date;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMovementFromPreviousPrice?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentPercentageMovementFromPreviousPrice?: number;

  @property({
    type: 'boolean',
    required: true,
    default: true,
    es: {type: 'boolean'}
  })
  instrumentIsPrimary: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    es: {type: 'boolean'}
  })
  instrumentIsRecommended: boolean;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  instrumentRecommendationType?: number | null;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    es: {type: 'boolean'}
  })
  instrumentIsUnitized: boolean;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  instrumentUnitizedFlag?: number;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  instrumentUnitizedFlagLabel?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  productId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  productName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  productDescription?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  assetId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  assetName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  assetDescription?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  assetType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  assetTypeLabel?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  taxAssetId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  taxAssetName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  taxAssetDescription?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  taxAssetType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  taxAssetTypeLabel?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentTypeId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  instrumentTypeName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  instrumentTypeDescription?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentCategoryId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  instrumentCategoryName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  shortName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  instrumentCategoryDescription?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  serviceProviderId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  serviceProviderName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  serviceProviderShortName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  serviceProviderDescription?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  serviceProviderType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderTypeLabel?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderRTACode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderRTAName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  sectorOne?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  sectorTwo?: string;

  @property({
    type: 'array',
    es: {type: 'nested', properties: {rating: {type: 'text'}, ratingClassification: {type: 'text'}}},
    itemType: 'object'
  })
  instrumentRatings?: object[];

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  mutualFundsId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  fundManager?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  fundManagerEducation?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  fundManagerExperience?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  fundObjective?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  riskColourName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  risk?: string;

  @property({
    type: 'string',
    es: {type: 'double'}
  })
  activeRisk?: string;

  @property({
    type: 'string',
    es: {type: 'double'}
  })
  informationRisk?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  fundRating?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  riskGrade?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  returnGrade?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  rank?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  scripStyle?: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  corpus?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  expenseRatio?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  turnoverRatio?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  peScore?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  pbScore?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  giantMarketCapPercentage?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  largeMarketCapPercentage?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  midMarketCapPercentage?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  smallMarketCapPercentage?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  tinyMarketCapPercentage?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  averageMaturity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  yieldToMaturity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  modDuration?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  absoluteReturn?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  annualReturn?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  standardDeviation?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mean?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  alpha?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  beta?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  rsquared?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  alphaStated?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  betaStated?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  rsquaredStated?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  jensonAlpha?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  volatility?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  sortinoRatio?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  treynorRatio?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  sharpeRatio?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  informationRatio?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  mutualFundsStartDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  mutualFundsEndDate?: Date;

  @property({
    type: 'boolean',
    es: {type: 'boolean'}
  })
  mutualFundsIsSIPAllowed?: boolean;

  @property({
    type: 'boolean',
    es: {type: 'boolean'}
  })
  mutualFundsIsPurchaseAllowed?: boolean;

  @property({
    type: 'boolean',
    es: {type: 'boolean'}
  })
  mutualFundsIsSwitchInAllowed?: boolean;

  @property({
    type: 'boolean',
    es: {type: 'boolean'}
  })
  mutualFundsIsSwitchOutAllowed?: boolean;

  @property({
    type: 'boolean',
    es: {type: 'boolean'}
  })
  mutualFundsIsRedemptionAllowed?: boolean;

  @property({
    type: 'boolean',
    es: {type: 'boolean'}
  })
  mutualFundsIsSTPAllowed?: boolean;

  @property({
    type: 'boolean',
    es: {type: 'boolean'}
  })
  mutualFundsIsSWPAllowed?: boolean;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMinSIPAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMaxSIPAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMinRedemptionAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMaxRedemptionAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMinRedemptionQuantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMaxRedemptionQuantity?: number;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  mutualFundsReinvestmentFlag: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  mutualFundsPlanType?: number;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  mutualFundsPlanTypeLabel: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMinInvestmentAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMinAdditionalInvestmentAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMaxInvestmentAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsMaxAdditionalInvestmentAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsReturnFor1Month?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsReturnFor1Day?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsReturnFor3Month?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsReturnFor6Month?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsReturnFor1Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsReturnFor2Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsReturnFor3Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsReturnFor5Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsSharpeRatioFor1Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsSharpeRatioFor3Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsSharpeRatioFor5Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsVolatilityFor1Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsVolatilityFor3Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsVolatilityFor5Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsRedemptionAmountMultiplier?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsRedemptionQuantityMultiplier?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  mutualFundsPurchaseAmountMultiplier?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  mutualFundsEndType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  mutualFundsEndTypeLabel?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  mutualFundsLockinPeriod?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  mutualFundsFaceValue?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  mutualFundsAllotmentDate?: Date;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  bondCoupon?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  bondMaturityDate?: Date;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  benchmarkInstrumentId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  benchmarkInstrumentName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentCategoryBenchmarkName?: string;

  @property({
    type: 'object',
    es: {type: 'nested', properties: {riskProfileIds: {type: 'long'}}},
    itemType: 'object'
  })
  instrumentCategorySuitability?: object;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentSebiCategoryId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  instrumentSebiCategoryName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  instrumentSebiCategoryDescription?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  instrumentSebiCategoryBosCode?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  instrumentSebiCategoryShortName?: string;
  // @property({
  //   type: 'array',
  //   es: {
  //     type: 'nested',
  //     properties: {
  //       bseCode: {type: 'text'},
  //       minInstallmentNumber: {type: 'long'},
  //       maxInstallmentNumber: {type: 'long'},
  //       sipMinimumGap: {type: 'long'},
  //       sipMaximumGap: {type: 'long'},
  //       multiplier: {type: 'long'},
  //       minInstallmentAmount: {type: 'long'},
  //       maxInstallmentAmount: {type: 'long'},
  //       dates: {type: 'text'},
  //       frequency: {type: 'long'},
  //       transactionMode: {type: 'text'},
  //       id: {type: 'long'},
  //       isActive: {type: 'boolean'},
  //       createdDate: {type: 'date'},
  //       lastModifiedDate: {type: 'date'},
  //       mutualFundDetailsId: {type: 'long'}
  //     }
  //   },
  //   itemType: 'object'
  // })
  // mutualFundsSystematicSettings?: object[];
  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  bseUniqueId?: string;

  @property({
    type: 'boolean',
    required: false,
    es: {type: 'boolean'}
  })
  instrumentIsNfo: boolean;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  mutualFundsIssueOpenDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  mutualFundsIssueCloseDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  mutualFundsIssueActualCloseDate?: Date;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  mutualFundsExitLoad?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  logo?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  serviceProviderStatus?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderStatusLabel?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  website?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  addressLine1?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  addressLine2?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  addressLine3?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  city?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  pincode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  phone?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  email?: string;

  @property({
    type: 'boolean',
    es: {type: 'boolean'}
  })
  instrumentCategoryIsActive?: boolean;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentCategoryRedemptionCutoffTime?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentCategorySuitabilityLabel?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstrumentsReporting>) {
    super(data);
  }
}

export interface InstrumentsReportingRelations {
  // describe navigational properties here
}

export type InstrumentsReportingWithRelations = InstrumentsReporting & InstrumentsReportingRelations;
