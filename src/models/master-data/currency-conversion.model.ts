import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Currency} from './currency.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'currency_conversion'},
    plural: 'CurrencyConversions',
    foreignKeys: {
      fkidx_currency_conversion_currency_fk_id_base_currency: {
        name: 'fkidx_currency_conversion_currency_fk_id_base_currency',
        foreignKey: 'fk_id_base_currency',
        entityKey: 'id',
        entity: 'Currency'
      },
      fkidx_currency_conversion_currency_fk_id_target_currency: {
        name: 'fkidx_currency_conversion_currency_fk_id_target_currency',
        foreignKey: 'fk_id_target_currency',
        entityKey: 'id',
        entity: 'Currency'
      }
    },
    hiddenProperties: []
  }
})
export class CurrencyConversion extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'rate', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  rate: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'currency_return_rate', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  currencyReturnRatePerDay?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'currency_return_rate_per_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  currencyReturnRatePerYear?: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'rate_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  rateDate: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'daily_return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  dailyReturn?: number;

  @belongsTo(
    () => Currency,
    {
      name: 'targetCurrency',
      keyFrom: 'targetCurrencyId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_target_currency', dataType: 'INT', nullable: 'Y'}
    }
  )
  targetCurrencyId: number;

  @belongsTo(
    () => Currency,
    {
      name: 'baseCurrency',
      keyFrom: 'baseCurrencyId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_base_currency', dataType: 'INT', nullable: 'Y'}
    }
  )
  baseCurrencyId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CurrencyConversion>) {
    super(data);
  }
}

export interface CurrencyConversionRelations {
  // describe navigational properties here
}

export type CurrencyConversionWithRelations = CurrencyConversion & CurrencyConversionRelations;
