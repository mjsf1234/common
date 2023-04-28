import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {AppUser} from './app-user.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      isx_user_id : {keys : {appUserId : 1},options: {unique: true}}
    },
    postgresql: {tableName: 'user_notification'},
    plural: 'AppUserNotifications',
    foreignKeys: {
      fkidx_user_notification_app_user_fk_id_family: {
        name: 'fkidx_user_notification_app_user_fk_id_family',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    },
    hiddenProperties: ['password', 'oneTimePassword', 'passwordExpiry', 'loginRetryCount', 'otp', 'otp_expiry', 'mpin']
  }
})
export class AppUserNotification extends BaseSQLModel {

  @property({
    type: 'string',
    isPseudonym: true,
    default: true,
    postgresql: {columnName: 'transaction_sms', dataType: 'BOOLEAN', nullable: 'N'}
  })
  transactionSms : boolean;

  @property({
    type: 'string',
    isPseudonym: true,
    default: true,
    postgresql: {columnName: 'transaction_email',  dataType: 'BOOLEAN', nullable: 'N'}
  })
  transactionEmail : boolean;

  @property({
    type: 'string',
    isPseudonym: true,
    default: true,
    postgresql: {columnName: 'transaction_pushnotification',  dataType: 'BOOLEAN', nullable: 'N'}
  })
  transactionPushnotification : boolean;

  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'upcoming_payments_sms',  dataType: 'BOOLEAN', nullable: 'N'}
  })
  upcomingPaymentsSms: boolean;


  @property({
    type: 'string',
    isPseudonym: true,
    default: true,
    postgresql: {columnName: 'upcoming_payments_email',  dataType: 'BOOLEAN', nullable: 'N'}
  })
  upcomingPaymentsEmail : boolean;


  @property({
    type: 'string',
    isPseudonym: true,
    default: true,
    postgresql: {columnName: 'upcoming_payments_pushnotification',  dataType: 'BOOLEAN', nullable: 'N'}
  })
  upcomingPaymentsPushnotification : boolean;

  @property({
    type: 'string',
    isPseudonym: true,
    default: true,
    postgresql: {columnName: 'rebalance_sms', dataType: 'BOOLEAN', nullable: 'N'}
  })
  rebalanceSms : boolean;

  @property({
    type: 'string',
    isPseudonym: true,
    default: true,
    postgresql: {columnName: 'rebalance_email',  dataType: 'BOOLEAN', nullable: 'N'}
  })
  rebalanceEmail : boolean;


  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'rebalance_pushnotification',  dataType: 'BOOLEAN', nullable: 'N'}
  })
  rebalancePushnotification: boolean;





  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user', dataType: 'INT', nullable: 'N'}
    }
  )
  appUserId : number;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AppUser>) {
    super(data);
  }
}

export interface AppUserNotificationRelations {
  // describe navigational properties here
}

export type AppUserNotificationWithRelations = AppUserNotification & AppUserNotificationRelations;
