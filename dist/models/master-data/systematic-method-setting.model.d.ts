import { BaseSQLModel } from '..';
export declare class SystematicMethodSetting extends BaseSQLModel {
    bseCode?: string;
    bosCode?: string;
    minInstallmentNumber?: number;
    maxInstallmentNumber?: number;
    sipMinimumGap?: number;
    sipMaximumGap?: number;
    multiplier?: number;
    minInstallmentAmount?: number;
    maxInstallmentAmount?: number;
    dates?: string;
    frequency?: number;
    transactionMode?: string;
    systematicMethodType?: number;
    mutualFundDetailsId: number;
    [prop: string]: any;
    constructor(data?: Partial<SystematicMethodSetting>);
}
export interface SystematicMethodSettingRelations {
}
export declare type SystematicMethodSettingWithRelations = SystematicMethodSetting & SystematicMethodSettingRelations;
