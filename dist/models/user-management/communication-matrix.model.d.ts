import { BaseSQLModel } from '..';
export declare class CommunicationMatrix extends BaseSQLModel {
    modeEmail: boolean;
    modeSms: boolean;
    modePush: boolean;
    toggleNotification?: boolean;
    communicationTopicId: number;
    accountId: number;
    [prop: string]: any;
    constructor(data?: Partial<CommunicationMatrix>);
}
export interface CommunicationMatrixRelations {
}
export declare type CommunicationMatrixWithRelations = CommunicationMatrix & CommunicationMatrixRelations;
