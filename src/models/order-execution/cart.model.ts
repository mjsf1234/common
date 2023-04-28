import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {Account, AppUser, BaseSQLModel} from '..';
import {CartItem} from './cart-item.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'cart'},
    plural: 'Carts',
    foreignKeys: {
      fkidx_cart_user_fk_id_created_by_user: {
        name: 'fkidx_cart_user_fk_id_created_by_user',
        foreignKey: 'fk_id_created_by_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_cart_account_fk_id_account: {
        name: 'fkidx_cart_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      }
    },
    hiddenProperties: []
  }
})
export class Cart extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'N'}
  })
  uniqueId: string;

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

  @belongsTo(
    () => AppUser,
    {
      name: 'createdByAppUser',
      keyFrom: 'createdByAppUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_created_by_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  createdByAppUserId: number;

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

  @hasMany(() => CartItem, {keyTo: 'cartId'})
  cartItems?: CartItem[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cart>) {
    super(data);
  }
}

export interface CartRelations {
  // describe navigational properties here
}

export type CartWithRelations = Cart & CartRelations;
