import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'HistoricalHoldingsReportings',
    indexes: {},
    elasticsearch: {index: 'historicalholdingsreporting', type: 'historicalholding'},
    hiddenProperties: []
  }
})
export class HistoricalHoldingsReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  historicalHoldingId?: number;

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
  unrealizedShortTermCapitalQuantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  unrealizedLongTermCapitalQuantity?: number;

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
    es: {type: 'keyword'}
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
    es: {type: 'text'}
  })
  instrumentMutualFundsSchemeName?: string;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HistoricalHoldingsReporting>) {
    super(data);
  }
}

export interface HistoricalHoldingsReportingRelations {
  // describe navigational properties here
}

export type HistoricalHoldingsReportingWithRelations = HistoricalHoldingsReporting & HistoricalHoldingsReportingRelations;
