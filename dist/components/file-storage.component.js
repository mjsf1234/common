"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorageComponent = void 0;
const service_proxy_1 = require("@loopback/service-proxy");
const datasources_1 = require("../datasources");
// storage-gc-service.provider.ts
class FileStorageComponent {
    constructor(dataSource = new datasources_1.StorageDataSource()) {
        this.dataSource = dataSource;
    }
    value() {
        return (0, service_proxy_1.getService)(this.dataSource);
    }
}
exports.FileStorageComponent = FileStorageComponent;
//# sourceMappingURL=file-storage.component.js.map