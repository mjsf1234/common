export declare abstract class ObjectUtils {
    static format(data: any): any;
    static deepToFlat(obj: any, { delimiter }: {
        delimiter?: string | undefined;
    } | undefined, keysToDecode: any, encodeDecode: any): any;
    static flattenObject(obj: any, current: any, settings: any, keysToDecode: any, encodeDecode: any): any;
    static flatToDeep(obj: any, { delimiter }: {
        delimiter?: string | undefined;
    } | undefined, keysToEncode: any): any;
    /**
     * Function picked from https://github.com/kurtmilam/underscoreDeepExtend/blob/master/index.js
     */
    static deepExtend(obj: any): any;
}
