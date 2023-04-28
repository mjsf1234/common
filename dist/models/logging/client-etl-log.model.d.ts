import { BaseDataDumpModel } from '..';
export declare class ClientEtlLog extends BaseDataDumpModel {
    date: Date;
    errorMessage?: string;
    fileType: number;
    issuerName?: string;
    serviceProviderName?: string;
    logGenTime?: Date;
    [prop: string]: any;
    constructor(data?: Partial<ClientEtlLog>);
}
export interface ClientEtlLogRelations {
}
export declare type ClientEtlLogWithRelations = ClientEtlLog & ClientEtlLogRelations;
