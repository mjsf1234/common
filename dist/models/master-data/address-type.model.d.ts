import { BaseSQLModel } from '..';
export declare class AddressType extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<AddressType>);
}
export interface AddressTypeRelations {
}
export declare type AddressTypeWithRelations = AddressType & AddressTypeRelations;
