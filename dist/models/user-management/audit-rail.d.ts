import { BaseSQLModel } from '..';
export declare class AuditTrail extends BaseSQLModel {
    oldRegisteredEmail?: string;
    newRegisteredEmail?: string;
    oldRegisteredMobileNo?: number;
    newRegisteredMobileNo?: number;
    remark?: string;
    serviceProviderAccountId?: number;
    accountAppFileMappingId?: number;
    auditTrailFileId: number;
    [prop: string]: any;
    constructor(data?: Partial<AuditTrail>);
}
export interface AuditTrailRelations {
}
export declare type AuditTrailWithRelations = AuditTrail & AuditTrailRelations;
