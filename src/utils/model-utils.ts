import {Model} from '@loopback/repository';
import _ from 'underscore';

export abstract class ModelUtils {
  public static validateOrderBy(orderBy: any, model: Model): boolean {
    return true;
  }

  public static validateGroupBy(groupBy: any, model: Model): boolean {
    return true;
  }
}
