import {belongsTo, model, property} from '@loopback/repository';
import {MasterDataAppFile, AppUser, BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    plurals: 'BulkUploads',
    postgresql: {tableName: 'bulk_upload'},
    foreignKeys: {
      fkidx_bulk_upload_file_fk_id_file: {
        name: 'fkidx_bulk_upload_file_fk_id_file',
        foreignKey: 'fk_id_file',
        entityKey: 'id',
        entity: 'AppFile'
      },
      fkidx_bulk_upload_user_fk_id_user: {
        name: 'fkidx_bulk_upload_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    }
  }
})
export class BulkUpload extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'type', dataType: 'SMALLINT', nullable: 'N'}
  })
  type: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'extra', dataType: 'TEXT', nullable: 'Y'}
  })
  extra?: object;

  //@todo - have local file table
  @belongsTo(
    () => MasterDataAppFile,
    {
      name: 'masterDataAppFile',
      keyFrom: 'masterDataAppFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  masterDataAppFileId: number;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BulkUpload>) {
    super(data);
  }
}

export interface BulkUploadRelations {
  // describe navigational properties here
}

export type BulkUploadWithRelations = BulkUpload & BulkUploadRelations;
