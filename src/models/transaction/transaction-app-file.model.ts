import {model} from '@loopback/repository';
import {BaseAppFileModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'transaction_file'},
    plural: 'TransactionAppFiles'
  }
})
export class TransactionAppFile extends BaseAppFileModel {
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TransactionAppFile>) {
    super(data);
  }
}

export interface TransactionAppFileRelations {
  // describe navigational properties here
}

export type TransactionAppFileWithRelations = TransactionAppFile & TransactionAppFileRelations;
