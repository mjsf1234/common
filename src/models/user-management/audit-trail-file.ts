import {belongsTo, model, property, hasMany} from '@loopback/repository';
import {UserManagementAppFile, AppUser, BaseSQLModel, Rta} from '..';
import { AuditTrail } from './audit-rail';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'audit_trail_file'},
    plural: 'audit_trail_files',
    foreignKeys: {
      fkidx_audit_trail_file_rta_fk_id_rta: {
        name: 'fkidx_audit_trail_file_rta_fk_id_rta',
        foreignKey: 'fk_id_rta',
        entityKey: 'id',
        entity: 'Rta'
      },
      fkidx_audit_trail_file_user_fk_id_uploaded_by_user: {
        name: 'fkidx_audit_trail_file_user_fk_id_uploaded_by_user',
        foreignKey: 'fk_id_uploaded_by_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      // fkidx_audit_trail_file_file_fk_id_file: {
      //   name: 'fkidx_audit_trail_file_file_fk_id_file',
      //   foreignKey: 'fk_id_file',
      //   entityKey: 'id',
      //   entity: 'AppFile'
      // },
      fkidx_audit_trail_file_app_user_fk_id_user_deleted_by: {
        name: 'fkidx_audit_trail_file_app_user_fk_id_user_deleted_by',
        foreignKey: 'fk_id_user_deleted_by',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_audit_trail_file_fk_id_uploaded_file: {
        name: 'fkidx_audit_trail_file_fk_id_uploaded_file',
        foreignKey: 'fk_id_uploaded_file',
        entityKey: 'id',
        entity: 'UserManagementAppFile'
      },
      fkidx_audit_trail_file_fk_id_exported_file: {
        name: 'fkidx_audit_trail_file_fk_id_exported_file',
        foreignKey: 'fk_id_exported_file',
        entityKey: 'id',
        entity: 'UserManagementAppFile'
      },
    },
    hiddenProperties: []
  }
})
export class AuditTrailFile extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  name?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'AUDITTRAILSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @belongsTo(
    () => Rta,
    {
      name: 'rta',
      keyFrom: 'rtaId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y'}
    }
  )
  rtaId: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'uploadedByAppUser',
      keyFrom: 'uploadedByAppUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_uploaded_by_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  uploadedByAppUserId: number;

  //@todo - have separate file
  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'uploadedFile',
      keyFrom: 'uploadedFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_uploaded_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  uploadedFileId: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'exportedFile',
      keyFrom: 'exportedFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_exported_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  exportedFileId: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'deletedByAppUser',
      keyFrom: 'deletedByAppUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_deleted_by', dataType: 'INT', nullable: 'Y'}
    }
  )
  deletedByAppUserId?: number;

  @hasMany(() => AuditTrail, {keyTo: 'auditTrailFileId'})
  auditTrail?: AuditTrail[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AuditTrailFile>) {
    super(data);
  }
}

export interface AuditTrailFileRelations {
  // describe navigational properties here
}

export type AuditTrailFileWithRelations = AuditTrailFile & AuditTrailFileRelations;
