import { BaseSQLModel } from '..';
export declare class Address extends BaseSQLModel {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    fullAddress?: string;
    pincode?: string;
    district?: string;
    city?: string;
    contactNumber?: string;
    landmark?: string;
    addressTypeId?: number;
    stateId?: number;
    [prop: string]: any;
    constructor(data?: Partial<Address>);
}
export interface AddressRelations {
}
export declare type AddressWithRelations = Address & AddressRelations;
