"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtils = void 0;
const tslib_1 = require("tslib");
const underscore_1 = (0, tslib_1.__importDefault)(require("underscore"));
const sort_utils_1 = require("./sort-utils");
class ObjectUtils {
    static format(data) {
        let self = this;
        if (!Array.isArray(data) && typeof data === 'object') {
            // if its an object
            for (let k in data) {
                data[k] = self.format(data[k]);
            }
        }
        else if (Array.isArray(data) && typeof data === 'object') {
            // if its an array
            /**
             * @TODO handle Nested Objects
             * **/
            sort_utils_1.SortUtils.sort(data);
        }
        return data;
    }
    static deepToFlat(obj, { delimiter = '.' } = {}, keysToDecode, encodeDecode) {
        return ObjectUtils.flattenObject(obj, null, { delimiter }, keysToDecode, encodeDecode);
    }
    static flattenObject(obj, current, settings, keysToDecode, encodeDecode) {
        const { delimiter } = settings;
        let flattenedObject = {};
        underscore_1.default.each(underscore_1.default.keys(obj), key => {
            let newKey = current ? current + delimiter + key : key;
            if (obj && obj[key] && obj[key].getMonth) {
                if (Object.keys(keysToDecode).indexOf(key) !== -1) {
                    if (encodeDecode) {
                        obj[key].setHours(obj[key].getHours() + 5);
                        obj[key].setMinutes(obj[key].getMinutes() + 30);
                    }
                    flattenedObject[newKey] = JSON.stringify(obj[key]);
                    flattenedObject[newKey] = flattenedObject[newKey].substring(1, 11);
                }
            }
            if (typeof obj[key] === 'object') {
                underscore_1.default.extend(flattenedObject, ObjectUtils.flattenObject(obj[key], newKey, settings, keysToDecode, encodeDecode));
            }
            else {
                flattenedObject[newKey] = obj[key];
            }
        });
        return flattenedObject;
    }
    static flatToDeep(obj, { delimiter = '.' } = {}, keysToEncode) {
        const result = {};
        for (let key in obj) {
            const keys = key.split(delimiter);
            keys.reduce((memo, k, index) => {
                return memo[k] || (memo[k] = isNaN(Number(keys[index + 1])) ? (keys.length - 1 == index ? obj[key] : {}) : []);
            }, result);
        }
        if (keysToEncode) {
            underscore_1.default.each(result, (propertyValue, resultKey) => {
                underscore_1.default.each(keysToEncode, (propertyObject, propertyKey) => {
                    if (propertyObject && propertyObject.postgresql && propertyObject.postgresql.dataType && propertyObject.postgresql.dataType == 'DATE') {
                        if (resultKey === propertyKey) {
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
    static deepExtend(obj) {
        let parentRE = /#{\s*?_\s*?}/;
        let source;
        var isAssign = function (oProp, sProp) {
            return underscore_1.default.isUndefined(oProp) || underscore_1.default.isNull(oProp) || underscore_1.default.isFunction(oProp) || underscore_1.default.isNull(sProp) || underscore_1.default.isDate(sProp);
        };
        var procAssign = function (oProp, sProp, propName) {
            // Perform a straight assignment
            // Assign for object properties & return for array members
            return (obj[propName] = underscore_1.default.clone(sProp));
        };
        var hasRegex = function (oProp, sProp) {
            return underscore_1.default.isString(sProp) && parentRE.test(sProp);
        };
        var procRegex = function (oProp, sProp, propName) {
            // Perform a string.replace using parentRE if oProp is a string
            if (!underscore_1.default.isString(oProp)) {
                // We're being optimistic at the moment
                // throw new Error('Trying to combine a string with a non-string (' + propName + ')');
            }
            // Assign for object properties & return for array members
            return (obj[propName] = sProp.replace(parentRE, oProp));
        };
        var hasArray = function (oProp, sProp) {
            return underscore_1.default.isArray(oProp) || underscore_1.default.isArray(sProp);
        };
        var procArray = function (oProp, sProp, propName) {
            // extend oProp if both properties are arrays
            if (!underscore_1.default.isArray(oProp) || !underscore_1.default.isArray(sProp)) {
                throw new Error('Trying to combine an array with a non-array (' + propName + ')');
            }
            var tmp = ObjectUtils.deepExtend(obj[propName]);
            // Assign for object properties & return for array members
            return (obj[propName] = underscore_1.default.reject(tmp, underscore_1.default.isNull));
        };
        var hasObject = function (oProp, sProp) {
            return underscore_1.default.isObject(oProp) || underscore_1.default.isObject(sProp);
        };
        var procObject = function (oProp, sProp, propName) {
            // extend oProp if both properties are objects
            if (!underscore_1.default.isObject(oProp) || !underscore_1.default.isObject(sProp)) {
                throw new Error('Trying to combine an object with a non-object (' + propName + ')');
            }
            // Assign for object properties & return for array members
            return (obj[propName] = ObjectUtils.deepExtend(oProp));
        };
        var procMain = function (propName) {
            var oProp = obj[propName];
            var sProp = source[propName];
            // The order of the 'if' statements is critical
            // Cases in which we want to perform a straight assignment
            if (isAssign(oProp, sProp)) {
                procAssign(oProp, sProp, propName);
            }
            else if (hasRegex(oProp, sProp)) {
                procRegex(oProp, sProp, propName);
            }
            else if (hasArray(oProp, sProp)) {
                procArray(oProp, sProp, propName);
            }
            else if (hasObject(oProp, sProp)) {
                procObject(oProp, sProp, propName);
            }
            else {
                procAssign(oProp, sProp, propName);
            }
        };
        var procAll = function (src) {
            source = src;
            Object.keys(source).forEach(procMain);
        };
        underscore_1.default.each(Array.prototype.slice.call(arguments, 1), procAll);
        return obj;
    }
}
exports.ObjectUtils = ObjectUtils;
//# sourceMappingURL=object-utils.js.map