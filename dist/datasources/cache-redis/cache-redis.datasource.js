"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheRedisRemoteDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const fs = require('fs');
const createConfig = () => {
    var _a, _b, _c, _d;
    let config = {
        name: 'cache_redis',
        connector: 'kv-redis',
        host: ((_a = process.env.COMMON_DS_CACHE_REDIS_HOST) !== null && _a !== void 0 ? _a : '127.0.0.1'),
        port: ((_b = process.env.COMMON_DS_CACHE_REDIS_PORT) !== null && _b !== void 0 ? _b : 6379),
        password: ((_c = process.env.COMMON_DS_CACHE_REDIS_PASSWORD) !== null && _c !== void 0 ? _c : ''),
        username: ((_d = process.env.COMMON_DS_CACHE_REDIS_USERNAME) !== null && _d !== void 0 ? _d : ''),
        db: 0
    };
    if (process.env.COMMON_DS_REDIS_TLS_ENABLED == "true" && process.env.COMMON_DS_REDIS_CA_CERT) {
        const tlsConfig = {
            tls: { ca: fs.readFileSync(process.env.COMMON_DS_REDIS_CA_CERT), rejectUnauthorized: false }
        };
        config = { ...config, ...tlsConfig };
    }
    return config;
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let CacheRedisRemoteDataSource = class CacheRedisRemoteDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = createConfig()) {
        super(dsConfig);
    }
};
CacheRedisRemoteDataSource.dataSourceName = 'cache_redis';
CacheRedisRemoteDataSource.defaultConfig = createConfig();
CacheRedisRemoteDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.cache_redis', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CacheRedisRemoteDataSource);
exports.CacheRedisRemoteDataSource = CacheRedisRemoteDataSource;
//# sourceMappingURL=cache-redis.datasource.js.map