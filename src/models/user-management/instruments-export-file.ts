import {belongsTo, model,property} from '@loopback/repository';
import {Account, BaseSQLModel, UserManagementAppFile} from '..';


@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'instruments-export-file'},
    plural: 'InstrumentsExportFile',
    foreignKeys: {
      fkidx_instrument_export_file_fk_id_file: {
        name: 'fkidx_instrument_export_file_fk_id_file',
        foreignKey: 'fk_id_file',
        entityKey: 'id',
        entity: 'AppFile'
      }
    },
    hiddenProperties: []
  }
})
export class InstrumentsExportFile extends BaseSQLModel {

  @property({
    type: 'string',
    postgresql: {columnName: 'type', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  type?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'filter', dataType: 'TEXT', nullable: 'Y'}
  })
  filter?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'status', dataType: 'NUMERIC', nullable: 'Y'}
  })
  status?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  remarks?: string;

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
  userManagementAppFileId: number;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstrumentsExportFile>) {
    super(data);
  }
}

export interface InstrumentsExportFileRelations {
  // describe navigational properties here
}

export type InstrumentsExportFileWithRelations = InstrumentsExportFile & InstrumentsExportFileRelations;
