/// <reference types="node" />
import CryptoJS from 'crypto-js';
export declare function encodeString(str: string): string;
export declare function decodeString(str: string): string;
export declare abstract class CryptoUtils {
    static encodePseudonym(str: string, characterMap?: object): string;
    static decodePseudonym(str: string, characterMap?: object): string;
    static encryptString(str: string): string;
    static decryptString(str: string): string;
    static encodeDataObject(object: any, keysToEncode: any, settings?: any): any;
    static decodeDataObject(obj: any, keysToDecode: any, settings?: any): any;
    /**
     * @description - This method perform encryption on a string
     * @param val - value to be encrypted
     * @param ALGO - Algorithm which will be used for encryption
     * @param KEY - encryption key
     * @param AES_IV - Initialization Vector for encryption
     * @returns - encrypted string
     */
    static encrypt(val: string, ALGO?: string, KEY?: string, AES_IV?: string): string;
    /**
     * @description - This method performs decryption on a encrypted string
     * @param val - value to be decrypted.
     * @param ALGO - Alogorithm which will be used for decryption
     * @param KEY - decryption key
     * @param AES_IV - Initialization vector for decription
     * @returns - decrypted string
     */
    static decrypt(val: string, ALGO?: string, KEY?: string, AES_IV?: string): string;
    /**
     * @description - This method is used to generate SymetricKey and IV
     * @param length
     * @returns
     */
    static generateSymmetricKeyOrIV: (length: number) => string;
    /**
     * This method is used to perform RSA encryption
     * @param data
     * @param publicKeyPath
     * @returns
     */
    static encryptRSA(data: string, publicKeyPath: Buffer): string;
    /**
     * This method is used to perform RSA decryption
     * @param data
     * @param privateKeyPath
     * @returns
     */
    static decryptRSA(data: string, privateKeyPath: Buffer): string;
    static generateRandomSecretKey(): string;
    static symmetricEncryption(input: string, key: string): CryptoJS.lib.CipherParams;
    static symmetricDecryption(input: string, key: string): CryptoJS.lib.WordArray;
    /**
     * This method is used for generating checksum for files.
     * @param file
     * @param algorithm
     * @param encoding
     * @returns
     */
    static generateFileChecksum(file: any, algorithm?: string | undefined, encoding?: any): any;
    static encodeDataObjectPseudonym(object: any, keysToEncode: any, settings?: any): any;
    static maskJson(originalObject: any, fieldsToMask: Array<string>, maskChar?: string): any;
    static encodeDateObjectPseudonym(object: any, keysToEncode: any): any;
    static encodeDatePseudonym(str: string, characterMapYear?: object, characterMapMonth?: object, characterMapDay?: object): string;
    static decodeDatePseudonym(str: string, characterMapYear?: object, characterMapMonth?: object, characterMapDay?: object): string;
}
