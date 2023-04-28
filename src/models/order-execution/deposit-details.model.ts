import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Instrument, ServiceProviderAccount, Account, Currency} from '..';

@model({
  settings: {
    indexes: {},
    postgresql: {tableName: 'deposit_details'},
    plural: 'DepositDetails',
    foreignKeys: {
      fkidx_deposit_details_instrument_fk_id_instrument: {
        name: 'fkidx_deposit_details_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_deposit_details_spa_fk_id_spa: {
        name: 'fkidx_deposit_details_spa_fk_id_spa',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_deposit_details_account_fk_id_account: {
        name: 'fkidx_deposit_details_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      }
    },
    hiddenProperties: ['fk_id_instrument', 'fk_id_service_provider_account']
  }
})
export class DepositDetails extends BaseSQLModel {
  @property({
    type: 'number',

    postgresql: {columnName: 'type', dataType: 'INT', nullable: 'Y'}
  })
  type?: number;

  @property({
    type: 'number',

    postgresql: {columnName: 'mode', dataType: 'INT', nullable: 'Y'}
  })
  mode?: number;

  @property({
    type: 'date',

    postgresql: {columnName: 'maturity_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  maturityDate?: Date;

  @property({
    type: 'string',

    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  name?: string;

  @property({
    type: 'number',

    postgresql: {columnName: 'invested_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  investedValue?: number;

  @property({
    type: 'number',

    postgresql: {columnName: 'total_current_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalCurrentValue?: number;

  @property({
    type: 'number',

    postgresql: {columnName: 'tenure_months', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  tenureMonths?: number;

  @property({
    type: 'number',

    postgresql: {columnName: 'tenure_years', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  tenureYears?: number;

  @property({
    type: 'number',

    postgresql: {columnName: 'tenure_days', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  tenureDays?: number;

  @property({
    type: 'number',

    postgresql: {columnName: 'interest_rate', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  interestRate?: number;

  @property({
    type: 'date',

    postgresql: {columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  startDate?: Date;

  @property({
    type: 'string',

    postgresql: {columnName: 'frequency', dataType: 'SMALLINT', nullable: 'Y'}
  })
  frequency?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'ACCRUALFREQUENCY',
    postgresql: {columnName: 'interest_frequency', dataType: 'INT', nullable: 'Y'}
  })
  interestFrequency?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'ACCRUALFREQUENCY',
    postgresql: {columnName: 'compounding_frequency', dataType: 'INT', nullable: 'Y'}
  })
  compoundingFrequency?: number;

  @property({
    type: 'number',

    postgresql: {columnName: 'maturity_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  maturityAmount?: number;

  @property({
    type: 'number',

    postgresql: {columnName: 'installment_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  installmentAmount?: number;

  @property({
    type: 'date',

    postgresql: {columnName: 'installment_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  installmentDate?: Date;

  @property({
    type: 'number',
    optionLabelIdentifier: 'DEPOSITACCOUNTSTATUS',
    postgresql: {columnName: 'status', dataType: 'INT', nullable: 'Y'}
  })
  status?: number;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_sell_allowed', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSellAllowed?: boolean;

  @property({
    type: 'number',

    postgresql: {columnName: 'sub_type', dataType: 'INT', nullable: 'Y'}
  })
  subType?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'DEPOSITDETAILSACTIONONMATURITY',
    postgresql: {columnName: 'action_on_maturity', dataType: 'INT', nullable: 'Y'}
  })
  actionOnMaturity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'total_interest_payable', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalInterestPayable?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'total_installments', dataType: 'INT', nullable: 'Y'}
  })
  totalInstallments?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'total_redemption_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalRedemptionAmount?: number;

  @property({
    type: 'date',

    postgresql: {columnName: 'redemption_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  redemptionDate?: Date;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'current_installment', dataType: 'INT', nullable: 'Y'}
  })
  currentInstallment?: number;

  @property({
    type: 'number',

    postgresql: {columnName: 'payout_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  payoutAmount?: number;

  @property({
    type: 'date',

    postgresql: {columnName: 'last_renewal_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  lastRenewalDate?: Date;

  @property({
    type: 'object',

    postgresql: {columnName: 'bank_details', dataType: 'TEXT', nullable: 'Y'}
  })
  bankDetails?: object;

  @property({
    type: 'object',

    postgresql: {columnName: 'nominee_details', dataType: 'TEXT', nullable: 'Y'}
  })
  nomineeDetails?: object;

  @property({
    type: 'object',

    postgresql: {columnName: 'user_kyc_details', dataType: 'TEXT', nullable: 'Y'}
  })
  userKycDetails?: object;

  @property({
    type: 'number',

    postgresql: {columnName: 'journey_state', dataType: 'INT', nullable: 'Y'}
  })
  journeyState?: number;

  @property({
    type: 'string',

    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  Remarks?: String;

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
  instrumentId?: number;

  @belongsTo(
    () => ServiceProviderAccount,
    {
      name: 'serviceProviderAccount',
      keyFrom: 'serviceProviderAccountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  serviceProviderAccountId: number;

  @belongsTo(
    () => Currency,
    {
      name: 'currency',
      keyFrom: 'currencyId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_currency', dataType: 'INT', nullable: 'Y'}
    }
  )
  currencyId: number;

  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  accountId: number;

  [prop: string]: any;

  constructor(data?: Partial<DepositDetails>) {
    super(data);
  }
}
export interface DepositDetailsRelations {
  // describe navigational properties here
}

export type DepositDetailsWithRelations = DepositDetails & DepositDetailsRelations;
