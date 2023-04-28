interface RestErrorObject {
    httpStatus: number;
    message: string;
}
interface SystemcodeMapping {
    [systemcode: string]: RestErrorObject;
}
export declare abstract class ErrorCodes {
    static readonly SYSTEMCODEMAPPING: SystemcodeMapping;
}
export {};
