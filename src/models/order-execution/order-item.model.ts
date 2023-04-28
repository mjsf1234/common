import {belongsTo, hasMany, hasOne, model, property} from '@loopback/repository';
import {
  BaseSQLModel,
  Currency,
  Instrument,
  ServiceProviderAccount,
  SystematicMethod,
  TransactionType,
  PaymentDetails,
  Rta,
  PaymentConfirmationFeedLog,
  TransactionTwoFa
} from '..';
import {Transaction} from '../transaction';
import {Goal} from './goal.model';
import {Order} from './order.model';
import {TransactionFeedLog} from './transaction-feed-log.model';
import {TransactionalDataRefreshingQueueMessageEventType} from '../../queues';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_unique_id: {keys: {unique_id: 1}, options: {unique: false}},
      idx_reverse_feed_unique_hash: {keys: {reverse_feed_unique_hash: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'order_item'},
    plural: 'OrderItems',
    foreignKeys: {
      fkidx_order_item_order_fk_id_order: {
        name: 'fkidx_order_item_order_fk_id_order',
        foreignKey: 'fk_id_order',
        entityKey: 'id',
        entity: 'Order'
      },
      fkidx_order_item_transaction_type_fk_id_transaction_type: {
        name: 'fkidx_order_item_transaction_type_fk_id_transaction_type',
        foreignKey: 'fk_id_transaction_type',
        entityKey: 'id',
        entity: 'TransactionType'
      },
      fkidx_order_item_instrument_fk_id_instrument: {
        name: 'fkidx_order_item_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_order_item_instrument_fk_id_secondary_instrument: {
        name: 'fkidx_order_item_instrument_fk_id_secondary_instrument',
        foreignKey: 'fk_id_secondary_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_order_item_goal_fk_id_goal: {
        name: 'fkidx_order_item_goal_fk_id_goal',
        foreignKey: 'fk_id_goal',
        entityKey: 'id',
        entity: 'Goal'
      },
      fkidx_order_item_secondary_goal_fk_id_secondary_goal: {
        name: 'fkidx_order_item_secondary_goal_fk_id_secondary_goal',
        foreignKey: 'fk_id_secondary_goal',
        entityKey: 'id',
        entity: 'Goal'
      },
      fkidx_order_item_systematic_method_fk_id_systematic_method: {
        name: 'fkidx_order_item_systematic_method_fk_id_systematic_method',
        foreignKey: 'fk_id_systematic_method',
        entityKey: 'id',
        entity: 'SystematicMethod'
      },
      fkidx_order_item_service_provider_account_fk_id_spa: {
        name: 'fkidx_order_item_service_provider_account_fk_id_spa',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_order_item_currency_fk_id_currency: {
        name: 'fkidx_order_item_currency_fk_id_currency',
        foreignKey: 'fk_id_currency',
        entityKey: 'id',
        entity: 'Currency'
      },
      fkidx_order_item_transaction_two_fa_fk_id_transaction_two_fa_sms: {
        name: 'fkidx_order_item_fa_fk_id_transaction_two_fa_sms',
        foreignKey: 'fk_id_transaction_two_fa_sms',
        entityKey: 'id',
        entity: 'TransactionTwoFa'
      },
      fkidx_order_item_transaction_two_fa_fk_id_transaction_two_fa_email: {
        name: 'fkidx_order_item_fa_fk_id_transaction_two_fa_email',
        foreignKey: 'fk_id_transaction_two_fa_email',
        entityKey: 'id',
        entity: 'TransactionTwoFa'
      }
    },
    hiddenProperties: [],
    syncRefresher: {
      eventType: TransactionalDataRefreshingQueueMessageEventType.ORDER_ITEM_REPLICATION_BY_ORDER_ITEM_IDS,
      params: {
        orderItemIds: 'id',
        type: 'Array'
      }
    }
  }
})
export class OrderItem extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'line_number', dataType: 'INT', nullable: 'N'}
  })
  lineNumber: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  uniqueId?: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'order_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  orderDate: Date;

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
    type: 'string',
    postgresql: {columnName: 'rta_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  rtaCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'external_service_provider_account', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  externalServiceProviderAccount?: string;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'TRANSACTIONSTATUS',
    postgresql: {columnName: 'order_item_status', dataType: 'SMALLINT', nullable: 'N'}
  })
  orderItemStatus: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'SERVICEPROVIDERACCOUNTOPTIONS',
    postgresql: {columnName: 'service_provider_account_option', dataType: 'SMALLINT', nullable: 'Y'}
  })
  serviceProviderAccountOption?: number;

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
    optionLabelIdentifier: 'SYSTEMATICMETHODFREQUENCY',
    postgresql: {columnName: 'systematic_method_frequency', dataType: 'SMALLINT', nullable: 'Y'}
  })
  systematicMethodFrequency?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'number_of_installments', nullable: 'Y', dataType: 'SMALLINT'}
  })
  numberOfInstallments?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'systematic_start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  systematicStartDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  quantity?: number;

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
    type: 'number',
    postgresql: {columnName: 'committed_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  committedAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'accrued_interest', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  accruedInterest?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'stamp_duty', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  stampDuty?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'service_provider_reference_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  serviceProviderReferenceNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'BSEPURCHASETYPE',
    postgresql: {columnName: 'bse_purchase_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  bsePurchaseType?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'BSEREDEMPTIONTYPE',
    postgresql: {columnName: 'bse_redemption_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  bseRedemptionType?: number;

  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'is_all_units', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isAllUnits: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_reconciled', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isReconciled: boolean;

  @property({
    type: 'date',
    postgresql: {columnName: 'confirmed_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  confirmedDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'confirmed_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  confirmedQuantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'confirmed_price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  confirmedPricePerUnit?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'confirmed_service_provider_account', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  confirmedServiceProviderAccount?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'confirmed_total_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  confirmedTotalAmount?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_order_remarks', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  bseOrderRemarks?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_order_status', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  bseOrderStatus?: string;

  @property({
    type: 'string',
    optionLabelIdentifier: 'ORDERMEDIUM',
    postgresql: {columnName: 'order_medium', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  orderMedium?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'value_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  valueDate?: Date;

  @property({
    type: 'number',
    optionLabelIdentifier: 'TRANSACTIONGENERATIONSTATUS',
    postgresql: {columnName: 'order_item_sent_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  orderItemSentStatus: number;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: any;

  @property({
    type: 'number',
    optionLabelIdentifier: 'PAYMENTCONFIRMATIONTOAMCSTATUS',
    postgresql: {columnName: 'payment_confirmation_to_amc_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  paymentConfirmationToAMCStatus: number;

  @property({
    type: 'number',
    default: 1,
    optionLabelIdentifier: 'ORDERITEMSOURCE',
    postgresql: {columnName: 'order_item_source', dataType: 'SMALLINT', nullable: 'Y'}
  })
  orderItemSource?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'registered_email', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  registeredEmail?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'registered_mobile', nullable: 'Y', dataType: 'VARCHAR', dataLength: 50}
  })
  registeredMobile?: string;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_nominee_document_flag', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isNomineeDocumentGenerated?: boolean;

  @belongsTo(
    () => Order,
    {
      name: 'order',
      keyFrom: 'orderId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_order', dataType: 'INT', nullable: 'Y'}
    }
  )
  orderId: number;

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

  @belongsTo(
    () => Goal,
    {
      name: 'secondaryGoal',
      keyFrom: 'secondaryGoalId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_secondary_goal', dataType: 'INT', nullable: 'Y'}
    }
  )
  secondaryGoalId?: number;

  @belongsTo(
    () => Rta,
    {
      name: 'rta',
      keyFrom: 'rtaId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y'}
    }
  )
  rtaId?: number;

  @belongsTo(
    () => TransactionFeedLog,
    {
      name: 'txnFeedLog',
      keyFrom: 'txnFeedLogId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_txn_feed_log', dataType: 'INT', nullable: 'Y'}
    }
  )
  txnFeedLogId?: number;

  @hasMany(() => Transaction, {keyTo: 'orderItemId'})
  transaction?: Transaction;

  @hasOne(() => PaymentDetails, {keyTo: 'orderItemId'})
  paymentDetails?: PaymentDetails;

  @belongsTo(
    () => PaymentConfirmationFeedLog,
    {
      name: 'paymentConfirmationFeedLog',
      keyFrom: 'paymentConfirmationFeedLogId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_payment_confirmation_feed_log', dataType: 'INT', nullable: 'Y'}
    }
  )
  'paymentConfirmationFeedLogId': number;

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

  constructor(data?: Partial<OrderItem>) {
    super(data);
  }
}

export interface OrderItemRelations {
  // describe navigational properties here
}

export type OrderItemWithRelations = OrderItem & OrderItemRelations;
