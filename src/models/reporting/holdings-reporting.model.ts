import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'HoldingsReportings',
    indexes: {},
    elasticsearch: {index: 'holdingsreporting', type: 'holding'},
    hiddenProperties: []
  }
})
export class HoldingsReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  holdingId?: number;

  @property({
    type: 'string',
    es: {type: 'keyword'}
  })
  holdingUniqueId?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  holdingDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  investmentDate?: Date;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  quantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  averagePricePerUnit?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalInvestedAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  currentPricePerUnit?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  dividendReinvested?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  dividendPaid?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalCurrentValue?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalCommitmentAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalDrawdownAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalInterestAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalReturnOfCapitalAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalReturnOnCapitalAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalIncome?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  accruedInterest?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  absoluteProfitLoss?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  percentageProfitLoss?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  xirr?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  unrealizedShortTermCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  unrealizedLongTermCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  unrealizedBusinessCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  realizedShortTermCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  realizedLongTermCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  realizedBusinessCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  unrealizedShortTermCapitalQuantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  unrealizedLongTermCapitalQuantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  benchmarkTotalCurrentValue?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  benchmarkXirr?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  beginningMarketValue?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  beginningMarketQuantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  flows?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  inflows?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  outflows?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  benchmarkFlows?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  benchmarkInflows?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  benchmarkOutflows?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  absoluteReturn?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  benchmarkAbsoluteReturn?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  profit?: number;

  @property({
    type: 'array',
    es: {type: 'nested', properties: {amount: {type: 'double'}, when: {type: 'date'}}},
    itemType: 'object'
  })
  xirrData?: object[];

  @property({
    type: 'array',
    es: {type: 'nested', properties: {amount: {type: 'double'}, when: {type: 'date'}}},
    itemType: 'object'
  })
  benchmarkXirrData?: object[];

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  sellableQuantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  goalTargetAmount?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  goalEndDate?: Date;

  @property({
    type: 'object',
    es: {
      type: 'object',
      properties: {
        quantity: {type: 'double'},
        totalCurrentValue: {type: 'double'},
        totalInvestedAmount: {type: 'double'},
        benchmarkTotalCurrentValue: {type: 'double'},
        portfolioGain: {type: 'double'},
        benchmarkGain: {type: 'double'},
        previousDayTotalCurrentValue: {type: 'double'},
        previousDayBenchmarkTotalCurrentValue: {type: 'double'}
      }
    }
  })
  states?: object;

  @property({
    type: 'boolean',
    default: false,
    es: {type: 'boolean'}
  })
  isZeroised?: boolean;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  distributorId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  distributorName?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  groupId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  groupName?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  familyId?: number;

  @property({
    type: 'string',
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  familyName?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  appUserId?: number;

  @property({
    type: 'string',
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  appUserName?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  appUserEmail?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  appUserCode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  appUserContactNumberCountryCode?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  appUserContactNumber?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  accountId?: number;

  @property({
    type: 'string',
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  accountName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  accountUniqueId?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  accountStatus?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  accountStatusLabel?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  accountActivationDate?: Date;

  @property({
    type: 'boolean',
    default: false,
    es: {type: 'boolean'}
  })
  serviceProviderAccountIsHeldAway?: boolean;

  @property({
    type: 'boolean',
    default: false,
    es: {type: 'boolean'}
  })
  accountIsProspect?: boolean;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  accountCategoryId?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  serviceProviderId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderAccountNumber?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderAccountName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderAccountEmail?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderAccountPhoneNumber?: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  coupon?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  maturityDate?: Date;

  @property({
    type: 'number',
    required: true,
    es: {type: 'short'}
  })
  accrualFrequency: number;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  accrualFrequencyLabel: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  serviceProviderAccountId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderReferenceNumber?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  serviceProviderAccountType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderAccountTypeLabel?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderShortName?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
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
    type: 'number',
    es: {type: 'long'}
  })
  currencyId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  currencyName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  currencyShortName?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  goalId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  goalUniqueId?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  goalName?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  goalType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  goalTypeLabel?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  goalDescription?: string;

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
    es: {type: 'text', index: false}
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
  instrumentBOSCode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentRTACode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentBSECode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentFundooRTACode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentISINCode?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
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
    es: {type: 'double'}
  })
  instrumentLastPrice?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentLastPriceDate?: Date;

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
    type: 'number',
    es: {type: 'long'}
  })
  productId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  productName?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  productDescription?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  assetId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  assetName?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
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
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  taxAssetName?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
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
  assetClassificationId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  assetClassificationName?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  capitalBucketId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  capitalBucketName?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentTypeId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentTypeName?: string;

  @property({
    type: 'string',
    es: {type: 'keyword', index: false}
  })
  instrumentTypeDescription?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentCategoryId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentCategoryName?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  instrumentCategoryDescription?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentMutualFundsId?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsMinInvestmentAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsMinAdditionalInvestmentAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsMaxInvestmentAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsMaxAdditionalInvestmentAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsReturnFor1Month?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsReturnFor1Day?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsReturnFor3Month?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsReturnFor6Month?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsReturnFor1Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsReturnFor2Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsReturnFor3Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsReturnFor5Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsSharpeRatioFor1Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsSharpeRatioFor3Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsSharpeRatioFor5Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsVolatilityFor1Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsVolatilityFor3Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsVolatilityFor5Year?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentMutualFundsStartDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentMutualFundsEndDate?: Date;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  instrumentMutualFundsEndType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentMutualFundsEndTypeLabel?: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsAverageMaturity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsYieldToMaturity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMutualFundsModDuration?: number;

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
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentBondDetailsIssuerName?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentBondDetailsMaturityDate?: Date;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentBondDetailsCoupon?: number;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  realEstateDetailsAddress?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  serviceProviderAccountFixedDepositName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  insuranceServiceProviderAccountDetailName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  ppfDetailName?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentMaturityDate?: Date;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentBseUniqueId?: string;

  //added properties for deposit details
  @property({
    type: 'number',
    es: {type: 'short'}
  })
  depositType?: number;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  depositMode?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  depositMaturityDate?: Date;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  depositName?: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  depositInvestedValue?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  tenureMonths?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  interestRate?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  depositStartDate?: Date;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  depositFrequency?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  interestFrequency?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  compoundingFrequency?: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  maturityAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  installmentAmount?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  installmentDate?: Date;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  depositStatus?: number;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  depositSubType?: number;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  actionOnMaturity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalInterestPayable?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  totalInstallments?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  currentInstallment?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  depositPayoutAmount?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  lastRenewalDate?: Date;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  brokerCode?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  instrumentRecommendationType?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  accountOpeningDate?: Date;

  @property({
    type: 'boolean',
    default: false,
    es: {type: 'boolean'}
  })
  isSellAllowed?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HoldingsReporting>) {
    super(data);
  }
}

export interface HoldingsReportingRelations {
  // describe navigational properties here
}

export type HoldingsReportingWithRelations = HoldingsReporting & HoldingsReportingRelations;
