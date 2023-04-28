import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {InstrumentCategory} from './instrument-category.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_return_date: {
        keys: {
          return_date: 1
        },
        options: {
          unique: false
        }
      },
      idx_bos_code: {
        keys: {
          bos_code: 1
        },
        options: {
          unique: false
        }
      },
      idx_fk_id_instrument_category: {
        keys: {
          fk_id_instrument_category: 1
        },
        options: {
          unique: false
        }
      }
    },
    postgresql: {tableName: 'category_return_history'},
    plural: 'CategoryReturnHistories',
    foreignKeys: {
      fkidx_category_return_category_fk_id_instrument_category: {
        name: 'fkidx_category_return_category_fk_id_instrument_category',
        foreignKey: 'fk_id_instrument_category',
        entityKey: 'id',
        entity: 'InstrumentCategory'
      }
    },
    hiddenProperties: []
  }
})
export class CategoryReturnHistory extends BaseSQLModel {
  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'MUTUALFUNDENDTYPE',
    postgresql: {columnName: 'mutual_fund_end_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  mutualFundEndType?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'performance_share_class', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  performanceShareClass?: string;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'return_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  returnDate: Date;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_1_day', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor1Day?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_1_week', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor1Week?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_1_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor1Month?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_3_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor3Month?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_6_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor6Month?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_9_month', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor9Month?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_1_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor1Year?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_2_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor2Year?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_3_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor3Year?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_4_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor4Year?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_5_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor5Year?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_10_year', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnFor10Year?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_since_launch', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnSinceLaunch?: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'return_for_ytd', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  returnForYTD?: number;

  @belongsTo(
    () => InstrumentCategory,
    {
      name: 'instrumentCategory',
      keyFrom: 'instrumentCategoryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_instrument_category', dataType: 'INT', nullable: 'Y'}
    }
  )
  instrumentCategoryId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CategoryReturnHistory>) {
    super(data);
  }
}

export interface CategoryReturnHistoryRelations {
  // describe navigational properties here
}

export type CategoryReturnHistoryWithRelations = CategoryReturnHistory & CategoryReturnHistoryRelations;
