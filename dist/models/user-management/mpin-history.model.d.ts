import { BaseSQLModel } from '..';
export declare class MpinHistory extends BaseSQLModel {
    mpin?: string;
    appUserId: number;
    [prop: string]: any;
    constructor(data?: Partial<MpinHistory>);
}
export interface MpinHistoryRelations {
}
export declare type MpinHistoryWithRelations = MpinHistory & MpinHistoryRelations;
