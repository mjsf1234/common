import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {BankBranch, BaseSQLModel, BankAccountType, HoldingType, InvestorType, PaymentDetails, UserManagementAppFile} from '..';
import {Account} from './account.model';
import {Mandate} from './mandate.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'bank_account'},
    plural: 'BankAccounts',
    foreignKeys: {
      fkidx_bank_account_account_fk_id_account: {
        name: 'fkidx_bank_account_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_bank_account_bank_account_type_fk_id_bank_account_type: {
        name: 'fkidx_bank_account_bank_account_type_fk_id_bank_account_type',
        foreignKey: 'fk_id_bank_account_type',
        entityKey: 'id',
        entity: 'BankAccountType'
      },
      fkidx_bank_account_bank_branch_fk_id_bank_branch: {
        name: 'fkidx_bank_account_bank_branch_fk_id_bank_branch',
        foreignKey: 'fk_id_bank_branch',
        entityKey: 'id',
        entity: 'BankBranch'
      }
    },
    hiddenProperties: []
  }
})
export class BankAccount extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'account_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  accountName: string;

  @property({
    type: 'string',
    required: true,
    isEncrypted: true,
    postgresql: {columnName: 'account_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'N'}
  })
  accountNumber: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_default', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isDefault: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_cheque_uploaded', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isChequeUploaded?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_pennydrop_verified', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isPennydropVerified?: boolean;

  @property({
    type: 'number',
    optionLabelIdentifier: 'BANKACCOUNTSTATUS',
    postgresql: {columnName: 'bank_account_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  bankAccountStatus?: number;

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
  bankBranchId: number;

  @belongsTo(
    () => BankAccountType,
    {
      name: 'bankAccountType',
      keyFrom: 'bankAccountTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_bank_account_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  bankAccountTypeId: number;

  @belongsTo(
    () => HoldingType,
    {
      name: 'holdingType',
      keyFrom: 'holdingTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_holding_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  holdingTypeId?: number;

  @belongsTo(
    () => InvestorType,
    {
      name: 'investorType',
      keyFrom: 'investorTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_investor_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  investorTypeId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'chequeImageFile',
      keyFrom: 'chequeImageFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_cheque_image_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  chequeImageFileId?: number;

  @hasMany(() => Mandate, {keyTo: 'bankAccountId'})
  mandates?: Mandate[];

  @hasMany(() => PaymentDetails, {keyTo: 'bankAccountId'})
  paymentDetails?: PaymentDetails[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BankAccount>) {
    super(data);
  }
}

export interface BankAccountRelations {
  // describe navigational properties here
}

export type BankAccountWithRelations = BankAccount & BankAccountRelations;
