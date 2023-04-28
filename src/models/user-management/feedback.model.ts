import {belongsTo, model, property} from '@loopback/repository';
import {AppUser} from '.';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'feedback'},
    plural: 'Feedbacks',
    foreignKeys: {
      fkidx_feedback_user_fk_id_user: {
        name: 'fkidx_feedback_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    },
    hiddenProperties: ['fk_id_user']
  }
})
export class Feedback extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'email', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'content', dataType: 'TEXT', nullable: 'N'}
  })
  content: string;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Feedback>) {
    super(data);
  }
}

export interface FeedbackRelations {
  // describe navigational properties here
}

export type FeedbackWithRelations = Feedback & FeedbackRelations;
