import { BaseSQLModel } from '..';
export declare class ServiceProviderAccountReconciliation extends BaseSQLModel {
    accountNumber?: string;
    oldAccountNumber?: string;
    remarks?: string;
    status: number;
    serviceProviderId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ServiceProviderAccountReconciliation>);
}
export interface ServiceProviderAccountReconciliationRelations {
}
export declare type ServiceProviderAccountReconciliationWithRelations = ServiceProviderAccountReconciliation & ServiceProviderAccountReconciliationRelations;
