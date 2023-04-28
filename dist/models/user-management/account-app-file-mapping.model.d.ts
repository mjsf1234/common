import { BaseSQLModel } from '..';
import { AuditTrail } from './audit-rail';
export declare class AccountAppFileMapping extends BaseSQLModel {
    accountId: number;
    userManagementAppFileId: number;
    auditTrail?: AuditTrail;
    [prop: string]: any;
    constructor(data?: Partial<AccountAppFileMapping>);
}
export interface AccountAppFileMappingRelations {
}
export declare type AccountAppFileMappingWithRelations = AccountAppFileMapping & AccountAppFileMappingRelations;
