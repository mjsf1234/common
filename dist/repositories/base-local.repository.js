"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLocalRepository = exports.PostgresErrorCodes = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const field_pseudonymization_mixin_1 = require("../mixins/field-pseudonymization.mixin");
const option_label_mixin_1 = require("../mixins/option-label.mixin");
const timestamp_mixin_1 = require("../mixins/timestamp.mixin");
const sync_transactional_data_refresher_mixin_1 = require("../mixins/sync-transactional-data-refresher.mixin");
const utils_1 = require("../utils");
const audit_logger_mixin_1 = require("../mixins/audit-logger-mixin");
const underscore_1 = (0, tslib_1.__importDefault)(require("underscore"));
var PostgresErrorCodes;
(function (PostgresErrorCodes) {
    PostgresErrorCodes[PostgresErrorCodes["Duplicate"] = 23505] = "Duplicate";
})(PostgresErrorCodes = exports.PostgresErrorCodes || (exports.PostgresErrorCodes = {}));
class BaseLocalRepository extends repository_1.DefaultTransactionalRepository {
    // Custom implementation
    definePersistedModel(entityClass) {
        const modelClass = super.definePersistedModel(entityClass);
        timestamp_mixin_1.TimestampMixin.register(modelClass);
        option_label_mixin_1.OptionLabelMixin.register(modelClass);
        sync_transactional_data_refresher_mixin_1.SyncTransactionalDataRefresherMixin.register(modelClass);
        if (process.env.FIELD_PSEUDONYM && process.env.FIELD_PSEUDONYM.toLowerCase() == 'enable') {
            field_pseudonymization_mixin_1.FieldPseudonymizationMixin.register(modelClass);
        }
        audit_logger_mixin_1.AuditLoggerMixin.register(modelClass);
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
    delete(entity, options) {
        // Do hard delete
        let newOptions;
        if (this.dataSource.settings.connector === 'rest') {
            newOptions = { ...options, connectorType: 'rest' };
        }
        else {
            newOptions = { ...options, connectorType: 'localDB' };
        }
        return super.delete(entity, newOptions);
    }
    findOne(filter, options) {
        try {
            let newOptions;
            if (this.dataSource.settings.connector === 'rest') {
                newOptions = { ...options, connectorType: 'rest' };
            }
            else {
                newOptions = { ...options, connectorType: 'localDB' };
            }
            this.checkUndefined(filter);
            return super.findOne(filter, newOptions);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    findById(id, filter, options) {
        try {
            let newOptions;
            if (this.dataSource.settings.connector === 'rest') {
                newOptions = { ...options, connectorType: 'rest' };
            }
            else {
                newOptions = { ...options, connectorType: 'localDB' };
            }
            this.checkUndefined(filter);
            return super.findById(id, filter, newOptions);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    find(filter, options) {
        try {
            let newOptions;
            if (this.dataSource.settings.connector === 'rest') {
                newOptions = { ...options, connectorType: 'rest' };
            }
            else {
                newOptions = { ...options, connectorType: 'localDB' };
            }
            this.checkUndefined(filter);
            return super.find(filter, newOptions);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * Method to perform hard delete of entries. Take caution.
     * @param entity
     * @param options
     */
    deleteAll(where, options) {
        let newOptions;
        if (this.dataSource.settings.connector === 'rest') {
            newOptions = { ...options, connectorType: 'rest' };
        }
        else {
            newOptions = { ...options, connectorType: 'localDB' };
        }
        this.checkUndefined(where);
        // Do hard delete
        return super.deleteAll(where, newOptions);
    }
    count(where, options) {
        let newOptions;
        if (this.dataSource.settings.connector === 'rest') {
            newOptions = { ...options, connectorType: 'rest' };
        }
        else {
            newOptions = { ...options, connectorType: 'localDB' };
        }
        this.checkUndefined(where);
        // Do hard delete
        return super.count(where, newOptions);
    }
    /**
     * Method to perform hard delete of entries. Take caution.
     * @param entity
     * @param options
     */
    deleteById(id, options) {
        // Do hard delete
        let newOptions;
        if (this.dataSource.settings.connector === 'rest') {
            newOptions = { ...options, connectorType: 'rest' };
        }
        else {
            newOptions = { ...options, connectorType: 'localDB' };
        }
        return super.deleteById(id, newOptions);
    }
    async updateById(id, entity, options) {
        try {
            let newOptions;
            if (this.dataSource.settings.connector === 'rest') {
                newOptions = { ...options, connectorType: 'rest' };
            }
            else {
                newOptions = { ...options, connectorType: 'localDB' };
            }
            return await super.updateById(id, entity, newOptions);
        }
        catch (error) {
            if (error.code == PostgresErrorCodes.Duplicate && error.detail) {
                try {
                    const regex = /\(([^)]+)\)/;
                    const message = error.detail.split('=');
                    const columnName = regex.exec(message[0]);
                    const value = regex.exec(message[1]);
                    return Promise.reject(new utils_1.RestError(400, `Duplicate value ${value[1]} for column ${columnName[1]}`));
                }
                catch (error) {
                    return Promise.reject(new utils_1.RestError(400, 'Duplicate key value violates unique constraint'));
                }
            }
            return Promise.reject(error);
        }
    }
    async updateAll(entity, where, options) {
        try {
            let newOptions;
            if (this.dataSource.settings.connector === 'rest') {
                newOptions = { ...options, connectorType: 'rest' };
            }
            else {
                newOptions = { ...options, connectorType: 'localDB' };
            }
            this.checkUndefined(where);
            return await super.updateAll(entity, where, newOptions);
        }
        catch (error) {
            if (error.code == PostgresErrorCodes.Duplicate && error.detail) {
                try {
                    const regex = /\(([^)]+)\)/;
                    const message = error.detail.split('=');
                    const columnName = regex.exec(message[0]);
                    const value = regex.exec(message[1]);
                    return Promise.reject(new utils_1.RestError(400, `Duplicate value ${value[1]} for column ${columnName[1]}`));
                }
                catch (error) {
                    return Promise.reject(new utils_1.RestError(400, 'Duplicate key value violates unique constraint'));
                }
            }
            return Promise.reject(error);
        }
    }
    async save(entity, options) {
        try {
            let newOptions;
            if (this.dataSource.settings.connector === 'rest') {
                newOptions = { ...options, connectorType: 'rest' };
            }
            else {
                newOptions = { ...options, connectorType: 'localDB' };
            }
            return await super.save(entity, newOptions);
        }
        catch (error) {
            if (error.code == PostgresErrorCodes.Duplicate && error.detail) {
                try {
                    const regex = /\(([^)]+)\)/;
                    const message = error.detail.split('=');
                    const columnName = regex.exec(message[0]);
                    const value = regex.exec(message[1]);
                    return Promise.reject(new utils_1.RestError(400, `Duplicate value ${value[1]} for column ${columnName[1]}`));
                }
                catch (error) {
                    return Promise.reject(new utils_1.RestError(400, 'Duplicate key value violates unique constraint'));
                }
            }
            return Promise.reject(error);
        }
    }
    async create(entity, options) {
        try {
            let newOptions;
            if (this.dataSource.settings.connector === 'rest') {
                newOptions = { ...options, connectorType: 'rest' };
            }
            else {
                newOptions = { ...options, connectorType: 'localDB' };
            }
            return await super.create(entity, newOptions);
        }
        catch (error) {
            if (error.code == PostgresErrorCodes.Duplicate && error.detail) {
                try {
                    const regex = /\(([^)]+)\)/;
                    const message = error.detail.split('=');
                    const columnName = regex.exec(message[0]);
                    const value = regex.exec(message[1]);
                    return Promise.reject(new utils_1.RestError(400, `Duplicate value ${value[1]} for column ${columnName[1]}`));
                }
                catch (error) {
                    return Promise.reject(new utils_1.RestError(400, 'Duplicate key value violates unique constraint'));
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
    async beginTransaction(options, timeout = 30000) {
        console.log('Begin transaction', timeout);
        const tx = await super.beginTransaction(options);
        setTimeout(async () => {
            if (tx && tx.connection && tx.connection.txId) {
                console.log('rolling back');
                await tx.rollback();
            }
        }, timeout);
        return tx;
    }
    checkUndefined(obj) {
        if ((underscore_1.default.isObject(obj) || underscore_1.default.isArray(obj)) && typeof obj != 'function') {
            underscore_1.default.each(obj, (value, key) => {
                if (underscore_1.default.isObject(value) || underscore_1.default.isArray(value)) {
                    this.checkUndefined(value);
                }
                else {
                    //check if the value is undefined
                    if (value === undefined)
                        throw new Error(`Caught Undefined for Property ${key}}`);
                }
            });
        }
    }
}
exports.BaseLocalRepository = BaseLocalRepository;
//# sourceMappingURL=base-local.repository.js.map