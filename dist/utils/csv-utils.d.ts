export declare abstract class CSVUtils {
    static convertCsvToJSON(path: string, headerMapping: any): Promise<any>;
    static convertCsvBufferToJSON(bufferObject: any, headerMapping: any, startIndex?: number, endIndex?: number): Promise<any>;
    static convertCsvBufferToJSONIgnoreRows(bufferObject: any, headerMapping: any): Promise<any>;
}
