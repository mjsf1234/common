"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessCalendarRepository = void 0;
const repositories_1 = require("../../repositories");
const models_1 = require("../../models");
class BusinessCalendarRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource) {
        super(models_1.BusinessCalendar, dataSource);
    }
}
exports.BusinessCalendarRepository = BusinessCalendarRepository;
//# sourceMappingURL=business-calendar.repository.js.map