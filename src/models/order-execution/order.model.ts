import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {Account, BaseSQLModel} from '..';
import {OrderItem} from './order-item.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'order'},
    plural: 'Orders',
    foreignKeys: {
      fkidx_order_account_fk_id_account: {
        name: 'fkidx_order_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      }
    },
    hiddenProperties: []
  }
})
export class Order extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'N'}
  })
  uniqueId?: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'order_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  orderDate: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'order_execution_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  orderExecutionDate?: Date;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'TRANSACTIONSTATUS',
    postgresql: {columnName: 'order_status', dataType: 'SMALLINT', nullable: 'N'}
  })
  orderStatus: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'ORDERRECEIPTMODE',
    postgresql: {columnName: 'order_receipt_mode', dataType: 'SMALLINT', nullable: 'Y'}
  })
  orderReceiptMode?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'ORDERTYPE',
    postgresql: {columnName: 'order_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  orderType?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'ip_address', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  ipAddress?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'options', dataType: 'TEXT', nullable: 'Y'}
  })
  options?: object;

  @property({
    type: 'number',
    postgresql: {columnName: 'checker_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  checkerStatus?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'retry_count', dataType: 'SMALLINT', default: 0, nullable: 'N'}
  })
  retryCount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'order_auth_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  orderAuthStatus ?: number;


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

  @hasMany(() => OrderItem, {keyTo: 'orderId'})
  orderItems?: OrderItem[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
