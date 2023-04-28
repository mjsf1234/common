import {belongsTo, model, property} from '@loopback/repository';
import {AddressType, BaseSQLModel, State} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'address'},
    plural: 'Addresses',
    foreignKeys: {
      fkidx_address_state_fk_id_state: {
        name: 'fkidx_address_state_fk_id_state',
        foreignKey: 'fk_id_state',
        entityKey: 'id',
        entity: 'State'
      },
      fkidx_address_address_type_fk_id_address_type: {
        name: 'fkidx_address_address_type_fk_id_address_type',
        foreignKey: 'fk_id_address_type',
        entityKey: 'id',
        entity: 'AddressType'
      }
    },
    hiddenProperties: []
  }
})
export class Address extends BaseSQLModel {
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
    isPseudonym: true,
    postgresql: {columnName: 'full_address', dataType: 'TEXT', nullable: 'Y'}
  })
  fullAddress?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'pincode', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y'}
  })
  pincode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'district', dataType: 'TEXT', nullable: 'Y'}
  })
  district?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'city', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  city?: string;

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

  // @property({
  //   type: 'geopoint',
  //   postgresql: {columnName: 'geo_point', dataType: 'POINT', nullable: 'Y'},
  // })
  // geoPoint?: string;

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

  @belongsTo(
    () => State,
    {
      name: 'state',
      keyFrom: 'stateId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_state', dataType: 'INT', nullable: 'Y'}
    }
  )
  stateId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;
