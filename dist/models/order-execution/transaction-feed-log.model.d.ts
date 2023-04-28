import { BaseDataDumpModel } from '..';
import { OrderItem } from './order-item.model';
export declare class TransactionFeedLog extends BaseDataDumpModel {
    rowCount: number;
    status: number;
    generatedDate: Date;
    uploadedDate: Date;
    successCount: number;
    failureCount: number;
    remarks?: string;
    txnFeedFileId: number;
    rtaId: number;
    orderItems?: OrderItem[];
    [prop: string]: any;
    constructor(data?: Partial<TransactionFeedLog>);
}
export interface TransactionFeedLogRelations {
}
export declare type TransactionFeedLogWithRelations = TransactionFeedLog & TransactionFeedLogRelations;
