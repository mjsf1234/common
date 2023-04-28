import {belongsTo, model, property} from '@loopback/repository';
import {AppUserRoleMapping, BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'user_role_preferences'},
    plural: 'UserRolePreferences',
    foreignKeys: {
      fkidx_user_role_preferences_fk_id_app_user_role_mapping: {
        name: 'fkidx_user_role_preferences_fk_id_app_user_role_mapping',
        foreignKey: 'fk_id_app_user_role_mapping',
        entityKey: 'id',
        entity: 'AppUserRoleMapping'
      }
    }
  }
})
export class UserRolePreferences extends BaseSQLModel {
  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: object;

  @belongsTo(
    () => AppUserRoleMapping,
    {
      name: 'appUserRoleMapping',
      keyFrom: 'appUserRoleMappingId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_app_user_role_mapping', dataType: 'INT', nullable: 'Y'}
    }
  )
  appUserRoleMappingId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserRolePreferences>) {
    super(data);
  }
}

export interface UserRolePreferencesRelations {
  // describe navigational properties here
}

export type UserRolePreferencesWithRelations = UserRolePreferences & UserRolePreferencesRelations;
