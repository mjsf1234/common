import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {AppUser} from './app-user.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'family_mapping'},
    plural: 'FamilyMappings',
    foreignKeys: {
      // @TODO
      /*fkidx_family_mapping_user_fk_id_user_parent: {
        name: 'fkidx_family_mapping_user_fk_id_user_parent',
        foreignKey: 'fk_id_user_parent',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_family_mapping_user_fk_id_user_child: {
        name: 'fkidx_family_mapping_user_fk_id_user_child',
        foreignKey: 'fk_id_user_child',
        entityKey: 'id',
        entity: 'AppUser'
      },      */
    },
    hiddenProperties: []
  }
})
export class FamilyMapping extends BaseSQLModel {
  @property({
    type: 'string',
    required: false,
    isPseudonym: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  name?: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'FAMILYREQUESTSTATUS',
    postgresql: {columnName: 'family_request_status', dataType: 'SMALLINT', nullable: 'N'}
  })
  familyRequestStatus: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'number_of_rejects', dataType: 'SMALLINT', nullable: 'Y'}
  })
  numberOfRejects?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'last_reject_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  lastRejectDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'new_request_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  newRequestDate?: Date;

  @belongsTo(
    () => AppUser,
    {
      name: 'parentAppUser',
      keyFrom: 'parentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_parent', dataType: 'INT', nullable: 'N'}
    }
  )
  parentId: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'childAppUser',
      keyFrom: 'childId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_child', dataType: 'INT', nullable: 'N'}
    }
  )
  childId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FamilyMapping>) {
    super(data);
  }
}

export interface FamilyMappingRelations {
  // describe navigational properties here
}

export type FamilyMappingWithRelations = FamilyMapping & FamilyMappingRelations;
