import { BaseSQLModel } from '..';
export declare class PaymentConfirmationFeedLog extends BaseSQLModel {
    name: string;
    status: number;
    rowCount?: number;
    generatedDate?: Date;
    uploadedDate?: Date;
    successCount?: number;
    failureCount?: number;
    'serviceProviderId': number;
    'orderExecutionAppFileId': number;
    [prop: string]: any;
    constructor(data?: Partial<PaymentConfirmationFeedLog>);
}
export interface PaymentConfirmationFeedLogRelations {
}
export declare type PaymentConfirmationFeedLogWithRelations = PaymentConfirmationFeedLog & PaymentConfirmationFeedLogRelations;
