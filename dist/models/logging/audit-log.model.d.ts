import { BaseDataDumpModel } from '..';
export declare class AuditLog extends BaseDataDumpModel {
    modelName: string;
    modelId: number;
    objectBeforeChange?: object;
    objectAfterChange?: object;
    difference?: object;
    transactionId: string;
    ipAddress?: string;
    hostName?: string;
    logGenTime?: Date;
    changedByAppUserId: number;
    [prop: string]: any;
    constructor(data?: Partial<AuditLog>);
}
export interface AuditLogRelations {
}
export declare type AuditLogWithRelations = AuditLog & AuditLogRelations;
