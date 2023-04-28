import { BaseSQLModel } from '..';
export declare class OverseesAddress extends BaseSQLModel {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    pincode: string;
    city: string;
    state?: string;
    contactNumber?: string;
    landmark?: string;
    countryId: number;
    addressTypeId?: number;
    [prop: string]: any;
    constructor(data?: Partial<OverseesAddress>);
}
export interface OverseesAddressRelations {
}
export declare type OverseesAddressWithRelations = OverseesAddress & OverseesAddressRelations;
