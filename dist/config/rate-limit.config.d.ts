export declare abstract class RateLimitOptionsConfig {
    static readonly rateLimitConfig: {
        name: string;
        type: string;
        message: string;
        statusCode: number;
        windowMs: number;
        max: number;
        requestPropertyName: string;
    };
    static readonly maxRequestsForUnauthenticatedUsers = 100000;
    static readonly maxRequestsForAuthenticatedUsers = 100000;
}
