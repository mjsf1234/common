import { BaseSQLModel } from '..';
export declare class AccountServiceProviderAccountInstrumentMapping extends BaseSQLModel {
    isForceMapped?: boolean;
    accountId: number;
    serviceProviderAccountId: number;
    instrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<AccountServiceProviderAccountInstrumentMapping>);
}
export interface AccountServiceProviderAccountInstrumentMappingRelations {
}
export declare type AccountServiceProviderAccountInstrumentMappingWithRelations = AccountServiceProviderAccountInstrumentMapping & AccountServiceProviderAccountInstrumentMappingRelations;
