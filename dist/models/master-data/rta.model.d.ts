import { BaseSQLModel, CsrFatca } from '..';
export declare class Rta extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    csrFatca?: CsrFatca[];
    [prop: string]: any;
    constructor(data?: Partial<Rta>);
}
export interface RtaRelations {
}
export declare type RtaWithRelations = Rta & RtaRelations;
