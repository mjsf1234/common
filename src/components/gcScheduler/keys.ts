import {BindingAddress, BindingKey} from '@loopback/core';
import {GCSchedulerComponent} from './gc-scheduler.component';

/**
 * Binding keys used by this component.
 */
export namespace GCSchedulerBindings {
  /**
   * Binding key for RestExplorerComponent
   */
  export const COMPONENT = BindingKey.create<GCSchedulerComponent>('components.GCScheduler');
  /**
   * Binding key for configuration of RestExplorerComponent.
   *
   * We recommend `ctx.configure(RestExplorerBindings.COMPONENT)` to be used
   * instead of `ctx.bind(RestExplorerBindings.CONFIG)`.
   */
  export const CONFIG: BindingAddress<GCConfig> = BindingKey.buildKeyForConfig<GCConfig>(COMPONENT);
}

export interface GCConfig {
  [key: string]: string | number | any;
  basePath?: string;
}
