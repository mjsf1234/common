"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingLogRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class MessagingLogRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.MessagingLog, dataSource);
    }
}
exports.MessagingLogRepository = MessagingLogRepository;
//# sourceMappingURL=messaging-log.repository.js.map