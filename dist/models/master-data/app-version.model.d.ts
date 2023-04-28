import { BaseSQLModel } from '..';
export declare class AppVersion extends BaseSQLModel {
    currentAppVersion: string;
    osType?: number;
    status?: number;
    isForceUpdate?: boolean;
    buildNumber: string;
    config?: any;
    releaseDate: Date;
    activeVersionFlag: boolean;
    [prop: string]: any;
    constructor(data?: Partial<AppVersion>);
}
export interface AppVersionRelations {
}
export declare type AppVersionWithRelations = AppVersion & AppVersionRelations;
