/// <reference types="node" />
export declare abstract class DBFUtils {
    static converDBFToJSON(dbfFileObject: Buffer, headerMapping: any, xlsxOptions?: any): object;
    static getJsDateFromExcel(excelDate: number): Date;
}
