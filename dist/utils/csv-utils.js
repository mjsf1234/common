"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVUtils = void 0;
const tslib_1 = require("tslib");
const csvtojson_1 = (0, tslib_1.__importDefault)(require("csvtojson"));
class CSVUtils {
    static async convertCsvToJSON(path, headerMapping) {
        let promise = new Promise(function (resolve, reject) {
            (0, csvtojson_1.default)({
                noheader: false,
                delimiter: ['|', ',']
            })
                .fromFile(path)
                .then(jsonData => {
                let newJsonMapping = [];
                jsonData.forEach(json => {
                    let newObject = {};
                    Object.keys(json).forEach(key => {
                        if (headerMapping[key]) {
                            newObject[headerMapping[key]] = json[key];
                        }
                        else if (!headerMapping) {
                            newObject[key] = json[key];
                        }
                    });
                    newJsonMapping.push(newObject);
                });
                return resolve(newJsonMapping);
            });
        });
        return promise;
    }
    static async convertCsvBufferToJSON(bufferObject, headerMapping, startIndex = 0, endIndex = 0) {
        return new Promise(function (resolve, reject) {
            (0, csvtojson_1.default)({
                noheader: false,
                delimiter: ['|', ',']
            })
                .preRawData(csvRawData => {
                const lineArray = csvRawData.split('\n');
                return lineArray.slice(startIndex, lineArray.length - endIndex).join('\n');
            })
                .fromString(bufferObject.toString())
                .then(function (jsonData) {
                let newJsonMapping = [];
                jsonData.forEach(json => {
                    let newObject = {};
                    Object.keys(json).forEach(key => {
                        if (headerMapping[key]) {
                            newObject[headerMapping[key]] = json[key];
                        }
                        else if (!headerMapping) {
                            newObject[key] = json[key];
                        }
                    });
                    newJsonMapping.push(newObject);
                });
                return resolve(newJsonMapping);
            });
        });
    }
    static async convertCsvBufferToJSONIgnoreRows(bufferObject, headerMapping) {
        return new Promise(function (resolve, reject) {
            (0, csvtojson_1.default)({
                noheader: true,
                delimiter: ['|', ',']
            })
                .fromString(bufferObject)
                .then(function (jsonData) {
                let newJsonMapping = [];
                jsonData.forEach(json => {
                    let newObject = {};
                    Object.keys(json).forEach(key => {
                        if (headerMapping[key]) {
                            newObject[headerMapping[key]] = json[key];
                        }
                        else {
                            newObject[key] = json[key];
                        }
                    });
                    newJsonMapping.push(newObject);
                });
                return resolve(newJsonMapping);
            });
        });
    }
}
exports.CSVUtils = CSVUtils;
//# sourceMappingURL=csv-utils.js.map