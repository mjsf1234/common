"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitOptionsConfig = void 0;
class RateLimitOptionsConfig {
}
exports.RateLimitOptionsConfig = RateLimitOptionsConfig;
RateLimitOptionsConfig.rateLimitConfig = {
    name: 'cache_redis',
    type: 'RedisStore',
    message: "Too many requests",
    statusCode: 406,
    windowMs: 60000,
    max: 100,
    requestPropertyName: "rateLimit"
};
RateLimitOptionsConfig.maxRequestsForUnauthenticatedUsers = 100000;
RateLimitOptionsConfig.maxRequestsForAuthenticatedUsers = 100000;
//# sourceMappingURL=rate-limit.config.js.map