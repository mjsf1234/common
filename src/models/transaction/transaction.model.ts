import {belongsTo, model, property} from '@loopback/repository';
import {Account, BaseSQLModel, Currency, Goal, Instrument, OrderItem, TransactionType} from '..';
import {ServiceProviderAccount} from './service-provider-account.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_status: {keys: {status: 1}, options: {unique: false}},
      idx_reverse_feed_unique_hash: {keys: {reverse_feed_unique_hash: 1}, options: {unique: false}},
      idx_is_active_is_dummy_status_fk_id_spa: {
        keys: {is_active: 1, is_dummy: 1, status: 1, fk_id_service_provider_account: 1},
        options: {unique: false}
      },
      idx_is_active_status_fk_id_spa: {
        keys: {is_active: 1, status: 1, fk_id_service_provider_account: 1},
        options: {unique: false}
      },
      idx_is_active_is_ca_applied_transaction_fk_id_account: {
        keys: {is_active: 1, is_ca_applied_transaction: 1, fk_id_account: 1},
        options: {unique: false}
      }
    },
    postgresql: {tableName: 'transaction'},
    plural: 'Transactions',
    foreignKeys: {
      fkidx_transaction_order_item_fk_id_order_item: {
        name: 'fkidx_transaction_order_item_fk_id_order_item',
        foreignKey: 'fk_id_order_item',
        entityKey: 'id',
        entity: 'OrderItem'
      },
      fkidx_transaction_transaction_type_fk_id_transaction_type: {
        name: 'fkidx_transaction_transaction_type_fk_id_transaction_type',
        foreignKey: 'fk_id_transaction_type',
        entityKey: 'id',
        entity: 'TransactionType'
      },
      fkidx_transaction_instrument_fk_id_instrument: {
        name: 'fkidx_transaction_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_transaction_secondary_instrument_fk_id: {
        name: 'fkidx_transaction_secondary_instrument_fk_id',
        foreignKey: 'fk_id_secondary_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_transaction_account_fk_id_account: {
        name: 'fkidx_transaction_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_transaction_service_provider_account_fk_id_spa: {
        name: 'fkidx_transaction_service_provider_account_fk_id_spa',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_transaction_currency_fk_id_currency: {
        name: 'fkidx_transaction_currency_fk_id_currency',
        foreignKey: 'fk_id_currency',
        entityKey: 'id',
        entity: 'Currency'
      },
      fkidx_transaction_goal_fk_id_goal: {
        name: 'fkidx_transaction_goal_fk_id_goal',
        foreignKey: 'fk_id_goal',
        entityKey: 'id',
        entity: 'Goal'
      }
    },
    hiddenProperties: []
  }
})
export class Transaction extends BaseSQLModel {
  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_dummy', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isDummy: boolean;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_remapped_to_account', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isRemappedToAccount?: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'reverse_feed_unique_hash', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  reverseFeedUniqueHash?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  bosCode?: string;

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
    required: true,
    postgresql: {columnName: 'transaction_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  transactionDate: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'order_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  orderDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'acquisition_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  acquisitionDate?: Date;

  @property({
    type: 'number',
    required: true,
    default: 3,
    optionLabelIdentifier: 'TRANSACTIONSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'TRANSACTIONSUBTYPE',
    postgresql: {columnName: 'transaction_sub_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  transactionSubType: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  quantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'opening_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  openingQuantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'closing_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  closingQuantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  pricePerUnit?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'total_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  totalAmount: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'brokerage_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  brokerageAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'accrued_interest', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  accruedInterest?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'opening_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  openingAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'closing_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  closingAmount?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'service_provider_reference_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  serviceProviderReferenceNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_transaction_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  userTransactionNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bank_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  bankName?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'bank_account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  bankAccountNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remark', dataType: 'TEXT', nullable: 'Y'}
  })
  remark?: string;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_transferred', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isTransferred?: boolean;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'is_metro_area', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isMetroArea?: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_uploaded', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isUploaded: boolean;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'TRANSACTIONSOURCE',
    postgresql: {columnName: 'source', dataType: 'SMALLINT', nullable: 'N'}
  })
  source: number;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_ca_applied_transaction', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isCAAppliedTransaction: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'batch_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  batchCode?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'ORDERRECEIPTMODE',
    postgresql: {columnName: 'order_receipt_mode', dataType: 'SMALLINT', nullable: 'Y'}
  })
  orderReceiptMode?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'committed_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  committedAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'adjustment_factor', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  adjustmentFactor?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'STOPLOSSTRIGGERPRICE',
    postgresql: {columnName: 'stop_loss_trigger_price', dataType: 'SMALLINT', nullable: 'Y'}
  })
  stopLossTriggerPrice?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'stop_loss_booking_profit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  stopLossBookingProfit?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'stamp_duty', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  stampDuty?: number;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'revenue_applicable', dataType: 'BOOLEAN', nullable: 'N'}
  })
  revenueApplicable?: boolean;


  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'nav_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  navDate: Date;

  @belongsTo(
    () => OrderItem,
    {
      name: 'orderItem',
      keyFrom: 'orderItemId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_order_item', dataType: 'INT', nullable: 'Y'}
    }
  )
  orderItemId?: number;

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
  accountId?: number;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
