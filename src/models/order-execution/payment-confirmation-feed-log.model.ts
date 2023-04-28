import {belongsTo, model, property} from '@loopback/repository';
import {ServiceProvider, BaseSQLModel, OrderExecutionAppFile} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'payment_confirmation_feed_log'},
    plural: 'PaymentConfirmationFeedLogs',
    // foreignKeys: {
    //   fkidx_payment_confirmation_feed_log_fk_id_user: {
    //     name: 'fkidx_payment_confirmation_feed_log_fk_id_user',
    //     foreignKey: 'fk_id_app_file',
    //     entityKey: 'id',
    //     entity: 'AppFile'
    //   },
    //   fkidx_payment_confirmation_feed_log_fk_id_service_provider: {
    //     name: 'fkidx_payment_confirmation_feed_log_fk_id_service_provider',
    //     foreignKey: 'fk_id_service_provider',
    //     entityKey: 'id',
    //     entity: 'ServiceProvider'
    //   },
    //   fkidx_payment_confirmation_feed_log_fk_id_order_execution_app_file: {
    //     name: 'fkidx_payment_confirmation_feed_log_fk_id_order_execution_app_file',
    //     foreignKey: 'fk_id_order_execution_app_file',
    //     entityKey: 'id',
    //     entity: 'OrderExecutionAppFile'
    //   }
    // },
    hiddenProperties: ['fk_id_order_execution_app_file', 'fk_id_service_provider']
  }
})
export class PaymentConfirmationFeedLog extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', nullable: 'N'}
  })
  name: string;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'UTR_FILE_UPLOAD_STATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'row_count', dataType: 'INT', nullable: 'N'}
  })
  rowCount?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'generated_date', dataType: 'DATE', nullable: 'Y'}
  })
  generatedDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'uploaded_date', dataType: 'DATE', nullable: 'Y'}
  })
  uploadedDate?: Date;
  
  @property({
    type: 'number',
    postgresql: {columnName: 'success_count', dataType: 'INT', nullable: 'N'}
  })
  successCount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'failure_count', dataType: 'INT', nullable: 'N'}
  })
  failureCount?: number;

  @belongsTo(
    () => ServiceProvider,
    {
      name: 'serviceProvider',
      keyFrom: 'serviceProviderId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y'}
    }
  )
  'serviceProviderId': number;

  @belongsTo(
    () => OrderExecutionAppFile,
    {
      name: 'orderExecutionAppFile',
      keyFrom: 'orderExecutionAppFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_order_execution_app_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  'orderExecutionAppFileId': number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PaymentConfirmationFeedLog>) {
    super(data);
  }
}

export interface PaymentConfirmationFeedLogRelations {
  // describe navigational properties here
}

export type PaymentConfirmationFeedLogWithRelations = PaymentConfirmationFeedLog & PaymentConfirmationFeedLogRelations;
