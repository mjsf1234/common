"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingUtils = void 0;
const logLevel = (process.env.LOG_LEVEL || 'error').toLowerCase();
const Module_name = '';
class LoggingUtils {
    static debug(errorMsg, name = Module_name) {
        let log_level = ['debug'];
        if (log_level.includes(logLevel)) {
            console.debug('type: Debug' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
        }
    }
    static fatal(errorMsg, name = Module_name) {
        let log_level = ['debug', 'info', 'warn', 'fatal', 'error'];
        if (log_level.includes(logLevel)) {
            console.log('type: Fatal' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
        }
    }
    static error(errorMsg, name = Module_name) {
        let log_level = ['debug', 'info', 'warn', 'fatal', 'error'];
        if (log_level.includes(logLevel)) {
            console.error('type: Error' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
        }
    }
    static info(errorMsg, name = Module_name) {
        let log_level = ['debug', 'info'];
        if (log_level.includes(logLevel)) {
            console.info('type: Info' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
        }
    }
    static warn(errorMsg, name = Module_name) {
        let log_level = ['debug', 'info', 'warn'];
        if (log_level.includes(logLevel)) {
            console.warn('type: Warn' + `\n Module/Function Name : ${name != '' ? name : ''} \n`, Stringify_message(errorMsg));
        }
    }
}
exports.LoggingUtils = LoggingUtils;
function Stringify_message(message) {
    let processedMessage = {};
    try {
        if (typeof message === 'object') {
            processedMessage = message;
            return JSON.stringify(processedMessage);
        }
        else {
            processedMessage = JSON.parse(message);
            return JSON.stringify(processedMessage);
        }
    }
    catch (error) {
        return message;
    }
}
//# sourceMappingURL=logging-utils.js.map