import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {AppUser} from './app-user.model';
import {Group} from './group.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'family'},
    plural: 'Families',
    foreignKeys: {
      fkidx_family_group_fk_id_group: {
        name: 'fkidx_family_group_fk_id_group',
        foreignKey: 'fk_id_group',
        entityKey: 'id',
        entity: 'Group'
      }
    },
    hiddenProperties: []
  }
})
export class Family extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: object;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @belongsTo(
    () => Group,
    {
      name: 'group',
      keyFrom: 'groupId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_group', dataType: 'INT', nullable: 'Y'}
    }
  )
  groupId?: number;

  @hasMany(() => AppUser, {keyTo: 'familyId'})
  appUsers?: AppUser[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Family>) {
    super(data);
  }
}

export interface FamilyRelations {
  // describe navigational properties here
}

export type FamilyWithRelations = Family & FamilyRelations;
