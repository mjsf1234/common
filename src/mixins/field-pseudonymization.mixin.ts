import {Entity, juggler} from '@loopback/repository';
import {CryptoUtils} from '../utils/crypto-utils';
import _ from 'underscore';
const piiEncyptionEnabled = true; //@todo pick this up from settings

export abstract class FieldPseudonymizationMixin {
  public static async register(modelClass: typeof juggler.PersistedModel) {
    modelClass.observe('loaded', async function (ctx) {
      if (piiEncyptionEnabled && ctx.data  && !(ctx.options && ctx.options.connectorType && ctx.options.connectorType == "rest")) {
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
        } else if (ctx.data) {
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

function encode(dataObj: any, modelDefinition: any, processJson: boolean = false) {
  const relations = _.keys(modelDefinition.settings.relations);

  const propertiesToEncode = _.reduce(
    modelDefinition.properties,
    (result: any, v, k) => {
      if (v.isPseudonym || v.isEncrypted) {
        result[k] = v;
      }
      return result;
    },
    {}
  );

  if (_.isEmpty(propertiesToEncode)) {
    return dataObj;
  }

  const dataToEncode = _.reduce(
    dataObj,
    (result: any, v, k) => {
      if (relations.indexOf(k) === -1) {
        result[k] = v;
      }
      return result;
    },
    {}
  );

  let arrayProperties: Array<any> = [];
  let objectProperties: Array<any> = [];

  if (processJson) {
    _.each(modelDefinition.rawProperties, (v, k) => {
      if (
        dataToEncode[k] &&
        typeof v.type === 'string' &&
        ['array', 'object'].indexOf(v.type.toLowerCase()) > -1 &&
        (v.isPseudonym || v.isEncrypted) &&
        (!v.FieldPseudonymizationSettings || !v.FieldPseudonymizationSettings.patterns)
      ) {
        dataToEncode[k] = JSON.stringify(dataToEncode[k]);
        if (v.type.toLowerCase() === 'array') {
          arrayProperties.push(k);
        } else {
          objectProperties.push(k);
        }
      }
    });
  }

  const encodedData = CryptoUtils.encodeDataObject(dataToEncode, propertiesToEncode);

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

function decode(data: any, modelDefinition: any) {
  const relations = _.keys(modelDefinition.settings.relations);

  let arrayProperties: Array<any> = [];
  let objectProperties: Array<any> = [];

  const propertiesToDecode = _.reduce(
    modelDefinition.properties,
    (result: any, v, k) => {
      if (v.isPseudonym || v.isEncrypted) {
        result[k] = v;
      }
      return result;
    },
    {}
  );

  if (_.isEmpty(propertiesToDecode)) {
    return data;
  }

  const dataToDecode = _.reduce(
    data,
    (result: any, v, k) => {
      if (relations.indexOf(k) === -1) {
        result[k] = v;
      }
      return result;
    },
    {}
  );

  _.each(modelDefinition.rawProperties, (v, k) => {
    if (
      dataToDecode[k] &&
      typeof v.type === 'string' &&
      ['array', 'object'].indexOf(v.type.toLowerCase()) > -1 &&
      (v.isPseudonym || v.isEncrypted) &&
      (!v.FieldPseudonymizationSettings || !v.FieldPseudonymizationSettings.patterns)
    ) {
      if (v.type.toLowerCase() === 'array') {
        arrayProperties.push(k);
      } else {
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

  const decodedData = CryptoUtils.decodeDataObject(dataToDecode, propertiesToDecode);

  arrayProperties.forEach(propertyKey => {
    if (decodedData[propertyKey]) {
      decodedData[propertyKey] = JSON.parse(decodedData[propertyKey]);
    }
  });

  objectProperties.forEach(propertyKey => {
    if (decodedData[propertyKey] && _.isObject(decodedData[propertyKey])) {
      decodedData[propertyKey] = decodedData[propertyKey];
    } else if (typeof decodedData[propertyKey] === 'string') {
      decodedData[propertyKey] = JSON.parse(decodedData[propertyKey]);
    }
  });

  return decodedData;
}
