import { Application, Component } from '@loopback/core';
import { BaseCronFacade } from './facades';
import { GCConfig } from './keys';
export declare class GCSchedulerComponent implements Component {
    private application;
    bindings: import("@loopback/core").Binding<BaseCronFacade>[];
    constructor(application: Application, config?: GCConfig);
}
