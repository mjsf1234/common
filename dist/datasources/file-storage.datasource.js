"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const storageConfig = {
    name: 'fileStorage',
    connector: 'loopback-component-storage',
    nameConflict: 'makeUnique',
    maxFileSize: '3221225472',
    mainBucket: null
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let StorageDataSource = class StorageDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = storageConfig) {
        if (process.env.ENV_TYPE == 'GKE') {
            storageConfig['provider'] = 'google';
            storageConfig['projectId'] = process.env.GCP_PROJECTID;
            storageConfig['keyFilename'] = process.env.GCP_STORAGE_KEY;
        }
        else {
            storageConfig['provider'] = 'filesystem';
            storageConfig['root'] = path_1.default.join(require('os').homedir());
        }
        super(dsConfig);
    }
};
StorageDataSource.dataSourceName = 'fileStorage';
StorageDataSource.defaultConfig = storageConfig;
StorageDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.fileStorage', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], StorageDataSource);
exports.StorageDataSource = StorageDataSource;
//# sourceMappingURL=file-storage.datasource.js.map