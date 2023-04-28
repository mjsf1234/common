import {Application, Component, config, ContextTags, CoreBindings, createServiceBinding, inject, injectable} from '@loopback/core';
import {BaseCronController} from './controllers/base-cron.controller';
import {BaseCronFacade} from './facades';
import {GCConfig, GCSchedulerBindings} from './keys';

@injectable({tags: {[ContextTags.KEY]: GCSchedulerBindings.COMPONENT.key}})
export class GCSchedulerComponent implements Component {
  bindings = [createServiceBinding(BaseCronFacade)];
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config() config: GCConfig = {}
  ) {
    const basePath = config.basePath ?? '';
    this.application.controller(BaseCronController);
    // this.application.bind().toClass(BaseCronFacade);
  }
}
