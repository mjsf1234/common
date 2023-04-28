import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Currency, Instrument, Product, ServiceProviderAccount, Transaction} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_sell_date: {keys: {sell_date: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'gain'},
    plural: 'Gains',
    foreignKeys: {
      fkidx_gain_service_provider_account_fk_id_spa: {
        name: 'fkidx_gain_service_provider_account_fk_id_spa',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_gain_instrument_fk_id_instrument: {
        name: 'fkidx_gain_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_gain_currency_fk_id_currency: {
        name: 'fkidx_gain_currency_fk_id_currency',
        foreignKey: 'fk_id_currency',
        entityKey: 'id',
        entity: 'Currency'
      },
      fkidx_gain_transaction_fk_id_buy_transaction: {
        name: 'fkidx_gain_transaction_fk_id_buy_transaction',
        foreignKey: 'fk_id_buy_transaction',
        entityKey: 'id',
        entity: 'Transaction'
      },
      fkidx_gain_transaction_fk_id_sell_transaction: {
        name: 'fkidx_gain_transaction_fk_id_sell_transaction',
        foreignKey: 'fk_id_sell_transaction',
        entityKey: 'id',
        entity: 'Transaction'
      },
      fkidx_gain_transaction_fk_id_product: {
        name: 'fkidx_gain_transaction_fk_id_product',
        foreignKey: 'fk_id_product',
        entityKey: 'id',
        entity: 'Product'
      }
    },
    hiddenProperties: [
      'fk_id_service_provider_account',
      'fk_id_instrument',
      'fk_id_currency',
      'fk_id_buy_transaction',
      'fk_id_sell_transaction',
      'fk_id_product'
    ]
  }
})
export class Gain extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  uniqueId?: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'buy_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  buyDate: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'buy_financial_year', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  buyFinancialYear?: string;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'buy_indexation_cost', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  buyIndexationCost?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'indexed_cost', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  indexedCost?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'price_per_unit_grandfathering_date', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  pricePerUnitAsOnGrandfatheringDate?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'nav', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  nav?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'adjusted_purchase_cost', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  adjustedPurchaseCost?: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'sell_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  sellDate: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'sell_financial_year', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  sellFinancialYear?: string;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'sell_indexation_cost', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  sellIndexationCost?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'holding_days', dataType: 'INT', nullable: 'N'}
  })
  holdingDays: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'quantity', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  quantity: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'average_buy_price_per_unit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  averageBuyPricePerUnit: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'average_sell_price_per_unit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  averageSellPricePerUnit: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'total_buy_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  totalBuyAmount: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'total_sell_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  totalSellAmount: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'short_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  shortTermCapitalGain: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'long_term_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  longTermCapitalGain: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'business_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  businessCapitalGain?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'total_capital_gain', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  totalCapitalGain?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'total_capital_gain_with_indexation', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  totalCapitalGainWithIndexation?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'difference_due_to_indexation', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 10}
  })
  differenceDueToIndexation?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'CAPITALGAINTYPE',
    postgresql: {columnName: 'capital_gain_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  capitalGainType?: number;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'calculations', dataType: 'TEXT', nullable: 'Y'}
  })
  calculations?: object;

  @property({
    type: 'number',
    postgresql: {columnName: 'effective_cost', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10}
  })
  effectiveCost?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'price_as_on_31jan2018', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 10}
  })
  priceAsOn31Jan2018?: number;

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
    () => Transaction,
    {
      name: 'buyTransaction',
      keyFrom: 'buyTransactionId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_buy_transaction', dataType: 'INT', nullable: 'Y'}
    }
  )
  buyTransactionId: number;

  @belongsTo(
    () => Transaction,
    {
      name: 'sellTransaction',
      keyFrom: 'sellTransactionId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_sell_transaction', dataType: 'INT', nullable: 'Y'}
    }
  )
  sellTransactionId: number;

  @belongsTo(
    () => Product,
    {
      name: 'product',
      keyFrom: 'productId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_product', dataType: 'INT', nullable: 'Y'}
    }
  )
  productId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Gain>) {
    super(data);
  }
}

export interface GainRelations {
  // describe navigational properties here
}

export type GainWithRelations = Gain & GainRelations;
