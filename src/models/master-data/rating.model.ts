import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    postgresql: {tableName: 'rating'},
    plural: 'Ratings'
  }
})
export class Rating extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'vendor_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  vendorName?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'rating', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  rating: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'normalized_rating', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  normalizedRating?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fundoo_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  fundooCode?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Rating>) {
    super(data);
  }
}

export interface RatingRelations {
  // describe navigational properties here
}

export type RatingWithRelations = Rating & RatingRelations;
