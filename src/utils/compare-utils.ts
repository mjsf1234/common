const _ = require('underscore');
const util = require('util');
const ignoredKeys = ['lastModifiedDate'];
export abstract class CompareUtils {
  //Util function to help us out at the time of audit logging
  public static getBeforeAfterDifference(beforeChange: any, afterChange: any, ignoredKeys: Array<any>) {
    let keys1 = _.keys(beforeChange);
    let keys2 = _.keys(afterChange);
    let allKeys = keys1.concat(keys2);
    allKeys = _.uniq(allKeys);

    let diff: any = {};
    _.each(allKeys, (key: any) => {
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

  public static isASupersetOfB(a: any, b: any) {
    return b.every((val: any) => {
      return a.indexOf(val) >= 0;
    });
  }

  public static checkNumericEqualityWithScale(number1: number, number2: number, scale = 3) {
    if (
      number1 != null &&
      number1 != undefined &&
      number2 != null &&
      number2 != undefined &&
      !Number.isNaN(number1) &&
      !Number.isNaN(number2) &&
      number1.toFixed(scale) == number2.toFixed(scale)
    ) {
      return true;
    }
    return false;
  }
}
