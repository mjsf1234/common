import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Account} from './account.model';
import {UserManagementAppFile} from './user-management-app-file.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'service_request_document'},
    plural: 'ServiceRequestDocuments',
    foreignKeys: {
      fkidx_service_request_document_fk_id_account: {
        name: 'fkidx_service_request_document_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_service_request_document_fk_id_file: {
        name: 'fkidx_service_request_document_fk_id_file',
        foreignKey: 'fk_id_file',
        entityKey: 'id',
        entity: 'AppFile'
      }
    },
    hiddenProperties: []
  }
})
export class ServiceRequestDocument extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'comment', dataType: 'TEXT', nullable: 'N'}
  })
  comment: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'SERVICEREQUESTDOCUMENTTYPE',
    postgresql: {columnName: 'type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  type?: number;

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
  userManagementAppFileId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ServiceRequestDocument>) {
    super(data);
  }
}

export interface ServiceRequestDocumentRelations {
  // describe navigational properties here
}

export type ServiceRequestDocumentWithRelations = ServiceRequestDocument & ServiceRequestDocumentRelations;
