import {belongsTo, hasOne, model, property} from '@loopback/repository';
import {BaseSQLModel, Goal} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'goal_category'},
    plural: 'GoalCategories',
    foreignKeys: {},
    hidden: []
  }
})
export class GoalCategory extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'GOALTYPE',
    postgresql: {columnName: 'goal_type', dataType: 'INT', nullable: 'N'}
  })
  goalType: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'sequence', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 6, dataScale: 2}
  })
  sequence?: number;

  @property({
    type: 'number',
    required: false,
    default: 0,
    postgresql: {columnName: 'lumpsum_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 5},
    jsonSchema: {
      minimum: 1,
      maximum: 99900000000
    }
  })
  lumpsumAmount?: number;

  @property({
    type: 'number',
    required: false,
    default: 0,
    postgresql: {columnName: 'target_amount', dataType: 'NUMERIC', dataPrecision: 25, nullable: 'Y', dataScale: 5},
    jsonSchema: {
      minimum: 1,
      maximum: 99900000000
    }
  })
  targetAmount?: number;

  @property({
    type: 'number',
    required: false,
    default: 0,
    postgresql: {columnName: 'sip_amount', dataType: 'NUMERIC', dataPrecision: 25, nullable: 'Y', dataScale: 5},
    jsonSchema: {
      minimum: 1,
      maximum: 99900000000
    }
  })
  sipAmount?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'tenure_in_month', dataType: 'INT', nullable: 'Y'},
    jsonSchema: {
      minimum: 1,
      maximum: 1200
    }
  })
  tenureInMonth?: number;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'icon', dataType: 'TEXT', nullable: 'Y'},
    jsonSchema: {
      pattern: '(?!.*?script)^.*$'
    }
  })
  icon?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_default', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isDefault: boolean;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'category', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  category?: string;

  @hasOne(() => Goal, {keyTo: 'goalCategoryId'})
  goal?: Goal;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GoalCategory>) {
    super(data);
  }
}

export interface GoalCategoryRelations {
  // describe navigational properties here
}

export type GoalCategoryWithRelations = GoalCategory & GoalCategoryRelations;
