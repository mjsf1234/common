import {belongsTo, model} from '@loopback/repository';
import {AppRole, AppUser, BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'user_role_mapping'},
    plural: 'AppUserRoleMappings',
    foreignKeys: {
      fkidx_user_role_mapping_user_fk_id_user: {
        name: 'fkidx_user_role_mapping_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_user_role_mapping_role_fk_id_role: {
        name: 'fkidx_user_role_mapping_role_fk_id_role',
        foreignKey: 'fk_id_role',
        entityKey: 'id',
        entity: 'AppRole'
      }
    },
    indexes: {
      idx_fk_id_user_fk_id_role: {
        keys: {fk_id_user: 1, fk_id_role: 1},
        options: {unique: true, caseInsensitiveUnique: true}
      }
    },
    hiddenProperties: ['fk_id_user', 'fk_id_role']
  }
})
export class AppUserRoleMapping extends BaseSQLModel {
  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  appUserId: number;

  @belongsTo(
    () => AppRole,
    {
      name: 'appRole',
      keyFrom: 'appRoleId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_role', dataType: 'INT', nullable: 'Y'}
    }
  )
  appRoleId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AppUserRoleMapping>) {
    super(data);
  }
}

export interface AppUserRoleMappingRelations {
  // describe navigational properties here
}

export type AppUserRoleMappingWithRelations = AppUserRoleMapping & AppUserRoleMappingRelations;
