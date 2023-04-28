import { BaseSQLModel } from '..';
export declare class InstrumentCategoryGroup extends BaseSQLModel {
    id?: number;
    name: string;
    [prop: string]: any;
    constructor(data?: Partial<InstrumentCategoryGroup>);
}
export interface InstrumentCategoryGroupRelations {
}
export declare type InstrumentCategoryGroupWithRelations = InstrumentCategoryGroup & InstrumentCategoryGroupRelations;
