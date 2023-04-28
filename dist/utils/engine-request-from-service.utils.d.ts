import { RequestToEngineRepository } from '..';
export declare abstract class EngineRequestUtils {
    static checkRequestToEngineStatus: (requestToEngineRepository: RequestToEngineRepository, rowId: number) => Promise<{
        processFlag: boolean;
        eventType: string | undefined;
        parameters: object | undefined;
    } | undefined>;
    static updateRequestToEngineStatus: (requestToEngineRepository: RequestToEngineRepository, rowId: number, status: number, remarks?: string) => Promise<void>;
}
