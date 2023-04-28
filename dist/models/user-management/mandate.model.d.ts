import { BaseSQLModel } from '..';
export declare class Mandate extends BaseSQLModel {
    umrn?: string;
    startDate: Date;
    endDate: Date;
    amount: number;
    availableAmount?: number;
    status: number;
    referenceId?: string;
    remarks?: string;
    approvedDate?: Date;
    untilCancelled?: number;
    meta?: object;
    bankAccountId: number;
    accountId: number;
    userManagementAppFileId?: number;
    mandateTypeId: number;
    [prop: string]: any;
    constructor(data?: Partial<Mandate>);
}
export interface MandateRelations {
}
export declare type MandateWithRelations = Mandate & MandateRelations;
