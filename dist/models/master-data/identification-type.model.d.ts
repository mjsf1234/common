import { BaseSQLModel } from '..';
export declare class IdentificationType extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<IdentificationType>);
}
export interface IdentificationTypeRelations {
}
export declare type IdentificationTypeWithRelations = IdentificationType & IdentificationTypeRelations;
