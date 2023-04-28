export declare class RestError {
    name: string;
    message: string;
    status: number | string;
    extra?: any;
    constructor(status: number | string, message: string, extra?: any);
}
