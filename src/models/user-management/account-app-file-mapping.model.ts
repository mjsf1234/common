import {belongsTo,hasOne, model} from '@loopback/repository';
import {UserManagementAppFile, BaseSQLModel} from '..';
import {Account} from './account.model';
import {AuditTrail} from './audit-rail';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'account_app_file_mapping'},
    plural: 'AccountAppFileMappings',
    foreignKeys: {
      fkidx_account_app_file_map_account_fk_id_account: {
        name: 'fkidx_account_app_file_map_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_account_app_file_maping_file_fk_id_file: {
        name: 'fkidx_account_app_file_maping_file_fk_id_file',
        foreignKey: 'fk_id_file',
        entityKey: 'id',
        entity: 'AppFile'
      }
    },
    hiddenProperties: []
  }
})
export class AccountAppFileMapping extends BaseSQLModel {
  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  accountId: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'userManagementAppFile',
      keyFrom: 'userManagementAppFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  userManagementAppFileId: number;

  @hasOne(() => AuditTrail, {keyTo: 'accountAppFileMappingId'})
  auditTrail?: AuditTrail;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AccountAppFileMapping>) {
    super(data);
  }
}

export interface AccountAppFileMappingRelations {
  // describe navigational properties here
}

export type AccountAppFileMappingWithRelations = AccountAppFileMapping & AccountAppFileMappingRelations;
