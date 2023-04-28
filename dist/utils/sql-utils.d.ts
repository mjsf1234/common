import { DataSource } from '@loopback/repository';
export declare abstract class SQLUtils {
    static executeSQL(datasource: DataSource, sql: string, params: Array<any>, callback?: Function): Promise<any>;
}
