import { BaseDataDumpModel } from '..';
export declare class ActionLog extends BaseDataDumpModel {
    actionName: string;
    actionProperties?: object;
    logGenTime?: Date;
    'executedByAppUserId': number;
    [prop: string]: any;
    constructor(data?: Partial<ActionLog>);
}
export interface ActionLogRelations {
}
export declare type ActionLogWithRelations = ActionLog & ActionLogRelations;
