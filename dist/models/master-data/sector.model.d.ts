import { BaseSQLModel } from '..';
export declare class Sector extends BaseSQLModel {
    name: string;
    description?: string;
    bosCode?: string;
    fundooCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<Sector>);
}
export interface SectorRelations {
}
export declare type SectorWithRelations = Sector & SectorRelations;
