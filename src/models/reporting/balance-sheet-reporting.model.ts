import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'BalanceSheetReportings',
    indexes: {},
    elasticsearch: {index: 'balancesheetreporting', type: 'gain'},
    hiddenProperties: []
  }
})
export class BalanceSheetReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  clientId?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  accountNumber?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  permanentCity?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  correspondenceCity?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  name?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  riskProfileName?: string;

  @property({
    type: 'boolean',
    default: false,
    es: {type: 'boolean'}
  })
  isCASUploaded?: boolean;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  totalNoOfGoals?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  equityAum?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  aum?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  debtArbitrageAum?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  liquidOvernightAum?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  noOfMfSchemes?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  tiDate?: Date | null;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  toDate?: Date | null;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  totalNoOfHoldingGoals?: number;

  @property({
    type: 'array',
    es: {type: 'nested', properties: {amount: {type: 'double'}, when: {type: 'date'}}},
    itemType: 'object'
  })
  itemsPendingInCart?: object[];

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  accountOpeningDate?: Date;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  gender?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  age?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  investorType?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  employerName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  employerCategory?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  occupation?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  sourceOfFunds?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  grossAnnualIncome?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  politicalExposure?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  grossMonthlyIncome?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  countryOfTaxResidency?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  taxIdentificationNumber?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  taxStatus?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  holdingType?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BalanceSheetReporting>) {
    super(data);
  }
}

export interface BalanceSheetReportingRelations {
  // describe navigational properties here
}

export type BalanceSheetReportingWithRelations = BalanceSheetReporting & BalanceSheetReportingRelations;
