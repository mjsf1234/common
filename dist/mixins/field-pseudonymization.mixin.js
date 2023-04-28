"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldPseudonymizationMixin = void 0;
const tslib_1 = require("tslib");
const crypto_utils_1 = require("../utils/crypto-utils");
const underscore_1 = (0, tslib_1.__importDefault)(require("underscore"));
const piiEncyptionEnabled = true; //@todo pick this up from settings
class FieldPseudonymizationMixin {
    static async register(modelClass) {
        modelClass.observe('loaded', async function (ctx) {
            if (piiEncyptionEnabled && ctx.data && !(ctx.options && ctx.options.connectorType && ctx.options.connectorType == "rest")) {
                const decodedData = decode(ctx.data, ctx.Model.definition);
                for (let key in decodedData) {
                    // Note: Ensure that mixin changes are mutable
                    ctx.data[key] = decodedData[key];
                }
            }
        });
        modelClass.observe('persist', async function (ctx) {
            if (piiEncyptionEnabled && !(ctx.options && ctx.options.connectorType && ctx.options.connectorType == "rest")) {
                if (ctx.instance) {
                    const encodedData = encode(ctx.instance, ctx.Model.definition, true);
                    for (let key in encodedData) {
                        // Note: Ensure that mixin changes are mutable
                        ctx.instance[key] = encodedData[key];
                    }
                }
                else if (ctx.data) {
                    const encodedData = encode(ctx.data, ctx.Model.definition, true);
                    for (let key in encodedData) {
                        // Note: Ensure that mixin changes are mutable
                        ctx.data[key] = encodedData[key];
                    }
                }
                if (ctx.where) {
                    const encodedWhereObj = encode(ctx.where, ctx.Model.definition);
                    for (let key in encodedWhereObj) {
                        // Note: Ensure that mixin changes are mutable
                        ctx.where[key] = encodedWhereObj[key];
                    }
                }
            }
        });
        modelClass.observe('access', async function (ctx) {
            if (piiEncyptionEnabled && !(ctx.options && ctx.options.connectorType && ctx.options.connectorType == "rest")) {
                if (ctx.query && ctx.query.where) {
                    const encodedWhereObj = encode(ctx.query.where, ctx.Model.definition);
                    for (let key in encodedWhereObj) {
                        ctx.query.where[key] = encodedWhereObj[key];
                    }
                }
            }
        });
    }
}
exports.FieldPseudonymizationMixin = FieldPseudonymizationMixin;
function encode(dataObj, modelDefinition, processJson = false) {
    const relations = underscore_1.default.keys(modelDefinition.settings.relations);
    const propertiesToEncode = underscore_1.default.reduce(modelDefinition.properties, (result, v, k) => {
        if (v.isPseudonym || v.isEncrypted) {
            result[k] = v;
        }
        return result;
    }, {});
    if (underscore_1.default.isEmpty(propertiesToEncode)) {
        return dataObj;
    }
    const dataToEncode = underscore_1.default.reduce(dataObj, (result, v, k) => {
        if (relations.indexOf(k) === -1) {
            result[k] = v;
        }
        return result;
    }, {});
    let arrayProperties = [];
    let objectProperties = [];
    if (processJson) {
        underscore_1.default.each(modelDefinition.rawProperties, (v, k) => {
            if (dataToEncode[k] &&
                typeof v.type === 'string' &&
                ['array', 'object'].indexOf(v.type.toLowerCase()) > -1 &&
                (v.isPseudonym || v.isEncrypted) &&
                (!v.FieldPseudonymizationSettings || !v.FieldPseudonymizationSettings.patterns)) {
                dataToEncode[k] = JSON.stringify(dataToEncode[k]);
                if (v.type.toLowerCase() === 'array') {
                    arrayProperties.push(k);
                }
                else {
                    objectProperties.push(k);
                }
            }
        });
    }
    const encodedData = crypto_utils_1.CryptoUtils.encodeDataObject(dataToEncode, propertiesToEncode);
    arrayProperties.forEach(propertyKey => {
        if (encodedData[propertyKey]) {
            encodedData[propertyKey] = [
                {
                    data: encodedData[propertyKey]
                }
            ];
        }
    });
    objectProperties.forEach(propertyKey => {
        if (encodedData[propertyKey]) {
            encodedData[propertyKey] = {
                data: encodedData[propertyKey]
            };
        }
    });
    return encodedData;
}
function decode(data, modelDefinition) {
    const relations = underscore_1.default.keys(modelDefinition.settings.relations);
    let arrayProperties = [];
    let objectProperties = [];
    const propertiesToDecode = underscore_1.default.reduce(modelDefinition.properties, (result, v, k) => {
        if (v.isPseudonym || v.isEncrypted) {
            result[k] = v;
        }
        return result;
    }, {});
    if (underscore_1.default.isEmpty(propertiesToDecode)) {
        return data;
    }
    const dataToDecode = underscore_1.default.reduce(data, (result, v, k) => {
        if (relations.indexOf(k) === -1) {
            result[k] = v;
        }
        return result;
    }, {});
    underscore_1.default.each(modelDefinition.rawProperties, (v, k) => {
        if (dataToDecode[k] &&
            typeof v.type === 'string' &&
            ['array', 'object'].indexOf(v.type.toLowerCase()) > -1 &&
            (v.isPseudonym || v.isEncrypted) &&
            (!v.FieldPseudonymizationSettings || !v.FieldPseudonymizationSettings.patterns)) {
            if (v.type.toLowerCase() === 'array') {
                arrayProperties.push(k);
            }
            else {
                objectProperties.push(k);
            }
        }
    });
    arrayProperties.forEach(propertyKey => {
        if (dataToDecode[propertyKey] && decodedData[propertyKey][0].data) {
            dataToDecode[propertyKey] = dataToDecode[propertyKey][0].data;
        }
    });
    objectProperties.forEach(propertyKey => {
        if (dataToDecode[propertyKey] && dataToDecode[propertyKey].data) {
            dataToDecode[propertyKey] = dataToDecode[propertyKey].data;
        }
    });
    const decodedData = crypto_utils_1.CryptoUtils.decodeDataObject(dataToDecode, propertiesToDecode);
    arrayProperties.forEach(propertyKey => {
        if (decodedData[propertyKey]) {
            decodedData[propertyKey] = JSON.parse(decodedData[propertyKey]);
        }
    });
    objectProperties.forEach(propertyKey => {
        if (decodedData[propertyKey] && underscore_1.default.isObject(decodedData[propertyKey])) {
            decodedData[propertyKey] = decodedData[propertyKey];
        }
        else if (typeof decodedData[propertyKey] === 'string') {
            decodedData[propertyKey] = JSON.parse(decodedData[propertyKey]);
        }
    });
    return decodedData;
}
//# sourceMappingURL=field-pseudonymization.mixin.js.map