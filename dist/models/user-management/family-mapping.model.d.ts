import { BaseSQLModel } from '..';
export declare class FamilyMapping extends BaseSQLModel {
    name?: string;
    familyRequestStatus: number;
    numberOfRejects?: number;
    lastRejectDate?: Date;
    newRequestDate?: Date;
    parentId: number;
    childId: number;
    [prop: string]: any;
    constructor(data?: Partial<FamilyMapping>);
}
export interface FamilyMappingRelations {
}
export declare type FamilyMappingWithRelations = FamilyMapping & FamilyMappingRelations;
