import { BaseSQLModel, PaymentDetails } from '..';
import { Mandate } from './mandate.model';
export declare class BankAccount extends BaseSQLModel {
    accountName: string;
    accountNumber: string;
    bosCode?: string;
    isDefault: boolean;
    isChequeUploaded?: boolean;
    isPennydropVerified?: boolean;
    bankAccountStatus?: number;
    accountId: number;
    bankBranchId: number;
    bankAccountTypeId: number;
    holdingTypeId?: number;
    investorTypeId?: number;
    chequeImageFileId?: number;
    mandates?: Mandate[];
    paymentDetails?: PaymentDetails[];
    [prop: string]: any;
    constructor(data?: Partial<BankAccount>);
}
export interface BankAccountRelations {
}
export declare type BankAccountWithRelations = BankAccount & BankAccountRelations;
