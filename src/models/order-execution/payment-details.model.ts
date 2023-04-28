import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Mandate, BankAccount} from '..';
import {OrderItem} from './order-item.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'payment_details'},
    plural: 'PaymentDetails',
    foreignKeys: {
      fkidx_payment_details_order_item_fk_id_order_item: {
        name: 'fkidx_payment_details_order_item_fk_id_order_item',
        foreignKey: 'fk_id_order_item',
        entityKey: 'id',
        entity: 'OrderItem'
      },
      fkidx_payment_details_bank_account_fk_id_bank_account: {
        name: 'fkidx_payment_details_bank_account_fk_id_bank_account',
        foreignKey: 'fk_id_bank_account',
        entityKey: 'id',
        entity: 'BankAccount'
      }
    },
    hiddenProperties: []
  }
})
export class PaymentDetails extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'gateway_reference_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  gatewayReferenceNumber?: string; //usig as UTR refrence number

  @property({
    type: 'string',
    postgresql: {columnName: 'external_reference_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  externalReferenceNumber?: string; //usig as UTR refrence number

  @property({
    type: 'number',
    optionLabelIdentifier: 'PAYMENTMODE',
    postgresql: {columnName: 'payment_mode', dataType: 'SMALLINT', nullable: 'Y'}
  })
  paymentMode?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'PAYMENTSTATUS',
    postgresql: {columnName: 'payment_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  paymentStatus?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'payment_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  paymentDate?: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'narration', dataType: 'TEXT', nullable: 'Y'}
  })
  narration?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'PAYMENTRECONCILIATIONSTATUS',
    postgresql: {columnName: 'reconcilation_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  reconcilationStatus?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'PAYMENTCONFIRMATIONTOAMCSTATUS',
    postgresql: {columnName: 'payment_confirmation_to_amc_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  paymentConfirmationToAMCStatus?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'PAYMENTREVERSALSTATUS',
    postgresql: {columnName: 'reversal_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  reversalStatus?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'WMSGENERICMESSAGES',
    postgresql: {columnName: 'payment_error_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  paymentErrorType?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'debit_retry_count', dataType: 'INT', nullable: 'Y'}
  })
  debitRetryCount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'inquiry_retry_count', dataType: 'INT', nullable: 'Y'}
  })
  inquiryRetryCount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'reversal_retry_count', dataType: 'INT', nullable: 'Y'}
  })
  reversalRetryCount?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'DEBITAPISTATUS',
    postgresql: {columnName: 'debit_api_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  debitApiStatus?: number;

  @belongsTo(
    () => OrderItem,
    {
      name: 'orderItem',
      keyFrom: 'orderItemId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_order_item', dataType: 'INT', nullable: 'Y'}
    }
  )
  orderItemId: number;

  @belongsTo(
    () => BankAccount,
    {
      name: 'bankAccount',
      keyFrom: 'bankAccountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_bank_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  bankAccountId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PaymentDetails>) {
    super(data);
  }
}

export interface PaymentDetailsRelations {
  // describe navigational properties here
}

export type PaymentDetailsWithRelations = PaymentDetails & PaymentDetailsRelations;
