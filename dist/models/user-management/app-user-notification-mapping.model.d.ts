import { BaseSQLModel } from '..';
import { AppUser } from './app-user.model';
export declare class AppUserNotification extends BaseSQLModel {
    transactionSms: boolean;
    transactionEmail: boolean;
    transactionPushnotification: boolean;
    upcomingPaymentsSms: boolean;
    upcomingPaymentsEmail: boolean;
    upcomingPaymentsPushnotification: boolean;
    rebalanceSms: boolean;
    rebalanceEmail: boolean;
    rebalancePushnotification: boolean;
    appUserId: number;
    [prop: string]: any;
    constructor(data?: Partial<AppUser>);
}
export interface AppUserNotificationRelations {
}
export declare type AppUserNotificationWithRelations = AppUserNotification & AppUserNotificationRelations;
