import {belongsTo, model, property} from '@loopback/repository';
import {Address} from '.';
import {AppUser, Account, ServiceProviderAccount, BankAccount, BaseSQLModel, Relationship} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'investor_nominee'},
    plural: 'InvestorNominees',
    foreignKeys: {
      fkidx_investor_nominee_account_fk_id_account: {
        name: 'fkidx_investor_nominee_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_investor_nominee_sp_account_fk_id_sp_account: {
        name: 'fkidx_investor_nominee_sp_account_fk_id_sp_account',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_investor_nominee_bank_account_fk_id_bank_account: {
        name: 'fkidx_investor_nominee_bank_account_fk_id_bank_account',
        foreignKey: 'fk_id_bank_account',
        entityKey: 'id',
        entity: 'BankAccount'
      },
      fkidx_investor_nominee_address_fk_id_address: {
        name: 'fkidx_investor_nominee_address_fk_id_address',
        foreignKey: 'fk_id_address',
        entityKey: 'id',
        entity: 'Address'
      },
      fkidx_investor_nominee_user_fk_id_user: {
        name: 'fkidx_investor_nominee_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    }
  }
})
export class InvestorNominee extends BaseSQLModel {
  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'nominee_percentage', dataType: 'DECIMAL', nullable: 'Y'}
  })
  nomineePercentage?: number | null;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'GUARDIANRELATIONSHIP',
    postgresql: {columnName: 'guardian_relationship', dataType: 'SMALLINT', nullable: 'Y'},
    jsonSchema: {
      nullable: true
    }
  })
  guardianRelationship?: number | null;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'guardian_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'},
    jsonSchema: {
      nullable: true
    }
  })
  guardianName?: string | null;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_mf_nominee', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isMfNominee?: boolean | null;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_synced_via_bank', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSyncedViaBank?: boolean | null;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'guardian_pan_card_number', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y'},
    jsonSchema: {
      nullable: true
    }
  })
  guardianPanCardNumber?: string | null;

  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      required: false,
      postgresql: {columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  appUserId: number;

  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      required: false,
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  accountId?: number;

  @belongsTo(
    () => ServiceProviderAccount,
    {
      name: 'serviceProviderAccount',
      keyFrom: 'serviceProviderAccountId',
      keyTo: 'id'
    },
    {
      required: false,
      postgresql: {columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  serviceProviderAccountId?: number;

  @belongsTo(
    () => BankAccount,
    {
      name: 'bankAccount',
      keyFrom: 'bankAccountId',
      keyTo: 'id'
    },
    {
      required: false,
      postgresql: {columnName: 'fk_id_bank_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  bankAccountId?: number;

  @belongsTo(
    () => Address,
    {
      name: 'address',
      keyFrom: 'addressId',
      keyTo: 'id'
    },
    {
      required: false,
      postgresql: {columnName: 'fk_id_address', dataType: 'INT', nullable: 'Y'}
    }
  )
  addressId?: number;

  @belongsTo(
    () => Relationship,
    {
      name: 'relationship',
      keyFrom: 'relationshipId',
      keyTo: 'id'
    },
    {
      required: false,
      postgresql: {columnName: 'fk_id_relationship', dataType: 'INT', nullable: 'Y'}
    }
  )
  relationshipId?: number;

  @belongsTo(
    () => Address,
    {
      name: 'guardianAddress',
      keyFrom: 'guardianAddressId',
      keyTo: 'id'
    },
    {
      required: false,
      postgresql: {columnName: 'fk_id_guardian_address', dataType: 'INT', nullable: 'Y'},
      jsonSchema: {
        nullable: true
      }
    }
  )
  guardianAddressId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InvestorNominee>) {
    super(data);
  }
}

export interface InvestorNomineeRelations {
  // describe navigational properties here
}

export type InvestorNomineeWithRelations = InvestorNominee & InvestorNomineeRelations;
