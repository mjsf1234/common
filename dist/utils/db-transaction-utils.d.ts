import { Transaction } from '@loopback/repository';
export declare abstract class DBTransactionUtils {
    static rollback(tx: Transaction | any, methodName: string): Promise<void>;
    static commit(tx: Transaction | any, methodName: string): Promise<void>;
}
