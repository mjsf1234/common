import { Model } from '@loopback/repository';
export declare abstract class ModelUtils {
    static validateOrderBy(orderBy: any, model: Model): boolean;
    static validateGroupBy(groupBy: any, model: Model): boolean;
}
