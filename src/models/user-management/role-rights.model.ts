import {model, property, belongsTo} from '@loopback/repository';
import {BaseSQLModel} from '..';
@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'role_rights'},
    plural: 'RoleRights'
  }
})
export class RoleRights extends BaseSQLModel {


  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'profile', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  profile: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'role_description', dataType: 'TEXT', nullable: 'N'}
  })
  roleDescription: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'rights', dataType: 'TEXT', nullable: 'N'}
  })
  rights: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'rights_description', dataType: 'TEXT', nullable: 'N'}
  })
  rightsDescription: string;

  @property({
    type: 'boolean',
    required: true,
    postgresql: {columnName: 'read', dataType: 'BOOLEAN', nullable: 'N'}
  })
  read: boolean;

  @property({
    type: 'boolean',
    required: true,
    postgresql: {columnName: 'write', dataType: 'BOOLEAN', nullable: 'N'}
  })
  write: boolean;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'role_status', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  roleStatus: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'rights_status', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  rightsStatus: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'department', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  department?: string | null;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'type_of_access', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  typeOfAccess: string;


  constructor(data?: Partial<RoleRights>) {
    super(data);
  }
}

export interface RoleRightsRelations {

}

export type RoleRightsWithRelations = RoleRights & RoleRightsRelations
