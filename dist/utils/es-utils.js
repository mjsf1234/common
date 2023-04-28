"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESUtils = void 0;
const tslib_1 = require("tslib");
const underscore_1 = (0, tslib_1.__importDefault)(require("underscore"));
const async_1 = (0, tslib_1.__importDefault)(require("async"));
const moment_timezone_1 = (0, tslib_1.__importDefault)(require("moment-timezone"));
const logging_utils_1 = require("./logging-utils");
class ESUtils {
    static async bulkIndex(repository, data, idProperty, waitForRefresh = false) {
        return new Promise(function (resolve, reject) {
            var _a, _b;
            if (!idProperty) {
                return reject(new Error(`idProperty is required !`));
            }
            if (((_a = repository.dataSource.connector) === null || _a === void 0 ? void 0 : _a.name) != 'elasticsearch') {
                return reject(new Error(`Model should be of elasticsearch !`));
            }
            if (!repository.entityClass.definition.settings.elasticsearch) {
                return reject(new Error(`Model does not have elasticsearch definition object !`));
            }
            let body = [];
            let _index = (_b = repository.dataSource.connector) === null || _b === void 0 ? void 0 : _b.getIndexName(repository.entityClass.definition.name);
            let multiCurrencyProperties = {};
            underscore_1.default.each(data, function (item) {
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
                    body.push({ index: { _index: _index, _id: _id } });
                    body.push(obj);
                }
            });
            if (!body || !Array.isArray(body) || body.length == 0) {
                return reject(new Error(`Invalid data !`));
            }
            //handling of dynamic fields in multicurrency
            Promise.resolve()
                .then(function () {
                var _a;
                if (Object.keys(multiCurrencyProperties).length > 0) {
                    return (_a = repository.dataSource.connector) === null || _a === void 0 ? void 0 : _a.db.indices.putMapping({
                        body: {
                            properties: multiCurrencyProperties
                        },
                        index: _index
                    });
                }
                else {
                    return Promise.resolve();
                }
            })
                .then(function () {
                var _a;
                return (_a = repository.dataSource.connector) === null || _a === void 0 ? void 0 : _a.db.bulk({
                    refresh: waitForRefresh ? 'wait_for' : false,
                    body: body
                });
            })
                .then(function (data) {
                if (!data) {
                    return Promise.reject(new Error(`Invalid Response Received from Elasticsearch !`));
                }
                else if (data.errors) {
                    logging_utils_1.LoggingUtils.error(data.items);
                    return Promise.reject(new Error(`Error in Bulk API in Elasticsearch !`));
                }
                return resolve({ success: true });
            })
                .catch(reject);
        });
    }
    static async index(repository, data, idProperty, waitForRefresh = false) {
        return new Promise(function (resolve, reject) {
            var _a, _b, _c;
            if (idProperty && !data[idProperty]) {
                return reject(new Error(`id required !`));
            }
            if (((_a = repository.dataSource.connector) === null || _a === void 0 ? void 0 : _a.name) != 'elasticsearch') {
                return reject(new Error(`Model should be of elasticsearch !`));
            }
            if (!repository.entityClass.definition.settings.elasticsearch) {
                return reject(new Error(`Model does not have elasticsearch definition object !`));
            }
            if (!data) {
                return reject(new Error(`Invalid Obj!`));
            }
            let _index = (_b = repository.dataSource.connector) === null || _b === void 0 ? void 0 : _b.getIndexName(repository.entityClass.definition.name);
            let _id = data[idProperty];
            let obj = {
                isActive: typeof data.isActive == 'boolean' ? data.isActive : true,
                createdDate: data.createdDate ? data.createdDate : new Date(),
                lastModifiedDate: new Date()
            };
            obj = Object.assign(obj, data);
            (_c = repository.dataSource.connector) === null || _c === void 0 ? void 0 : _c.db.index({
                id: _id ? _id : undefined,
                index: _index,
                refresh: waitForRefresh ? 'wait_for' : false,
                body: obj
            }).then(function (data) {
                if (!data) {
                    return Promise.reject(new Error(`Invalid Response Received from Elasticsearch !`));
                }
                else if (data.errors) {
                    logging_utils_1.LoggingUtils.error(data.items);
                    return Promise.reject(new Error(`Error in Bulk API in Elasticsearch !`));
                }
                return resolve({ success: true });
            }).catch(function (err) {
                logging_utils_1.LoggingUtils.error(err);
                return reject(err);
            });
        });
    }
    static async search(repository, filter, idProperty, fetchAllData = false, scrollTime = '30s') {
        return new Promise(function (resolve, reject) {
            var _a, _b, _c;
            if (((_a = repository.dataSource.connector) === null || _a === void 0 ? void 0 : _a.name) != 'elasticsearch') {
                return reject(new Error(`Model should be of elasticsearch !`));
            }
            if (!repository.entityClass.definition.settings.elasticsearch) {
                return reject(new Error(`Model does not have elasticsearch definition object !`));
            }
            let _index = (_b = repository.dataSource.connector) === null || _b === void 0 ? void 0 : _b.getIndexName(repository.entityClass.definition.name);
            filter = Object.assign({ index: _index, scroll: fetchAllData ? scrollTime : undefined, track_total_hits: true }, filter);
            let returnDataObj, scrollId, currentBatchCount;
            (_c = repository.dataSource.connector) === null || _c === void 0 ? void 0 : _c.db.search(filter).then(function (data) {
                returnDataObj = data.body;
                if (!fetchAllData) {
                    return Promise.resolve();
                }
                scrollId = returnDataObj._scroll_id;
                return new Promise(function (resolve, reject) {
                    async_1.default.doWhilst(function (scrollCallback) {
                        var _a;
                        (_a = repository.dataSource.connector) === null || _a === void 0 ? void 0 : _a.db.scroll({
                            scroll_id: scrollId,
                            scroll: scrollTime
                        }).then(function (data) {
                            data = data.body;
                            currentBatchCount = data.hits.hits.length;
                            returnDataObj.hits.hits = returnDataObj.hits.hits.concat(data.hits.hits);
                            scrollId = data._scroll_id;
                            return scrollCallback();
                        }).catch(function (err) {
                            return scrollCallback(err);
                        });
                    }, function () {
                        return currentBatchCount > 0;
                    }, function (err) {
                        if (err) {
                            return reject(err);
                        }
                        return resolve();
                    });
                });
            }).then(function () {
                let modelName = repository.entityClass.definition.name;
                returnDataObj.hits.hits = returnDataObj.hits.hits.map(function (item) {
                    var _a;
                    return (_a = repository.dataSource.connector) === null || _a === void 0 ? void 0 : _a.dataSourceToModel(modelName, item, idProperty);
                });
                returnDataObj.hits.total = returnDataObj.hits.total.value;
                return resolve(returnDataObj);
            }).catch(function (err) {
                logging_utils_1.LoggingUtils.info('---------------------------');
                logging_utils_1.LoggingUtils.info(JSON.stringify(filter, null, 2));
                logging_utils_1.LoggingUtils.error(err);
                return reject(err);
            });
        });
    }
    static async nestedFieldSearch(repository, filter, idProperty, searchField) {
        return new Promise(function (resolve, reject) {
            var _a, _b, _c;
            if (((_a = repository.dataSource.connector) === null || _a === void 0 ? void 0 : _a.name) != 'elasticsearch') {
                return reject(new Error(`Model should be of elasticsearch !`));
            }
            if (!repository.entityClass.definition.settings.elasticsearch) {
                return reject(new Error(`Model does not have elasticsearch definition object !`));
            }
            if (!searchField) {
                return reject(new Error(`Search Field is required !`));
            }
            let _index = (_b = repository.dataSource.connector) === null || _b === void 0 ? void 0 : _b.getIndexName(repository.entityClass.definition.name);
            filter = Object.assign({ index: _index }, filter);
            (_c = repository.dataSource.connector) === null || _c === void 0 ? void 0 : _c.db.search(filter).then(function (data) {
                data = data.body;
                let formattedData = {
                    hits: {
                        hits: [],
                        total: 0
                    }
                };
                underscore_1.default.each(data.hits.hits, function (hit) {
                    if (hit['inner_hits'] && hit['inner_hits'][searchField]) {
                        formattedData.hits.total += hit['inner_hits'][searchField].hits.total;
                        underscore_1.default.each(hit['inner_hits'][searchField].hits.hits, function (innerHit) {
                            formattedData.hits.hits.push(innerHit['_source']);
                        });
                    }
                });
                return resolve(formattedData);
            }).catch(reject);
        });
    }
    static generateTreeData(data, groupBy, addOnlyTotalColumn) {
        let docs = data.hits.hits;
        let parentNode = {
            children: []
        };
        let navigateTree = (node, nodeKey, docs, parentNode, lvl) => {
            underscore_1.default.each(node.buckets, function (bucket) {
                let children = underscore_1.default.filter(docs, function (doc) {
                    if (bucket['key'] === 'N/A' && doc[nodeKey] === null) {
                        return true;
                    }
                    return doc[nodeKey] == bucket['key'];
                });
                let obj = {};
                obj['parentName'] = node.meta['parentName'];
                obj['parentValue'] = bucket['key'];
                obj['totalCount'] = bucket['doc_count'];
                obj['currentCount'] = children.length;
                obj['hasMore'] = !!(obj['totalCount'] > obj['currentCount']);
                underscore_1.default.each(node.meta['keysToInclude'], function (keyToInclude) {
                    obj[keyToInclude] = children[0] ? children[0][keyToInclude] : null;
                });
                obj['children'] = [];
                let childNode = bucket[groupBy[lvl]];
                if (childNode && childNode.buckets) {
                    // if current node is also parent
                    navigateTree(childNode, groupBy[lvl], children, obj, lvl + 1);
                }
                else {
                    if (!addOnlyTotalColumn) {
                        obj['children'] = [].concat(children);
                    }
                    //append total column
                    let totalObj = {};
                    totalObj[node.meta['totalColumnName']] = 'Total';
                    underscore_1.default.each(node.meta['totalColumnKeys'], function (totalColumnKey) {
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
    static generateTreeDataWithUnique(data, uniqueBy, filterBy) {
        try {
            let aggregationdata = data.aggregations;
            let result = [];
            for (let keys of uniqueBy) {
                if (aggregationdata[keys] && aggregationdata[keys]["buckets"]) {
                    for (let item of aggregationdata[keys]["buckets"]) {
                        if (item[filterBy]["hits"]["hits"]) {
                            for (let hit of item[filterBy]["hits"]["hits"]) {
                                result.push(hit["_source"]);
                            }
                        }
                    }
                }
            }
            return result;
        }
        catch (error) {
            return [];
        }
    }
    static getAggregationObject(modelDefinition, groupByConfig, groupBy, orderBy) {
        let aggs = {};
        let addAggregationLevel = (obj, key, lvl) => {
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
            }
            else {
                // nth Child Reached;
                obj[key]['meta']['totalColumnName'] = config['totalColumnName'];
                obj[key]['meta']['totalColumnKeys'] = config['totalColumnKeys'];
                //Add the total columns summation;
                underscore_1.default.each(config.meta.totalColumnKeys, function (keyToInclude) {
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
    static getUniqueObject(modelDefinition, aggregationConfig, uniqueBy, source = []) {
        let config = aggregationConfig[uniqueBy[0]];
        let uniqueObj = {};
        uniqueObj[uniqueBy[0]] = {};
        let feildKeyName = ESUtils.isEmbeddedKeywordField(config.key, modelDefinition) ? `${config.key}.keyword` : `${config.key}`;
        uniqueObj[uniqueBy[0]]["terms"] = {
            "field": feildKeyName,
            "size": 1000
        };
        uniqueObj[uniqueBy[0]]["aggs"] = {};
        uniqueObj[uniqueBy[0]]["aggs"][config.filter] = {
            "top_hits": {
                "size": 1,
                "_source": {
                    "include": source
                }
            }
        };
        return uniqueObj;
    }
    static isEmbeddedKeywordField(field, modelDefinition) {
        let fieldDefinition = modelDefinition.properties[field];
        if (fieldDefinition &&
            fieldDefinition.es &&
            ((fieldDefinition.es.fields && fieldDefinition.es.fields.keyword && fieldDefinition.es.fields.keyword.type == 'keyword') ||
                (fieldDefinition.es.type == 'keyword') || (fieldDefinition.es.type == 'boolean'))) {
            return true;
        }
        return false;
    }
    static constructSearchClauses(searchFilter, modelDefinition) {
        let searchClauses = [];
        for (let key in searchFilter) {
            if (key &&
                searchFilter[key] !== null &&
                searchFilter[key] !== undefined &&
                searchFilter[key] != '' &&
                typeof searchFilter[key] === 'string') {
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
            }
            else if (key &&
                searchFilter[key] !== null &&
                searchFilter[key] !== undefined &&
                searchFilter[key] != '' &&
                typeof searchFilter[key] === 'number') {
                const searchClause = { term: {} };
                searchClause.term[key] = searchFilter[key];
                searchClauses.push(searchClause);
            }
            else if (key &&
                searchFilter[key] !== null &&
                searchFilter[key] !== undefined &&
                searchFilter[key] != '' &&
                Array.isArray(searchFilter[key]) &&
                searchFilter[key].length > 0 &&
                typeof searchFilter[key][0] === 'string') {
                const prefixQueryKey = ESUtils.isEmbeddedKeywordField(key, modelDefinition) ? `${key}.keyword` : key;
                const searchClause = {
                    bool: {
                        should: []
                    }
                };
                underscore_1.default.each(searchFilter[key], function (possibleValue) {
                    searchClause.bool.should.push({
                        prefix: {
                            [prefixQueryKey]: {
                                value: `${possibleValue}`,
                                boost: 400
                            }
                        }
                    }, {
                        match_phrase_prefix: {
                            [`${key}`]: {
                                query: `${possibleValue}`,
                                slop: 8,
                                max_expansions: 20
                            }
                        }
                    });
                });
                searchClauses.push(searchClause);
            }
            else if (key &&
                searchFilter[key] !== null &&
                searchFilter[key] !== undefined &&
                searchFilter[key] != '' &&
                Array.isArray(searchFilter[key]) &&
                searchFilter[key].length > 0 &&
                typeof searchFilter[key][0] === 'number') {
                searchClauses.push({
                    terms: {
                        [`${key}`]: searchFilter[key].map(function (dId) {
                            return parseInt(dId);
                        })
                    }
                });
            }
        }
        return searchClauses;
    }
    static constructRangeFilter(fromDate, toDate, dateField, constants) {
        let rangeQuery = {};
        if (fromDate && toDate && (0, moment_timezone_1.default)(fromDate).isValid() && (0, moment_timezone_1.default)(toDate).isValid()) {
            rangeQuery = {
                range: {
                    [dateField]: {
                        gte: (0, moment_timezone_1.default)(fromDate).startOf('day').toDate(),
                        lte: (0, moment_timezone_1.default)(toDate).endOf('day').toDate()
                    }
                }
            };
        }
        else if (fromDate && !toDate && (0, moment_timezone_1.default)(fromDate).isValid()) {
            rangeQuery = {
                range: {
                    [dateField]: {
                        gte: (0, moment_timezone_1.default)(fromDate).startOf('day').toDate()
                    }
                }
            };
        }
        else if (!fromDate && toDate && (0, moment_timezone_1.default)(toDate).isValid()) {
            rangeQuery = {
                range: {
                    [dateField]: {
                        lte: (0, moment_timezone_1.default)(toDate).endOf('day').toDate()
                    }
                }
            };
        }
        else if (constants && constants.fetchRecordsOfDate && (0, moment_timezone_1.default)(constants.fetchRecordsOfDate).isValid()) {
            rangeQuery = {
                range: {
                    [dateField]: {
                        gte: (0, moment_timezone_1.default)(constants.fetchRecordsOfDate).startOf('day').toDate(),
                        lte: (0, moment_timezone_1.default)(constants.fetchRecordsOfDate).endOf('day').toDate()
                    }
                }
            };
        }
        if (underscore_1.default.has(rangeQuery, 'range')) {
            return rangeQuery;
        }
        return null;
    }
    static constructFilterWithTermClause(termClause, aggregations, config = { noOfRecordsToFetch: 'default', fieldsToInclude: 'all', fetchFrom: 0 }) {
        let { noOfRecordsToFetch, fieldsToInclude, shouldClause, fetchFrom, sortBy } = config;
        let filter = {
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
        }
        else if (fieldsToInclude) {
            filter._source.includes = fieldsToInclude;
        }
        if (sortBy && Array.isArray(sortBy)) {
            filter.body.sort = sortBy;
        }
        else if (sortBy && typeof sortBy === 'object') {
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
    static async count(repository, filter, idProperty, fetchAllData = false, scrollTime = '30s') {
        return new Promise(function (resolve, reject) {
            var _a, _b, _c;
            if (((_a = repository.dataSource.connector) === null || _a === void 0 ? void 0 : _a.name) != 'elasticsearch') {
                return reject(new Error(`Model should be of elasticsearch !`));
            }
            if (!repository.entityClass.definition.settings.elasticsearch) {
                return reject(new Error(`Model does not have elasticsearch definition object !`));
            }
            let _index = (_b = repository.dataSource.connector) === null || _b === void 0 ? void 0 : _b.getIndexName(repository.entityClass.definition.name);
            filter = Object.assign({ index: _index, scroll: fetchAllData ? scrollTime : undefined }, filter);
            let returnDataObj, scrollId, currentBatchCount;
            (_c = repository.dataSource.connector) === null || _c === void 0 ? void 0 : _c.db.count(filter).then(function (data) {
                returnDataObj = data.body;
                return resolve(returnDataObj);
            }).catch(reject);
        });
    }
}
exports.ESUtils = ESUtils;
//# sourceMappingURL=es-utils.js.map