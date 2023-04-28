"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalUtils = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../constants");
const logging_utils_1 = require("./logging-utils");
const moment_timezone_1 = (0, tslib_1.__importDefault)(require("moment-timezone"));
const math = require('mathjs');
class GoalUtils {
    static checkRebalancingNeedForGoal(goalInfo) {
        //to check
        //1. Shortfall
        //2. Deviation Lumpsum
        //3. Deviation SIP: @todo
        const methodName = 'checkRebalancingNeedForGoal';
        try {
            let currentHolding = goalInfo.totalGoalHolding ? goalInfo.totalGoalHolding : 0;
            let targetAmount = goalInfo.goalTargetAmount ? goalInfo.goalTargetAmount : 0;
            let yearsToGoal = goalInfo.yearsToGoal ? goalInfo.yearsToGoal : 1;
            let currentSIP = goalInfo.systematicMethods.totalGoalMonthlySIP ? goalInfo.systematicMethods.totalGoalMonthlySIP : 0;
            let riskProfileId = goalInfo.riskProfileId;
            let isUnclassified = goalInfo.isUnclassified;
            let sufficiencyCheckObject = {};
            if (isUnclassified) {
                //need not do sufficiency check, so we shall pass this as success
                sufficiencyCheckObject["success"] = true;
            }
            else {
                //do sufficiency check for other goal types
                sufficiencyCheckObject = this.getGoalInvestmentNeeded(targetAmount, yearsToGoal, riskProfileId, currentHolding, currentSIP);
                if (!sufficiencyCheckObject || !sufficiencyCheckObject.success) {
                    goalInfo.alertInfo.checkSuccess = false;
                }
                else {
                    goalInfo.alertInfo.sufficiencyData = sufficiencyCheckObject;
                    //set alerts for shortfall
                    //alerts are by default false in the object sent from calling function
                    if (sufficiencyCheckObject.goalReachWithCurrentInvestment >= 0) {
                        let shortFallPercent = 1 - sufficiencyCheckObject.goalReachWithCurrentInvestment;
                        if (shortFallPercent > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.goalShortfallTolerance) {
                            goalInfo.alertInfo.shortfallAlert = true;
                        }
                        if (shortFallPercent > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.goalShortfallToleranceUrgent) {
                            goalInfo.alertInfo.shortfallUrgentAlert = true;
                        }
                    }
                }
            }
            //get deviations for LS
            if (currentHolding > 0) {
                let portfolioCategoryExposures = [];
                portfolioCategoryExposures = this.flattenToArray(goalInfo.categories, 'category', 'weight');
                let isLumpsum = true;
                let assetCategoryDeviations = this.calculateDeviations(portfolioCategoryExposures, goalInfo.tenureMonths, currentHolding, riskProfileId, isLumpsum);
                let topAssetClassDeviation = assetCategoryDeviations[0];
                let topCategoryGroupDeviation = assetCategoryDeviations[1];
                logging_utils_1.LoggingUtils.info(`goal-utils-LS Deviations: ${JSON.stringify(assetCategoryDeviations)}`, methodName);
                if ((Math.abs(topAssetClassDeviation) > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationTolerance) ||
                    (Math.abs(topCategoryGroupDeviation) > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationTolerance)) {
                    goalInfo.alertInfo.deviationAlert = true;
                }
                if ((Math.abs(topAssetClassDeviation) > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationToleranceUrgent) ||
                    (Math.abs(topCategoryGroupDeviation) > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationToleranceUrgent)) {
                    goalInfo.alertInfo.deviationUrgentAlert = true;
                }
            }
            //get deviations for SIP
            if (currentSIP > 0) {
                let portfolioCategoryExposures = [];
                portfolioCategoryExposures = this.flattenToArray(goalInfo.systematicMethods.categories, 'category', 'weight');
                let isLumpsum = false;
                let assetCategoryDeviations = this.calculateDeviations(portfolioCategoryExposures, goalInfo.tenureMonths, currentSIP, riskProfileId, isLumpsum);
                let topAssetClassDeviation = assetCategoryDeviations[0];
                let topCategoryGroupDeviation = assetCategoryDeviations[1];
                logging_utils_1.LoggingUtils.info(`goal-utils-SIP Deviations: ${JSON.stringify(assetCategoryDeviations)}`, methodName);
                if ((Math.abs(topAssetClassDeviation) > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationTolerance) ||
                    (Math.abs(topCategoryGroupDeviation) > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationTolerance)) {
                    goalInfo.alertInfo.deviationAlertSIP = true;
                }
                if ((Math.abs(topAssetClassDeviation) > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationToleranceUrgent) ||
                    (Math.abs(topCategoryGroupDeviation) > constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationToleranceUrgent)) {
                    goalInfo.alertInfo.deviationUrgentAlertSIP = true;
                }
            }
            //set alert flag if something found
            if (
            //main alerts
            (goalInfo.alertInfo.deviationAlert || goalInfo.alertInfo.shortfallAlert || goalInfo.alertInfo.deviationUrgentAlertSIP)
                ||
                    //urgent alerts if alertForUrgent is true in settings
                    ((goalInfo.alertInfo.deviationUrgentAlert || goalInfo.alertInfo.shortfallUrgentAlert || goalInfo.alertInfo.deviationUrgentAlertSIP) && constants_1.Option.GLOBALOPTIONS.REBALANCINGSETTINGS.alertForUrgent)) {
                goalInfo.alertActivated = true;
            }
            //set process check flag to success and send back as process has been successful
            goalInfo.alertInfo.checkSuccess = true;
            return goalInfo;
        }
        catch (error) {
            //set check flag to false
            goalInfo.alertInfo.checkSuccess = false;
            return goalInfo;
        }
    }
    static calculateDeviations(portfolioCategoryExposures, monthsToGoal, totalAmount, riskProfileId, isLumpsum) {
        let modelPortfolioAllocations = this.setModelPortfolio(monthsToGoal, totalAmount, riskProfileId, isLumpsum);
        let assetClasses = constants_1.Option.GLOBALOPTIONS.ASSETCLASSES.data;
        let assetClassesNames = constants_1.Option.GLOBALOPTIONS.ASSETCLASSES.name;
        let categories = constants_1.Option.GLOBALOPTIONS.CATEGORIES.data;
        let groupCategories = constants_1.Option.GLOBALOPTIONS.GROUPCATEGORIES.data;
        let groupCategoriesNames = constants_1.Option.GLOBALOPTIONS.GROUPCATEGORIES.name;
        let categoryAssetExposure = constants_1.Option.GLOBALOPTIONS.CATEGORYASSETEXPOSURE.data;
        let categoryCategoryGroupExposure = {};
        categoryCategoryGroupExposure = this.createCategoryCrossExpMatrix();
        for (let i = 0; i < portfolioCategoryExposures.length; i++) {
            portfolioCategoryExposures[i]["initialNetAssetWeights"] = this.createWtArray(assetClasses);
            portfolioCategoryExposures[i]["initialNetCategoryWeights"] = this.createWtArray(categories);
            portfolioCategoryExposures[i]["initialGroupCategoryWeights"] = this.createWtArray(groupCategories);
        }
        let assetClassTotal = this.sumProduct(portfolioCategoryExposures, "weight", assetClasses, categoryAssetExposure, "category", "initialNetAssetWeights");
        let categoryGroupTotal = this.sumProduct(portfolioCategoryExposures, "weight", groupCategories, categoryCategoryGroupExposure, "category", "initialGroupCategoryWeights");
        //console.log('assetclasstotal: ', assetClassTotal);
        //get the deviations at Asset Class level
        let assetClassDeviationsTotal = this.getAggregateDeviations(assetClasses, assetClassesNames, assetClassTotal, "assetClassLevel", "assetClass", "deviation", modelPortfolioAllocations);
        //get deviations at Category Group level
        let categoryGroupDeviationsTotal = this.getAggregateDeviations(groupCategories, groupCategoriesNames, categoryGroupTotal, "categoryGroupLevel", "categoryGroup", "deviation", modelPortfolioAllocations);
        //console.log('categoryGroupDeviationsTotal ', categoryGroupDeviationsTotal);
        //console.log('assetClassDeviationsTotal ', assetClassDeviationsTotal);
        //sort deviations to check
        assetClassDeviationsTotal = this.sortAbsoluteValues(assetClassDeviationsTotal, "deviation", "descending");
        categoryGroupDeviationsTotal = this.sortAbsoluteValues(categoryGroupDeviationsTotal, "deviation", "descending");
        let topAssetClassDeviation = assetClassDeviationsTotal[0]["deviation"];
        let topCategoryGroupDeviation = categoryGroupDeviationsTotal[0]["deviation"];
        return [topAssetClassDeviation, topCategoryGroupDeviation];
    }
    static sortAbsoluteValues(objectArray, sortProperty, order) {
        if (order == "ascending") {
            objectArray.sort((a, b) => (Math.abs(a[sortProperty]) > Math.abs(b[sortProperty]) ? 1 : -1));
        }
        else {
            objectArray.sort((a, b) => (Math.abs(a[sortProperty]) <= Math.abs(b[sortProperty]) ? 1 : -1));
        }
        return objectArray;
    }
    static getAggregateDeviations(masterArray, masterArrayNames, totalExposureArray, modelPortfolioLevel, outputKeyName, outputKeyValueName, modelPortfolioAllocations) {
        //initialize array
        let outputTargetArray = [];
        for (let j = 0; j < masterArray.length; j++) {
            let currMasterValue = masterArray[j];
            let currMasterValueName = masterArrayNames[j];
            let currExposure = totalExposureArray[j];
            let modelExposure = modelPortfolioAllocations[modelPortfolioLevel][currMasterValue];
            let deviation = modelExposure - currExposure; //overweight in portfolio shall give negative => sell
            let tempDeviationObject = {};
            tempDeviationObject[outputKeyName] = currMasterValue;
            tempDeviationObject[outputKeyName + 'Name'] = currMasterValueName;
            tempDeviationObject[outputKeyValueName] = deviation;
            outputTargetArray.push(tempDeviationObject);
        }
        return outputTargetArray;
    }
    static flattenToArray(inputDataObject, assetCategoryKey, valueKey) {
        let mappedDataArray = [];
        for (const key in inputDataObject) {
            let mappedData = {
                'weight': inputDataObject[key][valueKey]
            };
            mappedData[assetCategoryKey] = key;
            mappedDataArray.push(mappedData);
        }
        return mappedDataArray;
    }
    //calculates investments for goals and returns goal sufficiency
    static getGoalInvestmentNeeded(targetAmount, yearsToGoal, riskProfileId, initialInvestment = 0, initialSIP = 0) {
        let outputObject = {
            success: false
        };
        let returnArray = this.getReturnArray(yearsToGoal, riskProfileId);
        if (returnArray.length <= 0) {
            logging_utils_1.LoggingUtils.error('PRODUCT-GOALUTILS-getGoalInvestmentNeeded: Future value of Lumpsum/SIP data not found for yearsToGoal|riskProfile = ' + yearsToGoal + '|' + riskProfileId);
            return outputObject;
        }
        //get future value of LS of 10k
        let fvLumpsum10k = returnArray["fv_lumpsum_10k"];
        //get future value of SIOP of 1k
        let fvSIP1k = returnArray["fv_sip_1k"];
        if (fvLumpsum10k === undefined || fvLumpsum10k === null || fvLumpsum10k == 0 ||
            fvSIP1k === undefined || fvSIP1k === null || fvSIP1k == 0) {
            return outputObject;
        }
        //SHARAD CHECK - hard coded... to be not used (here for testing)
        //initialInvestment = inputObject.portfolioTotalAmount;
        //initialSIP = 0;
        //calculate future value of current investments
        let FVofInitialInvestment = Math.round(fvLumpsum10k * initialInvestment / (10000 * 100)) * 100;
        let FVofInitialSIP = Math.round(fvSIP1k * initialSIP / (1000 * 100)) * 100;
        let netTargetAmount = Math.max(0, targetAmount - FVofInitialInvestment - FVofInitialSIP);
        //console.log(netTargetAmount);
        //calculate amount needed
        let lumpsumNeeded = Math.round(10000 * netTargetAmount / (fvLumpsum10k * 100)) * 100;
        let SIPNeeded = Math.round(1000 * netTargetAmount / (fvSIP1k * 100)) * 100;
        let goalReachWithCurrentInvestment = (FVofInitialInvestment + FVofInitialSIP) / targetAmount;
        //console.log("goalReach % = " , Math.round(goalReachWithCurrentInvestment * 10000)/100 , "% **** Lumpsum/SIP needed = ", lumpsumNeeded, " / ", SIPNeeded);
        outputObject["success"] = true;
        outputObject["lumpsumNeeded"] = lumpsumNeeded;
        outputObject["SIPNeeded"] = SIPNeeded;
        outputObject["goalReachWithCurrentInvestment"] = goalReachWithCurrentInvestment;
        outputObject["valueAtMaturity"] = (FVofInitialInvestment + FVofInitialSIP);
        outputObject["fvLumpsum10k"] = fvLumpsum10k;
        outputObject["fvSIP1k"] = fvSIP1k;
        return outputObject;
    }
    static getReturnArray(yearsToGoal, riskProfileId) {
        const methodName = 'getReturnArray';
        let monthsToGoal = Math.round(yearsToGoal * 12);
        let returnArray = [];
        let goalReturnData = constants_1.StaticData.REBALANCINGDATA.MODELPORTFOLIO.goalReturnData;
        for (let i = 0; i < goalReturnData.length; i++) {
            if ((goalReturnData[i]["tenure_months"] == monthsToGoal) && (goalReturnData[i]["fk_id_risk_profile"] == riskProfileId)) {
                //console.log(goalReturnData[i]);
                returnArray = goalReturnData[i];
                return returnArray;
            }
        }
        logging_utils_1.LoggingUtils.info(`goal-utils-Return array not found: ${monthsToGoal} | ${riskProfileId}`, methodName);
        //iff not returned till now means error
        logging_utils_1.LoggingUtils.error('goalUtils-getReturnArray, Return array not found for monthsToGoal|riskProfileId' + monthsToGoal + '|' + riskProfileId);
        return returnArray;
    }
    static setModelPortfolio(monthsToGoal, totalAmount, riskProfileId, isLumpsum) {
        let modelPortfolio = constants_1.StaticData.REBALANCINGDATA.MODELPORTFOLIO;
        //get riskProfile string from id as mini/full portfolios are stored like that
        //@to-do change -- done
        //let riskProfileMaster = StaticData.REBALANCINGDATA.RISKPROFILE.names; //['DEFENSIVE','CONSERVATIVE','BALANCED','GROWTH','HIGHGROWTH'];
        //let riskProfileIds = StaticData.REBALANCINGDATA.RISKPROFILE.ids; //[1,2,3,4,5];
        //let riskProfileId = riskProfileIds[riskProfileMaster.indexOf(riskProfile)];
        //get which modelPortfolioAmountCapping to use
        let modePortfolioCapping = constants_1.Option.GLOBALOPTIONS['MODELPORTFOLIOAMOUNTCAPPING'];
        let sipModelPortfolioAmountCappingId = 0;
        let lumpsumModelPortfolioAmountCappingId = 0;
        let sipAmount = isLumpsum ? 0 : totalAmount;
        let lumpsumAmount = isLumpsum ? totalAmount : 0;
        let cappingId;
        Object.keys(modePortfolioCapping).forEach(function (capObject, index) {
            if (modePortfolioCapping[capObject].investmentType == constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value) {
                if ((sipAmount >= modePortfolioCapping[capObject].minAmount) && (sipAmount <= modePortfolioCapping[capObject].maxAmount)) {
                    sipModelPortfolioAmountCappingId = modePortfolioCapping[capObject].amountCappingId;
                }
            }
            if (modePortfolioCapping[capObject].investmentType == constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value) {
                if ((lumpsumAmount >= modePortfolioCapping[capObject].minAmount) && (lumpsumAmount <= modePortfolioCapping[capObject].maxAmount)) {
                    lumpsumModelPortfolioAmountCappingId = modePortfolioCapping[capObject].amountCappingId;
                }
            }
        });
        if (isLumpsum) {
            cappingId = lumpsumModelPortfolioAmountCappingId;
        }
        else {
            cappingId = sipModelPortfolioAmountCappingId;
        }
        //get full or mini name for portfolio
        let modelPortfolioMiniFullMapping = constants_1.Option.GLOBALOPTIONS.MODELPORTFOLIOCAPPINGMAPPING;
        let mpAmountSet = 'MINI';
        if (modelPortfolioMiniFullMapping.FULL.indexOf(cappingId) > -1) {
            mpAmountSet = 'FULL';
        }
        let mpArraySet = modelPortfolio[mpAmountSet][riskProfileId];
        //console.log(mpArraySet);
        let mpArray = [];
        for (let i = 0; i < mpArraySet.length; i++) {
            if ((monthsToGoal > mpArraySet[i]["minTenureMonths"] - 1) && (monthsToGoal < mpArraySet[i]["maxTenureMonths"] + 1)) {
                mpArray = mpArraySet[i].model;
                //console.log(mpArraySet[i]);
            }
        }
        let assetClasses = constants_1.Option.GLOBALOPTIONS.ASSETCLASSES.data;
        let categories = constants_1.Option.GLOBALOPTIONS.CATEGORIES.data;
        let groupCategories = constants_1.Option.GLOBALOPTIONS.GROUPCATEGORIES.data;
        let categoryAssetExposure = constants_1.Option.GLOBALOPTIONS.CATEGORYASSETEXPOSURE.data;
        let categoryCategoryGroupExposure = {};
        categoryCategoryGroupExposure = this.createCategoryCrossExpMatrix();
        for (let i = 0; i < mpArray.length; i++) {
            mpArray[i]["initialNetAssetWeights"] = this.createWtArray(assetClasses);
            mpArray[i]["initialNetCategoryWeights"] = this.createWtArray(categories);
            mpArray[i]["initialGroupCategoryWeights"] = this.createWtArray(groupCategories);
        }
        let mpAssetLevel = this.sumProduct(mpArray, "weight", assetClasses, categoryAssetExposure, "category", "initialNetAssetWeights");
        let mpCGLevel = this.sumProduct(mpArray, "weight", groupCategories, categoryCategoryGroupExposure, "category", "initialGroupCategoryWeights");
        let mpAC = {};
        let mpCG = {};
        for (let i = 0; i < assetClasses.length; i++) {
            mpAC[assetClasses[i]] = mpAssetLevel[i];
        }
        for (let i = 0; i < groupCategories.length; i++) {
            mpCG[groupCategories[i]] = mpCGLevel[i];
        }
        let modelPortfolioAllocations = {};
        modelPortfolioAllocations["categoryGroupLevel"] = mpCG;
        modelPortfolioAllocations["assetClassLevel"] = mpAC;
        modelPortfolioAllocations["miniFullOption"] = mpAmountSet;
        //console.log('model Portfolios: ', modelPortfolioAllocations);
        return modelPortfolioAllocations;
    }
    //creates exposure of one category to another... required for multi-asset/hybrid categories
    static createCategoryCrossExpMatrix() {
        let categories = constants_1.Option.GLOBALOPTIONS.CATEGORIES.data;
        let assetClasses = constants_1.Option.GLOBALOPTIONS.ASSETCLASSES.data;
        let groupCategories = constants_1.Option.GLOBALOPTIONS.GROUPCATEGORIES.data;
        let categoryAssetExposure = constants_1.Option.GLOBALOPTIONS.CATEGORYASSETEXPOSURE.data;
        let assetToDefaultCategories = constants_1.Option.GLOBALOPTIONS.ASSETTODEFAULTCATEGORIES.data;
        let categoryGroupCategoryMapping = constants_1.Option.GLOBALOPTIONS.CATEGORYGROUPCATEGORYMAPPING.data;
        let categoryCrossExposure = {};
        let categoryCategoryGroupExposure = {};
        //loop through each category
        for (let i = 0; i < categories.length; i++) {
            let currCategory = categories[i]; //C1
            let tempCurrCategory = currCategory;
            //console.log(currCategory);
            let currCategoryExp = categoryAssetExposure[currCategory]; //exposure to asset classes of current category
            //if (currCategory == 12){console.log(currCategory, currCategoryExp);}
            //output matrices
            let categoryMatrixRow = this.createWtArray(categories);
            let categoryGroupMatrixRow = this.createWtArray(groupCategories);
            //assign to asset classes and category groups
            for (let j = 0; j < assetClasses.length; j++) {
                //if a category is hybrid, exposure to asset class shall be < 1
                if (currCategoryExp[j] < 1) {
                    //this is hybrid
                    //get default category for the current asset class
                    let defaultCategoryforAssetClass = assetToDefaultCategories[j];
                    tempCurrCategory = defaultCategoryforAssetClass;
                    categoryMatrixRow[categories.indexOf(defaultCategoryforAssetClass)] = currCategoryExp[j];
                    /*if (currCategory == 12){
                      console.log('tempCurrCategory - index: ', tempCurrCategory, ' - ', categories.indexOf(defaultCategoryforAssetClass));
                      console.log(currCategoryExp[j]);
                    }*/
                }
                else {
                    //this is purist
                    categoryMatrixRow[i] = currCategoryExp[j];
                    tempCurrCategory = currCategory;
                }
                //let currCategoryGroupCategoryMapping = categoryGroupCategoryMapping[tempCurrCategory];
                for (let k = 0; k < groupCategories.length; k++) {
                    //console.log(currCategoryExp[j]);
                    categoryGroupMatrixRow[k] += categoryGroupCategoryMapping[tempCurrCategory][k] * currCategoryExp[j];
                    //console.log(categoryGroupMatrixRow);
                    /*if (currCategory == 12){
                      console.log('categoryGroupMatrixRow: ', categoryGroupMatrixRow);
                    }  */
                }
            }
            //push in object
            categoryCrossExposure[currCategory] = categoryMatrixRow;
            categoryCategoryGroupExposure[currCategory] = categoryGroupMatrixRow;
        }
        //console.log(categoryAssetExposure);
        //console.log(categoryCrossExposure);
        //console.log(categoryCategoryGroupExposure);
        //we don't use categoryCrossExposure so leaving it here
        return categoryCategoryGroupExposure;
    }
    static sumProduct(inputArray, inputArrayProperty, doForAssetCategoryArray, multiplierArray, joinProperty, outputProperty) {
        let sumTotal = this.createWtArray(doForAssetCategoryArray);
        for (let i = 0; i < inputArray.length; i++) {
            let currRow = inputArray[i];
            let outputArray = currRow[outputProperty];
            let currJoinValue = currRow[joinProperty];
            let currRowWeight = currRow[inputArrayProperty];
            //loop through each asset/category to create net exposure
            for (let j = 0; j < sumTotal.length; j++) {
                outputArray[j] = currRowWeight * multiplierArray[currJoinValue][j];
                sumTotal[j] += outputArray[j];
            }
        }
        return sumTotal;
    }
    static createWtArray(masterArray) {
        let initArray = new Array(masterArray.length);
        for (let i = 0; i < masterArray.length; ++i)
            initArray[i] = 0;
        return initArray;
    }
    static returnAssetFromCategory(categoryWeightArray, weightField = "weight", categoryField = "category") {
        let mpArray = [];
        mpArray = categoryWeightArray;
        logging_utils_1.LoggingUtils.info(`in returnAssetFromCategory: ${JSON.stringify(mpArray)}`, 'returnAssetFromCategory');
        let assetClasses = constants_1.Option.GLOBALOPTIONS.ASSETCLASSES.data;
        let assetClassNames = constants_1.Option.GLOBALOPTIONS.ASSETCLASSES.name;
        let categoryAssetExposure = constants_1.Option.GLOBALOPTIONS.CATEGORYASSETEXPOSURE.data;
        for (let i = 0; i < mpArray.length; i++) {
            mpArray[i]["initialNetAssetWeights"] = this.createWtArray(assetClasses);
        }
        logging_utils_1.LoggingUtils.info(`initialized initialNetAssetWeights. going for sumproduct`, 'returnAssetFromCategory');
        let mpAssetLevel = this.sumProduct(mpArray, weightField, assetClasses, categoryAssetExposure, categoryField, "initialNetAssetWeights");
        logging_utils_1.LoggingUtils.info(`done sumproduct mpAssetLevel: ${mpAssetLevel}`, 'returnAssetFromCategory');
        let returnAssetArray = [];
        for (let i = 0; i < assetClasses.length; i++) {
            let mpAC = {};
            mpAC["id"] = assetClasses[i];
            mpAC["name"] = assetClassNames[i];
            mpAC["weight"] = mpAssetLevel[i];
            returnAssetArray.push(mpAC);
        }
        return returnAssetArray;
    }
    static alignModelPortfolio(inputData, lumpsumAmount, sipAmount, holdingData = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34;
        let modelData = {
            "isSuccess": false,
            "errorMessage": '',
            "assetData": {
                "sip": [],
                "lumpsum": []
            },
            "assetDatafromCategory": {
                "sip": [],
                "lumpsum": []
            },
            "categoryData": {
                "sip": [],
                "lumpsum": []
            },
            "model": {
                "sip": {
                    "investmentType": constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value,
                    "investmentTypeLabel": constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.label,
                    "totalCount": 0,
                    "instruments": {}
                },
                "lumpsum": {
                    "investmentType": constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value,
                    "investmentTypeLabel": constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.label,
                    "totalCount": 0,
                    "instruments": {}
                }
            }
        };
        try {
            let assetSIPArray = [];
            let categorySIPArray = [];
            let assetLumpsumArray = [];
            let categoryLumpsumArray = [];
            let assetSIPArrayfromCategory = [];
            let assetLumpsumArrayfromCategory = [];
            //let modelPortfolioRows = inputData.riskProfile.modelPortfolioInstruments;
            let modelPortfolioRows = inputData;
            //get which modelPortfolioAmountCapping to use
            let modePortfolioCapping = constants_1.Option.GLOBALOPTIONS['MODELPORTFOLIOAMOUNTCAPPING'];
            let sipModelPortfolioAmountCappingId = 0;
            let lumpsumModelPortfolioAmountCappingId = 0;
            let modelLumpsumRows = [];
            let modelSIPRows = [];
            let lumpsumRowCount = 0;
            let sipRowCount = 0;
            Object.keys(modePortfolioCapping).forEach(function (capObject, index) {
                if (modePortfolioCapping[capObject].investmentType == constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value) {
                    if ((sipAmount >= modePortfolioCapping[capObject].minAmount) && (sipAmount <= modePortfolioCapping[capObject].maxAmount)) {
                        sipModelPortfolioAmountCappingId = modePortfolioCapping[capObject].amountCappingId;
                    }
                }
                if (modePortfolioCapping[capObject].investmentType == constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value) {
                    if ((lumpsumAmount >= modePortfolioCapping[capObject].minAmount) && (lumpsumAmount <= modePortfolioCapping[capObject].maxAmount)) {
                        lumpsumModelPortfolioAmountCappingId = modePortfolioCapping[capObject].amountCappingId;
                    }
                }
            });
            //if no capping limit found implies portfolio can't be created for this amount
            if ((lumpsumModelPortfolioAmountCappingId == 0) && (sipModelPortfolioAmountCappingId == 0)) {
                modelData.isSuccess = false;
                //modelData.errorMessage = 'Model portfolios with right capping could not be found.';
                //return modelData;
                throw new Error('Model portfolios not found for this investment amount.');
            }
            //create list of ServiceProviders to be put alongwith the model rows
            let serviceProviderAccounts = [];
            if ((holdingData === null || holdingData === void 0 ? void 0 : holdingData.serviceProviderAccounts) != undefined && (holdingData === null || holdingData === void 0 ? void 0 : holdingData.serviceProviderAccounts.length) > 0) {
                serviceProviderAccounts = holdingData.serviceProviderAccounts;
            }
            let serviceProviderList = {};
            if (holdingData && holdingData.serviceProviderAccounts != undefined && ((_a = holdingData.serviceProviderAccounts) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                for (let j = 0; j < serviceProviderAccounts.length; j++) {
                    let serviceProviderAccount = serviceProviderAccounts[j];
                    let serviceProviderAccountId = serviceProviderAccount.id;
                    let folioNumber = serviceProviderAccount.accountNumber;
                    let serviceProviderAMCId = serviceProviderAccount.serviceProviderId;
                    let isHeldAway = serviceProviderAccount.isHeldAway;
                    //serviceProviderList has properties as AMCId
                    //and value is an array of folioNumbers in that
                    if (serviceProviderList.hasOwnProperty(serviceProviderAMCId)) {
                        //push different folio in the existing AMC
                        serviceProviderList[serviceProviderAMCId].push({
                            'serviceProviderAccountId': serviceProviderAccountId,
                            'folioNumber': folioNumber,
                            'serviceProviderAMCId': serviceProviderAMCId,
                            'isHeldAway': isHeldAway
                        });
                    }
                    else {
                        //initialize the array for new found AMC
                        serviceProviderList[serviceProviderAMCId] = [
                            {
                                'serviceProviderAccountId': serviceProviderAccountId,
                                'folioNumber': folioNumber,
                                'serviceProviderAMCId': serviceProviderAMCId,
                                'isHeldAway': isHeldAway
                            }
                        ];
                    }
                }
            }
            //console.log('serviceProviderList :', serviceProviderList);
            //the model portfolio data has rows for instruments
            //for SIP/Lumpsum
            //for amount capping
            //so we will only push relevant rows and pass the rest
            for (let i = 0; i < modelPortfolioRows.length; i++) {
                let currModelRow = modelPortfolioRows[i];
                let investmentType;
                //check if this is the row with required amount capping
                if (((currModelRow.investmentType == constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value) &&
                    (currModelRow.modelPortfolioAmountCappingId == sipModelPortfolioAmountCappingId)) ||
                    ((currModelRow.investmentType == constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value) &&
                        (currModelRow.modelPortfolioAmountCappingId == lumpsumModelPortfolioAmountCappingId))) {
                    //process this row as the investmentType matches
                    //and amountCaping bucket is right
                }
                else {
                    continue;
                }
                let dataRow = {};
                let investmentTypeLabel = "";
                if ((currModelRow === null || currModelRow === void 0 ? void 0 : currModelRow.investmentType) != undefined) {
                    investmentType = currModelRow.investmentType;
                }
                else {
                    continue;
                }
                //SS-27SEP22-TAX
                let taxAssetName = (_c = (_b = currModelRow.instrument) === null || _b === void 0 ? void 0 : _b.taxAsset) === null || _c === void 0 ? void 0 : _c.name;
                let assetName = (_e = (_d = currModelRow.instrument) === null || _d === void 0 ? void 0 : _d.asset) === null || _e === void 0 ? void 0 : _e.name;
                let categoryName = (_g = (_f = currModelRow.instrument) === null || _f === void 0 ? void 0 : _f.instrumentCategory) === null || _g === void 0 ? void 0 : _g.name;
                dataRow['instrumentId'] = currModelRow.instrumentId;
                dataRow['name'] = (_h = currModelRow.instrument) === null || _h === void 0 ? void 0 : _h.name;
                dataRow['amcId'] = (_j = currModelRow.instrument) === null || _j === void 0 ? void 0 : _j.serviceProviderId;
                dataRow['weight'] = currModelRow.weightage;
                //SS-27SEP22-TAX
                //making this as taxAsset
                //passing original asset separately
                //dataRow['assetClass'] = currModelRow.instrument?.assetId;
                //dataRow['assetName'] = assetName;
                dataRow['assetClass'] = ((_k = currModelRow.instrument) === null || _k === void 0 ? void 0 : _k.taxAssetId) ? (_l = currModelRow.instrument) === null || _l === void 0 ? void 0 : _l.taxAssetId : (_m = currModelRow.instrument) === null || _m === void 0 ? void 0 : _m.assetId;
                dataRow['assetName'] = taxAssetName ? taxAssetName : assetName;
                dataRow['actualAssetClass'] = (_o = currModelRow.instrument) === null || _o === void 0 ? void 0 : _o.assetId;
                dataRow['actualAssetName'] = assetName;
                dataRow['category'] = (_p = currModelRow.instrument) === null || _p === void 0 ? void 0 : _p.instrumentCategoryId;
                dataRow['categoryname'] = categoryName;
                dataRow['categoryGroup'] = (_q = currModelRow.instrument) === null || _q === void 0 ? void 0 : _q.categoryGroupId;
                dataRow['isRecoCat'] = 1; //default... UPDATE later
                dataRow['isRecoScheme'] = (_r = currModelRow.instrument) === null || _r === void 0 ? void 0 : _r.recommendationType;
                dataRow['schemeRank'] = (_s = currModelRow.instrument) === null || _s === void 0 ? void 0 : _s.instrumentRank;
                //add ServiceProvider accounts
                dataRow['serviceProviderList'] = [];
                if (serviceProviderList.hasOwnProperty((_t = currModelRow.instrument) === null || _t === void 0 ? void 0 : _t.serviceProviderId)) {
                    dataRow['serviceProviderList'] = serviceProviderList[(_u = currModelRow.instrument) === null || _u === void 0 ? void 0 : _u.serviceProviderId];
                }
                //txn related
                if (currModelRow.investmentType == constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value) {
                    investmentTypeLabel = constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.label;
                    dataRow['isSIPAllowed'] = (_w = (_v = currModelRow.instrument) === null || _v === void 0 ? void 0 : _v.mutualFundDetails) === null || _w === void 0 ? void 0 : _w.isSIPAllowed;
                    //min max SIP amounts shall come from systematic settings
                    //get the systematic method data if it exists
                    let currentSIPSetting = null;
                    if ((_y = (_x = currModelRow.instrument) === null || _x === void 0 ? void 0 : _x.mutualFundDetails) === null || _y === void 0 ? void 0 : _y.systematicMethodSettings) {
                        let systematicMethodSettings = (_0 = (_z = currModelRow.instrument) === null || _z === void 0 ? void 0 : _z.mutualFundDetails) === null || _0 === void 0 ? void 0 : _0.systematicMethodSettings;
                        if (systematicMethodSettings.length > 0) {
                            //filter and get monthly SIPs as we shall recommend monthly only
                            currentSIPSetting = systematicMethodSettings.find((systematicMethod) => (systematicMethod.systematicMethodType === constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.sip.value &&
                                systematicMethod.frequency === constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value));
                        }
                    }
                    if (!currentSIPSetting) {
                        logging_utils_1.LoggingUtils.error('PRODUCT-GOALUTILS-alignModelPortfolio: SIP systematic setting not found for recommended scheme id - ' + currModelRow.instrumentId);
                    }
                    dataRow['minSIPAmount'] = currentSIPSetting === null || currentSIPSetting === void 0 ? void 0 : currentSIPSetting.minInstallmentAmount;
                    dataRow['maxSIPAmount'] = currentSIPSetting === null || currentSIPSetting === void 0 ? void 0 : currentSIPSetting.maxInstallmentAmount;
                    dataRow['currentSIPSetting'] = currentSIPSetting;
                    dataRow['investmentTypeId'] = investmentType;
                    dataRow['investmentTypeLabel'] = investmentTypeLabel;
                    //put systermaticMethodSettings data for SIP
                    dataRow['systematicMethodSettings'] = (_2 = (_1 = currModelRow.instrument) === null || _1 === void 0 ? void 0 : _1.mutualFundDetails) === null || _2 === void 0 ? void 0 : _2.systematicMethodSettings;
                    //console.log(currModelRow);
                    modelSIPRows.push(dataRow);
                    sipRowCount += 1;
                    //check if asset exists in the respective investment type
                    //let foundObject = assetSIPArray.find(asset => asset.id === currModelRow.instrument?.assetId);
                    let foundObject = assetSIPArray.find(asset => asset.id === dataRow['assetClass']);
                    if (foundObject) {
                        foundObject["totalCount"] = foundObject["totalCount"] + 1;
                        foundObject["weight"] = foundObject["weight"] + currModelRow.weightage;
                    }
                    else {
                        //create new asset object
                        assetSIPArray.push({
                            "id": dataRow['assetClass'] ? dataRow['assetClass'] : (_3 = currModelRow.instrument) === null || _3 === void 0 ? void 0 : _3.assetId,
                            "totalCount": 1,
                            "name": dataRow['assetName'],
                            "weight": currModelRow.weightage
                        });
                    }
                    //do for category object
                    foundObject = categorySIPArray.find(category => { var _a; return category.id === ((_a = currModelRow.instrument) === null || _a === void 0 ? void 0 : _a.instrumentCategoryId); });
                    if (foundObject) {
                        foundObject["totalCount"] = foundObject["totalCount"] + 1;
                        foundObject["weight"] = foundObject["weight"] + currModelRow.weightage;
                    }
                    else {
                        //create new asset object
                        categorySIPArray.push({
                            "id": (_4 = currModelRow.instrument) === null || _4 === void 0 ? void 0 : _4.instrumentCategoryId,
                            "totalCount": 1,
                            "name": categoryName,
                            "weight": currModelRow.weightage
                        });
                    }
                }
                if (currModelRow.investmentType == constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value) {
                    investmentTypeLabel = constants_1.Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.label;
                    dataRow['isPurchaseAllowed'] = (_6 = (_5 = currModelRow.instrument) === null || _5 === void 0 ? void 0 : _5.mutualFundDetails) === null || _6 === void 0 ? void 0 : _6.isPurchaseAllowed;
                    dataRow['isRedemptionAllowed'] = (_8 = (_7 = currModelRow.instrument) === null || _7 === void 0 ? void 0 : _7.mutualFundDetails) === null || _8 === void 0 ? void 0 : _8.isRedemptionAllowed;
                    dataRow['isSwitchAllowed'] = (_10 = (_9 = currModelRow.instrument) === null || _9 === void 0 ? void 0 : _9.mutualFundDetails) === null || _10 === void 0 ? void 0 : _10.isSwitchAllowed;
                    dataRow['maxAdditionalInvestmentAmount'] = (_12 = (_11 = currModelRow.instrument) === null || _11 === void 0 ? void 0 : _11.mutualFundDetails) === null || _12 === void 0 ? void 0 : _12.maxAdditionalInvestmentAmount;
                    dataRow['maxInvestmentAmount'] = (_14 = (_13 = currModelRow.instrument) === null || _13 === void 0 ? void 0 : _13.mutualFundDetails) === null || _14 === void 0 ? void 0 : _14.maxInvestmentAmount;
                    dataRow['maxRedemptionAmount'] = (_16 = (_15 = currModelRow.instrument) === null || _15 === void 0 ? void 0 : _15.mutualFundDetails) === null || _16 === void 0 ? void 0 : _16.maxRedemptionAmount;
                    dataRow['maxRedemptionQuantity'] = (_18 = (_17 = currModelRow.instrument) === null || _17 === void 0 ? void 0 : _17.mutualFundDetails) === null || _18 === void 0 ? void 0 : _18.maxRedemptionQuantity;
                    dataRow['minAdditionalInvestmentAmount'] = (_20 = (_19 = currModelRow.instrument) === null || _19 === void 0 ? void 0 : _19.mutualFundDetails) === null || _20 === void 0 ? void 0 : _20.minAdditionalInvestmentAmount;
                    dataRow['minInvestmentAmount'] = (_22 = (_21 = currModelRow.instrument) === null || _21 === void 0 ? void 0 : _21.mutualFundDetails) === null || _22 === void 0 ? void 0 : _22.minInvestmentAmount;
                    dataRow['minRedemptionAmount'] = (_24 = (_23 = currModelRow.instrument) === null || _23 === void 0 ? void 0 : _23.mutualFundDetails) === null || _24 === void 0 ? void 0 : _24.minRedemptionAmount;
                    dataRow['minRedemptionQuantity'] = (_26 = (_25 = currModelRow.instrument) === null || _25 === void 0 ? void 0 : _25.mutualFundDetails) === null || _26 === void 0 ? void 0 : _26.minRedemptionQuantity;
                    dataRow['purchaseAmountMultiplier'] = (_28 = (_27 = currModelRow.instrument) === null || _27 === void 0 ? void 0 : _27.mutualFundDetails) === null || _28 === void 0 ? void 0 : _28.purchaseAmountMultiplier;
                    dataRow['redemptionAmountMultiplier'] = (_30 = (_29 = currModelRow.instrument) === null || _29 === void 0 ? void 0 : _29.mutualFundDetails) === null || _30 === void 0 ? void 0 : _30.redemptionAmountMultiplier;
                    dataRow['redemptionQuantityMultiplier'] = (_32 = (_31 = currModelRow.instrument) === null || _31 === void 0 ? void 0 : _31.mutualFundDetails) === null || _32 === void 0 ? void 0 : _32.redemptionQuantityMultiplier;
                    dataRow['investmentTypeId'] = investmentType;
                    dataRow['investmentTypeLabel'] = investmentTypeLabel;
                    modelLumpsumRows.push(dataRow);
                    lumpsumRowCount += 1;
                    //check if asset exists in the respective investment type
                    //let foundObject = assetLumpsumArray.find(asset => asset.id === currModelRow.instrument?.assetId);
                    let foundObject = assetLumpsumArray.find(asset => asset.id === dataRow['assetClass']);
                    if (foundObject) {
                        foundObject["totalCount"] = foundObject["totalCount"] + 1;
                        foundObject["weight"] = foundObject["weight"] + currModelRow.weightage;
                    }
                    else {
                        //create new asset object
                        assetLumpsumArray.push({
                            "id": dataRow['assetClass'] ? dataRow['assetClass'] : (_33 = currModelRow.instrument) === null || _33 === void 0 ? void 0 : _33.assetId,
                            "totalCount": 1,
                            "name": dataRow['assetName'],
                            "weight": currModelRow.weightage
                        });
                    }
                    //do for category object
                    foundObject = categoryLumpsumArray.find(category => { var _a; return category.id === ((_a = currModelRow.instrument) === null || _a === void 0 ? void 0 : _a.instrumentCategoryId); });
                    if (foundObject) {
                        foundObject["totalCount"] = foundObject["totalCount"] + 1;
                        foundObject["weight"] = foundObject["weight"] + currModelRow.weightage;
                    }
                    else {
                        //create new asset object
                        categoryLumpsumArray.push({
                            "id": (_34 = currModelRow.instrument) === null || _34 === void 0 ? void 0 : _34.instrumentCategoryId,
                            "totalCount": 1,
                            "name": categoryName,
                            "weight": currModelRow.weightage
                        });
                    }
                }
            }
            if (categorySIPArray.length > 0) {
                assetSIPArrayfromCategory = this.returnAssetFromCategory(categorySIPArray, "weight", "id");
            }
            if (categoryLumpsumArray.length > 0) {
                assetLumpsumArrayfromCategory = this.returnAssetFromCategory(categoryLumpsumArray, "weight", "id");
            }
            modelData.assetData.sip = assetSIPArray;
            modelData.categoryData.sip = categorySIPArray;
            modelData.assetData.lumpsum = assetLumpsumArray;
            modelData.categoryData.lumpsum = categoryLumpsumArray;
            modelData.assetDatafromCategory.sip = assetSIPArrayfromCategory;
            modelData.assetDatafromCategory.lumpsum = assetLumpsumArrayfromCategory;
            modelData.model.sip.totalCount = sipRowCount;
            modelData.model.sip.instruments = modelSIPRows;
            modelData.model.lumpsum.totalCount = lumpsumRowCount;
            modelData.model.lumpsum.instruments = modelLumpsumRows;
            modelData.isSuccess = true;
            return modelData;
        }
        catch (err) {
            //If a known error then send the message
            modelData.isSuccess = false;
            if (err.message) {
                modelData.errorMessage = err.message;
            }
            else {
                modelData.errorMessage = 'Something went wrong.';
            }
            return modelData;
        }
    }
    static getRecommendationTypeLabel(recommendationType, defaultReturnLabel) {
        let recommendationTypeLabel = defaultReturnLabel; //default
        if (!recommendationType) {
            return recommendationTypeLabel;
        }
        //find key value and return
        let recommendationTypeObject = constants_1.Option.GLOBALOPTIONS.RECOMMENDATIONTYPE;
        Object.keys(recommendationTypeObject).forEach(function (recoObjectKey, index) {
            if (recommendationTypeObject[recoObjectKey].value == recommendationType) {
                recommendationTypeLabel = recommendationTypeObject[recoObjectKey].label;
            }
        });
        //return default of not found
        return recommendationTypeLabel;
    }
    static alignPortfolioData(inputData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35;
        let portfolioData = {
            "isSuccess": false,
            "errorMessage": ''
        };
        let methodName = 'alignPortfolioData';
        let holdingRows = [];
        let sipRows = [];
        let serviceProviderAccounts = inputData.serviceProviderAccounts;
        let totalCurrentValue = 0;
        let totalHoldingRows = 0;
        let totalSIPValue = 0;
        let totalSIPRows = 0;
        try {
            for (let j = 0; j < serviceProviderAccounts.length; j++) {
                let serviceProviderAccount = serviceProviderAccounts[j];
                let serviceProviderAccountId = serviceProviderAccount.id;
                let folioNumber = serviceProviderAccount.accountNumber;
                let serviceProviderAMCId = serviceProviderAccount.serviceProviderId;
                let holdings = serviceProviderAccount.holdings;
                let runningSIPs = serviceProviderAccount.systematicMethods;
                let isHeldAway = serviceProviderAccount.isHeldAway;
                //process Current holdings
                if (holdings != undefined && holdings.length > 0) {
                    for (let i = 0; i < holdings.length; i++) {
                        //add row if non zero amount
                        if (Math.abs(holdings[i].totalCurrentValue) > 0) {
                            let currHoldingRow = {};
                            currHoldingRow['instrumentId'] = holdings[i].instrumentId;
                            currHoldingRow['instrumentName'] = (_a = holdings[i].instrument) === null || _a === void 0 ? void 0 : _a.name;
                            currHoldingRow['serviceProviderAccountId'] = serviceProviderAccountId;
                            currHoldingRow['isHeldAway'] = isHeldAway;
                            currHoldingRow['folioNumber'] = folioNumber;
                            currHoldingRow['amcId'] = serviceProviderAMCId;
                            currHoldingRow['uniqueId'] = holdings[i].id;
                            currHoldingRow['amount'] = holdings[i].totalCurrentValue;
                            currHoldingRow['units'] = holdings[i].quantity;
                            currHoldingRow['weight'] = 0; //to be calculated if not there
                            currHoldingRow['portfolioTotalAmount'] = 0; //to be calculated if not there
                            currHoldingRow['assetClass'] = (_b = holdings[i].instrument) === null || _b === void 0 ? void 0 : _b.assetId;
                            currHoldingRow['category'] = (_c = holdings[i].instrument) === null || _c === void 0 ? void 0 : _c.instrumentCategoryId;
                            currHoldingRow['assetClassName'] = (_e = (_d = holdings[i].instrument) === null || _d === void 0 ? void 0 : _d.asset) === null || _e === void 0 ? void 0 : _e.name;
                            currHoldingRow['categoryName'] = (_g = (_f = holdings[i].instrument) === null || _f === void 0 ? void 0 : _f.instrumentCategory) === null || _g === void 0 ? void 0 : _g.name;
                            let quantity = holdings[i].quantity ? holdings[i].quantity : 0;
                            //SS-22Dec22: Fix for sellable quantity !== null
                            //let sellableQuantity = holdings[i].sellableQuantity !== null ? holdings[i].sellableQuantity >=0 ? holdings[i].sellableQuantity : holdings[i].quantity : holdings[i].quantity;
                            let sellableQuantity = quantity;
                            logging_utils_1.LoggingUtils.info(`Setting Sellable quantity: ${holdings[i].instrumentId} | ${holdings[i].sellableQuantity}`, methodName);
                            if (holdings[i].hasOwnProperty('sellableQuantity') && (holdings[i].sellableQuantity !== null)) {
                                logging_utils_1.LoggingUtils.info(`Sellable quantity not null: ${holdings[i].instrumentId} | ${holdings[i].sellableQuantity}`, methodName);
                                if ((parseFloat(holdings[i].sellableQuantity) >= 0)) {
                                    sellableQuantity = holdings[i].sellableQuantity;
                                    logging_utils_1.LoggingUtils.info(`Setting Sellable quantity = ${sellableQuantity}`, methodName);
                                }
                            }
                            let sellableAmount = quantity > 0 ? (sellableQuantity / quantity) * holdings[i].totalCurrentValue : 0;
                            let lockedAmount = holdings[i].totalCurrentValue - sellableAmount;
                            logging_utils_1.LoggingUtils.info(`lockedAmount | sellableAmount: ${lockedAmount} | ${sellableAmount}`, methodName);
                            currHoldingRow['freeAmount'] = sellableAmount;
                            currHoldingRow['lockedAmount'] = lockedAmount;
                            //we don't want to buy Hybrid but pure Eq/Debt as preference
                            //in worst case it will buy anyways
                            currHoldingRow['isRecoCat'] = ((_h = holdings[i].instrument) === null || _h === void 0 ? void 0 : _h.assetId) == 9 ? 0 : 1; //@todo - remove hard-coding
                            let recommendationType = ((_j = holdings[i].instrument) === null || _j === void 0 ? void 0 : _j.recommendationType) ? (_k = holdings[i].instrument) === null || _k === void 0 ? void 0 : _k.recommendationType : null;
                            //we are using label in algo
                            let defaultReturnLabel = "SELL";
                            currHoldingRow['isRecoScheme'] = this.getRecommendationTypeLabel(recommendationType, defaultReturnLabel);
                            currHoldingRow['schemeRank'] = ((_l = holdings[i].instrument) === null || _l === void 0 ? void 0 : _l.instrumentRank) ? (_m = holdings[i].instrument) === null || _m === void 0 ? void 0 : _m.instrumentRank : 9999999;
                            //currHoldingRow['freeUnitsPortion'] = 1;//
                            currHoldingRow['freeUnits'] = sellableQuantity;
                            //currHoldingRow['exitFreeUnits'] = holdings[i].quantity;//
                            //currHoldingRow['taxFreeUnits'] = holdings[i].quantity;//
                            //txn check related
                            currHoldingRow['isPurchaseAllowed'] = (_p = (_o = holdings[i].instrument) === null || _o === void 0 ? void 0 : _o.mutualFundDetails) === null || _p === void 0 ? void 0 : _p.isPurchaseAllowed;
                            currHoldingRow['isRedemptionAllowed'] = (_r = (_q = holdings[i].instrument) === null || _q === void 0 ? void 0 : _q.mutualFundDetails) === null || _r === void 0 ? void 0 : _r.isRedemptionAllowed;
                            currHoldingRow['isSwitchAllowed'] = (_t = (_s = holdings[i].instrument) === null || _s === void 0 ? void 0 : _s.mutualFundDetails) === null || _t === void 0 ? void 0 : _t.isSwitchAllowed;
                            currHoldingRow['maxAdditionalInvestmentAmount'] = (_v = (_u = holdings[i].instrument) === null || _u === void 0 ? void 0 : _u.mutualFundDetails) === null || _v === void 0 ? void 0 : _v.maxAdditionalInvestmentAmount;
                            currHoldingRow['maxInvestmentAmount'] = (_x = (_w = holdings[i].instrument) === null || _w === void 0 ? void 0 : _w.mutualFundDetails) === null || _x === void 0 ? void 0 : _x.maxInvestmentAmount;
                            currHoldingRow['maxRedemptionAmount'] = (_z = (_y = holdings[i].instrument) === null || _y === void 0 ? void 0 : _y.mutualFundDetails) === null || _z === void 0 ? void 0 : _z.maxRedemptionAmount;
                            currHoldingRow['maxRedemptionQuantity'] = (_1 = (_0 = holdings[i].instrument) === null || _0 === void 0 ? void 0 : _0.mutualFundDetails) === null || _1 === void 0 ? void 0 : _1.maxRedemptionQuantity;
                            currHoldingRow['minAdditionalInvestmentAmount'] = (_3 = (_2 = holdings[i].instrument) === null || _2 === void 0 ? void 0 : _2.mutualFundDetails) === null || _3 === void 0 ? void 0 : _3.minAdditionalInvestmentAmount;
                            currHoldingRow['minInvestmentAmount'] = (_5 = (_4 = holdings[i].instrument) === null || _4 === void 0 ? void 0 : _4.mutualFundDetails) === null || _5 === void 0 ? void 0 : _5.minInvestmentAmount;
                            currHoldingRow['minRedemptionAmount'] = (_7 = (_6 = holdings[i].instrument) === null || _6 === void 0 ? void 0 : _6.mutualFundDetails) === null || _7 === void 0 ? void 0 : _7.minRedemptionAmount;
                            currHoldingRow['minRedemptionQuantity'] = (_9 = (_8 = holdings[i].instrument) === null || _8 === void 0 ? void 0 : _8.mutualFundDetails) === null || _9 === void 0 ? void 0 : _9.minRedemptionQuantity;
                            currHoldingRow['purchaseAmountMultiplier'] = (_11 = (_10 = holdings[i].instrument) === null || _10 === void 0 ? void 0 : _10.mutualFundDetails) === null || _11 === void 0 ? void 0 : _11.purchaseAmountMultiplier;
                            currHoldingRow['redemptionAmountMultiplier'] = (_13 = (_12 = holdings[i].instrument) === null || _12 === void 0 ? void 0 : _12.mutualFundDetails) === null || _13 === void 0 ? void 0 : _13.redemptionAmountMultiplier;
                            currHoldingRow['redemptionQuantityMultiplier'] = (_15 = (_14 = holdings[i].instrument) === null || _14 === void 0 ? void 0 : _14.mutualFundDetails) === null || _15 === void 0 ? void 0 : _15.redemptionQuantityMultiplier;
                            currHoldingRow['categoryGroup'] = (_16 = holdings[i].instrument) === null || _16 === void 0 ? void 0 : _16.categoryGroupId;
                            totalCurrentValue += holdings[i].totalCurrentValue;
                            totalHoldingRows += 1;
                            holdingRows.push(currHoldingRow);
                        }
                    } //holdings loop within Service Provider
                }
                //process currently running SIPs
                if (runningSIPs != undefined && runningSIPs.length > 0) {
                    for (let i = 0; i < runningSIPs.length; i++) {
                        //add row if non zero amount
                        if (Math.abs(runningSIPs[i].amount) > 0) {
                            let currSIPRow = {};
                            currSIPRow['instrumentId'] = runningSIPs[i].instrumentId;
                            currSIPRow['instrumentName'] = (_17 = runningSIPs[i].instrument) === null || _17 === void 0 ? void 0 : _17.name;
                            currSIPRow['serviceProviderAccountId'] = serviceProviderAccountId;
                            currSIPRow['isHeldAway'] = isHeldAway;
                            currSIPRow['folioNumber'] = folioNumber;
                            currSIPRow['amcId'] = serviceProviderAMCId;
                            currSIPRow['uniqueId'] = runningSIPs[i].id;
                            currSIPRow['amount'] = runningSIPs[i].amount; //
                            currSIPRow['units'] = runningSIPs[i].quantity;
                            currSIPRow['weight'] = 0; //to be calculated if not there
                            currSIPRow['portfolioTotalAmount'] = 0; //to be calculated if not there
                            currSIPRow['assetClass'] = (_18 = runningSIPs[i].instrument) === null || _18 === void 0 ? void 0 : _18.assetId;
                            currSIPRow['category'] = (_19 = runningSIPs[i].instrument) === null || _19 === void 0 ? void 0 : _19.instrumentCategoryId;
                            currSIPRow['assetClassName'] = (_21 = (_20 = runningSIPs[i].instrument) === null || _20 === void 0 ? void 0 : _20.asset) === null || _21 === void 0 ? void 0 : _21.name;
                            currSIPRow['categoryName'] = (_23 = (_22 = runningSIPs[i].instrument) === null || _22 === void 0 ? void 0 : _22.instrumentCategory) === null || _23 === void 0 ? void 0 : _23.name;
                            currSIPRow['freeAmount'] = runningSIPs[i].amount; //entire amount is free to be stopped
                            currSIPRow['lockedAmount'] = 0;
                            //we don't want to buy Hybrid but pure Eq/Debt as preference
                            //in worst case it will buy anyways
                            currSIPRow['isRecoCat'] = ((_24 = runningSIPs[i].instrument) === null || _24 === void 0 ? void 0 : _24.assetId) == 9 ? 0 : 1; //@todo - remove hard-coding
                            let recommendationType = ((_25 = runningSIPs[i].instrument) === null || _25 === void 0 ? void 0 : _25.recommendationType) ? (_26 = runningSIPs[i].instrument) === null || _26 === void 0 ? void 0 : _26.recommendationType : null;
                            //we are using label in algo
                            let defaultReturnLabel = "SELL";
                            currSIPRow['isRecoScheme'] = this.getRecommendationTypeLabel(recommendationType, defaultReturnLabel);
                            currSIPRow['schemeRank'] = ((_27 = runningSIPs[i].instrument) === null || _27 === void 0 ? void 0 : _27.instrumentRank) ? (_28 = runningSIPs[i].instrument) === null || _28 === void 0 ? void 0 : _28.instrumentRank : 9999999;
                            //currSIPRow['freeUnitsPortion'] = 1;//SIP you can stop
                            currSIPRow['freeUnits'] = runningSIPs[i].quantity;
                            //currSIPRow['exitFreeUnits'] = runningSIPs[i].quantity;
                            //currSIPRow['taxFreeUnits'] = runningSIPs[i].quantity;
                            //SIP status fields
                            currSIPRow['endDate'] = runningSIPs[i].endDate;
                            currSIPRow['type'] = runningSIPs[i].type;
                            currSIPRow['status'] = runningSIPs[i].status;
                            currSIPRow['frequency'] = runningSIPs[i].frequency;
                            currSIPRow['monthlyConversionFactor'] = this.convertSIPFrequencytoMonthly(runningSIPs[i].frequency);
                            //txn check related
                            //get systematicMethodRow for sip
                            let currentSIPSetting = null;
                            if ((_30 = (_29 = runningSIPs[i].instrument) === null || _29 === void 0 ? void 0 : _29.mutualFundDetails) === null || _30 === void 0 ? void 0 : _30.systematicMethodSettings) {
                                let systematicMethodSettings = (_32 = (_31 = runningSIPs[i].instrument) === null || _31 === void 0 ? void 0 : _31.mutualFundDetails) === null || _32 === void 0 ? void 0 : _32.systematicMethodSettings;
                                if (systematicMethodSettings.length > 0) {
                                    currentSIPSetting = systematicMethodSettings.find((systematicMethod) => (systematicMethod.systematicMethodType === constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.sip.value &&
                                        systematicMethod.frequency === constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value));
                                }
                            }
                            if (currentSIPSetting) {
                                //we are using same object variables as in lumpsum so the main algo
                                //runs irrespective of SIP/LS with minimal changes
                                //currSIPRow['isPurchaseAllowed'] = currentSIPSetting.isSIPAllowed;
                                currSIPRow['isPurchaseAllowed'] = (_34 = (_33 = runningSIPs[i].instrument) === null || _33 === void 0 ? void 0 : _33.mutualFundDetails) === null || _34 === void 0 ? void 0 : _34.isPurchaseAllowed;
                                currSIPRow['isRedemptionAllowed'] = true; //SIPs can be stopped
                                currSIPRow['maxAdditionalInvestmentAmount'] = currentSIPSetting.minInstallmentAmount;
                                currSIPRow['maxInvestmentAmount'] = currentSIPSetting.maxInstallmentAmount;
                                currSIPRow['minAdditionalInvestmentAmount'] = currentSIPSetting.maxInstallmentAmount;
                                currSIPRow['minInvestmentAmount'] = currentSIPSetting.minInstallmentAmount;
                                currSIPRow['purchaseAmountMultiplier'] = currentSIPSetting.multiplier;
                                currSIPRow['sytematicMethodSIPSetting'] = currentSIPSetting; //put this for use in transaction setting
                            }
                            else {
                                //shouldn't be the case but block this row for action then
                                currSIPRow['isPurchaseAllowed'] = false;
                                currSIPRow['isRedemptionAllowed'] = false;
                            }
                            //@todo what we did in sufficiency
                            let currSIPMonthlyEquivalent = runningSIPs[i].amount * currSIPRow['monthlyConversionFactor'];
                            //update amount to this value as our model portfolio is monthly
                            //@todo later when other than monthly frequency comes
                            //Then also handle when finally placing transaction... convert them back to actual frequency level
                            //or if it's stop-start then anyways we start only monthly
                            currSIPRow['amount'] = currSIPMonthlyEquivalent;
                            currSIPRow['categoryGroup'] = (_35 = runningSIPs[i].instrument) === null || _35 === void 0 ? void 0 : _35.categoryGroupId;
                            totalSIPValue += currSIPMonthlyEquivalent;
                            totalSIPRows += 1;
                            sipRows.push(currSIPRow);
                        }
                    } //runningSIPs loop within Service Provider
                }
            } //serviceProvider loop
            //update holdings
            for (let i = 0; i < holdingRows.length; i++) {
                holdingRows[i]['portfolioTotalAmount'] = totalCurrentValue;
                holdingRows[i]['weight'] = holdingRows[i]['amount'] / totalCurrentValue;
            }
            //update SIPs
            for (let i = 0; i < sipRows.length; i++) {
                sipRows[i]['portfolioTotalAmount'] = totalSIPValue;
                sipRows[i]['weight'] = sipRows[i]['amount'] * sipRows[i]['monthlyConversionFactor'] / totalSIPValue;
            }
            portfolioData['goalDetails'] = inputData.goals[0];
            portfolioData['totalCurrentValue'] = totalCurrentValue;
            portfolioData['totalHoldingRows'] = totalHoldingRows;
            portfolioData['currentHoldings'] = holdingRows;
            portfolioData['totalSIPValue'] = totalSIPValue;
            portfolioData['totalSIPRows'] = totalSIPRows;
            portfolioData['currentSIPs'] = sipRows;
            portfolioData.isSuccess = true;
            return portfolioData;
        }
        catch (err) {
            portfolioData.isSuccess = false;
            //If a known error then send the message
            if (err.message) {
                portfolioData.errorMessage = err.message;
            }
            else {
                portfolioData.errorMessage = 'Something went wrong.';
            }
        }
    }
    static convertSIPFrequencytoMonthly(sipFrequency) {
        let frequencyList = constants_1.Option.GLOBALOPTIONS['SYSTEMATICMETHODFREQUENCY'];
        let freqObject = {};
        let multFactor = 0;
        Object.keys(frequencyList).forEach(function (sipFrequency, index) {
            if (frequencyList[sipFrequency].value == sipFrequency) {
                freqObject = frequencyList[sipFrequency];
            }
        });
        //getting a multiplication factor to get the net monthly SIP
        //though hardcoding from options we could have directly used the value code
        //but this shall make the code more readable
        //only doing possible frequencies initially
        switch (freqObject.label) {
            case 'Daily':
                multFactor = 30;
                break;
            case 'Weekly':
                multFactor = 4;
                break;
            case 'Monthly':
                multFactor = 1;
                break;
            case 'Quarterly':
                multFactor = 1 / 3;
                break;
            default:
                multFactor = 1;
        }
        return multFactor;
    }
    static createRebalanceCartItems(goalInformation, portfolioData, isLumpsum, returnCartItems) {
        //let returnCartItems: Array<Partial<CartItem>> = [];
        const methodName = 'createRebalanceCartItems';
        if (!portfolioData || portfolioData.length == 0) {
            return returnCartItems;
        }
        logging_utils_1.LoggingUtils.info(`goal-utils-Creating cart items for isLumpsum: ${isLumpsum}`, methodName);
        for (let i = 0; i < portfolioData.length; i++) {
            logging_utils_1.LoggingUtils.info(`goal-utils-portfolioData: ${JSON.stringify(portfolioData)}`, methodName);
            //skip if initial and final weight is zero
            if ((portfolioData[i].weightinIteration == 0) && (portfolioData[i].initialWeight == 0)) {
                continue;
            }
            //Sells
            if (Math.abs(portfolioData[i].sellProcessedAmount) > 0) {
                let currCartSellItem = {
                    cartId: 123,
                    totalAmount: Math.abs(portfolioData[i].sellProcessedAmount),
                    instrumentId: portfolioData[i].instrumentId,
                    serviceProviderAccountId: portfolioData[i].serviceProviderAccountId,
                    goalId: goalInformation.goalId,
                    transactionTypeId: 2,
                    modeOfTransaction: 2,
                    transactionSubType: isLumpsum ? constants_1.Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].normal.value : constants_1.Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].systematic.value,
                    isAllUnits: isLumpsum ? false : true,
                    isStopSip: isLumpsum ? false : true,
                    isRebalancingItem: true,
                    lineNumber: returnCartItems.length + 1,
                    //exras
                    folioNumber: portfolioData[i].folioNumber,
                    sipLumpsum: isLumpsum ? 'Lumpsum' : 'SIP',
                    buySell: isLumpsum ? 'Sell' : 'Stop SIP',
                    instrumentName: portfolioData[i].instrumentName,
                    isHeldAway: portfolioData[i].isHeldAway ? portfolioData[i].isHeldAway : false
                };
                //add SIP related items
                if (!isLumpsum) {
                    //not needed actually for selling but required in cart validation in cart facade
                    currCartSellItem['frequency'] = constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value;
                    //needed to stop SIP
                    currCartSellItem['systematicMethodId'] = portfolioData[i].uniqueId;
                }
                returnCartItems.push(currCartSellItem);
            }
            //Buys
            if (Math.abs(portfolioData[i].buyProcessedAmount) > 0) {
                let currCartBuyItem = {
                    cartId: 123,
                    totalAmount: Math.abs(portfolioData[i].buyProcessedAmount),
                    instrumentId: portfolioData[i].instrumentId,
                    serviceProviderAccountId: portfolioData[i].serviceProviderAccountId,
                    goalId: goalInformation.goalId,
                    transactionTypeId: 1,
                    modeOfTransaction: 1,
                    transactionSubType: isLumpsum ? constants_1.Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].normal.value : constants_1.Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].systematic.value,
                    isAllUnits: false,
                    isStopSip: false,
                    isRebalancingItem: true,
                    lineNumber: returnCartItems.length + 1,
                    //exras
                    folioNumber: portfolioData[i].folioNumber,
                    sipLumpsum: isLumpsum ? 'Lumpsum' : 'SIP',
                    buySell: isLumpsum ? 'Buy' : 'Start SIP',
                    instrumentName: portfolioData[i].instrumentName,
                    isHeldAway: portfolioData[i].isHeldAway ? portfolioData[i].isHeldAway : false
                };
                //add SIP related items
                if (!isLumpsum) {
                    currCartBuyItem['frequency'] = constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value;
                    //if sytematicMethodSIPSetting exists then put dates/installments etc.
                    if (portfolioData[i].sytematicMethodSIPSetting) {
                        let sipDetails = getSIPDetailsFromSettingData(portfolioData[i].sytematicMethodSIPSetting, goalInformation.endDate);
                        if (sipDetails && sipDetails.isSuccess) {
                            currCartBuyItem['startDateForSip'] = sipDetails.startDateForSip;
                            currCartBuyItem['endDateForSip'] = sipDetails.endDateForSip;
                            currCartBuyItem['frequencyDay'] = sipDetails.frequencyDay;
                            currCartBuyItem['transactionCount'] = sipDetails.transactionCount;
                        }
                    }
                    //@todo: add startDateForSip,endDateForSip,frequencyDay,transactionCount
                }
                returnCartItems.push(currCartBuyItem);
            }
            //Sells and Buys placed one after another becase a STOP SIP and startSIP can be in same scheme
            //but let's write a handler note if this happens in SIP
            if (isLumpsum && Math.abs(portfolioData[i].sellProcessedAmount) > 0 && Math.abs(portfolioData[i].buyProcessedAmount) > 0) {
                logging_utils_1.LoggingUtils.error('PRODUCT-GoalUtils-createRebalanceCartItems: Buy and Sell both in same scheme ... oopsie... check for goalId ' + goalInformation.goalId);
            }
        }
        logging_utils_1.LoggingUtils.info(`goal-utils-Done cart items for isLumpsum: ${isLumpsum} ---- ${JSON.stringify(returnCartItems)}`, methodName);
        return returnCartItems;
        function getSIPDetailsFromSettingData(systematicMethodSetting, goalEndDate) {
            let returnObject = {};
            try {
                let todayDate = new Date();
                let frequencyDay = null;
                let todayDateValue = new Date().getDate();
                let allowedDates = systematicMethodSetting.dates;
                let allowedDatesArray = allowedDates === null || allowedDates === void 0 ? void 0 : allowedDates.split(',');
                let addMonth = 0;
                if (allowedDatesArray && allowedDatesArray.length > 0) {
                    //start date should be suggested 7 days after today
                    let earliestDatevalue = todayDateValue + 7;
                    //go to next month if current date is after 21st
                    if (todayDateValue > 21) {
                        earliestDatevalue = 1;
                        addMonth = 1;
                    }
                    let frequencyDayFoundValue = allowedDatesArray.find((dateValue) => parseInt(dateValue) >= earliestDatevalue);
                    if (frequencyDayFoundValue) {
                        frequencyDay = parseInt(frequencyDayFoundValue);
                    }
                }
                //if startDate not found then put 1st as default date
                if (!frequencyDay) {
                    frequencyDay = 1;
                    addMonth = 1;
                    logging_utils_1.LoggingUtils.error('PRODUCT-GOALUTILS-getSIPDetailsFromSettingData: SIP frequencyDay could not be fetched for mutualFundDetailsId ' + systematicMethodSetting.mutualFundDetailsId);
                }
                let startDateForSip = (0, moment_timezone_1.default)(todayDate.setDate(frequencyDay)).add(addMonth, 'month').toDate();
                let goalEndDateValue = goalEndDate.getDate();
                //if goalEnds before SIP day in that month then SIP end date would be previous month
                if (goalEndDateValue <= frequencyDay) {
                    addMonth = -1;
                }
                else {
                    addMonth = 0;
                }
                let endDateForSip = (0, moment_timezone_1.default)(goalEndDate.setDate(frequencyDay)).add(addMonth, 'month').toDate();
                //SS -  changes start
                const startDateMoment = (0, moment_timezone_1.default)(startDateForSip).startOf('day');
                const endDateMoment = (0, moment_timezone_1.default)(endDateForSip).startOf('day');
                let transactionCount = endDateMoment.diff(startDateMoment, 'month') + 1;
                //SS -  changes end
                returnObject = {
                    isSuccess: true,
                    startDateForSip: startDateForSip,
                    endDateForSip: endDateForSip,
                    frequencyDay: frequencyDay,
                    transactionCount: transactionCount
                };
                return returnObject;
            }
            catch (err) {
                logging_utils_1.LoggingUtils.error(err);
                logging_utils_1.LoggingUtils.error('PRODUCT-GOALUTILS-getSIPDetailsFromSettingData: SIP settings could not be created for mutualFundDetailsId ' + systematicMethodSetting.mutualFundDetailsId);
                returnObject = {
                    isSuccess: false
                };
                return returnObject;
            }
        }
    }
}
exports.GoalUtils = GoalUtils;
//# sourceMappingURL=goal-utils.js.map