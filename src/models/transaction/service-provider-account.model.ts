import {belongsTo, hasMany,hasOne, model, property} from '@loopback/repository';
import {Account, BaseSQLModel, DepositDetails, ServiceProvider, OrderItem} from '..';
import {Gain} from './gain.model';
import {HistoricalHolding} from './historical-holding.model';
import {Holding} from './holding.model';
import { SystematicMethod } from './systematic-method.model';
import {Transaction} from './transaction.model';
import {AuditTrail} from '../../models';
@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_spa_number_type_fk_id_acc_fk_id_service_provider: {
        keys: {account_number: 1, type: 1, fk_id_account: 1, fk_id_service_provider: 1},
        options: {unique: false}
      }
    },
    postgresql: {tableName: 'service_provider_account'},
    plural: 'ServiceProviderAccounts',
    foreignKeys: {
      fkidx_service_provider_account_account_fk_id_account: {
        name: 'fkidx_service_provider_account_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_service_provider_account_service_provider_fk_id_sp: {
        name: 'fkidx_service_provider_account_service_provider_fk_id_sp',
        foreignKey: 'fk_id_service_provider',
        entityKey: 'id',
        entity: 'ServiceProvider'
      }
    },
    hiddenProperties: ['fk_id_account', 'fk_id_service_provider']
  }
})
export class ServiceProviderAccount extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'N'}
  })
  accountNumber: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'old_account_number', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  oldAccountNumber: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'service_provider_account_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  serviceProviderAccountName?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'SERVICEPROVIDERACCOUNTTYPE',
    postgresql: {columnName: 'type', dataType: 'SMALLINT', nullable: 'N'}
  })
  type?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'registered_email', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  registeredEmail?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'coupon', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  coupon?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'registered_mobile',nullable: 'Y',  dataType: 'VARCHAR', dataLength: 50,}
  })
  registeredMobile?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'contact_details_updated_on', dataType: 'DATE', nullable: 'Y'}
  })
  ContactDetailsUpdatedOn?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'maturity_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  maturityDate?: Date;

  @property({
    type: 'number',
    optionLabelIdentifier: 'ACCRUALFREQUENCY',
    postgresql: {columnName: 'accrual_frequency', dataType: 'SMALLINT', nullable: 'Y'}
  })
  accrualFrequency?: number;

  @property({
    type: 'boolean',
    deafult: false,
    postgresql: {columnName: 'is_force_mapped', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isForceMapped?: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_held_away', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isHeldAway: boolean;

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
  serviceProviderId: number;

  @hasMany(() => Transaction, {keyTo: 'serviceProviderAccountId'})
  transactions?: Transaction[];

  @hasMany(() => OrderItem, {keyTo: 'serviceProviderAccountId'})
  orderItems?: OrderItem[];

  @hasMany(() => Holding, {keyTo: 'serviceProviderAccountId'})
  holdings?: Holding[];

  @hasMany(() => SystematicMethod, {keyTo: 'serviceProviderAccountId'})
  systematicMethods?: SystematicMethod[];

  @hasMany(() => HistoricalHolding, {keyTo: 'serviceProviderAccountId'})
  historicalHoldings?: HistoricalHolding[];

  @hasMany(() => Gain, {keyTo: 'serviceProviderAccountId'})
  gains?: Gain[];

  @hasMany(() => DepositDetails, {keyTo: 'serviceProviderAccountId'})
  depositDetails?: DepositDetails[];

  @hasOne(() => AuditTrail, {keyTo: 'serviceProviderAccountId'})
  auditTrail?: AuditTrail;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ServiceProviderAccount>) {
    super(data);
  }
}

export interface ServiceProviderAccountRelations {
  // describe navigational properties here
}

export type ServiceProviderAccountWithRelations = ServiceProviderAccount & ServiceProviderAccountRelations;
