import {belongsTo, model, property} from '@loopback/repository';
import {AddressType, BaseSQLModel, Country} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'oversees_address'},
    plural: 'OverseesAddresses',
    foreignKeys: {
      fkidx_oversees_add_country_fk_id_country: {
        name: 'fkidx_oversees_add_country_fk_id_country',
        foreignKey: 'fk_id_country',
        entityKey: 'id',
        entity: 'Country'
      },
      fkidx_oversees_add_address_type_fk_id_address_type: {
        name: 'fkidx_oversees_add_address_type_fk_id_address_type',
        foreignKey: 'fk_id_address_type',
        entityKey: 'id',
        entity: 'AddressType'
      }
    },
    hiddenProperties: []
  }
})
export class OverseesAddress extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'address_line_1', dataType: 'VARCHAR', dataLength: 200, nullable: 'N'}
  })
  addressLine1: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'address_line_2', dataType: 'VARCHAR', dataLength: 120, nullable: 'Y'}
  })
  addressLine2?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'address_line_3', dataType: 'VARCHAR', dataLength: 120, nullable: 'Y'}
  })
  addressLine3?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'pincode', dataType: 'VARCHAR', dataLength: 15, nullable: 'N'}
  })
  pincode: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'city', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  city: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'state', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  state?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'contact_number', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  contactNumber?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'landmark', dataType: 'VARCHAR', dataLength: 120, nullable: 'Y'}
  })
  landmark?: string;

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
  countryId: number;

  @belongsTo(
    () => AddressType,
    {
      name: 'addressType',
      keyFrom: 'addressTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_address_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  addressTypeId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OverseesAddress>) {
    super(data);
  }
}

export interface OverseesAddressRelations {
  // describe navigational properties here
}

export type OverseesAddressWithRelations = OverseesAddress & OverseesAddressRelations;
