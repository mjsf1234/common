import { BaseSQLModel } from '..';
export declare class Alert extends BaseSQLModel {
    message: string;
    type: number;
    isReadByClient: boolean;
    isReadByRM: boolean;
    expiry: Date;
    config?: object;
    appUserId?: number;
    [prop: string]: any;
    constructor(data?: Partial<Alert>);
}
export interface AlertRelations {
}
export declare type AlertWithRelations = Alert & AlertRelations;
