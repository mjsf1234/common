import {belongsTo, model, property} from '@loopback/repository';
import {Account, AppUser, BankAccount, BaseSQLModel, Rta, UserManagementAppFile} from '..';

//@todo - Ketan - check the use of this table
@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'consolidated_document'},
    plural: 'ConsolidatedDocuments',
    foreignKeys: {
      fkidx_consolidated_document_user_fk_id_user: {
        name: 'fkidx_consolidated_document_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_consolidated_document_bank_account_fk_id_bank_account: {
        name: 'fkidx_consolidated_document_bank_account_fk_id_bank_account',
        foreignKey: 'fk_id_bank_account',
        entityKey: 'id',
        entity: 'BankAccount'
      },
      fkidx_consolidated_document_account_fk_id_account: {
        name: 'fkidx_consolidated_document_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_consolidated_document_app_file_fk_id_app_file: {
        name: 'fkidx_consolidated_document_app_file_fk_id_app_file',
        foreignKey: 'fk_id_file',
        entityKey: 'id',
        entity: 'AppFile'
      },
      fkidx_consolidated_document_rta_fk_id_rta: {
        name: 'fkidx_consolidated_document_rta_fk_id_rta',
        foreignKey: 'fk_id_rta',
        entityKey: 'id',
        entity: 'RTA'
      }
    },
    hiddenProperties: []
  }
})
export class ConsolidatedDocument extends BaseSQLModel {

  @property({
    type: 'date',
    postgresql: {columnName: 'generated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  generatedDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'upload_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  uploadDate?: Date;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'CONSOLIDATEDDOCUMENTSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  status: number;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

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
    () => BankAccount,
    {
      name: 'bankAccount',
      keyFrom: 'bankAccountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_bank_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  bankAccountId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'appFile',
      keyFrom: 'appFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  appFileId?: number;

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
  rtaId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ConsolidatedDocument>) {
    super(data);
  }
}

export interface ConsolidatedDocumentRelations {
  // describe navigational properties here
}

export type ConsolidatedDocumentWithRelations = ConsolidatedDocument & ConsolidatedDocumentRelations;
