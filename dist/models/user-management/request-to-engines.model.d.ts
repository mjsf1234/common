import { BaseSQLModel } from '..';
export declare class RequestToEngine extends BaseSQLModel {
    generatedDate?: Date;
    requestedDate?: Date;
    status: number;
    remarks?: string;
    eventType?: string;
    isParallel?: boolean;
    parameters?: object;
    [prop: string]: any;
    constructor(data?: Partial<RequestToEngine>);
}
export interface RequestToEngineRelations {
}
export declare type RequestToEngineWithRelations = RequestToEngine & RequestToEngineRelations;
