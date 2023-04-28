import {Transaction} from '@loopback/repository';
import {LoggingUtils} from '.';

export abstract class DBTransactionUtils {
  public static async rollback(tx: Transaction | any, methodName: string) {
    LoggingUtils.info(`Before rollback => ${methodName}`);
    if (tx && tx.connection && tx.connection.txId) {
      await tx.rollback();
    }
    tx = null;
    LoggingUtils.info(`After rollback => ${methodName}`);
  }

  public static async commit(tx: Transaction | any, methodName: string) {
    LoggingUtils.info(`Before Commit => ${methodName}`);
    if (tx && tx.connection && tx.connection.txId) {
      await tx.commit();
    }
    tx = null;
    LoggingUtils.info(`After Commit => ${methodName}`);
  }
}
