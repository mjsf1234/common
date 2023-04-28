import { BaseSQLModel } from '..';
export declare class InstrumentSebiCategory extends BaseSQLModel {
    id?: number;
    name: string;
    bosCode?: string;
    shortName?: string;
    description?: string;
    fundooCode?: string;
    config?: object;
    [prop: string]: any;
    constructor(data?: Partial<InstrumentSebiCategory>);
}
export interface InstrumentSebiCategoryRelations {
}
export declare type InstrumentSebiCategoryWithRelations = InstrumentSebiCategory & InstrumentSebiCategoryRelations;
