import { BaseSQLModel, OrderItem, SystematicMethodStatusHistory } from '..';
export declare class SystematicMethod extends BaseSQLModel {
    frequency: number;
    frequencyDay?: number;
    type: number;
    status: number;
    transactionCount?: number;
    startDate: Date;
    endDate?: Date;
    firstExecutionDate?: Date;
    nextExecutionDate?: Date;
    quantity?: number;
    amount?: number;
    bosCode?: string;
    systematicRegistrationNumber?: string;
    nseCode?: string;
    bseCode?: string;
    previousExecutionDate?: Date;
    currentInstallmentNo?: number;
    availableDates?: string;
    goalTypeLabel?: string;
    toScheme?: number;
    accountId: number;
    mandateId?: number;
    serviceProviderAccountId?: number;
    currencyId: number;
    instrumentId: number;
    goalId?: number;
    orderItems?: OrderItem[];
    statusHistories?: SystematicMethodStatusHistory[];
    [prop: string]: any;
    constructor(data?: Partial<SystematicMethod>);
}
export interface SystematicMethodRelations {
}
export declare type SystematicMethodWithRelations = SystematicMethod & SystematicMethodRelations;
