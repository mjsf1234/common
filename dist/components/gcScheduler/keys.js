"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCSchedulerBindings = void 0;
const core_1 = require("@loopback/core");
/**
 * Binding keys used by this component.
 */
var GCSchedulerBindings;
(function (GCSchedulerBindings) {
    /**
     * Binding key for RestExplorerComponent
     */
    GCSchedulerBindings.COMPONENT = core_1.BindingKey.create('components.GCScheduler');
    /**
     * Binding key for configuration of RestExplorerComponent.
     *
     * We recommend `ctx.configure(RestExplorerBindings.COMPONENT)` to be used
     * instead of `ctx.bind(RestExplorerBindings.CONFIG)`.
     */
    GCSchedulerBindings.CONFIG = core_1.BindingKey.buildKeyForConfig(GCSchedulerBindings.COMPONENT);
})(GCSchedulerBindings = exports.GCSchedulerBindings || (exports.GCSchedulerBindings = {}));
//# sourceMappingURL=keys.js.map