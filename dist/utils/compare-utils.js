"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareUtils = void 0;
const _ = require('underscore');
const util = require('util');
const ignoredKeys = ['lastModifiedDate'];
class CompareUtils {
    //Util function to help us out at the time of audit logging
    static getBeforeAfterDifference(beforeChange, afterChange, ignoredKeys) {
        let keys1 = _.keys(beforeChange);
        let keys2 = _.keys(afterChange);
        let allKeys = keys1.concat(keys2);
        allKeys = _.uniq(allKeys);
        let diff = {};
        _.each(allKeys, (key) => {
            let afterChangeValue = afterChange[key] && typeof afterChange[key] == 'object' ? util.inspect(afterChange[key]) : afterChange[key];
            if (!key.startsWith('__') && beforeChange[key] !== afterChangeValue && ignoredKeys.indexOf(key) == -1) {
                diff[key] = {
                    beforeChange: beforeChange[key],
                    afterChange: afterChange[key]
                };
            }
        });
        return diff;
    }
    static isASupersetOfB(a, b) {
        return b.every((val) => {
            return a.indexOf(val) >= 0;
        });
    }
    static checkNumericEqualityWithScale(number1, number2, scale = 3) {
        if (number1 != null &&
            number1 != undefined &&
            number2 != null &&
            number2 != undefined &&
            !Number.isNaN(number1) &&
            !Number.isNaN(number2) &&
            number1.toFixed(scale) == number2.toFixed(scale)) {
            return true;
        }
        return false;
    }
}
exports.CompareUtils = CompareUtils;
//# sourceMappingURL=compare-utils.js.map