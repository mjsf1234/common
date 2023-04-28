import { BaseLocalRepository } from '../repositories';
import { ModelDefinition } from '@loopback/repository';
export declare abstract class ESUtils {
    static bulkIndex<R extends BaseLocalRepository<any, number, object>>(repository: R, data: any, idProperty: string, waitForRefresh?: boolean): Promise<any>;
    static index<R extends BaseLocalRepository<any, number, object>>(repository: R, data: any, idProperty: string, waitForRefresh?: boolean): Promise<any>;
    static search<R extends BaseLocalRepository<any, number, object>>(repository: R, filter: any, idProperty: string, fetchAllData?: boolean, scrollTime?: string): Promise<any>;
    static nestedFieldSearch<R extends BaseLocalRepository<any, number, object>>(repository: R, filter: any, idProperty: string, searchField: string): Promise<any>;
    static generateTreeData(data: any, groupBy: Array<any>, addOnlyTotalColumn: any): any;
    static generateTreeDataWithUnique(data: any, uniqueBy: Array<string>, filterBy: string): any;
    static getAggregationObject(modelDefinition: ModelDefinition, groupByConfig: any, groupBy: Array<any>, orderBy: Array<any>): any;
    static getUniqueObject(modelDefinition: ModelDefinition, aggregationConfig: any, uniqueBy: Array<string>, source?: Array<string>): any;
    static isEmbeddedKeywordField(field: string, modelDefinition: ModelDefinition): boolean;
    static constructSearchClauses(searchFilter: any, modelDefinition: ModelDefinition): any;
    static constructRangeFilter(fromDate: Date, toDate: Date, dateField: string, constants: any): any;
    static constructFilterWithTermClause(termClause: any, aggregations: any, config?: any): any;
    static count<R extends BaseLocalRepository<any, number, object>>(repository: R, filter: any, idProperty: string, fetchAllData?: boolean, scrollTime?: string): Promise<any>;
}
