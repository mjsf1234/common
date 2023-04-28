import {CryptoUtils, Option} from '..';

const logLevel: string = ((process.env.LOG_LEVEL as string) || 'error').toLowerCase();
const Module_name: string = '';
export abstract class LoggingUtils {
  public static debug(errorMsg: any, name: any = Module_name) {
    let log_level = ['debug'];
    if (log_level.includes(logLevel)) {
      console.debug('type: Debug' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
    }
  }

  public static fatal(errorMsg: any, name: any = Module_name) {
    let log_level = ['debug', 'info', 'warn', 'fatal', 'error'];
    if (log_level.includes(logLevel)) {
      console.log('type: Fatal' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
    }
  }

  public static error(errorMsg: any, name: any = Module_name) {
    let log_level = ['debug', 'info', 'warn', 'fatal', 'error'];
    if (log_level.includes(logLevel)) {
      console.error('type: Error' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
    }
  }

  public static info(errorMsg: any, name: any = Module_name) {
    let log_level = ['debug', 'info'];
    if (log_level.includes(logLevel)) {
      console.info('type: Info' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
    }
  }

  public static warn(errorMsg: any, name: any = Module_name) {
    let log_level = ['debug', 'info', 'warn'];
    if (log_level.includes(logLevel)) {
      console.warn('type: Warn' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
    }
  }
}

function Stringify_message(message: any) {
  let processedMessage = {};
  try {
    if (typeof message === 'object') {
      processedMessage = message;
      return JSON.stringify(processedMessage);
    } else {
      processedMessage = JSON.parse(message);
      return JSON.stringify(processedMessage);
    }
  } catch (error) {
    return message;
  }
}
