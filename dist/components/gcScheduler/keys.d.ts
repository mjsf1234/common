import { BindingAddress, BindingKey } from '@loopback/core';
import { GCSchedulerComponent } from './gc-scheduler.component';
/**
 * Binding keys used by this component.
 */
export declare namespace GCSchedulerBindings {
    /**
     * Binding key for RestExplorerComponent
     */
    const COMPONENT: BindingKey<GCSchedulerComponent>;
    /**
     * Binding key for configuration of RestExplorerComponent.
     *
     * We recommend `ctx.configure(RestExplorerBindings.COMPONENT)` to be used
     * instead of `ctx.bind(RestExplorerBindings.CONFIG)`.
     */
    const CONFIG: BindingAddress<GCConfig>;
}
export interface GCConfig {
    [key: string]: string | number | any;
    basePath?: string;
}
