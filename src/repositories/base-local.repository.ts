import {
  DefaultCrudRepository,
  DefaultTransactionalRepository,
  Entity,
  Where,
  Count,
  DataObject,
  AnyObject,
  IsolationLevel,
  Transaction
} from '@loopback/repository';
import {FieldPseudonymizationMixin} from '../mixins/field-pseudonymization.mixin';
import {OptionLabelMixin} from '../mixins/option-label.mixin';
import {TimestampMixin} from '../mixins/timestamp.mixin';
import {SyncTransactionalDataRefresherMixin} from '../mixins/sync-transactional-data-refresher.mixin';
import {Options} from 'loopback-datasource-juggler';
import {RestError} from '../utils';
import {AuditLoggerMixin} from '../mixins/audit-logger-mixin';
import {Filter, FilterExcludingWhere} from '@loopback/filter';
import _, {object} from 'underscore';

export enum PostgresErrorCodes {
  Duplicate = 23505
}

export class BaseLocalRepository<E extends Entity, IdType, Relations extends object> extends DefaultTransactionalRepository<
  E,
  IdType,
  Relations
> {
  // Custom implementation
  definePersistedModel(entityClass: typeof Entity): any {
    const modelClass = super.definePersistedModel(entityClass);
    TimestampMixin.register(modelClass);
    OptionLabelMixin.register(modelClass);
    SyncTransactionalDataRefresherMixin.register(modelClass);
    if (process.env.FIELD_PSEUDONYM && process.env.FIELD_PSEUDONYM.toLowerCase() == 'enable') {
      FieldPseudonymizationMixin.register(modelClass);
    }
    AuditLoggerMixin.register(modelClass);
    return modelClass;
  }

  /*
    delete(entity: E, options?: Options): Promise<void> {
      // Do soft delete, no hard delete allowed
      (entity as any).isActive = false;
      return super.update(entity, options);
    }

    deleteAll(where?: Where<E>, options?: Options): Promise<Count> {
      // Do soft delete, no hard delete allowed
      return this.updateAll(
        {
          isActive: false,
        } as any,
        where,
        options,
      );
    }

    deleteById(id: IdType, options?: Options): Promise<void> {
      // Do soft delete, no hard delete allowed
      return super.updateById(
        id,
        {
          isActive: false,
        } as any,
        options,
      );
    }

    */

  // @todo hot-fix removing for now to go ahead with deployment.
  /**
   * Method to perform hard delete of entries. Take caution.
   * @param entity
   * @param options
   */
  delete(entity: E, options?: Options): Promise<void> {
    // Do hard delete
    let newOptions: Options;
    if (this.dataSource.settings.connector === 'rest') {
      newOptions = {...options, connectorType: 'rest'};
    } else {
      newOptions = {...options, connectorType: 'localDB'};
    }
    return super.delete(entity, newOptions);
  }

  findOne(filter?: Filter<E>, options?: Options): Promise<(E & Relations) | null> {
    try {
      let newOptions: Options;
      if (this.dataSource.settings.connector === 'rest') {
        newOptions = {...options, connectorType: 'rest'};
      } else {
        newOptions = {...options, connectorType: 'localDB'};
      }
      this.checkUndefined(filter);
      return super.findOne(filter, newOptions);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  findById(id: IdType, filter?: FilterExcludingWhere<E> | undefined, options?: AnyObject | undefined): Promise<E & Relations> {
    try {
      let newOptions: Options;
      if (this.dataSource.settings.connector === 'rest') {
        newOptions = {...options, connectorType: 'rest'};
      } else {
        newOptions = {...options, connectorType: 'localDB'};
      }
      this.checkUndefined(filter);
      return super.findById(id, filter, newOptions);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  find(filter?: Filter<E>, options?: Options): Promise<(E & Relations)[]> {
    try {
      let newOptions: Options;
      if (this.dataSource.settings.connector === 'rest') {
        newOptions = {...options, connectorType: 'rest'};
      } else {
        newOptions = {...options, connectorType: 'localDB'};
      }
      this.checkUndefined(filter);
      return super.find(filter, newOptions);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Method to perform hard delete of entries. Take caution.
   * @param entity
   * @param options
   */
  deleteAll(where?: Where<E>, options?: Options): Promise<Count> {
    let newOptions: Options;
    if (this.dataSource.settings.connector === 'rest') {
      newOptions = {...options, connectorType: 'rest'};
    } else {
      newOptions = {...options, connectorType: 'localDB'};
    }
    this.checkUndefined(where);
    // Do hard delete
    return super.deleteAll(where, newOptions);
  }

  count(where?: Where<E> | undefined, options?: AnyObject | undefined): Promise<Count> {
    let newOptions: Options;
    if (this.dataSource.settings.connector === 'rest') {
      newOptions = {...options, connectorType: 'rest'};
    } else {
      newOptions = {...options, connectorType: 'localDB'};
    }
    this.checkUndefined(where);
    // Do hard delete
    return super.count(where, newOptions)
  }

  /**
   * Method to perform hard delete of entries. Take caution.
   * @param entity
   * @param options
   */
  deleteById(id: IdType, options?: Options): Promise<void> {
    // Do hard delete
    let newOptions: Options;
    if (this.dataSource.settings.connector === 'rest') {
      newOptions = {...options, connectorType: 'rest'};
    } else {
      newOptions = {...options, connectorType: 'localDB'};
    }
    return super.deleteById(id, newOptions);
  }

  async updateById(id: IdType, entity: DataObject<E>, options?: Options): Promise<void> {
    try {
      let newOptions: Options;
      if (this.dataSource.settings.connector === 'rest') {
        newOptions = {...options, connectorType: 'rest'};
      } else {
        newOptions = {...options, connectorType: 'localDB'};
      }
      return await super.updateById(id, entity, newOptions);
    } catch (error) {
      if (error.code == PostgresErrorCodes.Duplicate && error.detail) {
        try {
          const regex = /\(([^)]+)\)/;
          const message = error.detail.split('=');
          const columnName: any = regex.exec(message[0]);
          const value: any = regex.exec(message[1]);
          return Promise.reject(new RestError(400, `Duplicate value ${value[1]} for column ${columnName[1]}`));
        } catch (error) {
          return Promise.reject(new RestError(400, 'Duplicate key value violates unique constraint'));
        }
      }
      return Promise.reject(error);
    }
  }

  async updateAll(entity: DataObject<E>, where?: Where<E>, options?: Options): Promise<Count> {
    try {
      let newOptions: Options;
      if (this.dataSource.settings.connector === 'rest') {
        newOptions = {...options, connectorType: 'rest'};
      } else {
        newOptions = {...options, connectorType: 'localDB'};
      }
      this.checkUndefined(where);
      return await super.updateAll(entity, where, newOptions);
    } catch (error) {
      if (error.code == PostgresErrorCodes.Duplicate && error.detail) {
        try {
          const regex = /\(([^)]+)\)/;
          const message = error.detail.split('=');
          const columnName: any = regex.exec(message[0]);
          const value: any = regex.exec(message[1]);
          return Promise.reject(new RestError(400, `Duplicate value ${value[1]} for column ${columnName[1]}`));
        } catch (error) {
          return Promise.reject(new RestError(400, 'Duplicate key value violates unique constraint'));
        }
      }
      return Promise.reject(error);
    }
  }

  async save(entity: E, options?: Options): Promise<E> {
    try {
      let newOptions: Options;
      if (this.dataSource.settings.connector === 'rest') {
        newOptions = {...options, connectorType: 'rest'};
      } else {
        newOptions = {...options, connectorType: 'localDB'};
      }
      return await super.save(entity, newOptions);
    } catch (error) {
      if (error.code == PostgresErrorCodes.Duplicate && error.detail) {
        try {
          const regex = /\(([^)]+)\)/;
          const message = error.detail.split('=');
          const columnName: any = regex.exec(message[0]);
          const value: any = regex.exec(message[1]);
          return Promise.reject(new RestError(400, `Duplicate value ${value[1]} for column ${columnName[1]}`));
        } catch (error) {
          return Promise.reject(new RestError(400, 'Duplicate key value violates unique constraint'));
        }
      }
      return Promise.reject(error);
    }
  }

  async create(entity: DataObject<E>, options?: Options): Promise<E> {
    try {
      let newOptions: Options;
      if (this.dataSource.settings.connector === 'rest') {
        newOptions = {...options, connectorType: 'rest'};
      } else {
        newOptions = {...options, connectorType: 'localDB'};
      }
      return await super.create(entity, newOptions);
    } catch (error) {
      if (error.code == PostgresErrorCodes.Duplicate && error.detail) {
        try {
          const regex = /\(([^)]+)\)/;
          const message = error.detail.split('=');
          const columnName: any = regex.exec(message[0]);
          const value: any = regex.exec(message[1]);
          return Promise.reject(new RestError(400, `Duplicate value ${value[1]} for column ${columnName[1]}`));
        } catch (error) {
          return Promise.reject(new RestError(400, 'Duplicate key value violates unique constraint'));
        }
      }
      return Promise.reject(error);
    }
  }

  /**
   * Overriding begin transaction service
   * @param options
   * @param timeout
   * @returns
   */
  async beginTransaction(options?: IsolationLevel | AnyObject, timeout: number = 30000): Promise<Transaction> {
    console.log('Begin transaction', timeout);
    const tx: Transaction | any = await super.beginTransaction(options);
    setTimeout(async () => {
      if (tx && tx.connection && tx.connection.txId) {
        console.log('rolling back');
        await tx.rollback();
      }
    }, timeout);
    return tx;
  }

  checkUndefined(obj: any) {
    if ((_.isObject(obj) || _.isArray(obj)) && typeof obj != 'function') {
      _.each(obj, (value, key) => {
        if (_.isObject(value) || _.isArray(value)) {
          this.checkUndefined(value);
        } else {
          //check if the value is undefined
          if (value === undefined) throw new Error(`Caught Undefined for Property ${key}}`);
        }
      });
    }
  }
}
