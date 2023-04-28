import { BaseSQLModel, DepositDetails, OrderItem } from '..';
import { Gain } from './gain.model';
import { HistoricalHolding } from './historical-holding.model';
import { Holding } from './holding.model';
import { SystematicMethod } from './systematic-method.model';
import { Transaction } from './transaction.model';
import { AuditTrail } from '../../models';
export declare class ServiceProviderAccount extends BaseSQLModel {
    accountNumber: string;
    oldAccountNumber: string;
    serviceProviderAccountName?: string;
    type?: number;
    bosCode?: string;
    registeredEmail?: string;
    coupon?: number;
    registeredMobile?: string;
    ContactDetailsUpdatedOn?: Date;
    maturityDate?: Date;
    accrualFrequency?: number;
    isForceMapped?: boolean;
    isHeldAway: boolean;
    accountId: number;
    serviceProviderId: number;
    transactions?: Transaction[];
    orderItems?: OrderItem[];
    holdings?: Holding[];
    systematicMethods?: SystematicMethod[];
    historicalHoldings?: HistoricalHolding[];
    gains?: Gain[];
    depositDetails?: DepositDetails[];
    auditTrail?: AuditTrail;
    [prop: string]: any;
    constructor(data?: Partial<ServiceProviderAccount>);
}
export interface ServiceProviderAccountRelations {
}
export declare type ServiceProviderAccountWithRelations = ServiceProviderAccount & ServiceProviderAccountRelations;
