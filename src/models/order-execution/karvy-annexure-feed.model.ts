import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Instrument, ServiceProviderAccount, Account, Currency} from '..';

@model({
  settings: {
    indexes: {},
    postgresql: {tableName: 'karvy_annexure_feed'},
    plural: 'KarvyAnnexureFeeds',
    foreignKeys: {
      fkidx_karvy_annexure_feed_instrument_fk_id_instrument: {
        name: 'fkidx_karvy_annexure_feed_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_karvy_annexure_feed_spa_fk_id_spa: {
        name: 'fkidx_karvy_annexure_feed_spa_fk_id_spa',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_karvy_annexure_feed_account_fk_id_account: {
        name: 'fkidx_karvy_annexure_feed_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      }
    },
    hiddenProperties: ['fk_id_instrument', 'fk_id_service_provider_account']
  }
})
export class KarvyAnnexureFeed extends BaseSQLModel {
  @property({
    type: 'number',
    postgresql: {columnName: 'batch_number', dataType: 'INT', nullable: 'Y'}
  })
  batchNumber?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'batch_sequence_number', dataType: 'INT', nullable: 'Y'}
  })
  batchSequenceNumber?: number;

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

  [prop: string]: any;

  constructor(data?: Partial<KarvyAnnexureFeed>) {
    super(data);
  }
}
export interface KarvyAnnexureFeedRelations {
  // describe navigational properties here
}

export type KarvyAnnexureFeedWithRelations = KarvyAnnexureFeed & KarvyAnnexureFeedRelations;
