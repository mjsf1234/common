import { BaseSQLModel } from '..';
import { RtaHoldingReconciliation } from './rta-holding-reconciliation.model';
export declare class RtaHolding extends BaseSQLModel {
    name: string;
    remarks?: string;
    status: number;
    rtaId: number;
    uploadedByAppUserId: number;
    transactionAppFileId: number;
    rtaReconciliationFileId?: number;
    rtaHoldingReconciliations?: RtaHoldingReconciliation[];
    [prop: string]: any;
    constructor(data?: Partial<RtaHolding>);
}
export interface RtaHoldingRelations {
}
export declare type RtaHoldingWithRelations = RtaHolding & RtaHoldingRelations;
