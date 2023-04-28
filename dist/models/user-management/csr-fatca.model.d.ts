import { BaseSQLModel } from '..';
export declare class CsrFatca extends BaseSQLModel {
    status?: number;
    remarks?: string;
    uploadedDate?: Date;
    generatedDate?: Date;
    accountId: number;
    userManagementAppFileId?: number;
    rtaId: number;
    [prop: string]: any;
    constructor(data?: Partial<CsrFatca>);
}
export interface CsrFatcaRelations {
}
export declare type CsrFatcaWithRelations = CsrFatca & CsrFatcaRelations;
