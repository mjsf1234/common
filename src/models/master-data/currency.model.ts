import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Country} from './country.model';
import {CurrencyConversion} from './currency-conversion.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_currency_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    postgresql: {tableName: 'currency'},
    plural: 'Currencies',
    foreignKeys: {
      fkidx_currency_country_fk_id_country: {
        name: 'fkidx_currency_country_fk_id_country',
        foreignKey: 'fk_id_country',
        entityKey: 'id',
        entity: 'Country'
      }
    },
    hiddenProperties: []
  }
})
export class Currency extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'short_name', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  shortName: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'rta_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  rtaCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
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

  @belongsTo(
    () => Country,
    {
      name: 'country',
      keyFrom: 'countryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_country', dataType: 'INT', nullable: 'Y'}
    }
  )
  countryId?: number;

  @hasMany(() => CurrencyConversion, {keyTo: 'baseCurrencyId'})
  conversions?: CurrencyConversion[];

  @hasMany(() => CurrencyConversion, {keyTo: 'targetCurrencyId'})
  reverseConversions?: CurrencyConversion[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Currency>) {
    super(data);
  }
}

export interface CurrencyRelations {
  // describe navigational properties here
}

export type CurrencyWithRelations = Currency & CurrencyRelations;
