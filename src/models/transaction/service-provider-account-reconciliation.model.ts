import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {Account, BaseSQLModel, DepositDetails, ServiceProvider} from '..';
import {Gain} from './gain.model';
import {HistoricalHolding} from './historical-holding.model';
import {Holding} from './holding.model';
import { SystematicMethod } from './systematic-method.model';
import {Transaction} from './transaction.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_fk_id_service_provider: {
        keys: {account_number: 1,  fk_id_service_provider: 1},
        options: {unique: false}
      }
    },
    postgresql: {tableName: 'service_provider_account_reconciliation'},
    plural: 'ServiceProviderAccountsReconciliation',
    foreignKeys: {
      fkidx_service_provider_account_reconciliation_service_provider_fk_id_sp: {
        name: 'fkidx_service_provider_account_reconciliation_service_provider_fk_id_sp',
        foreignKey: 'fk_id_service_provider',
        entityKey: 'id',
        entity: 'ServiceProvider'
      }
    },
    hiddenProperties: ['fk_id_account', 'fk_id_service_provider']
  }
})
export class ServiceProviderAccountReconciliation extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  accountNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'old_account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  oldAccountNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'SERVICEPROVIDERACCOUNTRECONCILIATIONSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;



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



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ServiceProviderAccountReconciliation>) {
    super(data);
  }
}

export interface ServiceProviderAccountReconciliationRelations {
  // describe navigational properties here
}

export type ServiceProviderAccountReconciliationWithRelations = ServiceProviderAccountReconciliation & ServiceProviderAccountReconciliationRelations;
