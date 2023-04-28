/// <reference types="node" />
import { Column, Workbook } from 'exceljs';
import { ParsingOptions } from 'xlsx';
export declare abstract class ExcelUtils {
    static createExcel(workbook: Workbook | null, sheetName: string | undefined, headers: any, records: Array<any>, options?: any): Workbook;
    static createCSV(headers: Array<Column>, records: Array<any>, options?: any): Workbook;
    static createTSV(headers: Array<Column>, records: Array<any>, options?: any): Workbook;
    static getJsDateFromExcel(excelDate: number): Date | null;
    static convertExcelFileBufferToJSON(bufferObject: Buffer, headerMapping: any, xlsxOptions: ParsingOptions, meta?: any): any;
    static convertExcelToJSON(path: string, headerMapping: any, meta: any): Array<any>;
    static createExcelReportWithBranding(workbook: Workbook | null, sheetName: string | undefined, headers: any, records: Array<any>, options?: any, additionalOptions?: any): Workbook;
}
