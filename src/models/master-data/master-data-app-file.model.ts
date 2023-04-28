import {model} from '@loopback/repository';
import {BaseAppFileModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'master_data_file'},
    plural: 'MasterDataAppFiles'
  }
})
export class MasterDataAppFile extends BaseAppFileModel {
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MasterDataAppFile>) {
    super(data);
  }
}

export interface MasterDataAppFileRelations {
  // describe navigational properties here
}

export type MasterDataAppFileWithRelations = MasterDataAppFile & MasterDataAppFileRelations;
