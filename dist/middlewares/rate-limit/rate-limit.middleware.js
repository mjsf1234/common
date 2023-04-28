"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const RateLimit = require('express-rate-limit');
const rate_limit_redis_1 = (0, tslib_1.__importDefault)(require("rate-limit-redis"));
const util_1 = require("util");
const utils_1 = require("../../utils");
const config_1 = require("../../config");
const decoder = new util_1.TextDecoder('utf-8');
const config = config_1.RateLimitOptionsConfig.rateLimitConfig;
const rateLimiter = async function (requestContext, next) {
    const { request, response } = requestContext;
    const redisDataSource = requestContext.getBinding('datasources.cache_redis').getValue(requestContext);
    const redisDataStore = await getDataStore(redisDataSource); //get the dataStore. this is used by express-rate-limit
    const userProfile = requestContext.getBinding('userProfile').getValue(requestContext); // get the userProfile set by the authentication middleware
    //userProfile is passed by closure
    async function determineRateLimitIdentifier(request, response) {
        if (userProfile.appUserId) {
            return userProfile.appUserId;
        }
        else {
            return request.ip;
        }
    }
    //options for the ratelimiter . the determineRateLimitIdentifier determines the identifier for rate-limiting
    let opts = { ...config, ...{ store: rate_limit_redis_1.default, keyGenerator: determineRateLimitIdentifier } };
    //if the request is authenticated, the rate will be lower
    if (request.headers.authorization || request.headers.Authorization) {
        opts = { ...opts, ...{ max: config_1.RateLimitOptionsConfig.maxRequestsForAuthenticatedUsers } };
    }
    //If the request is un-authenticated, the rate limit will be higher
    else
        opts = { ...opts, ...{ max: config_1.RateLimitOptionsConfig.maxRequestsForUnauthenticatedUsers } };
    if (redisDataStore) {
        opts.store = redisDataStore;
    }
    const limiter = (0, util_1.promisify)(RateLimit.default(opts));
    await limiter(request, response).catch((err) => {
        console.log(err); // @todo -need to remove this
        utils_1.LoggingUtils.error(err);
        utils_1.LoggingUtils.error('Error while executing the rate limiting midleware');
        // throw new HttpErrors.InternalServerError('Something went wrong'); @todo - skipping this for now
    });
    const result = await next();
    return result;
};
exports.rateLimiter = rateLimiter;
async function getDataStore(datasource) {
    const redisDS = datasource;
    if (redisDS === null || redisDS === void 0 ? void 0 : redisDS.connector) {
        return new rate_limit_redis_1.default({
            sendCommand: async (...args) => {
                const command = `${args[0]}`;
                args.splice(0, 1);
                let res;
                try {
                    res = await executeRedisCommand(redisDS, command, args);
                    if (command.toLocaleLowerCase() === 'script') {
                        res = decoder.decode(res);
                    }
                }
                catch (err) {
                    throw new Error(`Could not execute redis command ${err}`);
                }
                return res;
            }
        });
    }
    else {
        throw new rest_1.HttpErrors.InternalServerError('Invalid Datasource');
    }
}
// returns promisified execute function
function executeRedisCommand(dataSource, command, args) {
    return new Promise((resolve, reject) => {
        var _a;
        if ((_a = dataSource.connector) === null || _a === void 0 ? void 0 : _a.execute) {
            // eslint-disable-next-line  @typescript-eslint/no-floating-promises
            dataSource.connector.execute(command, args, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res) {
                    resolve(res);
                }
                else {
                    return resolve(undefined);
                }
            });
        }
    });
}
//# sourceMappingURL=rate-limit.middleware.js.map