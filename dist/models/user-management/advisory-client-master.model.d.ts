import { BaseSQLModel } from '..';
export declare class AdvisoryClientMaster extends BaseSQLModel {
    customerId: string;
    customerFlag?: number;
    [prop: string]: any;
    constructor(data?: Partial<AdvisoryClientMaster>);
}
export interface AdvisoryClientMasterRelations {
}
export declare type AdvisoryClientMasterWithRelations = AdvisoryClientMaster & AdvisoryClientMasterRelations;
