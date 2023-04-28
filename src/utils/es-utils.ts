import {BaseLocalRepository} from '../repositories';

import _ from 'underscore';
import async from 'async';
import moment from 'moment-timezone';
import {DefaultCrudRepository, Entity, ModelDefinition} from '@loopback/repository';
import {LoggingUtils} from './logging-utils';
export abstract class ESUtils {
  public static async bulkIndex<R extends BaseLocalRepository<any, number, object>>(
    repository: R,
    data: any,
    idProperty: string,
    waitForRefresh: boolean = false
  ): Promise<any> {
    return new Promise(function (resolve, reject) {
      if (!idProperty) {
        return reject(new Error(`idProperty is required !`));
      }

      if (repository.dataSource.connector?.name != 'elasticsearch') {
        return reject(new Error(`Model should be of elasticsearch !`));
      }

      if (!repository.entityClass.definition.settings.elasticsearch) {
        return reject(new Error(`Model does not have elasticsearch definition object !`));
      }

      let body: any = [];
      let _index = repository.dataSource.connector?.getIndexName(repository.entityClass.definition.name);
      let multiCurrencyProperties = {};

      _.each(data, function (item: any) {
        if (item[idProperty]) {
          let _id = item[idProperty];
          let obj = {
            isActive: typeof item.isActive == 'boolean' ? item.isActive : true,
            createdDate: item.createdDate ? item.createdDate : new Date(),
            lastModifiedDate: new Date()
          };

          // not needed for single currency implementations
          // for (let key in item) {
          //   if (key && (/rateDate__[a-zA-Z]{3}$/).test(key)) {
          //     multiCurrencyProperties[key] = { type: 'date' };
          //   } else if (key && (/__[a-zA-Z]{3}$/).test(key)) {
          //     multiCurrencyProperties[key] = { type: 'double' };
          //   }
          // }
          obj = Object.assign(obj, item);
          body.push({index: {_index: _index, _id: _id}});
          body.push(obj);
        }
      });

      if (!body || !Array.isArray(body) || body.length == 0) {
        return reject(new Error(`Invalid data !`));
      }

      //handling of dynamic fields in multicurrency
      Promise.resolve()
        .then(function () {
          if (Object.keys(multiCurrencyProperties).length > 0) {
            return repository.dataSource.connector?.db.indices.putMapping({
              body: {
                properties: multiCurrencyProperties
              },
              index: _index
            });
          } else {
            return Promise.resolve();
          }
        })
        .then(function () {
          return repository.dataSource.connector?.db.bulk({
            refresh: waitForRefresh ? 'wait_for' : false,
            body: body
          });
        })
        .then(function (data) {
          if (!data) {
            return Promise.reject(new Error(`Invalid Response Received from Elasticsearch !`));
          } else if (data.errors) {
            LoggingUtils.error(data.items);
            return Promise.reject(new Error(`Error in Bulk API in Elasticsearch !`));
          }
          return resolve({success: true});
        })
        .catch(reject);
    });
  }

  public static async index<R extends BaseLocalRepository<any, number, object>>(
    repository: R,
    data: any,
    idProperty: string,
    waitForRefresh: boolean = false
  ): Promise<any> {
    return new Promise(function (resolve, reject) {
      if (idProperty && !data[idProperty]) {
        return reject(new Error(`id required !`));
      }

      if (repository.dataSource.connector?.name != 'elasticsearch') {
        return reject(new Error(`Model should be of elasticsearch !`));
      }

      if (!repository.entityClass.definition.settings.elasticsearch) {
        return reject(new Error(`Model does not have elasticsearch definition object !`));
      }

      if (!data) {
        return reject(new Error(`Invalid Obj!`));
      }

      let _index = repository.dataSource.connector?.getIndexName(repository.entityClass.definition.name);
      let _id = data[idProperty];

      let obj = {
        isActive: typeof data.isActive == 'boolean' ? data.isActive : true,
        createdDate: data.createdDate ? data.createdDate : new Date(),
        lastModifiedDate: new Date()
      };
      obj = Object.assign(obj, data);

      repository.dataSource.connector?.db
        .index({
          id: _id ? _id : undefined,
          index: _index,
          refresh: waitForRefresh ? 'wait_for' : false,
          body: obj
        })
        .then(function (data: any) {
          if (!data) {
            return Promise.reject(new Error(`Invalid Response Received from Elasticsearch !`));
          } else if (data.errors) {
            LoggingUtils.error(data.items);
            return Promise.reject(new Error(`Error in Bulk API in Elasticsearch !`));
          }
          return resolve({success: true});
        })
        .catch(function (err: any) {
          LoggingUtils.error(err);
          return reject(err);
        });
    });
  }

  public static async search<R extends BaseLocalRepository<any, number, object>>(
    repository: R,
    filter: any,
    idProperty: string,
    fetchAllData: boolean = false,
    scrollTime: string = '30s'
  ): Promise<any> {
    return new Promise(function (resolve, reject) {
      if (repository.dataSource.connector?.name != 'elasticsearch') {
        return reject(new Error(`Model should be of elasticsearch !`));
      }

      if (!repository.entityClass.definition.settings.elasticsearch) {
        return reject(new Error(`Model does not have elasticsearch definition object !`));
      }

      let _index = repository.dataSource.connector?.getIndexName(repository.entityClass.definition.name);
      filter = Object.assign({index: _index, scroll: fetchAllData ? scrollTime : undefined, track_total_hits: true}, filter);

      let returnDataObj: any, scrollId: any, currentBatchCount: number;
      repository.dataSource.connector?.db
        .search(filter)
        .then(function (data: any) {
          returnDataObj = data.body;

          if (!fetchAllData) {
            return Promise.resolve();
          }

          scrollId = returnDataObj._scroll_id;

          return new Promise<void>(function (resolve, reject) {
            async.doWhilst(
              function (scrollCallback: Function) {
                repository.dataSource.connector?.db
                  .scroll({
                    scroll_id: scrollId,
                    scroll: scrollTime
                  })
                  .then(function (data: any) {
                    data = data.body;
                    currentBatchCount = data.hits.hits.length;
                    returnDataObj.hits.hits = returnDataObj.hits.hits.concat(data.hits.hits);
                    scrollId = data._scroll_id;
                    return scrollCallback();
                  })
                  .catch(function (err: any) {
                    return scrollCallback(err);
                  });
              },
              function () {
                return currentBatchCount > 0;
              },
              function (err: any) {
                if (err) {
                  return reject(err);
                }
                return resolve();
              }
            );
          });
        })
        .then(function () {
          let modelName = repository.entityClass.definition.name;
          returnDataObj.hits.hits = returnDataObj.hits.hits.map(function (item: any) {
            return repository.dataSource.connector?.dataSourceToModel(modelName, item, idProperty);
          });
          returnDataObj.hits.total = returnDataObj.hits.total.value;
          return resolve(returnDataObj);
        })
        .catch(function (err: any) {
          LoggingUtils.info('---------------------------');
          LoggingUtils.info(JSON.stringify(filter, null, 2));
          LoggingUtils.error(err);
          return reject(err);
        });
    });
  }

  public static async nestedFieldSearch<R extends BaseLocalRepository<any, number, object>>(
    repository: R,
    filter: any,
    idProperty: string,
    searchField: string
  ): Promise<any> {
    return new Promise(function (resolve, reject) {
      if (repository.dataSource.connector?.name != 'elasticsearch') {
        return reject(new Error(`Model should be of elasticsearch !`));
      }

      if (!repository.entityClass.definition.settings.elasticsearch) {
        return reject(new Error(`Model does not have elasticsearch definition object !`));
      }

      if (!searchField) {
        return reject(new Error(`Search Field is required !`));
      }

      let _index = repository.dataSource.connector?.getIndexName(repository.entityClass.definition.name);
      filter = Object.assign({index: _index}, filter);

      repository.dataSource.connector?.db
        .search(filter)
        .then(function (data: any) {
          data = data.body;
          let formattedData: any = {
            hits: {
              hits: [],
              total: 0
            }
          };
          _.each(data.hits.hits, function (hit: any) {
            if (hit['inner_hits'] && hit['inner_hits'][searchField]) {
              formattedData.hits.total += hit['inner_hits'][searchField].hits.total;
              _.each(hit['inner_hits'][searchField].hits.hits, function (innerHit: any) {
                formattedData.hits.hits.push(innerHit['_source']);
              });
            }
          });
          return resolve(formattedData);
        })
        .catch(reject);
    });
  }

  public static generateTreeData(data: any, groupBy: Array<any>, addOnlyTotalColumn: any): any {
    let docs = data.hits.hits;
    let parentNode = {
      children: []
    };
    let navigateTree = (node: any, nodeKey: string, docs: any, parentNode: any, lvl: number) => {
      _.each(node.buckets, function (bucket: any) {
        let children = _.filter(docs, function (doc: any) {
          if (bucket['key'] === 'N/A' && doc[nodeKey] === null) {
            return true;
          }
          return doc[nodeKey] == bucket['key'];
        });

        let obj: any = {};
        obj['parentName'] = node.meta['parentName'];
        obj['parentValue'] = bucket['key'];
        obj['totalCount'] = bucket['doc_count'];
        obj['currentCount'] = children.length;
        obj['hasMore'] = !!(obj['totalCount'] > obj['currentCount']);
        _.each(node.meta['keysToInclude'], function (keyToInclude: string) {
          obj[keyToInclude] = children[0] ? children[0][keyToInclude] : null;
        });
        obj['children'] = [];

        let childNode = bucket[groupBy[lvl]];
        if (childNode && childNode.buckets) {
          // if current node is also parent
          navigateTree(childNode, groupBy[lvl], children, obj, lvl + 1);
        } else {
          if (!addOnlyTotalColumn) {
            obj['children'] = [].concat(children as unknown as ConcatArray<never>);
          }
          //append total column
          let totalObj: any = {};
          totalObj[node.meta['totalColumnName']] = 'Total';
          _.each(node.meta['totalColumnKeys'], function (totalColumnKey: string) {
            totalObj[totalColumnKey] = bucket[totalColumnKey].value;
          });
          obj['children'] = obj['children'].concat(totalObj);
        }

        if (children.length > 0 || addOnlyTotalColumn) {
          parentNode.children.push(obj);
        }
      });
    };

    let rootNode = data.aggregations[groupBy[0]];
    navigateTree(rootNode, groupBy[0], docs, parentNode, 1);

    return {
      data: parentNode.children,
      total: data.hits.total
    };
  }


  public static generateTreeDataWithUnique(data: any, uniqueBy: Array<string>, filterBy: string): any {
    try {
      let aggregationdata = data.aggregations;
      let result: Array<any> = [];
      for(let keys of uniqueBy){

        if(aggregationdata[keys] && aggregationdata[keys]["buckets"]){
          for(let item of aggregationdata[keys]["buckets"]){

            if(item[filterBy]["hits"]["hits"]){

              for(let hit of item[filterBy]["hits"]["hits"]){

                result.push(hit["_source"])
              }
            }
          }
        }
      }
      return result;
    } catch (error) {

      return [];
    }
  }
  public static getAggregationObject(modelDefinition: ModelDefinition, groupByConfig: any, groupBy: Array<any>, orderBy: Array<any>): any {
    let aggs = {};
    let addAggregationLevel = (obj: any, key: string, lvl: number) => {
      let config = groupByConfig[key];
      obj[key] = {};

      let orderByKeyName = ESUtils.isEmbeddedKeywordField(key, modelDefinition) ? `${key}.keyword` : `${key}`;
      obj[key]['terms'] = {
        field: orderByKeyName,
        order: {
          _term: orderBy[lvl - 1][key]
        },
        missing: 'N/A',
        size: 10000
      };

      obj[key]['meta'] = config.meta;

      obj[key]['aggs'] = {};
      if (lvl < groupBy.length) {
        addAggregationLevel(obj[key]['aggs'], groupBy[lvl], lvl + 1);
      } else {
        // nth Child Reached;
        obj[key]['meta']['totalColumnName'] = config['totalColumnName'];
        obj[key]['meta']['totalColumnKeys'] = config['totalColumnKeys'];

        //Add the total columns summation;
        _.each(config.meta.totalColumnKeys, function (keyToInclude: string) {
          obj[key]['aggs'][keyToInclude] = {
            sum: {
              field: keyToInclude
            }
          };
        });
      }
    };
    addAggregationLevel(aggs, groupBy[0], 1);
    return aggs;
  }

  public static getUniqueObject(modelDefinition: ModelDefinition, aggregationConfig: any, uniqueBy: Array<string>, source: Array<string>=[]): any {
    let config = aggregationConfig[uniqueBy[0]];
    let uniqueObj: any ={}

    uniqueObj[uniqueBy[0]]={}

    let feildKeyName = ESUtils.isEmbeddedKeywordField(config.key, modelDefinition) ? `${config.key}.keyword` : `${config.key}`;

    uniqueObj[uniqueBy[0]]["terms"] ={
      "field": feildKeyName,
      "size": 1000
    }

    uniqueObj[uniqueBy[0]]["aggs"]= {}
    uniqueObj[uniqueBy[0]]["aggs"][config.filter] = {

      "top_hits": {
        "size": 1,
        "_source": {
          "include": source
        }
      }
    }


    return uniqueObj;
  }

  public static isEmbeddedKeywordField(field: string, modelDefinition: ModelDefinition): boolean {
    let fieldDefinition = modelDefinition.properties[field];
    if (
      fieldDefinition &&
      fieldDefinition.es &&
      ((fieldDefinition.es.fields && fieldDefinition.es.fields.keyword && fieldDefinition.es.fields.keyword.type == 'keyword') ||
        (fieldDefinition.es.type == 'keyword') || (fieldDefinition.es.type == 'boolean'))
    ) {
      return true;
    }
    return false;
  }

  public static constructSearchClauses(searchFilter: any, modelDefinition: ModelDefinition): any {
    let searchClauses: Array<any> = [];
    for (let key in searchFilter) {
      if (
        key &&
        searchFilter[key] !== null &&
        searchFilter[key] !== undefined &&
        searchFilter[key] != '' &&
        typeof searchFilter[key] === 'string'
      ) {
        let prefixQueryKey = ESUtils.isEmbeddedKeywordField(key, modelDefinition) ? `${key}.keyword` : key;
        let searchClause = {
          bool: {
            should: [
              {
                prefix: {
                  [prefixQueryKey]: {
                    value: `${searchFilter[key]}`,
                    boost: 400
                  }
                }
              },
              {
                match_phrase_prefix: {
                  [`${key}`]: {
                    query: `${searchFilter[key]}`,
                    slop: 2,
                    max_expansions: 20
                  }
                }
              }
            ]
          }
        };
        searchClauses.push(searchClause);
      } else if (
        key &&
        searchFilter[key] !== null &&
        searchFilter[key] !== undefined &&
        searchFilter[key] != '' &&
        typeof searchFilter[key] === 'number'
      ) {
        const searchClause: any = {term: {}};
        searchClause.term[key] = searchFilter[key];
        searchClauses.push(searchClause);
      } else if (
        key &&
        searchFilter[key] !== null &&
        searchFilter[key] !== undefined &&
        searchFilter[key] != '' &&
        Array.isArray(searchFilter[key]) &&
        searchFilter[key].length > 0 &&
        typeof searchFilter[key][0] === 'string'
      ) {
        const prefixQueryKey = ESUtils.isEmbeddedKeywordField(key, modelDefinition) ? `${key}.keyword` : key;
        const searchClause: any = {
          bool: {
            should: []
          }
        };
        _.each(searchFilter[key], function (possibleValue: any) {
          searchClause.bool.should.push(
            {
              prefix: {
                [prefixQueryKey]: {
                  value: `${possibleValue}`,
                  boost: 400
                }
              }
            },
            {
              match_phrase_prefix: {
                [`${key}`]: {
                  query: `${possibleValue}`,
                  slop: 8,
                  max_expansions: 20
                }
              }
            }
          );
        });
        searchClauses.push(searchClause);
      } else if (
        key &&
        searchFilter[key] !== null &&
        searchFilter[key] !== undefined &&
        searchFilter[key] != '' &&
        Array.isArray(searchFilter[key]) &&
        searchFilter[key].length > 0 &&
        typeof searchFilter[key][0] === 'number'
      ) {
        searchClauses.push({
          terms: {
            [`${key}`]: searchFilter[key].map(function (dId: string | number) {
              return parseInt(dId as string);
            })
          }
        });
      }
    }
    return searchClauses;
  }

  public static constructRangeFilter(fromDate: Date, toDate: Date, dateField: string, constants: any): any {
    let rangeQuery = {};

    if (fromDate && toDate && moment(fromDate).isValid() && moment(toDate).isValid()) {
      rangeQuery = {
        range: {
          [dateField]: {
            gte: moment(fromDate).startOf('day').toDate(),
            lte: moment(toDate).endOf('day').toDate()
          }
        }
      };
    } else if (fromDate && !toDate && moment(fromDate).isValid()) {
      rangeQuery = {
        range: {
          [dateField]: {
            gte: moment(fromDate).startOf('day').toDate()
          }
        }
      };
    } else if (!fromDate && toDate && moment(toDate).isValid()) {
      rangeQuery = {
        range: {
          [dateField]: {
            lte: moment(toDate).endOf('day').toDate()
          }
        }
      };
    } else if (constants && constants.fetchRecordsOfDate && moment(constants.fetchRecordsOfDate).isValid()) {
      rangeQuery = {
        range: {
          [dateField]: {
            gte: moment(constants.fetchRecordsOfDate).startOf('day').toDate(),
            lte: moment(constants.fetchRecordsOfDate).endOf('day').toDate()
          }
        }
      };
    }
    if (_.has(rangeQuery, 'range')) {
      return rangeQuery;
    }
    return null;
  }

  public static constructFilterWithTermClause(
    termClause: any,
    aggregations: any,
    config: any = {noOfRecordsToFetch: 'default', fieldsToInclude: 'all', fetchFrom: 0}
  ): any {
    let {noOfRecordsToFetch, fieldsToInclude, shouldClause, fetchFrom, sortBy} = config;
    let filter: any = {
      from: (fetchFrom = fetchFrom ? fetchFrom : 0),
      size: noOfRecordsToFetch === 'default' ? 10000 : noOfRecordsToFetch,
      _source: {},
      body: {
        query: {
          bool: {
            filter: {
              bool: {
                must: termClause
              }
            }
          }
        }
      }
    };

    if (shouldClause) {
      filter.body.query.bool.filter.bool.should = shouldClause;
    }

    filter._source.excludes = ['targetCurrencySpecificData'];
    if (fieldsToInclude === false) {
      filter['_source'] = false;
    } else if (fieldsToInclude) {
      filter._source.includes = fieldsToInclude;
    }

    if (sortBy && Array.isArray(sortBy)) {
      filter.body.sort = sortBy;
    } else if (sortBy && typeof sortBy === 'object') {
      filter.body.sort = [
        {
          [Object.keys(sortBy)[0]]: Object.values(sortBy)[0]
        }
      ];
    }

    if (aggregations) {
      filter.body.aggs = aggregations;
    }
    return filter;
  }

  public static async count<R extends BaseLocalRepository<any, number, object>>(
    repository: R,
    filter: any,
    idProperty: string,
    fetchAllData: boolean = false,
    scrollTime: string = '30s'
  ): Promise<any> {
    return new Promise(function (resolve, reject) {
      if (repository.dataSource.connector?.name != 'elasticsearch') {
        return reject(new Error(`Model should be of elasticsearch !`));
      }

      if (!repository.entityClass.definition.settings.elasticsearch) {
        return reject(new Error(`Model does not have elasticsearch definition object !`));
      }

      let _index = repository.dataSource.connector?.getIndexName(repository.entityClass.definition.name);
      filter = Object.assign({index: _index, scroll: fetchAllData ? scrollTime : undefined}, filter);

      let returnDataObj, scrollId, currentBatchCount;
      repository.dataSource.connector?.db
        .count(filter)
        .then(function (data: any) {
          returnDataObj = data.body;
          return resolve(returnDataObj);
        })
        .catch(reject);
    });
  }
}
