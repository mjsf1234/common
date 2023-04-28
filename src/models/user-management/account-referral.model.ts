import {belongsTo, model, property} from '@loopback/repository';
import {Account, BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'account_referral'},
    plural: 'AccountReferrals',
    foreignKeys: {
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
export class AccountReferral extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'referral_code', dataType: 'VARCHAR', dataLength: 32, nullable: 'N'}
  })
  referralCode: string;

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
  accountId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AccountReferral>) {
    super(data);
  }
}

export interface AccountReferralRelations {
  // describe navigational properties here
}

export type AccountReferralWithRelations = AccountReferral & AccountReferralRelations;
