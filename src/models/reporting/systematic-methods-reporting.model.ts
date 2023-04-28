import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'SystematicMethodsReportings',
    indexes: {},
    elasticsearch: {index: 'systematicmethodsreporting', type: 'systematicmethod'},
    hiddenProperties: []
  }
})
export class SystematicMethodsReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  systematicMethodId?: number;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  frequency?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  frequencyLabel?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  transactionCount?: number;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  type?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  typeLabel?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  status?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  statusLabel?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  startDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  endDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  firstExecutionDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  nextExecutionDate?: Date;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  quantity?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  amount?: number;

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
    type: 'number',
    es: {type: 'long'}
  })
  toInstrumentId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toInstrumentName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentFullName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toInstrumentFullName?: string;

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
  toInstrumentRTACode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentFundooRTACode?: string;


  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toInstrumentFundooRTACode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentISINCode?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toInstrumentISINCode?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  instrumentStatus?: number;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  toInstrumentStatus?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentStatusLabel?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toInstrumentStatusLabel?: string;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentInceptionPrice?: number;


  @property({
    type: 'number',
    es: {type: 'double'}
  })
  toInstrumentInceptionPrice?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentInceptionPriceDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  toInstrumentInceptionPriceDate?: Date;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentLastPrice?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  toInstrumentLastPrice?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  instrumentLastPriceDate?: Date;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  toInstrumentLastPriceDate?: Date;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentMovementFromPreviousPrice?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  toInstrumentMovementFromPreviousPrice?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  instrumentPercentageMovementFromPreviousPrice?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  toInstrumentPercentageMovementFromPreviousPrice?: number;


  @property({
    type: 'number',
    es: {type: 'long'}
  })
  productId?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  toProductId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  productName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toProductName?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  productDescription?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  toProductDescription?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  assetId?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  toAssetId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  assetName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toAssetName?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  assetDescription?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  toAssetDescription?: string;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  assetType?: number;

  @property({
    type: 'number',
    es: {type: 'short'}
  })
  toAssetType?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  assetTypeLabel?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toAssetTypeLabel?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentTypeId?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  toInstrumentTypeId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentTypeName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toInstrumentTypeName?: string;

  @property({
    type: 'string',
    es: {type: 'keyword', index: false}
  })
  instrumentTypeDescription?: string;

  @property({
    type: 'string',
    es: {type: 'keyword', index: false}
  })
  toInstrumentTypeDescription?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentCategoryId?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  toInstrumentCategoryId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentCategoryName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  toInstrumentCategoryName?: string;


  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  instrumentCategoryDescription?: string;

  @property({
    type: 'string',
    es: {type: 'text', index: false}
  })
  toInstrumentCategoryDescription?: string;

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
  systematicRegistrationNumber?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  currentInstallmentNo?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  availableDates?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  toScheme?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  orderTime?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  orderDate?: Date;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  frequencyDay?: number;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  primaryAMCCode?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  serviceProviderBankAccountNumber?: string;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  exportOrderDate?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SystematicMethodsReporting>) {
    super(data);
  }
}

export interface SystematicMethodsReportingRelations {
  // describe navigational properties here
}

export type SystematicMethodsReportingWithRelations = SystematicMethodsReporting & SystematicMethodsReportingRelations;
