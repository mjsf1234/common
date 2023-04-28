import { DefaultTransactionalRepository, Entity, Where, Count, DataObject, AnyObject, IsolationLevel, Transaction } from '@loopback/repository';
import { Options } from 'loopback-datasource-juggler';
import { Filter, FilterExcludingWhere } from '@loopback/filter';
export declare enum PostgresErrorCodes {
    Duplicate = 23505
}
export declare class BaseLocalRepository<E extends Entity, IdType, Relations extends object> extends DefaultTransactionalRepository<E, IdType, Relations> {
    definePersistedModel(entityClass: typeof Entity): any;
    /**
     * Method to perform hard delete of entries. Take caution.
     * @param entity
     * @param options
     */
    delete(entity: E, options?: Options): Promise<void>;
    findOne(filter?: Filter<E>, options?: Options): Promise<(E & Relations) | null>;
    findById(id: IdType, filter?: FilterExcludingWhere<E> | undefined, options?: AnyObject | undefined): Promise<E & Relations>;
    find(filter?: Filter<E>, options?: Options): Promise<(E & Relations)[]>;
    /**
     * Method to perform hard delete of entries. Take caution.
     * @param entity
     * @param options
     */
    deleteAll(where?: Where<E>, options?: Options): Promise<Count>;
    count(where?: Where<E> | undefined, options?: AnyObject | undefined): Promise<Count>;
    /**
     * Method to perform hard delete of entries. Take caution.
     * @param entity
     * @param options
     */
    deleteById(id: IdType, options?: Options): Promise<void>;
    updateById(id: IdType, entity: DataObject<E>, options?: Options): Promise<void>;
    updateAll(entity: DataObject<E>, where?: Where<E>, options?: Options): Promise<Count>;
    save(entity: E, options?: Options): Promise<E>;
    create(entity: DataObject<E>, options?: Options): Promise<E>;
    /**
     * Overriding begin transaction service
     * @param options
     * @param timeout
     * @returns
     */
    beginTransaction(options?: IsolationLevel | AnyObject, timeout?: number): Promise<Transaction>;
    checkUndefined(obj: any): void;
}
