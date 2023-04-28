"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRemoteRepository = void 0;
const repository_1 = require("@loopback/repository");
class BaseRemoteRepository extends repository_1.DefaultCrudRepository {
    // Custom implementation
    toEntity(model) {
        return model;
    }
}
exports.BaseRemoteRepository = BaseRemoteRepository;
//# sourceMappingURL=base-remote.repository.js.map