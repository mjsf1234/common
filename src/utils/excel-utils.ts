import Excel, {AddWorksheetOptions, Column, Workbook, WorkbookProperties, Xlsx} from 'exceljs';
import _, {throttle} from 'underscore';
import XLSX, {ParsingOptions} from 'xlsx';
//import base64Img from 'base64-img';
import path from 'path';
import moment from 'moment-timezone';

export abstract class ExcelUtils {
  public static createExcel(
    workbook: Workbook | null,
    sheetName: string = 'Sheet 1',
    headers: any,
    records: Array<any>,
    options: any = {useStyles: true, useSharedStrings: true}
  ): Workbook {
    workbook = workbook || new Excel.Workbook();
    let worksheet = workbook.addWorksheet(sheetName, options);
    worksheet.columns = headers;
    _.each(records, function (record) {
      worksheet.addRow(record);
    });
    return workbook;
  }

  public static createCSV(
    headers: Array<Column>,
    records: Array<any>,
    options: any = {useStyles: true, useSharedStrings: true, delimiter: ',', headers: true}
  ): Workbook {
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('Sheet 1');
    worksheet.columns = headers;
    _.each(records, function (record) {
      worksheet.addRow(record);
    });
    return workbook;
  }

  public static createTSV(
    headers: Array<Column>,
    records: Array<any>,
    options: any = {useStyles: true, useSharedStrings: true, delimiter: '\t', headers: true}
  ): Workbook {
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('Sheet 1', options);
    worksheet.columns = headers;
    _.each(records, function (record) {
      worksheet.addRow(record);
    });
    return workbook;
  }

  public static getJsDateFromExcel(excelDate: number): Date | null {
    if (typeof excelDate == 'number') {
      return new Date((excelDate - (25567 + 2)) * 86400 * 1000);
    } else if (typeof excelDate === "string") {
      let date = moment(excelDate, "DD/MM/YYYY").format("MM/DD/YYYY");
      let dateJs = new Date(date);
      let converted = 25569.0 +(dateJs.getTime() - dateJs.getTimezoneOffset() * 60 * 1000) / (1000 * 60 * 60 * 24);
      let dateJsConverted = new Date((converted - (25567 + 2)) * 86400 * 1000);
      return dateJsConverted;
    } else if (moment(excelDate).isValid()) {
      return moment(excelDate).toDate();
    } else {
      return null;
    }
  }

  public static convertExcelFileBufferToJSON(
    bufferObject: Buffer,
    headerMapping: any,
    xlsxOptions: ParsingOptions,
    meta: any = {rowStart: 1}
  ): any {
    // headerMapping: key(usrColumn): val(myColumn)
    let workbook = XLSX.read(bufferObject, xlsxOptions);
    let worksheet = workbook.Sheets[workbook.SheetNames[0]];
    let headers: any = {};
    let data: Array<any> = [];
    let metaData: Array<any> = [];
    for (let z in worksheet) {
      if (z[0] === '!') {
        continue;
      }
      let col = z.match(/[a-zA-Z]/gi)!.join('');
      let row = parseInt(z.match(/[0-9]/gi)!.join(''));
      if (row < meta.rowStart) {
        metaData.push({metaInfo: worksheet[z].v});
        continue;
      }
      let value = worksheet[z].v;
      if (row == meta.rowStart) {
        headers[col] = value;
        continue;
      }
      if (!data[row]) {
        data[row] = {};
      }

      if (headerMapping && headerMapping[headers[col]]) {
        data[row][headerMapping[headers[col]]] = value;
      } else {
        data[row][headers[col]] = value;
      }
    }

    // if (validateHeaders && !Object.keys(headerMapping).every(val => Object.values(headers).includes(val))) {
    //   throw new RestError(500, `Uploaded data is not in proper format`);
    // }

    let rowsToRemove = meta.rowStart;
    while (rowsToRemove > -1) {
      data.shift();
      rowsToRemove -= 1;
    }
    let actualData = metaData.concat(data);
    return actualData;
  }

  public static convertExcelToJSON(path: string, headerMapping: any, meta: any): Array<any> {
    meta = meta || {};
    if (!meta.rowStart) {
      meta.rowStart = 1;
    }

    // headerMapping: key(usrColumn): val(myColumn)
    let sheetIndex = 0;
    let workbook = XLSX.readFile(path);
    if (meta.sheetName) {
      if (workbook.SheetNames.indexOf(meta.sheetName) > -1) {
        sheetIndex = workbook.SheetNames.indexOf(meta.sheetName);
      } else {
        throw new Error('File not found on given path ' + path);
      }
    }
    let worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];
    let headers: any = {};
    let data: Array<any> = [];
    for (let z in worksheet) {
      if (z[0] === '!') {
        continue;
      }
      let col = z.match(/[a-zA-Z]/gi)!.join('');
      let row = parseInt(z.match(/[0-9]/gi)!.join(''));
      if (row < meta.rowStart) {
        continue;
      }
      let value = worksheet[z].v;
      if (row == meta.rowStart) {
        headers[col] = ('' + value).trim();
        continue;
      }
      if (!data[row]) {
        data[row] = {};
      }
      if (headerMapping && headerMapping[headers[col]]) {
        data[row][headerMapping[headers[col]]] = value;
      } else {
        data[row][headers[col]] = value;
      }
    }

    let rowsToRemove = meta.rowStart;
    while (rowsToRemove > -1) {
      data.shift();
      rowsToRemove -= 1;
    }
    return data;
  }

  public static createExcelReportWithBranding(
    workbook: Workbook | null,
    sheetName = 'Sheet 1',
    headers: any,
    records: Array<any>,
    options: any = {useStyles: true, useSharedStrings: true},
    additionalOptions: any = {}
  ): Workbook {
    workbook = workbook || new Excel.Workbook();
    let worksheet = workbook.addWorksheet(sheetName, options);
    let logo = workbook.addImage({
      //base64: base64Img.base64Sync(''), //@todo give path to logo file
      extension: 'png'
    });
    let imageSize = additionalOptions.imageSize || {
      tl: {col: 0.1, row: 0},
      br: {col: 2.5, row: 4}
    };
    let customData = additionalOptions.customData || {};
    let dataStartRow = additionalOptions.dataStartRow || 6;
    let keys = Object.keys(customData); //taking all the keys of the customData object
    _.each(keys, function (key) {
      worksheet.getCell(key).value = customData[key];
    });
    worksheet.addImage(logo, imageSize);
    worksheet.getRow(dataStartRow).values = _.pluck(headers, 'header');
    worksheet.getRow(dataStartRow).font = {bold: true};
    worksheet.getRow(dataStartRow).alignment = {horizontal: 'center'};
    let i = dataStartRow + 1; //start row
    _.each(records, function (record) {
      let rowData: Array<any> = [];
      _.each(headers, function (header) {
        rowData.push(record[header.key]);
      });
      worksheet.getRow(i).values = rowData;
      i++;
    });
    _.each(headers, function (header, index) {
      if (header.width) {
        worksheet.getColumn(index + 1).width = 16;
      }
      if (header.style && header.style.numFmt) {
        worksheet.getColumn(index + 1).numFmt = header.style.numFmt;
      }
      if (header.style && header.style.alignment) {
        worksheet.getColumn(index + 1).alignment = header.style.alignment;
        worksheet.getRow(6).getCell(index + 1).alignment = {horizontal: 'center'};
      }
      if (header.style && header.style.fill) {
        worksheet.getRow(6).getCell(index + 1).fill = header.style.fill;
      }
      if (header.style && header.style.font) {
        worksheet.getRow(6).getCell(index + 1).font = header.style.font;
      }
    });
    i += 2;
    worksheet.getRow(i).values = ['All values in INR'];
    worksheet.mergeCells(i, 1, i, headers && headers.length <= 10 ? headers.length : 10);
    worksheet.getRow(i).alignment = {wrapText: true};
    i += 1;
    let disclaimer = 'Disclaimer: ' + ''; //@TODO - put disclaimer text here from some config
    if (options && options.additionalDisclaimer) {
      disclaimer += options.additionalDisclaimer;
    }
    worksheet.getRow(i).values = [disclaimer];
    worksheet.mergeCells(i, 1, i + 9, headers && headers.length <= 10 ? headers.length : 10);
    worksheet.getRow(i).font = {size: 8};
    worksheet.getRow(i).alignment = {vertical: 'top', horizontal: 'left', wrapText: true};
    return workbook;
  }
}
