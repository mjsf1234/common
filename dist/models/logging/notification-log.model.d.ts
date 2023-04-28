import { BaseDataDumpModel } from '..';
export declare class NotificationLog extends BaseDataDumpModel {
    subject: string;
    content?: object;
    mediumType?: number;
    mediumAddress?: string;
    providerLog?: object;
    logGenTime?: Date;
    appUserId?: number;
    deviceId: number;
    [prop: string]: any;
    constructor(data?: Partial<NotificationLog>);
}
export interface NotificationLogRelations {
}
export declare type NotificationLogWithRelations = NotificationLog & NotificationLogRelations;
