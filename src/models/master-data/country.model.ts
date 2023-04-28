import {hasMany, model, property} from '@loopback/repository';
import {State} from '.';
import {BaseSQLModel, OverseesAddress} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_country_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    postgresql: {tableName: 'country'},
    plural: 'Countries',
    foreignKeys: {},
    hiddenProperties: ['bseCodeForNationality', 'bseCodeForRegistration', 'fatcaCode']
  }
})
export class Country extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'},
    jsonSchema:{
      pattern:'^[a-zA-Z\\s]{2,255}$',
      minLength:2,
      maxLength:255
    }
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'short_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'},
    jsonSchema:{
      pattern:'^[a-zA-Z]{2,10}$',
      minLength:2,
      maxLength:10
    }
  })
  shortName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'country_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  countryCode?: string;

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
    postgresql: {columnName: 'bse_code_for_nationality', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bseCodeForNationality?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code_for_registration', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bseCodeForRegistration?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'cvl_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  cvlCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'cams_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'},
    jsonSchema:{
      pattern:'^[a-zA-Z0-9]{1,3}$'
    }
  })
  camsCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fatca_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  fatcaCode?: string;

  @hasMany(() => State, {keyTo: 'stateId'})
  states?: State[];

  @hasMany(() => OverseesAddress, {keyTo: 'overseesAddressId'})
  overseesAddresses?: OverseesAddress[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Country>) {
    super(data);
  }
}

export interface CountryRelations {
  // describe navigational properties here
}

export type CountryWithRelations = Country & CountryRelations;
