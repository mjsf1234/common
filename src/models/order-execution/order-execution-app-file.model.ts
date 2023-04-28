import {model} from '@loopback/repository';
import {BaseAppFileModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'order_execution_file'},
    plural: 'OrderExecutionAppFiles'
  }
})
export class OrderExecutionAppFile extends BaseAppFileModel {
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OrderExecutionAppFile>) {
    super(data);
  }
}

export interface OrderExecutionAppFileRelations {
  // describe navigational properties here
}

export type OrderExecutionAppFileWithRelations = OrderExecutionAppFile & OrderExecutionAppFileRelations;
