import { BaseSQLModel, CommunicationMatrix } from '..';
export declare class CommunicationTopic extends BaseSQLModel {
    id?: number;
    topic: string;
    category: string;
    subCategory: string;
    emailTemplate?: string;
    smsTemplate?: string;
    pushNotificationTemplate?: string;
    description?: string;
    modeEmail: boolean;
    modeSms: boolean;
    modePush: boolean;
    toggleNotification?: boolean;
    tempId?: string;
    communicationMatrix?: CommunicationMatrix[];
    [prop: string]: any;
    constructor(data?: Partial<CommunicationTopic>);
}
export interface CommunicationTopicRelations {
}
export declare type CommunicationTopicWithRelations = CommunicationTopic & CommunicationTopicRelations;
