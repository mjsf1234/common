import { BaseSQLModel } from '..';
export declare class UAMLog extends BaseSQLModel {
    uniqueNumber: string;
    isacStatus?: string;
    responseObject: string;
    logGenTime?: Date;
    [prop: string]: any;
    constructor(data?: Partial<UAMLog>);
}
export interface UAMLogRelations {
}
export declare type UAMLogWithRelations = UAMLog & UAMLogRelations;
