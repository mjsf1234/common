import Excel from 'exceljs';
import _ from 'underscore';
import XLSX from 'xlsx';

export abstract class DBFUtils {
  public static converDBFToJSON(dbfFileObject: Buffer, headerMapping: any, xlsxOptions: any = {}): object {
    xlsxOptions = xlsxOptions || {};
    xlsxOptions.dense = true;
    const meta = {
      rowStart: 0
    };

    // headerMapping: key(usrColumn): val(myColumn)
    const workbook = XLSX.read(dbfFileObject, xlsxOptions);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const headers: any = {};
    const data: any = [];
    for (const row in worksheet) {
      if (row === '!' || row === '!ref') {
        continue;
      }
      if (Number.parseInt(row) < meta.rowStart) {
        continue;
      }
      if (!data[row]) {
        data[row] = {};
      }
      for (const column in worksheet[row]) {
        const value = worksheet[row][column].v;
        if (Number.parseInt(row) == meta.rowStart) {
          headers[column] = value;
          continue;
        }
        if (headerMapping && headerMapping[headers[column]]) {
          data[row][headerMapping[headers[column]]] = value;
        } else {
          data[row][headers[column]] = value;
        }
      }
    }

    let rowsToRemove = meta.rowStart;
    while (rowsToRemove > -1) {
      data.shift();
      rowsToRemove -= 1;
    }
    return data;
  }

  public static getJsDateFromExcel(excelDate: number): Date {
    return new Date((excelDate - (25567 + 2)) * 86400 * 1000); //+2 because for weird dbf offset
  }
}
