/// <reference types="express" />
import { Request } from '@loopback/rest';
export declare class RoleResolver {
    private request;
    private url;
    private modelName;
    private requestParams;
    private requestQuery;
    private pathId;
    private userProfile;
    constructor(requestObj: Request, userProfile: any);
    resolveRoles: () => Array<String>;
    private isOwner;
    private isPrimaryAccountOwner;
}
