import {DefaultCrudRepository, Entity} from '@loopback/repository';
import legacy from 'loopback-datasource-juggler';

export class BaseRemoteRepository<E extends Entity, IdType, Relations extends object> extends DefaultCrudRepository<E, IdType, Relations> {
  // Custom implementation

  protected toEntity<ET extends Entity>(model: legacy.PersistedModel): ET {
    return model as unknown as ET;
  }
}
