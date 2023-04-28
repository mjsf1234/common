import { BaseSQLModel } from '..';
export declare class WmsGenericMessage extends BaseSQLModel {
    id?: number;
    errorCode: string;
    errorMessage: string;
    custErrorCode: string;
    wmsGenericMessageStatus: number;
    inquiryFlag?: boolean;
    [prop: string]: any;
    constructor(data?: Partial<WmsGenericMessage>);
}
export interface WmsGenericMessageRelations {
}
export declare type WmsGenericMessageWithRelations = WmsGenericMessage & WmsGenericMessageRelations;
