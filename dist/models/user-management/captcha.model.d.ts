import { BaseSQLModel } from '..';
export declare class Captcha extends BaseSQLModel {
    captchaText: string;
    svg: string;
    uniqueId: string;
    expiry: Date;
    [prop: string]: any;
    constructor(data?: Partial<Captcha>);
}
export interface CaptchaRelations {
}
export declare type CaptchaWithRelations = Captcha & CaptchaRelations;
