import CSV from 'csvtojson';

export abstract class CSVUtils {
  public static async convertCsvToJSON(path: string, headerMapping: any): Promise<any> {
    let promise = new Promise(function (resolve, reject) {
      CSV({
        noheader: false,
        delimiter: ['|', ',']
      })
        .fromFile(path)
        .then(jsonData => {
          let newJsonMapping: Array<any> = [];
          jsonData.forEach(json => {
            let newObject: any = {};
            Object.keys(json).forEach(key => {
              if (headerMapping[key]) {
                newObject[headerMapping[key]] = json[key];
              } else if (!headerMapping) {
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

  public static async convertCsvBufferToJSON(
    bufferObject: any,
    headerMapping: any,
    startIndex: number = 0,
    endIndex: number = 0
  ): Promise<any> {
    return new Promise(function (resolve, reject) {
      CSV({
        noheader: false,
        delimiter: ['|', ',']
      })
        .preRawData(csvRawData => {
          const lineArray = csvRawData.split('\n');
          return lineArray.slice(startIndex, lineArray.length - endIndex).join('\n');
        })
        .fromString(bufferObject.toString())
        .then(function (jsonData) {
          let newJsonMapping: Array<any> = [];
          jsonData.forEach(json => {
            let newObject: any = {};
            Object.keys(json).forEach(key => {
              if (headerMapping[key]) {
                newObject[headerMapping[key]] = json[key];
              } else if (!headerMapping) {
                newObject[key] = json[key];
              }
            });
            newJsonMapping.push(newObject);
          });
          return resolve(newJsonMapping);
        });
    });
  }

  public static async convertCsvBufferToJSONIgnoreRows(bufferObject: any, headerMapping: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      CSV({
        noheader: true,
        delimiter: ['|', ',']
      })
        .fromString(bufferObject)
        .then(function (jsonData) {
          let newJsonMapping: Array<any> = [];
          jsonData.forEach(json => {
            let newObject: any = {};
            Object.keys(json).forEach(key => {
              if (headerMapping[key]) {
                newObject[headerMapping[key]] = json[key];
              } else {
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
