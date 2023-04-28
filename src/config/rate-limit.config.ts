export abstract class RateLimitOptionsConfig {

  static readonly rateLimitConfig = {
    name : 'cache_redis',
    type : 'RedisStore',
    message: "Too many requests",
    statusCode: 406,
    windowMs : 60000,
    max : 100,
    requestPropertyName: "rateLimit"

  }
  static readonly maxRequestsForUnauthenticatedUsers = 100000
  static readonly maxRequestsForAuthenticatedUsers = 100000
}
