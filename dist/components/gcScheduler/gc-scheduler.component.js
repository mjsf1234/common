"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCSchedulerComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const base_cron_controller_1 = require("./controllers/base-cron.controller");
const facades_1 = require("./facades");
const keys_1 = require("./keys");
let GCSchedulerComponent = class GCSchedulerComponent {
    constructor(application, config = {}) {
        var _a;
        this.application = application;
        this.bindings = [(0, core_1.createServiceBinding)(facades_1.BaseCronFacade)];
        const basePath = (_a = config.basePath) !== null && _a !== void 0 ? _a : '';
        this.application.controller(base_cron_controller_1.BaseCronController);
        // this.application.bind().toClass(BaseCronFacade);
    }
};
GCSchedulerComponent = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ tags: { [core_1.ContextTags.KEY]: keys_1.GCSchedulerBindings.COMPONENT.key } }),
    (0, tslib_1.__param)(0, (0, core_1.inject)(core_1.CoreBindings.APPLICATION_INSTANCE)),
    (0, tslib_1.__param)(1, (0, core_1.config)()),
    (0, tslib_1.__metadata)("design:paramtypes", [core_1.Application, Object])
], GCSchedulerComponent);
exports.GCSchedulerComponent = GCSchedulerComponent;
//# sourceMappingURL=gc-scheduler.component.js.map