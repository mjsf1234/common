import {ConstructorOptions} from 'rsmq';
const fs = require('fs');

export default class RSMQConfiguration implements ConstructorOptions {
  host: string;
  port: number;
  ns: 'rsmq';
  //realtime: '',
  options: object;

  constructor() {
    this.host = process.env.COMMON_DS_CACHE_REDIS_HOST ?? '127.0.0.1';
    this.port = +(process.env.COMMON_DS_CACHE_REDIS_PORT ?? 6379);
    if (process.env.COMMON_DS_REDIS_TLS_ENABLED && process.env.COMMON_DS_REDIS_TLS_ENABLED == 'true') {
      this.options = {
        tls: {
          ca: fs.readFileSync(process.env.COMMON_DS_REDIS_CA_CERT),
          rejectUnauthorized: false
        }
      };
    }
    switch (process.env.COMMON_RSMQ_AUTH_TYPE as string) {
      case 'AUTH_PASSWORD':
        this.options = {...this.options, auth_pass: process.env.COMMON_DS_CACHE_REDIS_PASSWORD ?? ''};
        break;

      case 'PASSWORD':
        this.options = {...this.options, password: process.env.COMMON_DS_CACHE_REDIS_PASSWORD ?? ''};
        break;

      case 'BOTH':
        this.options = {
          ...this.options,
          auth_pass: process.env.COMMON_DS_CACHE_REDIS_PASSWORD ?? '',
          password: process.env.COMMON_DS_CACHE_REDIS_PASSWORD ?? ''
        };
        break;

      default:
        break;
    }
  }
}
