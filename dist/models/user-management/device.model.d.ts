import { IdcomDetails } from '.';
import { BaseSQLModel } from '..';
export declare class Device extends BaseSQLModel {
    uniqueId: string;
    publicKey: string;
    deviceName?: string;
    osName?: string;
    versionName?: string;
    versionCode?: string;
    osSDKVersion?: string;
    bindingData?: string;
    mpinSetup?: boolean;
    biometricSetup?: boolean;
    biometricToken?: string;
    registeredDate?: Date;
    appUserId?: number | null;
    preLoginUserId?: number;
    appVersionId?: number;
    idcomDetails?: IdcomDetails[];
    [prop: string]: any;
    constructor(data?: Partial<Device>);
}
export interface DeviceRelations {
}
export declare type DeviceWithRelations = Device & DeviceRelations;
