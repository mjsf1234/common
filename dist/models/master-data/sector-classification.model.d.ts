import { BaseSQLModel } from '..';
export declare class SectorClassification extends BaseSQLModel {
    name: string;
    description?: string;
    bosCode?: string;
    fundooCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<SectorClassification>);
}
export interface SectorClassificationRelations {
}
export declare type SectorClassificationWithRelations = SectorClassification & SectorClassificationRelations;
