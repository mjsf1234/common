import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Instrument, ServiceProviderAccount, TransactionTwoFa, TransactionType} from '..';
import {Cart} from './cart.model';
import {Goal} from './goal.model';
import {SystematicMethod} from '../transaction';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'cart_item'},
    plural: 'CartItems',
    foreignKeys: {
      fkidx_cart_item_cart_fk_id_cart: {
        name: 'fkidx_cart_item_cart_fk_id_cart',
        foreignKey: 'fk_id_cart',
        entityKey: 'id',
        entity: 'Cart'
      },
      fkidx_cart_item_instrument_fk_id_instrument: {
        name: 'fkidx_cart_item_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_cart_item_instrument_fk_id_instrument_secondary: {
        name: 'fkidx_cart_item_instrument_fk_id_instrument_secondary',
        foreignKey: 'fk_id_secondary_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_cart_item_goal_fk_id_goal: {
        name: 'fkidx_cart_item_goal_fk_id_goal',
        foreignKey: 'fk_id_goal',
        entityKey: 'id',
        entity: 'Goal'
      },
      fkidx_cart_item_transaction_type_fk_id_transaction_type: {
        name: 'fkidx_cart_item_transaction_type_fk_id_transaction_type',
        foreignKey: 'fk_id_transaction_type',
        entityKey: 'id',
        entity: 'TransactionType'
      },
      fkidx_cart_item_spa_fk_id_service_provider_account: {
        name: 'fkidx_cart_item_spa_fk_id_service_provider_account',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_cart_item_systematic_method_fk_id_goal: {
        name: 'fkidx_cart_item_systematic_method_fk_id_systematic_method',
        foreignKey: 'fk_id_systematic_method',
        entityKey: 'id',
        entity: 'SystematicMethod'
      },
      fkidx_cart_transaction_two_fa_fk_id_transaction_two_fa_sms: {
        name: 'fkidx_cart_transaction_two_fa_fk_id_transaction_two_fa_sms',
        foreignKey: 'fk_id_transaction_two_fa_sms',
        entityKey: 'id',
        entity: 'TransactionTwoFa'
      },
      fkidx_cart_transaction_two_fa_fk_id_transaction_two_fa_email: {
        name: 'fkidx_cart_transaction_two_fa_fk_id_transaction_two_fa_email',
        foreignKey: 'fk_id_transaction_two_fa_email',
        entityKey: 'id',
        entity: 'TransactionTwoFa'
      }
    },
    hiddenProperties: [
      'fk_id_cart',
      'fk_id_instrument',
      'fk_id_secondary_instrument',
      'fk_id_goal',
      'fk_id_transaction_type',
      'fk_id_service_provider_account'
    ]
  }
})
export class CartItem extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'line_number', dataType: 'INT', nullable: 'N'}
  })
  lineNumber: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'frequency', dataType: 'INT', nullable: 'Y'}
  })
  frequency?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'frequency_day', dataType: 'INT', nullable: 'Y'}
  })
  frequencyDay?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_date_for_sip', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  startDateForSip?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_date_for_sip', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  endDateForSip?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  quantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'transaction_subtype', dataType: 'INT', nullable: 'N'}
  })
  transactionSubType?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'external_service_provider_account', dataType: 'VARCHAR', nullable: 'Y', dataLength: 30}
  })
  externalServiceProviderAccount?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'price_per_unit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  pricePerUnit?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'total_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  totalAmount?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'installments', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  transactionCount?: number;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: any;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_all_units', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isAllUnits: boolean;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_stop_sip', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isStopSip?: boolean;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_rebalancing_item', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isRebalancingItem?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_valid_item', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isValidItem?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_specific_valid', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSpecificValid?: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'validation_message', dataType: 'VARCHAR', nullable: 'Y', dataLength: 150}
  })
  validationMessage?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'specific_validation_message', dataType: 'VARCHAR', nullable: 'Y', dataLength: 150}
  })
  specificValidationMessage?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'verified_otp_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  verifiedOtpDate?: Date | null;

  @belongsTo(
    () => Cart,
    {
      name: 'cart',
      keyFrom: 'cartId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_cart', dataType: 'INT', nullable: 'Y'}
    }
  )
  cartId: number;

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
      name: 'secondaryInstrument',
      keyFrom: 'secondaryInstrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_secondary_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  secondaryInstrumentId?: number;

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
    () => TransactionType,
    {
      name: 'transactionType',
      keyFrom: 'transactionTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_transaction_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  transactionTypeId: number;

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

  //added for case where we shall do stop SIP
  @belongsTo(
    () => SystematicMethod,
    {
      name: 'systematicMethod',
      keyFrom: 'systematicMethodId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_systematic_method', dataType: 'INT', nullable: 'Y'}
    }
  )
  systematicMethodId?: number;

  @belongsTo(
    () => TransactionTwoFa,
    {
      name: 'transactionTwoFaSms',
      keyFrom: 'transactionTwoFaSmsId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_transaction_two_fa_sms', dataType: 'INT', nullable: 'Y'}
    }
  )
  transactionTwoFaSmsId?: number;

  @belongsTo(
    () => TransactionTwoFa,
    {
      name: 'transactionTwoFaEmail',
      keyFrom: 'transactionTwoFaEmailId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_transaction_two_fa_email', dataType: 'INT', nullable: 'Y'}
    }
  )
  transactionTwoFaEmailId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CartItem>) {
    super(data);
  }
}

export interface CartItemRelations {
  // describe navigational properties here
}

export type CartItemWithRelations = CartItem & CartItemRelations;
