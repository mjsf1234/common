export declare abstract class LogApiCallUtils {
    static sendMessageOutgoingApiCall(outgoingApiCallLog: any): Promise<void>;
    static sendMessageIncomingApiCall(incomingApiCallLog: any): Promise<void>;
    static sendMessageLoginApiCall(loginApiCallLog: any): Promise<void>;
}
