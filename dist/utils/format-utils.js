"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatUtils = void 0;
const he = require('he');
class FormatUtils {
    static formatMobileNumber(mobileNumber) {
        let str = '' + mobileNumber;
        if (str.length == 13 && str.indexOf('+91')) {
            str = str.substring(3, 13);
        }
        else if (str.length == 12 && str.indexOf('91')) {
            str.substring(2, 12);
        }
        else if (str.length == 11 && str.indexOf('0')) {
            str.substring(1, 11);
        }
        else if (str.length == 10) {
            str = str;
        }
        else {
            return new Error('Invalid mobile number');
        }
        return parseInt(str);
    }
    static prependSpaces(number, digits) {
        number = number.toString();
        const nArray = number.split('');
        let formattedNo = '';
        for (let j = 0; j < digits - nArray.length; j++) {
            formattedNo += ' ';
        }
        for (let i = 0; i < nArray.length; i++) {
            formattedNo += nArray[i];
        }
        return formattedNo;
    }
    static prependZeros(number, digits) {
        number = number.toString();
        const nArray = number.split('');
        let formattedNo = '';
        for (let j = 0; j < digits - nArray.length; j++) {
            formattedNo += '0';
        }
        for (let i = 0; i < nArray.length; i++) {
            formattedNo += nArray[i];
        }
        return formattedNo;
    }
    static getCurrencySuffix(amount) {
        let suffix;
        if (!amount || amount < 1001) {
            suffix = '';
        }
        else if (amount >= 1001 && amount < 100001) {
            suffix = 'K';
        }
        else if (amount >= 100001 && amount < 10000001) {
            suffix = 'L';
        }
        else {
            suffix = 'Crs.';
        }
        return suffix;
    }
    static formatAmount(amount, suffix, decimalPlaces = 0) {
        let suffixMapping = {
            K: 1000,
            L: 100000,
            Cr: 10000000,
            'Crs.': 10000000
        };
        if (isNaN(amount)) {
            return '';
        }
        else if (!suffixMapping[suffix]) {
            return Number(amount).toFixed(decimalPlaces);
        }
        else {
            return (amount / suffixMapping[suffix]).toFixed(decimalPlaces);
        }
    }
    static toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    static getFinancialYearFromDate(date) {
        date = new Date(date);
        let financialYear = '';
        if (date.getMonth() + 1 <= 3) {
            financialYear = date.getFullYear() - 1 + '-' + (date.getFullYear());
        }
        else {
            financialYear = date.getFullYear() + '-' + (date.getFullYear() + 1);
        }
        return financialYear;
    }
    static panMaskFormat(str) {
        if (str) {
            return str.slice(0, 3) + str.slice(3, -2).replace(/[A-Za-z0-9]/g, '*') + str.slice(-2);
        }
        return '****';
    }
    static encodeSpecialCharsInString(str) {
        if (!str) {
            return '';
        }
        return he.encode(str);
    }
}
exports.FormatUtils = FormatUtils;
//# sourceMappingURL=format-utils.js.map