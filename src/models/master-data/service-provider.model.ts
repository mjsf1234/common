import {belongsTo, model, property} from '@loopback/repository';
import {trueDependencies} from 'mathjs';
import {BankBranch} from '.';
import {BaseSQLModel} from '..';
import {TransactionalDataRefreshingQueueMessageEventType} from '../../queues';
import {Rta} from './rta.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_service_provider_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}},
      idx_service_provider_type: {
        keys: {service_provider_type: 1, primary_amc_code: 1},
        options: {unique: true, caseInsensitiveUnique: true}
      },
      idx_primary_amc_code: {keys: {primary_amc_code: 1, service_provider_type: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    postgresql: {tableName: 'service_provider'},
    plural: 'ServiceProviders',
    foreignKeys: {
      fkidx_service_provider_rta_fk_id_rta: {
        name: 'fkidx_service_provider_rta_fk_id_rta',
        foreignKey: 'fk_id_rta',
        entityKey: 'id',
        entity: 'RTA'
      }
    },
    hiddenProperties: [],
    syncRefresher: {
      eventType: TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_REPLICATION_BY_WHERE_FILTER,
      params: {
        serviceProviderId : 'id'
      }
    }
  }
})
export class ServiceProvider extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'short_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  shortName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'SERVICEPROVIDERTYPE',
    postgresql: {columnName: 'service_provider_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  serviceProviderType: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'primary_amc_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  primaryAMCCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'secondary_amc_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  secondaryAMCCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  nseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  bseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fundoo_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  fundooCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bank_account_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  bankAccountNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'logo', dataType: 'TEXT', nullable: 'Y'},
    jsonSchema: {
      pattern: '(?!.*?script)^.*$'
    }
  })
  logo?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'SERVICEPROVIDERSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  status?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'website', dataType: 'TEXT', nullable: 'Y'}
  })
  website?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'addressLine1', dataType: 'TEXT', nullable: 'Y'}
  })
  addressLine1?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'addressLine2', dataType: 'TEXT', nullable: 'Y'}
  })
  addressLine2?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'addressLine3', dataType: 'TEXT', nullable: 'Y'}
  })
  addressLine3?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'city', dataType: 'TEXT', nullable: 'Y'}
  })
  city?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'pincode', dataType: 'TEXT', nullable: 'Y'}
  })
  pincode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'phone', dataType: 'TEXT', nullable: 'Y'}
  })
  phone?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'email', dataType: 'TEXT', nullable: 'Y'}
  })
  email?: string;

  @belongsTo(
    () => Rta,
    {
      name: 'rta',
      keyFrom: 'rtaId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y'}
    }
  )
  rtaId?: number;

  @belongsTo(
    () => BankBranch,
    {
      name: 'bankBranch',
      keyFrom: 'bankBranchId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_bank_branch', dataType: 'INT', nullable: 'Y'}
    }
  )
  bankBranchId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ServiceProvider>) {
    super(data);
  }
}

export interface ServiceProviderRelations {
  // describe navigational properties here
}

export type ServiceProviderWithRelations = ServiceProvider & ServiceProviderRelations;
