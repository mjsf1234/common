import {belongsTo, model, property, hasMany, hasOne} from '@loopback/repository';
import {
  Account,
  BaseSQLModel,
  Currency,
  Goal,
  Instrument,
  Mandate,
  ServiceProviderAccount,
  OrderItem,
  SystematicMethodStatusHistory
} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'systematic_method'},
    plural: 'SystematicMethods',
    foreignKeys: {
      fkidx_systematic_method_account_fk_id_account: {
        name: 'fkidx_systematic_method_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_systematic_method_mandate_fk_id_mandate: {
        name: 'fkidx_systematic_method_mandate_fk_id_mandate',
        foreignKey: 'fk_id_mandate',
        entityKey: 'id',
        entity: 'Mandate'
      },
      fkidx_systematic_method_service_provider_account_fk_id_spa: {
        name: 'fkidx_systematic_method_service_provider_account_fk_id_spa',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_systematic_method_goal_fk_id_goal: {
        name: 'fkidx_systematic_method_goal_fk_id_goal',
        foreignKey: 'fk_id_goal',
        entityKey: 'id',
        entity: 'Goal'
      },
      fkidx_systematic_method_currency_fk_id_currency: {
        name: 'fkidx_systematic_method_currency_fk_id_currency',
        foreignKey: 'fk_id_currency',
        entityKey: 'id',
        entity: 'Currency'
      },
      fkidx_systematic_method_instrument_fk_id_instrument: {
        name: 'fkidx_systematic_method_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: []
  }
})
export class SystematicMethod extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'SYSTEMATICMETHODFREQUENCY',
    postgresql: {columnName: 'frequency', dataType: 'SMALLINT', nullable: 'N'}
  })
  frequency: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'frequency_day', dataType: 'INT', nullable: 'Y'}
  })
  frequencyDay?: number;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'SYSTEMATICMETHODTYPE',
    postgresql: {columnName: 'type', dataType: 'SMALLINT', nullable: 'N'}
  })
  type: number;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'SYSTEMATICMETHODSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'no_of_transactions', dataType: 'INT', nullable: 'N'}
  })
  transactionCount?: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  startDate: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  endDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'first_execution_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  firstExecutionDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'next_execution_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  nextExecutionDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  quantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  amount?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'systematic_registration_number', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  systematicRegistrationNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  nseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bseCode?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'previous_execution_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  previousExecutionDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'current_installment_number', dataType: 'INT', nullable: 'Y'}
  })
  currentInstallmentNo?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'available_dates', dataType: 'TEXT', nullable: 'Y'}
  })
  availableDates?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'goal_type_label', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  goalTypeLabel?: string;

  //SS -  Corrected name of field and type to INT
  /*
  @property({
    type: 'number',
    postgresql: {columnName: 'from_scheme', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
    //postgresql: {columnName: 'from_scheme', dataType: 'INT', nullable: 'Y'}
  })
  fromScheme?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'to_scheme', dataType: 'VARCHAR',dataLength: 255, nullable: 'Y'}
    //postgresql: {columnName: 'to_schema', dataType: 'INT', nullable: 'Y'}
  })
  toScheme?: string;


  @belongsTo(
    () => Instrument,
    {
      name: 'fromInstrument',
      keyFrom: 'instrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  fromScheme?: number;
*/
  @belongsTo(
    () => Instrument,
    {
      name: 'toInstrument',
      keyFrom: 'toScheme',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'to_scheme', dataType: 'INT', nullable: 'Y'}
    }
  )
  toScheme?: number;

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

  @belongsTo(
    () => Mandate,
    {
      name: 'mandate',
      keyFrom: 'mandateId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_mandate', dataType: 'INT', nullable: 'Y'}
    }
  )
  mandateId?: number;

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
  serviceProviderAccountId?: number;

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
    () => Goal,
    {
      name: 'goal',
      keyFrom: 'goalId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_goal', dataType: 'INT', nullable: 'Y'}
    }
  )
  goalId?: number;

  @hasMany(() => OrderItem, {keyTo: 'systematicMethodId'})
  orderItems?: OrderItem[];

  @hasMany(() => SystematicMethodStatusHistory, {keyTo: 'systematicMethodId'})
  statusHistories?: SystematicMethodStatusHistory[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SystematicMethod>) {
    super(data);
  }
}

export interface SystematicMethodRelations {
  // describe navigational properties here
}

export type SystematicMethodWithRelations = SystematicMethod & SystematicMethodRelations;
