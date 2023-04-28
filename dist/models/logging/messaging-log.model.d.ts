import { BaseDataDumpModel } from '..';
export declare class MessagingLog extends BaseDataDumpModel {
    queueName: string;
    queueMessageId: string;
    messageBody: object;
    messagePublishedDate: Date;
    messageConsumedDate?: Date;
    messageProcessedDate?: Date;
    logGenTime?: Date;
    [prop: string]: any;
    constructor(data?: Partial<MessagingLog>);
}
export interface MessagingLogRelations {
}
export declare type MessagingLogWithRelations = MessagingLog & MessagingLogRelations;
