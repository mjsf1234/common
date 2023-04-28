import { DefaultCrudRepository, Entity } from '@loopback/repository';
import legacy from 'loopback-datasource-juggler';
export declare class BaseRemoteRepository<E extends Entity, IdType, Relations extends object> extends DefaultCrudRepository<E, IdType, Relations> {
    protected toEntity<ET extends Entity>(model: legacy.PersistedModel): ET;
}
