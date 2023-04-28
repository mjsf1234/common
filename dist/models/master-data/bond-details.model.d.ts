import { BaseSQLModel } from '..';
export declare class BondDetails extends BaseSQLModel {
    frequency?: string;
    gsecCode?: string;
    securities?: string;
    type?: string;
    coupon?: number;
    faceValue?: number;
    issueDate?: Date;
    maturityDate?: Date;
    putCallDate?: Date;
    paidUpValue?: number;
    instrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<BondDetails>);
}
export interface BondDetailsRelations {
}
export declare type BondDetailsWithRelations = BondDetails & BondDetailsRelations;
