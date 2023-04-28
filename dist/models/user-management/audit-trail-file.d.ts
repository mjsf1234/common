import { BaseSQLModel } from '..';
import { AuditTrail } from './audit-rail';
export declare class AuditTrailFile extends BaseSQLModel {
    name?: string;
    remarks?: string;
    status: number;
    rtaId: number;
    uploadedByAppUserId: number;
    uploadedFileId: number;
    exportedFileId: number;
    deletedByAppUserId?: number;
    auditTrail?: AuditTrail[];
    [prop: string]: any;
    constructor(data?: Partial<AuditTrailFile>);
}
export interface AuditTrailFileRelations {
}
export declare type AuditTrailFileWithRelations = AuditTrailFile & AuditTrailFileRelations;
