import { State } from '.';
import { BaseSQLModel, OverseesAddress } from '..';
export declare class Country extends BaseSQLModel {
    name: string;
    shortName?: string;
    countryCode?: string;
    bosCode?: string;
    nseCode?: string;
    bseCodeForNationality?: string;
    bseCodeForRegistration?: string;
    cvlCode?: string;
    camsCode?: string;
    fatcaCode?: string;
    states?: State[];
    overseesAddresses?: OverseesAddress[];
    [prop: string]: any;
    constructor(data?: Partial<Country>);
}
export interface CountryRelations {
}
export declare type CountryWithRelations = Country & CountryRelations;
