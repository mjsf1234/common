import { BaseSQLModel } from '..';
export declare class Distributor extends BaseSQLModel {
    id?: number;
    name: string;
    shortName?: string;
    description?: string;
    uniqueId?: string;
    brokerCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<Distributor>);
}
export interface DistributorRelations {
}
export declare type DistributorWithRelations = Distributor & DistributorRelations;
