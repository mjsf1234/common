import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'GainsReportings',
    indexes: {},
    elasticsearch: {index: 'gainsreporting', type: 'gain'},
    hiddenProperties: []
  }
})
export class GainsReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  gainId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  gainUniqueId?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  buyDate?: Date;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  buyFinancialYear?: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  buyIndexationCost?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  indexedCost?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  pricePerUnitAsOnGrandfatheringDate?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  nav?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  adjustedPurchaseCost?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  sellDate?: Date;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  sellFinancialYear?: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  sellIndexationCost?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  holdingDays?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  quantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  averageBuyPricePerUnit?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  averageSellPricePerUnit?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalBuyAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalSellAmount?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  shortTermCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  longTermCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  businessCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalCapitalGain?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  totalCapitalGainWithIndexation?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  differenceDueToIndexation?: number;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  capitalGainType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  capitalGainTypeLabel?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  buyTransactionId?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  sellTransactionId?: number;

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
    es: {type: 'long', index: false}
  })
  effectiveCost?: number;

  @property({
    type: 'number',
    es: {type: 'long', index: false}
  })
  priceAsOn31Jan2018?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GainsReporting>) {
    super(data);
  }
}

export interface GainsReportingRelations {
  // describe navigational properties here
}

export type GainsReportingWithRelations = GainsReporting & GainsReportingRelations;
