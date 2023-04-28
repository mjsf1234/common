"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBFUtils = void 0;
const tslib_1 = require("tslib");
const xlsx_1 = (0, tslib_1.__importDefault)(require("xlsx"));
class DBFUtils {
    static converDBFToJSON(dbfFileObject, headerMapping, xlsxOptions = {}) {
        xlsxOptions = xlsxOptions || {};
        xlsxOptions.dense = true;
        const meta = {
            rowStart: 0
        };
        // headerMapping: key(usrColumn): val(myColumn)
        const workbook = xlsx_1.default.read(dbfFileObject, xlsxOptions);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const headers = {};
        const data = [];
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
                }
                else {
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
    static getJsDateFromExcel(excelDate) {
        return new Date((excelDate - (25567 + 2)) * 86400 * 1000); //+2 because for weird dbf offset
    }
}
exports.DBFUtils = DBFUtils;
//# sourceMappingURL=dbf-utils.js.map