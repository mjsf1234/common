import _ from 'underscore';
import {SortUtils} from './sort-utils';

export abstract class ObjectUtils {
  public static format(data: any): any {
    let self = this;
    if (!Array.isArray(data) && typeof data === 'object') {
      // if its an object
      for (let k in data) {
        data[k] = self.format(data[k]);
      }
    } else if (Array.isArray(data) && typeof data === 'object') {
      // if its an array
      /**
       * @TODO handle Nested Objects
       * **/
      SortUtils.sort(data);
    }
    return data;
  }

  public static deepToFlat(obj: any, {delimiter = '.'} = {}, keysToDecode: any, encodeDecode: any): any {
    return ObjectUtils.flattenObject(obj, null, {delimiter}, keysToDecode, encodeDecode);
  }

  public static flattenObject(obj: any, current: any, settings: any, keysToDecode: any, encodeDecode: any): any {
    const {delimiter} = settings;
    let flattenedObject: any = {};
    _.each(_.keys(obj), key => {
      let newKey = current ? current + delimiter + key : key;
        if (obj && obj[key] && obj[key].getMonth){
          if (Object.keys(keysToDecode).indexOf(key) !== -1){
            if(encodeDecode){
              obj[key].setHours(obj[key].getHours() + 5);
              obj[key].setMinutes(obj[key].getMinutes() + 30);
            }
            flattenedObject[newKey] = JSON.stringify(obj[key]);
            flattenedObject[newKey] = flattenedObject[newKey].substring(1, 11);
          }
        }
      if (typeof obj[key] === 'object') {
        _.extend(flattenedObject, ObjectUtils.flattenObject(obj[key], newKey, settings, keysToDecode, encodeDecode));
      } else {
        flattenedObject[newKey] = obj[key];
      }
    });
    return flattenedObject;
  }

  public static flatToDeep(obj: any, {delimiter = '.'} = {}, keysToEncode: any): any {
    const result: any = {};
    for (let key in obj) {
      const keys = key.split(delimiter);
      keys.reduce((memo: any, k, index) => {
        return memo[k] || (memo[k] = isNaN(Number(keys[index + 1])) ? (keys.length - 1 == index ? obj[key] : {}) : []);
      }, result);
    }
    if(keysToEncode){
      _.each(result, (propertyValue: any, resultKey: string) => {
        _.each(keysToEncode, (propertyObject: any, propertyKey: string) => {
          if (propertyObject && propertyObject.postgresql && propertyObject.postgresql.dataType && propertyObject.postgresql.dataType == 'DATE') {
            if (resultKey === propertyKey){
              propertyValue = new Date(propertyValue);
              result[propertyKey] = propertyValue;
            }
          }
        });
      });
    }
    return result;
  }

  /**
   * Function picked from https://github.com/kurtmilam/underscoreDeepExtend/blob/master/index.js
   */
  public static deepExtend(obj: any): any {
    let parentRE = /#{\s*?_\s*?}/;
    let source: any;

    var isAssign = function (oProp: any, sProp: any) {
      return _.isUndefined(oProp) || _.isNull(oProp) || _.isFunction(oProp) || _.isNull(sProp) || _.isDate(sProp);
    };

    var procAssign = function (oProp: any, sProp: any, propName: any) {
      // Perform a straight assignment
      // Assign for object properties & return for array members
      return (obj[propName] = _.clone(sProp));
    };

    var hasRegex = function (oProp: any, sProp: any) {
      return _.isString(sProp) && parentRE.test(sProp);
    };

    var procRegex = function (oProp: any, sProp: any, propName: any) {
      // Perform a string.replace using parentRE if oProp is a string
      if (!_.isString(oProp)) {
        // We're being optimistic at the moment
        // throw new Error('Trying to combine a string with a non-string (' + propName + ')');
      }
      // Assign for object properties & return for array members
      return (obj[propName] = sProp.replace(parentRE, oProp));
    };

    var hasArray = function (oProp: any, sProp: any) {
      return _.isArray(oProp) || _.isArray(sProp);
    };

    var procArray = function (oProp: any, sProp: any, propName: any) {
      // extend oProp if both properties are arrays
      if (!_.isArray(oProp) || !_.isArray(sProp)) {
        throw new Error('Trying to combine an array with a non-array (' + propName + ')');
      }
      var tmp = ObjectUtils.deepExtend(obj[propName]);
      // Assign for object properties & return for array members
      return (obj[propName] = _.reject(tmp, _.isNull));
    };

    var hasObject = function (oProp: any, sProp: any) {
      return _.isObject(oProp) || _.isObject(sProp);
    };

    var procObject = function (oProp: any, sProp: any, propName: any) {
      // extend oProp if both properties are objects
      if (!_.isObject(oProp) || !_.isObject(sProp)) {
        throw new Error('Trying to combine an object with a non-object (' + propName + ')');
      }
      // Assign for object properties & return for array members
      return (obj[propName] = ObjectUtils.deepExtend(oProp));
    };

    var procMain = function (propName: any) {
      var oProp = obj[propName];
      var sProp = source[propName];

      // The order of the 'if' statements is critical

      // Cases in which we want to perform a straight assignment
      if (isAssign(oProp, sProp)) {
        procAssign(oProp, sProp, propName);
      } else if (hasRegex(oProp, sProp)) {
        procRegex(oProp, sProp, propName);
      } else if (hasArray(oProp, sProp)) {
        procArray(oProp, sProp, propName);
      } else if (hasObject(oProp, sProp)) {
        procObject(oProp, sProp, propName);
      } else {
        procAssign(oProp, sProp, propName);
      }
    };

    var procAll = function (src: any) {
      source = src;
      Object.keys(source).forEach(procMain);
    };

    _.each(Array.prototype.slice.call(arguments, 1), procAll);

    return obj;
  }
}

