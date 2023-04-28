import {HttpErrors, Middleware, MiddlewareContext} from '@loopback/rest';
import {juggler} from '@loopback/repository';
const RateLimit = require('express-rate-limit');
import RedisStore, {RedisReply} from 'rate-limit-redis';
import {promisify, TextDecoder} from 'util';
import {LoggingUtils} from '../../utils';
import {RateLimitOptionsConfig} from '../../config';

const decoder = new TextDecoder('utf-8');
const config = RateLimitOptionsConfig.rateLimitConfig;

export const rateLimiter: Middleware = async function (this: any, requestContext, next) {

    const {request, response} = requestContext;
    const redisDataSource = requestContext.getBinding('datasources.cache_redis').getValue(requestContext);
    const redisDataStore = await getDataStore(redisDataSource); //get the dataStore. this is used by express-rate-limit
    const userProfile = requestContext.getBinding('userProfile').getValue(requestContext); // get the userProfile set by the authentication middleware

    //userProfile is passed by closure
    async function determineRateLimitIdentifier(
      request: typeof MiddlewareContext.prototype.request,
      response: typeof MiddlewareContext.prototype.request
    ) {
      if (userProfile.appUserId) {
        return userProfile.appUserId;
      } else {
        return request.ip;
      }
    }

    //options for the ratelimiter . the determineRateLimitIdentifier determines the identifier for rate-limiting
    let opts: any = {...config, ...{store: RedisStore, keyGenerator: determineRateLimitIdentifier}};

    //if the request is authenticated, the rate will be lower
    if (request.headers.authorization || request.headers.Authorization) {
      opts = {...opts, ...{max: RateLimitOptionsConfig.maxRequestsForAuthenticatedUsers}};
    }
    //If the request is un-authenticated, the rate limit will be higher
    else opts = {...opts, ...{max: RateLimitOptionsConfig.maxRequestsForUnauthenticatedUsers}};

    if (redisDataStore) {
      opts.store = redisDataStore;
    }

    const limiter = promisify(RateLimit.default(opts));

    await limiter(request, response).catch((err : any) => {
      console.log(err) // @todo -need to remove this
      LoggingUtils.error(err)
      LoggingUtils.error('Error while executing the rate limiting midleware')
      // throw new HttpErrors.InternalServerError('Something went wrong'); @todo - skipping this for now
    });
    const result = await next();
    return result;

};

async function getDataStore(datasource: juggler.DataSource) {
  const redisDS = datasource;
  if (redisDS?.connector) {
    return new RedisStore({
      sendCommand: async (...args: string[]) => {
        const command = `${args[0]}`;
        args.splice(0, 1);
        let res;
        try {
          res = await executeRedisCommand(redisDS, command, args);
          if (command.toLocaleLowerCase() === 'script') {
            res = decoder.decode(res as ArrayBuffer);
          }
        } catch (err) {
          throw new Error(`Could not execute redis command ${err}`);
        }
        return res as RedisReply;
      }
    });
  } else {
    throw new HttpErrors.InternalServerError('Invalid Datasource');
  }
}

// returns promisified execute function
function executeRedisCommand(dataSource: juggler.DataSource, command: string, args: (string | number)[]) {
  return new Promise((resolve, reject) => {
    if (dataSource.connector?.execute) {
      // eslint-disable-next-line  @typescript-eslint/no-floating-promises
      dataSource.connector.execute(command, args, (err: Error, res: Buffer) => {
        if (err) {
          reject(err);
        }
        if (res) {
          resolve(res);
        } else {
          return resolve(undefined);
        }
      });
    }
  });
}
