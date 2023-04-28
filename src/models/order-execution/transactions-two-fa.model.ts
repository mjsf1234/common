import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {Account, BaseSQLModel, CartItem, OrderItem} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'transactions_two_fa'},
    plural: 'transactions_two_fas',
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_txn_ref_no: {keys: {txn_ref_no: 1}, options: {unique: false}}
    },
    foreignKeys: {
      fkidx_Transaction_two_fa_account_fk_id_account: {
        name: 'fkidx_Transaction_two_fa_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      }
    }
  }
})
export class TransactionTwoFa extends BaseSQLModel {
  @property({
    type: 'date',
    postgresql: {columnName: 'txn_otp_generation', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  txnOTPGeneration?: Date | null;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'txn_otp_retry_count', dataType: 'INT', nullable: 'Y'}
  })
  txnOTPRetryCount?: number | null;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'txn_otp_verification_count', dataType: 'INT', nullable: 'Y'}
  })
  txnOTPVerificationCount?: number | null;

  @property({
    type: 'date',
    postgresql: {columnName: 'txn_otp_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  txnOTPExpiry?: Date | null;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'otp_verified', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  otpVerified?: boolean | null;

  @property({
    type: 'string',
    isEncrypted: true,
    postgresql: {columnName: 'registered_email', dataType: 'text', nullable: 'Y'}
  })
  registeredEmail?: string | null;

  @property({
    type: 'string',
    isEncrypted: true,
    postgresql: {columnName: 'registered_mobile', nullable: 'Y', dataType: 'text'}
  })
  registeredMobile?: string | null;

  @property({
    type: 'string',
    postgresql: {columnName: 'txn_ref_no', dataType: 'VARCHAR', dataLength: 60, nullable: 'Y'}
  })
  txnRefNo?: string | null;

  @property({
    type: 'number',
    optionLabelIdentifier: 'TWOFACTORAUTH',
    postgresql: {columnName: 'two_factor_auth_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  twoFactorAuthType: number;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: any;

  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'N'}
    }
  )
  accountId: number;

  @hasMany(() => CartItem, {keyTo: 'transactionTwoFaSmsId'})
  cartItemSmsGroups?: CartItem[];

  @hasMany(() => OrderItem, {keyTo: 'transactionTwoFaSmsId'})
  orderItemSmsGroups?: OrderItem[];

  @hasMany(() => CartItem, {keyTo: 'transactionTwoFaEmailId'})
  cartItemEmailGroups?: CartItem[];

  @hasMany(() => OrderItem, {keyTo: 'transactionTwoFaEmailId'})
  orderItemEmailGroups?: OrderItem[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TransactionTwoFa>) {
    super(data);
  }
}

export interface TransactionTwoFaRelations {
  // describe navigational properties here
}

export type TransactionTwoFaWithRelations = TransactionTwoFa & TransactionTwoFaRelations;
