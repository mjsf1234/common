import path from 'path';

const fs = require('fs');
const os = require('os')

export function applicationLog(logObject: Object) {
  fs.appendFile(path.join(os.homedir(),'externalAPI.log'), JSON.stringify(logObject, null, ' '),'utf-8', (err: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });
}
