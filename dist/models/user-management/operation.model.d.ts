import { BaseSQLModel } from '..';
export declare class Operation extends BaseSQLModel {
    employeeCode?: string;
    category: number;
    birthDate?: Date;
    userType?: number;
    maxAllowedLoginAttempts?: number;
    appUserId: number;
    [prop: string]: any;
    constructor(data?: Partial<Operation>);
}
export interface OperationRelations {
}
export declare type OperationWithRelations = Operation & OperationRelations;
