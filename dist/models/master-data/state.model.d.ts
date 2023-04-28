import { Address, BaseSQLModel } from '..';
export declare class State extends BaseSQLModel {
    id?: number;
    name: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    bseCodeForFatca?: string;
    cvlCode?: string;
    camsCode?: string;
    fatcaCode?: string;
    shortName?: string;
    stateCode?: string;
    mapCode?: string;
    karvyCode?: string;
    countryId?: number;
    addresses?: Address[];
    [prop: string]: any;
    constructor(data?: Partial<State>);
}
export interface StateRelations {
}
export declare type StateWithRelations = State & StateRelations;
