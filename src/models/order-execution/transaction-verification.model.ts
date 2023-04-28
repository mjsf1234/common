import {belongsTo, model, property, hasMany} from '@loopback/repository';
import {BaseSQLModel, Account} from '..';
import {CartItem} from './cart-item.model';
import {Cart} from './cart.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'transaction_verification'},
    plural: 'TransactionVerification',
    foreignKeys: {
        fkidx_transaction_verifictation_cart_fk_id_cart: {
            name: 'fkidx_transaction_verifictation_cart_fk_id_cart',
            foreignKey: 'fk_id_cart',
            entityKey: 'id',
            entity: 'Cart'
          },
        fkidx_transaction_verifictation_account_fk_id_account: {
          name: 'fkidx_transaction_verifictation_account_fk_id_account',
          foreignKey: 'fk_id_account',
          entityKey: 'id',
          entity: 'Account'
        }
      },
    hiddenProperties: []
  }
})
export class TransactionVerification extends BaseSQLModel {
  @property({
    type: 'date',
    postgresql: {columnName: 'otp_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  otpExpiry?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'otp_generation', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  otpGeneration?: Date;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'otp', dataType: 'VARCHAR', nullable: 'Y'}
  })
  otp?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'contact_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'N'}
  })
  contactNumber?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'VERIFICATIONSTATUS',
    postgresql: {columnName: 'verification_status', dataType: 'SMALLINT', nullable: 'N'}
  })
  verificationStatus?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'N'}
  })
  uniqueId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'cart_items_id', dataType: 'TEXT', nullable: 'N'}
  })
  cartItemsId: string;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'otp_retry_count', dataType: 'INT', nullable: 'Y'}
  })
  otpRetryCount?: number;

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

  @belongsTo(
    () => Cart,
    {
      name: 'cart',
      keyFrom: 'cartId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_cart', dataType: 'INT', nullable: 'N'}
    }
  )
  cartId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TransactionVerification>) {
    super(data);
  }
}

export interface TransactionVerificationRelations {
  // describe navigational properties here
}

export type TransactionVerificationWithRelations = TransactionVerification & TransactionVerificationRelations;
