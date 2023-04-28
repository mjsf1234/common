import { BaseSQLModel } from '..';
export declare class ServiceProvider extends BaseSQLModel {
    name: string;
    shortName?: string;
    description?: string;
    serviceProviderType: number;
    primaryAMCCode?: string;
    secondaryAMCCode?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    fundooCode?: string;
    bankAccountNumber?: string;
    logo?: string;
    status?: number;
    website?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    city?: string;
    pincode?: string;
    phone?: string;
    email?: string;
    rtaId?: number;
    bankBranchId?: number;
    [prop: string]: any;
    constructor(data?: Partial<ServiceProvider>);
}
export interface ServiceProviderRelations {
}
export declare type ServiceProviderWithRelations = ServiceProvider & ServiceProviderRelations;
