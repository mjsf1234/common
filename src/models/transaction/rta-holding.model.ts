import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {TransactionAppFile, AppUser, BaseSQLModel, Rta} from '..';
import {RtaHoldingReconciliation} from './rta-holding-reconciliation.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'rta_holding'},
    plural: 'RTAHoldings',
    foreignKeys: {
      fkidx_rta_holding_rta_fk_id_rta: {
        name: 'fkidx_rta_holding_rta_fk_id_rta',
        foreignKey: 'fk_id_rta',
        entityKey: 'id',
        entity: 'RTA'
      },
      fkidx_rta_holding_user_fk_id_uploaded_by_user: {
        name: 'fkidx_rta_holding_user_fk_id_uploaded_by_user',
        foreignKey: 'fk_id_uploaded_by_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_rta_holding_file_fk_id_file: {
        name: 'fkidx_rta_holding_file_fk_id_file',
        foreignKey: 'fk_id_file',
        entityKey: 'id',
        entity: 'AppFile'
      }
    },
    hiddenProperties: []
  }
})
export class RtaHolding extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'RTAHOLDINGSTATUS',
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
    () => TransactionAppFile,
    {
      name: 'transactionAppFile',
      keyFrom: 'transactionAppFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  transactionAppFileId: number;

  @belongsTo(
    () => TransactionAppFile,
    {
      name: 'transactionAppFile',
      keyFrom: 'transactionAppFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rta_reconciliation_file_id', dataType: 'INT', nullable: 'Y'}
    }
  )
  rtaReconciliationFileId?: number;

  @hasMany(() => RtaHoldingReconciliation, {keyTo: 'rtaHoldingId'})
  rtaHoldingReconciliations?: RtaHoldingReconciliation[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RtaHolding>) {
    super(data);
  }
}

export interface RtaHoldingRelations {
  // describe navigational properties here
}

export type RtaHoldingWithRelations = RtaHolding & RtaHoldingRelations;
