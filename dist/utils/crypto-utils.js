"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoUtils = exports.decodeString = exports.encodeString = void 0;
const tslib_1 = require("tslib");
const crypto = require('crypto');
const crypto_js_1 = (0, tslib_1.__importDefault)(require("crypto-js"));
const underscore_1 = (0, tslib_1.__importStar)(require("underscore"));
const object_utils_1 = require("./object-utils");
/**
 * TODO - Move this variables to  env
 */
const ALGORITHM = 'aes-256-cbc';
const AES_KEY = '1E615268E472C4BC673DA5540F8E132D';
const IV = 'BB7AEB78A21A5901';
const substitutionCharacterMap = {
    A: 'L',
    B: 'J',
    C: 'D',
    D: 'U',
    E: 'V',
    F: 'H',
    G: 'X',
    H: 'Z',
    I: 'Q',
    J: 'G',
    K: 'F',
    L: 'E',
    M: 'I',
    N: 'C',
    O: 'M',
    P: 'W',
    Q: 'A',
    R: 'S',
    S: 'Y',
    T: 'O',
    U: 'P',
    V: 'R',
    W: 'K',
    X: 'B',
    Y: 'N',
    Z: 'T',
    a: 'l',
    b: 'j',
    c: 'd',
    d: 'u',
    e: 'v',
    f: 'h',
    g: 'x',
    h: 'z',
    i: 'q',
    j: 'g',
    k: 'f',
    l: 'e',
    m: 'i',
    n: 'c',
    o: 'm',
    p: 'w',
    q: 'a',
    r: 's',
    s: 'y',
    t: 'o',
    u: 'p',
    v: 'r',
    w: 'k',
    x: 'b',
    y: 'n',
    z: 't',
    '0': '4',
    '1': '7',
    '2': '9',
    '3': '0',
    '4': '1',
    '5': '8',
    '6': '5',
    '7': '2',
    '8': '3',
    '9': '6'
};
const encryptionAndDecryptionCharacterMap = {
    A: 'J',
    B: 'L',
    C: 'U',
    D: 'D',
    E: 'H',
    F: 'V',
    G: 'Z',
    H: 'X',
    I: 'F',
    J: 'Q',
    K: 'E',
    L: 'G',
    M: 'C',
    N: 'I',
    O: 'W',
    P: 'M',
    Q: 'S',
    R: 'A',
    S: 'Y',
    T: 'O',
    U: 'R',
    V: 'P',
    W: 'N',
    X: 'K',
    Y: 'T',
    Z: 'B',
    a: 'j',
    b: 'l',
    c: 'u',
    d: 'd',
    e: 'h',
    f: 'v',
    g: 'z',
    h: 'x',
    i: 'g',
    j: 'q',
    k: 'e',
    l: 'f',
    m: 'c',
    n: 'i',
    o: 'w',
    p: 'm',
    q: 's',
    r: 'a',
    s: 'o',
    t: 'y',
    u: 'r',
    v: 'p',
    w: 'b',
    x: 'k',
    y: 't',
    z: 'n',
    '0': '5',
    '1': '9',
    '2': '7',
    '3': '1',
    '4': '0',
    '5': '4',
    '6': '8',
    '7': '3',
    '8': '2',
    '9': '6'
};
function replaceCharFromMap(str, characterMap) {
    if (!str || str.length === 0) {
        return str;
    }
    str = String(str);
    return str
        .split('')
        .map(char => (characterMap[char] ? characterMap[char] : char))
        .join('');
}
function keyIncludes(str, propertyKey, settings) {
    if (!settings) {
        settings = {};
    }
    let patterns = ['{fieldKey}'];
    if (settings.patterns && Array.isArray(settings.patterns) && settings.patterns.length > 0) {
        patterns = settings.patterns;
    }
    const delimiter = settings.delimiter ? settings.delimiter : '.';
    return patterns.some(pattern => {
        const stringWithoutNumbers = str
            .split(delimiter)
            .filter(ch => isNaN(ch))
            .join(delimiter);
        const propertyStr = pattern.replace('{fieldKey}', propertyKey);
        const doesInclude = stringWithoutNumbers.includes(`${delimiter}${propertyStr}`) ||
            stringWithoutNumbers === propertyStr ||
            stringWithoutNumbers.includes(`${propertyStr}${delimiter}`);
        return doesInclude;
    });
}
function encodeString(str) {
    return CryptoUtils.encodePseudonym(str, encryptionAndDecryptionCharacterMap);
}
exports.encodeString = encodeString;
function decodeString(str) {
    return CryptoUtils.decodePseudonym(str, encryptionAndDecryptionCharacterMap);
}
exports.decodeString = decodeString;
const substitutionMapForYear = {
    '1': '8',
    '2': '0',
    '3': '5',
    '4': '7',
    '5': '4',
    '6': '1',
    '7': '2',
    '8': '3',
    '9': '6',
    '0': '9',
};
const substitutionMapForMonth = {
    '01': '12',
    '02': '02',
    '03': '07',
    '04': '11',
    '05': '01',
    '06': '08',
    '07': '03',
    '08': '05',
    '09': '04',
    '10': '06',
    '11': '09',
    '12': '10'
};
const substitutionMapForDate = {
    '01': '22',
    '02': '28',
    '03': '24',
    '04': '09',
    '05': '21',
    '06': '23',
    '07': '11',
    '08': '31',
    '09': '25',
    '10': '13',
    '11': '16',
    '12': '20',
    '13': '19',
    '14': '06',
    '15': '10',
    '16': '27',
    '17': '14',
    '18': '08',
    '19': '01',
    '20': '02',
    '21': '15',
    '22': '03',
    '23': '18',
    '24': '07',
    '25': '30',
    '26': '04',
    '27': '05',
    '28': '29',
    '29': '12',
    '30': '26',
    '31': '17'
};
function replaceFromMapForDate(str, characterMapYear, characterMapMonth, characterMapDay, encodeDecode) {
    if (!str || str.length === 0) {
        return str;
    }
    let yearPart = str.substring(0, 4);
    let monthPart = str.substring(5, 7);
    let dayPart = str.substring(8, 10);
    let encryptYearPart;
    if (monthPart === '02' && dayPart === '29') {
        let yearPartNumber = Number(yearPart);
        if (encodeDecode) {
            yearPartNumber = yearPartNumber * 2;
        }
        else {
            yearPartNumber = yearPartNumber / 2;
        }
        encryptYearPart = String(yearPartNumber).padStart(4, '0');
    }
    else {
        encryptYearPart = yearPart.split('').map(char => (characterMapYear[char] ? characterMapYear[char] : char)).join('');
    }
    const encryptMonthPart = monthPart.replace(monthPart, characterMapMonth[monthPart]);
    let encryptDayPart = '';
    if (monthPart === '02' && dayPart === '29') {
        encryptDayPart = '29';
    }
    else {
        encryptDayPart = dayPart.replace(dayPart, characterMapDay[dayPart]);
    }
    return `${encryptYearPart}-${encryptMonthPart}-${encryptDayPart}`;
}
class CryptoUtils {
    static encodePseudonym(str, characterMap = substitutionCharacterMap) {
        return replaceCharFromMap(str, characterMap);
    }
    static decodePseudonym(str, characterMap = substitutionCharacterMap) {
        const reverseCharacterMap = underscore_1.default.invert(characterMap);
        return replaceCharFromMap(str, reverseCharacterMap);
    }
    static encryptString(str) {
        let cipher = crypto.createCipheriv(ALGORITHM, AES_KEY, IV); // Intentionally not add IV to keep it simple
        let encrypted = cipher.update(str, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }
    static decryptString(str) {
        try {
            let decipher = crypto.createDecipheriv(ALGORITHM, AES_KEY, IV);
            let decrypted = decipher.update(str, 'base64', 'utf8');
            return decrypted + decipher.final('utf8');
        }
        catch (err) {
            return str;
        }
    }
    static encodeDataObject(object, keysToEncode, settings = {}) {
        const deepToFlatSettings = {
            delimiter: settings.delimiter ? settings.delimiter : '.'
        };
        const encoding = false;
        const flatObject = object_utils_1.ObjectUtils.deepToFlat(object, deepToFlatSettings, keysToEncode, encoding);
        const encodedFlatObject = underscore_1.default.reduce(flatObject, (result, fieldValue, flatKey) => {
            if (fieldValue !== undefined && fieldValue !== null) {
                underscore_1.default.each(keysToEncode, (propertyObject, propertyKey) => {
                    let currentSettings = JSON.parse(JSON.stringify(settings));
                    const fieldSettings = propertyObject.FieldPseudonymizationSettings ? object_utils_1.ObjectUtils.deepExtend(currentSettings) : currentSettings;
                    if (keyIncludes(flatKey, propertyKey, fieldSettings)) {
                        if (propertyObject.isPseudonym) {
                            if (propertyObject.postgresql.dataType == 'DATE') {
                                fieldValue = CryptoUtils.encodeDatePseudonym(fieldValue);
                            }
                            else {
                                fieldValue = CryptoUtils.encodePseudonym(fieldValue);
                            }
                        }
                        else if (propertyObject.isEncrypted) {
                            fieldValue = CryptoUtils.encryptString(fieldValue);
                        }
                    }
                });
            }
            result[flatKey] = fieldValue;
            return result;
        }, {});
        const encodedObject = object_utils_1.ObjectUtils.flatToDeep(encodedFlatObject, deepToFlatSettings, keysToEncode);
        return encodedObject;
    }
    static decodeDataObject(obj, keysToDecode, settings = {}) {
        const deepToFlatSettings = {
            delimiter: settings.delimiter ? settings.delimiter : '.'
        };
        const decoding = true;
        const flatObject = object_utils_1.ObjectUtils.deepToFlat(obj, deepToFlatSettings, keysToDecode, decoding);
        const decodedFlatObject = underscore_1.default.reduce(flatObject, (result, fieldValue, flatKey) => {
            if (fieldValue !== undefined && fieldValue !== null) {
                underscore_1.default.each(keysToDecode, (propertyObject, propertyKey) => {
                    let currentSettings = JSON.parse(JSON.stringify(settings));
                    const fieldSettings = propertyObject.FieldPseudonymizationSettings ? object_utils_1.ObjectUtils.deepExtend(currentSettings) : currentSettings;
                    if (keyIncludes(flatKey, propertyKey, fieldSettings)) {
                        if (propertyObject.isPseudonym) {
                            if (propertyObject && propertyObject.postgresql && propertyObject.postgresql.dataType && propertyObject.postgresql.dataType == 'DATE') {
                                fieldValue = CryptoUtils.decodeDatePseudonym(fieldValue);
                            }
                            else {
                                fieldValue = CryptoUtils.decodePseudonym(fieldValue);
                            }
                        }
                        else if (propertyObject.isEncrypted) {
                            fieldValue = CryptoUtils.decryptString(fieldValue);
                        }
                    }
                });
            }
            result[flatKey] = fieldValue;
            return result;
        }, {});
        const decodedObject = object_utils_1.ObjectUtils.flatToDeep(decodedFlatObject, deepToFlatSettings, keysToDecode);
        return decodedObject;
    }
    /**
     * @description - This method perform encryption on a string
     * @param val - value to be encrypted
     * @param ALGO - Algorithm which will be used for encryption
     * @param KEY - encryption key
     * @param AES_IV - Initialization Vector for encryption
     * @returns - encrypted string
     */
    static encrypt(val, ALGO = ALGORITHM, KEY = AES_KEY, AES_IV = IV) {
        const cipher = crypto.createCipheriv(ALGO, KEY, AES_IV);
        let encrypted = cipher.update(val, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }
    /**
     * @description - This method performs decryption on a encrypted string
     * @param val - value to be decrypted.
     * @param ALGO - Alogorithm which will be used for decryption
     * @param KEY - decryption key
     * @param AES_IV - Initialization vector for decription
     * @returns - decrypted string
     */
    static decrypt(val, ALGO = ALGORITHM, KEY = AES_KEY, AES_IV = IV) {
        const decipher = crypto.createDecipheriv(ALGO, KEY, AES_IV);
        let decrypted = decipher.update(val, 'base64', 'utf8');
        return decrypted + decipher.final('utf8');
    }
    /**
     * This method is used to perform RSA encryption
     * @param data
     * @param publicKeyPath
     * @returns
     */
    static encryptRSA(data, publicKeyPath) {
        const publicKey = crypto.createPublicKey(publicKeyPath);
        const binaryData = Buffer.from(data);
        const encryptData = crypto
            .publicEncrypt({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING
        }, binaryData)
            .toString('base64');
        return encryptData;
    }
    /**
     * This method is used to perform RSA decryption
     * @param data
     * @param privateKeyPath
     * @returns
     */
    static decryptRSA(data, privateKeyPath) {
        const privateKey = crypto.createPrivateKey(privateKeyPath);
        const binaryData = Buffer.from(data, 'base64');
        const decryptData = crypto
            .privateDecrypt({
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PADDING
        }, binaryData)
            .toString();
        return decryptData;
    }
    static generateRandomSecretKey() {
        return Math.random().toString(36).substring(3);
    }
    static symmetricEncryption(input, key) {
        return crypto_js_1.default.AES.encrypt(input, key);
    }
    static symmetricDecryption(input, key) {
        return crypto_js_1.default.AES.decrypt(input, key);
    }
    /**
     * This method is used for generating checksum for files.
     * @param file
     * @param algorithm
     * @param encoding
     * @returns
     */
    static generateFileChecksum(file, algorithm = process.env.COMMON_HASH_ALGO, encoding) {
        return crypto
            .createHash(algorithm || 'sha512')
            .update(file)
            .digest(encoding || 'hex');
    }
    static encodeDataObjectPseudonym(object, keysToEncode, settings = {}) {
        const deepToFlatSettings = {
            delimiter: settings.delimiter ? settings.delimiter : '.'
        };
        const encode = false;
        const flatObject = object_utils_1.ObjectUtils.deepToFlat(object, deepToFlatSettings, keysToEncode, encode);
        const encodedFlatObject = underscore_1.default.reduce(flatObject, (result, fieldValue, flatKey) => {
            if (fieldValue !== undefined && fieldValue !== null) {
                for (const propertyObject of keysToEncode) {
                    if (flatKey.indexOf(Object.keys(propertyObject)[0]) != -1 ? true : false) {
                        fieldValue = CryptoUtils.encodePseudonym(fieldValue);
                    }
                }
            }
            result[flatKey] = fieldValue;
            return result;
        }, {});
        const encodedObject = object_utils_1.ObjectUtils.flatToDeep(encodedFlatObject, deepToFlatSettings, keysToEncode);
        return encodedObject;
    }
    static maskJson(originalObject, fieldsToMask, maskChar = 'x') {
        const maskedObj = JSON.parse(JSON.stringify(originalObject));
        for (let key of Object.keys(maskedObj)) {
            for (let mKey of fieldsToMask) {
                if ((0, underscore_1.isObject)(maskedObj[key])) {
                    maskedObj[key] = this.maskJson(maskedObj[key], fieldsToMask, maskChar);
                }
                if (key === mKey) {
                    if (maskedObj[key] === undefined || maskedObj[key] === null) {
                        continue;
                    }
                    maskedObj[key] = maskChar.repeat(String(maskedObj[key]).length);
                }
            }
        }
        return maskedObj;
    }
    static encodeDateObjectPseudonym(object, keysToEncode) {
        let fieldValue;
        let encodedDate;
        for (let obj of object) {
            for (const propertyObject of keysToEncode) {
                if (Object.keys(propertyObject)[0] in obj) {
                    fieldValue = obj[Object.keys(propertyObject)[0]];
                    if (fieldValue != null || fieldValue != undefined) {
                        fieldValue.setHours(fieldValue.getHours() + 5);
                        fieldValue.setMinutes(fieldValue.getMinutes() + 30);
                        let onlyDate = JSON.stringify(fieldValue);
                        onlyDate = onlyDate.substring(1, 11);
                        encodedDate = new Date(CryptoUtils.encodeDatePseudonym(onlyDate));
                        obj[Object.keys(propertyObject)[0]] = encodedDate;
                    }
                }
            }
        }
        return object;
    }
    static encodeDatePseudonym(str, characterMapYear = substitutionMapForYear, characterMapMonth = substitutionMapForMonth, characterMapDay = substitutionMapForDate) {
        const encoding = true;
        return replaceFromMapForDate(str, characterMapYear, characterMapMonth, characterMapDay, encoding);
    }
    static decodeDatePseudonym(str, characterMapYear = substitutionMapForYear, characterMapMonth = substitutionMapForMonth, characterMapDay = substitutionMapForDate) {
        const inversecharMapYear = underscore_1.default.invert(characterMapYear);
        const inversecharMapMonth = underscore_1.default.invert(characterMapMonth);
        const inversecharMapDay = underscore_1.default.invert(characterMapDay);
        const decoding = false;
        return replaceFromMapForDate(str, inversecharMapYear, inversecharMapMonth, inversecharMapDay, decoding);
    }
}
exports.CryptoUtils = CryptoUtils;
/**
 * @description - This method is used to generate SymetricKey and IV
 * @param length
 * @returns
 */
CryptoUtils.generateSymmetricKeyOrIV = (length) => [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
//# sourceMappingURL=crypto-utils.js.map