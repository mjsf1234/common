import {belongsTo, model, property} from '@loopback/repository';
import {Account, BaseSQLModel, Rta, UserManagementAppFile} from '..';

@model({
  settings: {
    indexes: {},
    postgresql: {tableName: 'csr_fatca'},
    plural: 'CsrFatcas',
    foreignKeys: {
      fkidx_csr_fatca_account_fk_id_account: {
        name: 'fkidx_csr_fatca_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_csr_fatca_app_file_fk_id_fatca_doc_file: {
        name: 'fkidx_csr_fatca_app_file_fk_id_fatca_doc_file',
        foreignKey: 'fk_id_fatca_doc_file',
        entityKey: 'id',
        entity: 'UserManagementAppFile'
      },
      fkidx_csr_fatca_rta_fk_id_rta: {
        name: 'fkidx_csr_fatca_rta_fk_id_rta',
        foreignKey: 'fk_id_rta',
        entityKey: 'id',
        entity: 'Rta'
      }
    },
    hiddenProperties: ['fk_id_account', 'fk_id_fatca_doc_file', 'fk_id_rta']
  }
})
export class CsrFatca extends BaseSQLModel {
  @property({
    type: 'number',

    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  status?: number;

  @property({
    type: 'string',

    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'date',

    postgresql: {columnName: 'uploaded_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  uploadedDate?: Date;

  @property({
    type: 'date',

    postgresql: {columnName: 'generated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  generatedDate?: Date;

  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'N'}
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
      postgresql: {columnName: 'fk_id_fatca_doc_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  userManagementAppFileId?: number;

  @belongsTo(
    () => Rta,
    {
      name: 'rta',
      keyFrom: 'rtaId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rta', dataType: 'INT', nullable: 'N'}
    }
  )
  rtaId: number;

  [prop: string]: any;

  constructor(data?: Partial<CsrFatca>) {
    super(data);
  }
}
export interface CsrFatcaRelations {
  // describe navigational properties here
}

export type CsrFatcaWithRelations = CsrFatca & CsrFatcaRelations;
