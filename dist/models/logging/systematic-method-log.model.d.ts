import { BaseSQLModel } from '..';
export declare class SystematicMethodLog extends BaseSQLModel {
    systematicRegistrationNumber: string;
    failedDate?: Date;
    remarks: string;
    systematicMethodId?: number;
    [prop: string]: any;
    constructor(data?: Partial<SystematicMethodLog>);
}
export interface SystematicMethodLogRelations {
}
export declare type SystematicMethodLogWithRelations = SystematicMethodLog & SystematicMethodLogRelations;
