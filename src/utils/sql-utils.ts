import {DataSource} from '@loopback/repository';
import {LoggingUtils} from './logging-utils';
export abstract class SQLUtils {
  public static async executeSQL(datasource: DataSource, sql: string, params: Array<any>, callback?: Function): Promise<any> {
    const promise = new Promise(function (resolve, reject) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      datasource.connector.execute(sql, params, function (err: Error, result: any) {
        if (err) {
          LoggingUtils.error(err);
          return reject(err);
        } else {
          return resolve(result);
        }
      });
    });

    if (callback && typeof callback == 'function') {
      promise
        .then(function (data) {
          callback(null, data);
        })
        .catch(function (err) {
          callback(err);
        });
    } else {
      return promise;
    }
  }
}
