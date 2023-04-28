import {belongsTo, model, property} from '@loopback/repository';
import {Account, BaseSQLModel, Instrument} from '..';
import {ServiceProviderAccount} from './service-provider-account.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'account_service_provider_account_instrument_mapping'},
    plural: 'AccountServiceProviderAccountInstrumentMappings',
    foreignKeys: {
      fkidx_aspaim_fk_id_account: {
        name: 'fkidx_aspaim_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_aspaim_fk_id_service_provider_account: {
        name: 'fkidx_aspaim_fk_id_service_provider_account',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_aspaim_fk_id_instrument: {
        name: 'fkidx_aspaim_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: []
  }
})
export class AccountServiceProviderAccountInstrumentMapping extends BaseSQLModel {
  @property({
    type: 'boolean',
    deafult: true,
    postgresql: {columnName: 'is_force_mapped', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isForceMapped?: boolean;

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
  accountId: number;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AccountServiceProviderAccountInstrumentMapping>) {
    super(data);
  }
}

export interface AccountServiceProviderAccountInstrumentMappingRelations {
  // describe navigational properties here
}

export type AccountServiceProviderAccountInstrumentMappingWithRelations = AccountServiceProviderAccountInstrumentMapping &
  AccountServiceProviderAccountInstrumentMappingRelations;
