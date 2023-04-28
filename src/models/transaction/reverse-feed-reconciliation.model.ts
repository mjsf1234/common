import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Instrument, OrderItem, ReverseFeed, ServiceProvider, Transaction, TransactionType} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_reverse_feed_unique_hash: {keys: {reverse_feed_unique_hash: 1}, options: {unique: false}},
      idx_is_eligible_for_account_remapping_is_reversal: {
        keys: {is_eligible_for_account_remapping: 1, is_reversal: 1},
        options: {unique: false}
      }
    },
    postgresql: {tableName: 'reverse_feed_reconciliation'},
    plural: 'ReverseFeedReconciliations',
    foreignKeys: {
      fkidx_reverse_feed_reconciliation_reverse_feed_fk_id_rf: {
        name: 'fkidx_reverse_feed_reconciliation_reverse_feed_fk_id_rf',
        foreignKey: 'fk_id_reverse_feed',
        entityKey: 'id',
        entity: 'ReverseFeed'
      },
      fkidx_reverse_feed_reconciliation_transaction_fk_id_transaction: {
        name: 'fkidx_reverse_feed_reconciliation_transaction_fk_id_transaction',
        foreignKey: 'fk_id_transaction',
        entityKey: 'id',
        entity: 'Transaction'
      },
      fkidx_reverse_feed_reconciliation_instrument_fk_id_instrument: {
        name: 'fkidx_reverse_feed_reconciliation_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_reverse_feed_reconciliation_service_provider_fk_id_sp: {
        name: 'fkidx_reverse_feed_reconciliation_service_provider_fk_id_sp',
        foreignKey: 'fk_id_service_provider',
        entityKey: 'id',
        entity: 'ServiceProvider'
      },
      fkidx_reverse_feed_reconciliation_transaction_type_fk_id: {
        name: 'fkidx_reverse_feed_reconciliation_transaction_type_fk_id',
        foreignKey: 'fk_id_transaction_type',
        entityKey: 'id',
        entity: 'TransactionType'
      },
      fkidx_reverse_feed_reconciliation_order_item_fk_id_order_item: {
        name: 'fkidx_reverse_feed_reconciliation_order_item_fk_id_order_item',
        foreignKey: 'fk_id_order_item',
        entityKey: 'id',
        entity: 'OrderItem'
      }
    },
    hiddenProperties: []
  }
})
export class ReverseFeedReconciliation extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'REVERSEFEEDRECONCILIATIONSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_eligible_for_account_remapping', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isEligibleForAccountRemapping?: boolean;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'reverse_feed_unique_hash', dataType: 'VARCHAR', dataLength: 1000, nullable: 'N'}
  })
  reverseFeedUniqueHash: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'service_provider_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  serviceProviderCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'service_provider_account_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  serviceProviderAccountNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'old_service_provider_account_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  oldsServiceProviderAccountNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'sequence_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  sequenceNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'systematic_registration_number', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  systematicRegistrationNumber?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'systematic_registration_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  systematicRegistrationDate?: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'euin', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  euin?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'instrument_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  instrumentCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'isin_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  isinCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'target_instrument_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  targetInstrumentCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'switch_flag', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  switchFlag?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'instrument_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  instrumentName?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'investor_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  investorName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'transaction_type_text', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  transactionTypeText?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'transaction_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  transactionNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'reversal_transaction_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  reversalTransactionNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'transaction_mode', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  transactionMode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'transaction_status', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  transactionStatus?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  userCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_transaction_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  userTransactionNumber?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'transaction_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  transactionDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'order_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  orderDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'post_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  postDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  pricePerUnit?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  quantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'total_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'total_reversal_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalReversalAmount?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'broker_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  brokerCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'sub_broker_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  subBrokerCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'transaction_nature', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  transactionNature?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'tax_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  taxAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'total_tax_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  totalTaxAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'securities_transaction_tax_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  securitiesTransactionTaxAmount?: number;

  @property({
    type: 'number',
    default: 1,
    optionLabelIdentifier: 'TRANSACTIONSUBTYPE',
    postgresql: {columnName: 'transaction_sub_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  transactionSubType?: number;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_reversal', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isReversal: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'transaction_sub_type_text', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  transactionSubTypeText?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'system_remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  systemRemarks?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'location', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  location?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'instrument_type', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  instrumentType?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'investor_type', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  investorType?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'load', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  load?: number;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'pan', dataType: 'VARCHAR', nullable: 'Y', dataLength: 10}
  })
  pan?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'reinvestment_flag', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255}
  })
  reinvestmentFlag?: string;

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
    type: 'object',
    default: {},
    required: true,
    postgresql: {columnName: 'mapping_data', dataType: 'TEXT', nullable: 'N'}
  })
  mappingData: object;

  @property({
    type: 'number',
    postgresql: {columnName: 'stamp_duty', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  stampDuty?: number;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'nav_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  navDate: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'trxn_mode', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  trxnMode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'atm_card_status', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  atmCardStatus?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'atm_card_remarks', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  atmCardRemarks?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'city_category', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  cityCategory?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'pur_amount', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  purAmount?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'pur_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  purDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'fund_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  fundDate?: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'ptr_transaction_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  ptrTransactionNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'load_percentage', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  loadPercentage?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'pur_units', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  purUnits?: number;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'guardian_pan', dataType: 'VARCHAR', nullable: 'Y', dataLength: 10}
  })
  guardianPan?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'ter_category', dataType: 'VARCHAR', nullable: 'Y', dataLength: 10}
  })
  terCategory?: string;

  @belongsTo(
    () => ReverseFeed,
    {
      name: 'reverseFeed',
      keyFrom: 'reverseFeedId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_reverse_feed', dataType: 'INT', nullable: 'Y'}
    }
  )
  reverseFeedId: number;

  @belongsTo(
    () => Transaction,
    {
      name: 'transaction',
      keyFrom: 'transactionId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_transaction', dataType: 'INT', nullable: 'Y'}
    }
  )
  transactionId?: number;

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
    () => ServiceProvider,
    {
      name: 'serviceProvider',
      keyFrom: 'serviceProviderId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y'}
    }
  )
  serviceProviderId?: number;

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
  transactionTypeId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ReverseFeedReconciliation>) {
    super(data);
  }
}

export interface ReverseFeedReconciliationRelations {
  // describe navigational properties here
}

export type ReverseFeedReconciliationWithRelations = ReverseFeedReconciliation & ReverseFeedReconciliationRelations;
