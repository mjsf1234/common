import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'TransactionsReportings',
    indexes: {},
    elasticsearch: {
      index: 'transactionsreporting',
      type: 'transaction',
      settings: {
        dynamicSettings: {'index.max_inner_result_window': 100000, max_result_window: 100000}
      }
    },
    hiddenProperties: []
  }
})
export class TransactionsReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'boolean',
    default: false,
    es: {type: 'boolean'}
  })
  isDummy?: boolean;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  transactionId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  transactionBOSCode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  transactionNSECode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  transactionBSECode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  reverseFeedUniqueHash?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  transactionDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  orderDate?: Date;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  quantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  openingQuantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  closingQuantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  pricePerUnit?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  brokerageAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  accruedInterest?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  openingAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  closingAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  taxAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalTaxAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  securitiesTransactionTaxAmount?: number;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  transactionSubType?: number;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  transactionSubTypeLabel: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderReferenceNumber?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderReferenceName?: string;

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
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  userTransactionNumber?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  remark?: string;

  @property({
    type: 'number',
    required: true,
    es: {type: 'short'}
  })
  transactionStatus: number;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  transactionStatusLabel: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  orderItemId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  orderItemUniqueId?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  orderId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  orderUniqueId?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  systematicMethodId?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  systematicMethodFrequency?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  systematicMethodFrequencyLabel?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  systematicMethodFrequencyDay?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  systematicMethodType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  systematicMethodTypeLabel?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  systematicMethodStartDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  systematicMethodEndDate?: Date;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  transactionTypeId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  transactionTypeName?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  transactionTypeDescription?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  holdingCalculationBuySellType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  holdingCalculationBuySellTypeLabel?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  instrumentName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  instrumentFullName?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
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
  instrumentInceptionPriceDate?: string;

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
    type: 'date',
    es: {type: 'date'}
  })
  navDate?: Date;

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
  secondaryInstrumentId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  secondaryInstrumentName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  secondaryInstrumentFullName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  secondaryInstrumentServiceProviderSpecificCode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  secondaryInstrumentRTACode?: string;

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
    es: {type: 'text'}
  })
  instrumentCategoryDescription?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  instrumentCategoryShortName?: string;

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
    es: {type: 'double'}
  })
  bondDetailsCoupon?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  serviceProviderAccountId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceProviderAccountNumber?: string;

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
    type: 'number',
    es: {type: 'long'}
  })
  accountCategoryId?: number;

  @property({
    type: 'string',
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
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
    type: 'number',
    es: {type: 'long'}
  })
  currencyId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
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
  corporateActionId?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  pricePerUnitCA?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  offeredUnitCA?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  heldUnitCA?: number;

  @property({
    type: 'object',
    es: {type: 'object'}
  })
  corporateActionSettings?: object;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentIdCA?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  instrumentNameCA?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  secondaryInstrumentIdCA?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
  })
  secondaryInstrumentNameCA?: string;

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
    es: {type: 'text', fields: {keyword: {type: 'keyword'}}}
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
    es: {type: 'text'}
  })
  goalDescription?: string;

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
    type: 'number',
    es: {type: 'long'}
  })
  deletedByUserId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  deletedByUserName?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  paymentMode?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  utrNumber?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  valueDate?: Date;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  orderTime?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  city?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  orderSource?: number;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  orderSourceLabel: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TransactionsReporting>) {
    super(data);
  }
}

export interface TransactionsReportingRelations {
  // describe navigational properties here
}

export type TransactionsReportingWithRelations = TransactionsReporting & TransactionsReportingRelations;
