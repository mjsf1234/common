import { Console } from "console";
import { Option, StaticData } from "../constants";
import {ModelPortfolioInstrument, ServiceProviderAccount, Account, SystematicMethodSetting, CartItem, SystematicMethod } from "../models";
import { LoggingUtils } from "./logging-utils";
import moment from 'moment-timezone';
const math = require('mathjs');

export abstract class GoalUtils {

  public static checkRebalancingNeedForGoal(goalInfo: any): any {
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


      let sufficiencyCheckObject: any = {};

      if (isUnclassified){
        //need not do sufficiency check, so we shall pass this as success
        sufficiencyCheckObject["success"] = true;
      } else {
        //do sufficiency check for other goal types
        sufficiencyCheckObject = this.getGoalInvestmentNeeded(targetAmount, yearsToGoal, riskProfileId, currentHolding, currentSIP);
        if (!sufficiencyCheckObject || !sufficiencyCheckObject.success){
          goalInfo.alertInfo.checkSuccess = false;
        } else {
          goalInfo.alertInfo.sufficiencyData = sufficiencyCheckObject;

          //set alerts for shortfall
          //alerts are by default false in the object sent from calling function
          if (sufficiencyCheckObject.goalReachWithCurrentInvestment >= 0){
            let shortFallPercent = 1 - sufficiencyCheckObject.goalReachWithCurrentInvestment;

            if (shortFallPercent > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.goalShortfallTolerance){
              goalInfo.alertInfo.shortfallAlert = true;
            }
            if (shortFallPercent > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.goalShortfallToleranceUrgent){
              goalInfo.alertInfo.shortfallUrgentAlert = true;
            }
          }
        }
      }

      //get deviations for LS
      if (currentHolding > 0){
        let portfolioCategoryExposures = [];
        portfolioCategoryExposures = this.flattenToArray(goalInfo.categories, 'category', 'weight');

        let isLumpsum = true;

        let assetCategoryDeviations = this.calculateDeviations(portfolioCategoryExposures, goalInfo.tenureMonths, currentHolding, riskProfileId, isLumpsum);
        let topAssetClassDeviation = assetCategoryDeviations[0];
        let topCategoryGroupDeviation = assetCategoryDeviations[1];

        LoggingUtils.info(`goal-utils-LS Deviations: ${JSON.stringify(assetCategoryDeviations)}`, methodName);

        if ((Math.abs(topAssetClassDeviation) > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationTolerance) ||
          (Math.abs(topCategoryGroupDeviation) > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationTolerance)){
          goalInfo.alertInfo.deviationAlert = true;
        }
        if ((Math.abs(topAssetClassDeviation) > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationToleranceUrgent) ||
          (Math.abs(topCategoryGroupDeviation) > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationToleranceUrgent)){
          goalInfo.alertInfo.deviationUrgentAlert = true;
        }
      }

      //get deviations for SIP
      if (currentSIP > 0){
        let portfolioCategoryExposures = [];
        portfolioCategoryExposures = this.flattenToArray(goalInfo.systematicMethods.categories, 'category', 'weight');

        let isLumpsum = false;

        let assetCategoryDeviations = this.calculateDeviations(portfolioCategoryExposures, goalInfo.tenureMonths, currentSIP, riskProfileId, isLumpsum);
        let topAssetClassDeviation = assetCategoryDeviations[0];
        let topCategoryGroupDeviation = assetCategoryDeviations[1];

        LoggingUtils.info(`goal-utils-SIP Deviations: ${JSON.stringify(assetCategoryDeviations)}`, methodName);

        if ((Math.abs(topAssetClassDeviation) > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationTolerance) ||
          (Math.abs(topCategoryGroupDeviation) > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationTolerance)){
          goalInfo.alertInfo.deviationAlertSIP = true;
        }
        if ((Math.abs(topAssetClassDeviation) > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationToleranceUrgent) ||
          (Math.abs(topCategoryGroupDeviation) > Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationToleranceUrgent)){
          goalInfo.alertInfo.deviationUrgentAlertSIP = true;
        }
      }

      //set alert flag if something found
      if (
        //main alerts
        (goalInfo.alertInfo.deviationAlert || goalInfo.alertInfo.shortfallAlert || goalInfo.alertInfo.deviationUrgentAlertSIP)
        ||
        //urgent alerts if alertForUrgent is true in settings
        ((goalInfo.alertInfo.deviationUrgentAlert || goalInfo.alertInfo.shortfallUrgentAlert || goalInfo.alertInfo.deviationUrgentAlertSIP) && Option.GLOBALOPTIONS.REBALANCINGSETTINGS.alertForUrgent)
      ){
        goalInfo.alertActivated = true;
      }

      //set process check flag to success and send back as process has been successful
      goalInfo.alertInfo.checkSuccess = true;

      return goalInfo;

    }
    catch (error){
      //set check flag to false
      goalInfo.alertInfo.checkSuccess = false;
      return goalInfo;
    }
  }

  public static calculateDeviations(portfolioCategoryExposures: any, monthsToGoal: number, totalAmount: number, riskProfileId: number, isLumpsum: boolean): any {
    let modelPortfolioAllocations = this.setModelPortfolio(monthsToGoal, totalAmount, riskProfileId, isLumpsum);

    let assetClasses = Option.GLOBALOPTIONS.ASSETCLASSES.data;
    let assetClassesNames = Option.GLOBALOPTIONS.ASSETCLASSES.name;
    let categories = Option.GLOBALOPTIONS.CATEGORIES.data;
    let groupCategories = Option.GLOBALOPTIONS.GROUPCATEGORIES.data;
    let groupCategoriesNames = Option.GLOBALOPTIONS.GROUPCATEGORIES.name;
    let categoryAssetExposure = Option.GLOBALOPTIONS.CATEGORYASSETEXPOSURE.data;
    let categoryCategoryGroupExposure = {};
    categoryCategoryGroupExposure = this.createCategoryCrossExpMatrix();

    for (let i=0; i < portfolioCategoryExposures.length; i++){
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

  public static sortAbsoluteValues(objectArray: any, sortProperty: string, order: string): any{
    if (order == "ascending"){
      objectArray.sort((a: any, b: any)=> (Math.abs(a[sortProperty]) > Math.abs(b[sortProperty]) ? 1 : -1));
    } else {
  	  objectArray.sort((a: any, b: any)=> (Math.abs(a[sortProperty]) <= Math.abs(b[sortProperty]) ? 1 : -1));
    }
    return objectArray;
  }

  public static getAggregateDeviations(masterArray: any, masterArrayNames: any, totalExposureArray: any, modelPortfolioLevel: string, outputKeyName: string, outputKeyValueName: string, modelPortfolioAllocations: any): any {
    //initialize array
    let outputTargetArray = [];
    for (let j=0; j<masterArray.length; j++){
      let currMasterValue = masterArray[j];
      let currMasterValueName = masterArrayNames[j];
      let currExposure = totalExposureArray[j];
      let modelExposure = modelPortfolioAllocations[modelPortfolioLevel][currMasterValue];

      let deviation = modelExposure - currExposure;//overweight in portfolio shall give negative => sell
      let tempDeviationObject: any = {};

      tempDeviationObject[outputKeyName] = currMasterValue;
      tempDeviationObject[outputKeyName + 'Name'] = currMasterValueName;
      tempDeviationObject[outputKeyValueName] = deviation;

      outputTargetArray.push(tempDeviationObject);
    }

    return outputTargetArray;
  }


  public static flattenToArray (inputDataObject: any, assetCategoryKey: string, valueKey: string): any {

    let mappedDataArray = [];
    for (const key in inputDataObject) {
      let mappedData: any = {
        'weight': inputDataObject[key][valueKey]
      };
      mappedData[assetCategoryKey]= key;
      mappedDataArray.push(mappedData);
    }

    return mappedDataArray;
  }
  //calculates investments for goals and returns goal sufficiency
  public static getGoalInvestmentNeeded(targetAmount: number, yearsToGoal: number, riskProfileId: number, initialInvestment: number = 0, initialSIP: number = 0): any {
    let outputObject: any = {
      success: false
    };

    let returnArray = this.getReturnArray(yearsToGoal, riskProfileId);

    if (returnArray.length <= 0){
      LoggingUtils.error('PRODUCT-GOALUTILS-getGoalInvestmentNeeded: Future value of Lumpsum/SIP data not found for yearsToGoal|riskProfile = ' + yearsToGoal + '|' + riskProfileId);
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
    let FVofInitialInvestment = Math.round(fvLumpsum10k * initialInvestment /(10000 * 100)) * 100;
    let FVofInitialSIP = Math.round(fvSIP1k * initialSIP /(1000 * 100)) * 100;

    let netTargetAmount = Math.max(0, targetAmount - FVofInitialInvestment - FVofInitialSIP);
    //console.log(netTargetAmount);

    //calculate amount needed
    let lumpsumNeeded = Math.round(10000 * netTargetAmount / (fvLumpsum10k * 100)) * 100;
    let SIPNeeded = Math.round(1000 * netTargetAmount / (fvSIP1k * 100)) * 100;

    let goalReachWithCurrentInvestment = (FVofInitialInvestment + FVofInitialSIP)/targetAmount;
    //console.log("goalReach % = " , Math.round(goalReachWithCurrentInvestment * 10000)/100 , "% **** Lumpsum/SIP needed = ", lumpsumNeeded, " / ", SIPNeeded);

    outputObject["success"] = true;
    outputObject["lumpsumNeeded"]=lumpsumNeeded;
    outputObject["SIPNeeded"]=SIPNeeded;
    outputObject["goalReachWithCurrentInvestment"]=goalReachWithCurrentInvestment;
    outputObject["valueAtMaturity"]=(FVofInitialInvestment + FVofInitialSIP);
    outputObject["fvLumpsum10k"]=fvLumpsum10k;
    outputObject["fvSIP1k"]=fvSIP1k;

    return outputObject;
  }

  public static  getReturnArray(yearsToGoal: number, riskProfileId: number): any {
    const methodName = 'getReturnArray';
    let monthsToGoal = Math.round(yearsToGoal * 12);

    let returnArray: any = [];


    let goalReturnData = StaticData.REBALANCINGDATA.MODELPORTFOLIO.goalReturnData;

    for (let i=0; i<goalReturnData.length; i++){
      if ((goalReturnData[i]["tenure_months"] == monthsToGoal) && (goalReturnData[i]["fk_id_risk_profile"] == riskProfileId)){
          //console.log(goalReturnData[i]);
          returnArray = goalReturnData[i]
        return returnArray;
      }
    }
    LoggingUtils.info(`goal-utils-Return array not found: ${monthsToGoal} | ${riskProfileId}`, methodName);
    //iff not returned till now means error
    LoggingUtils.error('goalUtils-getReturnArray, Return array not found for monthsToGoal|riskProfileId' + monthsToGoal + '|' + riskProfileId);
    return returnArray;
  }

  public static setModelPortfolio(monthsToGoal: number, totalAmount: number, riskProfileId: number, isLumpsum: boolean): any {

    let modelPortfolio = StaticData.REBALANCINGDATA.MODELPORTFOLIO;

    //get riskProfile string from id as mini/full portfolios are stored like that
    //@to-do change -- done
    //let riskProfileMaster = StaticData.REBALANCINGDATA.RISKPROFILE.names; //['DEFENSIVE','CONSERVATIVE','BALANCED','GROWTH','HIGHGROWTH'];
    //let riskProfileIds = StaticData.REBALANCINGDATA.RISKPROFILE.ids; //[1,2,3,4,5];

    //let riskProfileId = riskProfileIds[riskProfileMaster.indexOf(riskProfile)];

    //get which modelPortfolioAmountCapping to use
    let modePortfolioCapping: any = Option.GLOBALOPTIONS['MODELPORTFOLIOAMOUNTCAPPING'];
    let sipModelPortfolioAmountCappingId = 0;
    let lumpsumModelPortfolioAmountCappingId = 0;

    let sipAmount = isLumpsum ? 0 : totalAmount;
    let lumpsumAmount = isLumpsum ? totalAmount : 0;
    let cappingId: number;


    Object.keys(modePortfolioCapping).forEach(function (capObject, index) {
      if (modePortfolioCapping[capObject].investmentType == Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value) {
        if ((sipAmount >= modePortfolioCapping[capObject].minAmount) && (sipAmount <= modePortfolioCapping[capObject].maxAmount)) {
          sipModelPortfolioAmountCappingId = modePortfolioCapping[capObject].amountCappingId;
        }
      }

      if (modePortfolioCapping[capObject].investmentType == Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value) {
        if ((lumpsumAmount >= modePortfolioCapping[capObject].minAmount) && (lumpsumAmount <= modePortfolioCapping[capObject].maxAmount)) {
          lumpsumModelPortfolioAmountCappingId = modePortfolioCapping[capObject].amountCappingId;
        }
      }
    });

    if (isLumpsum){
      cappingId = lumpsumModelPortfolioAmountCappingId;
    } else {
      cappingId = sipModelPortfolioAmountCappingId;
    }

    //get full or mini name for portfolio
    let modelPortfolioMiniFullMapping = Option.GLOBALOPTIONS.MODELPORTFOLIOCAPPINGMAPPING;
    let mpAmountSet = 'MINI';
    if (modelPortfolioMiniFullMapping.FULL.indexOf(cappingId) > -1){
      mpAmountSet = 'FULL';
    }

    let mpArraySet = modelPortfolio[mpAmountSet][riskProfileId];
    //console.log(mpArraySet);

    let mpArray = [];
    for (let i=0; i < mpArraySet.length; i++){
      if ((monthsToGoal > mpArraySet[i]["minTenureMonths"] - 1) && (monthsToGoal < mpArraySet[i]["maxTenureMonths"] + 1)){
        mpArray = mpArraySet[i].model;
        //console.log(mpArraySet[i]);
      }
    }

    let assetClasses = Option.GLOBALOPTIONS.ASSETCLASSES.data;
    let categories = Option.GLOBALOPTIONS.CATEGORIES.data;
    let groupCategories = Option.GLOBALOPTIONS.GROUPCATEGORIES.data;
    let categoryAssetExposure = Option.GLOBALOPTIONS.CATEGORYASSETEXPOSURE.data;
    let categoryCategoryGroupExposure = {};
    categoryCategoryGroupExposure = this.createCategoryCrossExpMatrix();


    for (let i=0; i<mpArray.length; i++){
      mpArray[i]["initialNetAssetWeights"] = this.createWtArray(assetClasses);
      mpArray[i]["initialNetCategoryWeights"] = this.createWtArray(categories);
      mpArray[i]["initialGroupCategoryWeights"] = this.createWtArray(groupCategories);
    }
    let mpAssetLevel = this.sumProduct(mpArray, "weight", assetClasses, categoryAssetExposure, "category", "initialNetAssetWeights");
    let mpCGLevel = this.sumProduct(mpArray, "weight", groupCategories, categoryCategoryGroupExposure, "category", "initialGroupCategoryWeights");


    let mpAC: any = {};
    let mpCG: any = {};
    for (let i = 0; i < assetClasses.length; i++){
      mpAC[assetClasses[i]] = mpAssetLevel[i];
    }
    for (let i = 0; i < groupCategories.length; i++){
      mpCG[groupCategories[i]] = mpCGLevel[i];
    }

    let modelPortfolioAllocations: any = {};
    modelPortfolioAllocations["categoryGroupLevel"] = mpCG;
    modelPortfolioAllocations["assetClassLevel"] = mpAC;
    modelPortfolioAllocations["miniFullOption"] = mpAmountSet;

    //console.log('model Portfolios: ', modelPortfolioAllocations);

    return modelPortfolioAllocations;

  }

  //creates exposure of one category to another... required for multi-asset/hybrid categories
  public static createCategoryCrossExpMatrix() : any {

    let categories = Option.GLOBALOPTIONS.CATEGORIES.data;
    let assetClasses = Option.GLOBALOPTIONS.ASSETCLASSES.data;
    let groupCategories = Option.GLOBALOPTIONS.GROUPCATEGORIES.data;
    let categoryAssetExposure = Option.GLOBALOPTIONS.CATEGORYASSETEXPOSURE.data;
    let assetToDefaultCategories = Option.GLOBALOPTIONS.ASSETTODEFAULTCATEGORIES.data;
    let categoryGroupCategoryMapping = Option.GLOBALOPTIONS.CATEGORYGROUPCATEGORYMAPPING.data;

    let categoryCrossExposure: any = {};
    let categoryCategoryGroupExposure: any = {};

    //loop through each category
    for (let i=0; i<categories.length; i++){
      let currCategory = categories[i];//C1
      let tempCurrCategory = currCategory;
      //console.log(currCategory);

      let currCategoryExp = categoryAssetExposure[currCategory];//exposure to asset classes of current category
      //if (currCategory == 12){console.log(currCategory, currCategoryExp);}

      //output matrices
      let categoryMatrixRow = this.createWtArray(categories);
      let categoryGroupMatrixRow = this.createWtArray(groupCategories);

      //assign to asset classes and category groups
      for (let j=0; j<assetClasses.length; j++){
        //if a category is hybrid, exposure to asset class shall be < 1
        if (currCategoryExp[j] < 1){
          //this is hybrid
          //get default category for the current asset class
          let defaultCategoryforAssetClass = assetToDefaultCategories[j];
          tempCurrCategory = defaultCategoryforAssetClass;
          categoryMatrixRow[categories.indexOf(defaultCategoryforAssetClass)] = currCategoryExp[j];
          /*if (currCategory == 12){
            console.log('tempCurrCategory - index: ', tempCurrCategory, ' - ', categories.indexOf(defaultCategoryforAssetClass));
            console.log(currCategoryExp[j]);
          }*/
        } else {
          //this is purist
          categoryMatrixRow[i] = currCategoryExp[j];
          tempCurrCategory = currCategory;
        }

        //let currCategoryGroupCategoryMapping = categoryGroupCategoryMapping[tempCurrCategory];
        for (let k=0; k<groupCategories.length; k++){
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

  public static sumProduct(inputArray: any, inputArrayProperty: string, doForAssetCategoryArray: any, multiplierArray: any, joinProperty: string, outputProperty: string) : any {
    let sumTotal = this.createWtArray(doForAssetCategoryArray);

    for (let i=0; i<inputArray.length; i++){

      let currRow = inputArray[i];
      let outputArray = currRow[outputProperty];
      let currJoinValue = currRow[joinProperty];
      let currRowWeight = currRow[inputArrayProperty];

      //loop through each asset/category to create net exposure
      for (let j = 0; j < sumTotal.length; j++){
        outputArray[j] = currRowWeight * multiplierArray[currJoinValue][j];
        sumTotal[j] += outputArray[j];
      }
    }

    return sumTotal;
  }

  public static createWtArray(masterArray: any) : any {
    let initArray = new Array(masterArray.length); for (let i=0; i<masterArray.length; ++i) initArray[i] = 0;
    return initArray;
  }

  public static returnAssetFromCategory(categoryWeightArray: any, weightField: string = "weight", categoryField: string = "category") : any {
    
    let mpArray = [];
    mpArray = categoryWeightArray;

    LoggingUtils.info(`in returnAssetFromCategory: ${JSON.stringify(mpArray)}`, 'returnAssetFromCategory');

    let assetClasses = Option.GLOBALOPTIONS.ASSETCLASSES.data;
    let assetClassNames = Option.GLOBALOPTIONS.ASSETCLASSES.name;
    let categoryAssetExposure = Option.GLOBALOPTIONS.CATEGORYASSETEXPOSURE.data;

    for (let i=0; i<mpArray.length; i++){
      mpArray[i]["initialNetAssetWeights"] = this.createWtArray(assetClasses);
    }

    LoggingUtils.info(`initialized initialNetAssetWeights. going for sumproduct`, 'returnAssetFromCategory');

    let mpAssetLevel = this.sumProduct(mpArray, weightField, assetClasses, categoryAssetExposure, categoryField, "initialNetAssetWeights");

    LoggingUtils.info(`done sumproduct mpAssetLevel: ${mpAssetLevel}`, 'returnAssetFromCategory');

    let returnAssetArray = [];
    for (let i = 0; i < assetClasses.length; i++){
      let mpAC: any = {};

      mpAC["id"] = assetClasses[i];
      mpAC["name"] = assetClassNames[i];
      mpAC["weight"] = mpAssetLevel[i];

      returnAssetArray.push(mpAC);
    }

    return returnAssetArray;
  }

      public static alignModelPortfolio(inputData: Array<ModelPortfolioInstrument>, lumpsumAmount: number, sipAmount: number, holdingData: Partial<Account> | null = {}) : any {
        let modelData: any = {
          "isSuccess": false,
          "errorMessage":'',
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
              "investmentType": Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value,
              "investmentTypeLabel": Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.label,
              "totalCount": 0,
              "instruments": {}
            },
            "lumpsum": {
              "investmentType": Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value,
              "investmentTypeLabel": Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.label,
              "totalCount": 0,
              "instruments": {}
            }
          }
        };

        try {

          let assetSIPArray: Array<any> = [];
          let categorySIPArray: Array<any> = [];
          let assetLumpsumArray: Array<any> = [];
          let categoryLumpsumArray: Array<any> = [];
          let assetSIPArrayfromCategory: Array<any> = [];
          let assetLumpsumArrayfromCategory: Array<any> = [];

          //let modelPortfolioRows = inputData.riskProfile.modelPortfolioInstruments;
          let modelPortfolioRows = inputData;

          //get which modelPortfolioAmountCapping to use
          let modePortfolioCapping: any = Option.GLOBALOPTIONS['MODELPORTFOLIOAMOUNTCAPPING'];
          let sipModelPortfolioAmountCappingId = 0;
          let lumpsumModelPortfolioAmountCappingId = 0;
          let modelLumpsumRows: Array<any> = [];
          let modelSIPRows: Array<any> = [];
          let lumpsumRowCount: number = 0;
          let sipRowCount: number = 0;

          Object.keys(modePortfolioCapping).forEach(function (capObject, index) {
            if (modePortfolioCapping[capObject].investmentType == Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value) {
              if ((sipAmount >= modePortfolioCapping[capObject].minAmount) && (sipAmount <= modePortfolioCapping[capObject].maxAmount)) {
                sipModelPortfolioAmountCappingId = modePortfolioCapping[capObject].amountCappingId;
              }
            }

            if (modePortfolioCapping[capObject].investmentType == Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value) {
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
          let serviceProviderAccounts: Array<ServiceProviderAccount> = [];
          if (holdingData?.serviceProviderAccounts != undefined && holdingData?.serviceProviderAccounts.length > 0) {
            serviceProviderAccounts = holdingData.serviceProviderAccounts
          }

          let serviceProviderList: any = {};

          if (holdingData && holdingData.serviceProviderAccounts != undefined && holdingData.serviceProviderAccounts?.length > 0) {
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
                serviceProviderList[serviceProviderAMCId].push(
                  {
                    'serviceProviderAccountId': serviceProviderAccountId,
                    'folioNumber': folioNumber,
                    'serviceProviderAMCId': serviceProviderAMCId,
                    'isHeldAway': isHeldAway
                  }
                );
              } else {
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

            let currModelRow: ModelPortfolioInstrument = modelPortfolioRows[i];
            let investmentType: number;
            //check if this is the row with required amount capping
            if (((currModelRow.investmentType == Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value) &&
              (currModelRow.modelPortfolioAmountCappingId == sipModelPortfolioAmountCappingId)) ||
              ((currModelRow.investmentType == Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value) &&
                (currModelRow.modelPortfolioAmountCappingId == lumpsumModelPortfolioAmountCappingId))) {
              //process this row as the investmentType matches
              //and amountCaping bucket is right
            } else {
              continue;
            }

            let dataRow: any = {};

            let investmentTypeLabel: string = "";
            if (currModelRow?.investmentType != undefined) {
              investmentType = currModelRow.investmentType;
            } else {
              continue;
            }

            //SS-27SEP22-TAX
            let taxAssetName: string = currModelRow.instrument?.taxAsset?.name;
            let assetName: string = currModelRow.instrument?.asset?.name;
            let categoryName: string = currModelRow.instrument?.instrumentCategory?.name;

            dataRow['instrumentId'] = currModelRow.instrumentId;
            dataRow['name'] = currModelRow.instrument?.name;
            dataRow['amcId'] = currModelRow.instrument?.serviceProviderId;
            dataRow['weight'] = currModelRow.weightage;

            //SS-27SEP22-TAX
            //making this as taxAsset
            //passing original asset separately
            //dataRow['assetClass'] = currModelRow.instrument?.assetId;
            //dataRow['assetName'] = assetName;
            dataRow['assetClass'] = currModelRow.instrument?.taxAssetId ? currModelRow.instrument?.taxAssetId : currModelRow.instrument?.assetId;
            dataRow['assetName'] = taxAssetName ? taxAssetName : assetName;            
            dataRow['actualAssetClass'] = currModelRow.instrument?.assetId;
            dataRow['actualAssetName'] =  assetName;            
            
            dataRow['category'] = currModelRow.instrument?.instrumentCategoryId;
            dataRow['categoryname'] = categoryName;
            dataRow['categoryGroup'] = currModelRow.instrument?.categoryGroupId;
            dataRow['isRecoCat'] = 1;//default... UPDATE later
            dataRow['isRecoScheme'] = currModelRow.instrument?.recommendationType;
            dataRow['schemeRank'] = currModelRow.instrument?.instrumentRank;

            //add ServiceProvider accounts
            dataRow['serviceProviderList'] = [];
            if (serviceProviderList.hasOwnProperty(currModelRow.instrument?.serviceProviderId)) {
              dataRow['serviceProviderList'] = serviceProviderList[currModelRow.instrument?.serviceProviderId];
            }

            //txn related
            if (currModelRow.investmentType == Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.value) {
              investmentTypeLabel = Option.GLOBALOPTIONS['INVESTMENTTYPE'].sip.label;
              dataRow['isSIPAllowed'] = currModelRow.instrument?.mutualFundDetails?.isSIPAllowed;

              //min max SIP amounts shall come from systematic settings
              //get the systematic method data if it exists
              let currentSIPSetting: SystematicMethodSetting | null = null;
              if (currModelRow.instrument?.mutualFundDetails?.systematicMethodSettings){
                let systematicMethodSettings = currModelRow.instrument?.mutualFundDetails?.systematicMethodSettings;
                if (systematicMethodSettings.length > 0){
                  //filter and get monthly SIPs as we shall recommend monthly only
                  currentSIPSetting = systematicMethodSettings.find((systematicMethod: SystematicMethodSetting) =>
                    (systematicMethod.systematicMethodType === Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.sip.value &&
                    systematicMethod.frequency === Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value));
                }
              }
              if (!currentSIPSetting){
                LoggingUtils.error('PRODUCT-GOALUTILS-alignModelPortfolio: SIP systematic setting not found for recommended scheme id - ' + currModelRow.instrumentId);
              }

              dataRow['minSIPAmount'] = currentSIPSetting?.minInstallmentAmount;
              dataRow['maxSIPAmount'] = currentSIPSetting?.maxInstallmentAmount;
              dataRow['currentSIPSetting'] = currentSIPSetting;

              dataRow['investmentTypeId'] = investmentType;
              dataRow['investmentTypeLabel'] = investmentTypeLabel;

              //put systermaticMethodSettings data for SIP
              dataRow['systematicMethodSettings'] = currModelRow.instrument?.mutualFundDetails?.systematicMethodSettings;
              //console.log(currModelRow);

              modelSIPRows.push(dataRow);
              sipRowCount += 1;

              //check if asset exists in the respective investment type
              
              //let foundObject = assetSIPArray.find(asset => asset.id === currModelRow.instrument?.assetId);
              let foundObject = assetSIPArray.find(asset => asset.id === dataRow['assetClass']);
              if (foundObject) {
                foundObject["totalCount"] = foundObject["totalCount"] + 1;
                foundObject["weight"] = foundObject["weight"] + currModelRow.weightage;
              } else {
                //create new asset object
                assetSIPArray.push({
                  "id": dataRow['assetClass'] ? dataRow['assetClass'] : currModelRow.instrument?.assetId,
                  "totalCount": 1,
                  "name": dataRow['assetName'],
                  "weight": currModelRow.weightage
                });
              }
              //do for category object
              foundObject = categorySIPArray.find(category => category.id === currModelRow.instrument?.instrumentCategoryId);
              if (foundObject) {
                foundObject["totalCount"] = foundObject["totalCount"] + 1;
                foundObject["weight"] = foundObject["weight"] + currModelRow.weightage;
              } else {
                //create new asset object
                categorySIPArray.push({
                  "id": currModelRow.instrument?.instrumentCategoryId,
                  "totalCount": 1,
                  "name": categoryName,
                  "weight": currModelRow.weightage
                });
              }
            }

            if (currModelRow.investmentType == Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.value) {
              investmentTypeLabel = Option.GLOBALOPTIONS['INVESTMENTTYPE'].lumpsum.label;
              dataRow['isPurchaseAllowed'] = currModelRow.instrument?.mutualFundDetails?.isPurchaseAllowed;
              dataRow['isRedemptionAllowed'] = currModelRow.instrument?.mutualFundDetails?.isRedemptionAllowed;
              dataRow['isSwitchAllowed'] = currModelRow.instrument?.mutualFundDetails?.isSwitchAllowed;
              dataRow['maxAdditionalInvestmentAmount'] = currModelRow.instrument?.mutualFundDetails?.maxAdditionalInvestmentAmount;
              dataRow['maxInvestmentAmount'] = currModelRow.instrument?.mutualFundDetails?.maxInvestmentAmount;
              dataRow['maxRedemptionAmount'] = currModelRow.instrument?.mutualFundDetails?.maxRedemptionAmount;
              dataRow['maxRedemptionQuantity'] = currModelRow.instrument?.mutualFundDetails?.maxRedemptionQuantity;
              dataRow['minAdditionalInvestmentAmount'] = currModelRow.instrument?.mutualFundDetails?.minAdditionalInvestmentAmount;
              dataRow['minInvestmentAmount'] = currModelRow.instrument?.mutualFundDetails?.minInvestmentAmount;
              dataRow['minRedemptionAmount'] = currModelRow.instrument?.mutualFundDetails?.minRedemptionAmount;
              dataRow['minRedemptionQuantity'] = currModelRow.instrument?.mutualFundDetails?.minRedemptionQuantity;
              dataRow['purchaseAmountMultiplier'] = currModelRow.instrument?.mutualFundDetails?.purchaseAmountMultiplier;
              dataRow['redemptionAmountMultiplier'] = currModelRow.instrument?.mutualFundDetails?.redemptionAmountMultiplier;
              dataRow['redemptionQuantityMultiplier'] = currModelRow.instrument?.mutualFundDetails?.redemptionQuantityMultiplier;

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
              } else {
                //create new asset object
                assetLumpsumArray.push({
                  "id": dataRow['assetClass'] ? dataRow['assetClass'] : currModelRow.instrument?.assetId,
                  "totalCount": 1,
                  "name": dataRow['assetName'],
                  "weight": currModelRow.weightage
                });
              }
              //do for category object
              foundObject = categoryLumpsumArray.find(category => category.id === currModelRow.instrument?.instrumentCategoryId);
              if (foundObject) {
                foundObject["totalCount"] = foundObject["totalCount"] + 1;
                foundObject["weight"] = foundObject["weight"] + currModelRow.weightage;
              } else {
                //create new asset object
                categoryLumpsumArray.push({
                  "id": currModelRow.instrument?.instrumentCategoryId,
                  "totalCount": 1,
                  "name": categoryName,
                  "weight": currModelRow.weightage
                });
              }
            }

          }

          if (categorySIPArray.length > 0){
            assetSIPArrayfromCategory = this.returnAssetFromCategory(categorySIPArray, "weight", "id");
          }

          if (categoryLumpsumArray.length > 0){
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
        catch (err){
          //If a known error then send the message
          modelData.isSuccess = false;
          if (err.message) {
            modelData.errorMessage =  err.message;
          } else {
            modelData.errorMessage =  'Something went wrong.';
          }

          return modelData;
        }

      }

      public static getRecommendationTypeLabel(recommendationType: number | null, defaultReturnLabel: string): string {
        let recommendationTypeLabel = defaultReturnLabel;//default

        if (!recommendationType){
          return recommendationTypeLabel;
        }

        //find key value and return
        let recommendationTypeObject = Option.GLOBALOPTIONS.RECOMMENDATIONTYPE;
        Object.keys(recommendationTypeObject).forEach(function (recoObjectKey, index) {
          if (recommendationTypeObject[recoObjectKey].value == recommendationType) {
            recommendationTypeLabel = recommendationTypeObject[recoObjectKey].label;
          }
        });

        //return default of not found
        return recommendationTypeLabel;
      }

      public static alignPortfolioData(inputData: any) : any {

        let portfolioData: any = {
          "isSuccess": false,
          "errorMessage":''
        };
        let methodName: string = 'alignPortfolioData';
        let holdingRows: Array<any> = [];
        let sipRows: Array<any> = [];
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
                  let currHoldingRow: any = {};
                  currHoldingRow['instrumentId'] = holdings[i].instrumentId;
                  currHoldingRow['instrumentName'] = holdings[i].instrument?.name;
                  currHoldingRow['serviceProviderAccountId'] = serviceProviderAccountId;
                  currHoldingRow['isHeldAway'] = isHeldAway;
                  currHoldingRow['folioNumber'] = folioNumber;
                  currHoldingRow['amcId'] = serviceProviderAMCId;
                  currHoldingRow['uniqueId'] = holdings[i].id;
                  currHoldingRow['amount'] = holdings[i].totalCurrentValue;
                  currHoldingRow['units'] = holdings[i].quantity;
                  currHoldingRow['weight'] = 0;//to be calculated if not there
                  currHoldingRow['portfolioTotalAmount'] = 0;//to be calculated if not there

                  currHoldingRow['assetClass'] = holdings[i].instrument?.assetId;
                  currHoldingRow['category'] = holdings[i].instrument?.instrumentCategoryId;
                  currHoldingRow['assetClassName'] = holdings[i].instrument?.asset?.name;
                  currHoldingRow['categoryName'] = holdings[i].instrument?.instrumentCategory?.name;

                  let quantity = holdings[i].quantity ? holdings[i].quantity : 0;
                  //SS-22Dec22: Fix for sellable quantity !== null
                  //let sellableQuantity = holdings[i].sellableQuantity !== null ? holdings[i].sellableQuantity >=0 ? holdings[i].sellableQuantity : holdings[i].quantity : holdings[i].quantity;
                  let sellableQuantity = quantity;
                  LoggingUtils.info(`Setting Sellable quantity: ${holdings[i].instrumentId} | ${holdings[i].sellableQuantity}`, methodName);
                  if (holdings[i].hasOwnProperty('sellableQuantity') && (holdings[i].sellableQuantity !== null)) {
                    LoggingUtils.info(`Sellable quantity not null: ${holdings[i].instrumentId} | ${holdings[i].sellableQuantity}`, methodName);
                    if ((parseFloat(holdings[i].sellableQuantity) >= 0)){
                      sellableQuantity = holdings[i].sellableQuantity;
                      LoggingUtils.info(`Setting Sellable quantity = ${sellableQuantity}`, methodName);
                    }
                  }
                  let sellableAmount = quantity > 0 ? (sellableQuantity/quantity) * holdings[i].totalCurrentValue : 0;
                  let lockedAmount = holdings[i].totalCurrentValue - sellableAmount;
                  LoggingUtils.info(`lockedAmount | sellableAmount: ${lockedAmount} | ${sellableAmount}`, methodName);
                  currHoldingRow['freeAmount'] = sellableAmount;
                  currHoldingRow['lockedAmount'] = lockedAmount;
                  //we don't want to buy Hybrid but pure Eq/Debt as preference
                  //in worst case it will buy anyways
                  currHoldingRow['isRecoCat'] = holdings[i].instrument?.assetId == 9 ? 0 : 1;//@todo - remove hard-coding

                  let recommendationType = holdings[i].instrument?.recommendationType ? holdings[i].instrument?.recommendationType : null;
                  //we are using label in algo
                  let defaultReturnLabel = "SELL";
                  currHoldingRow['isRecoScheme'] = this.getRecommendationTypeLabel(recommendationType, defaultReturnLabel);
                  currHoldingRow['schemeRank'] = holdings[i].instrument?.instrumentRank ? holdings[i].instrument?.instrumentRank : 9999999;
                  //currHoldingRow['freeUnitsPortion'] = 1;//
                  currHoldingRow['freeUnits'] = sellableQuantity;
                  //currHoldingRow['exitFreeUnits'] = holdings[i].quantity;//
                  //currHoldingRow['taxFreeUnits'] = holdings[i].quantity;//

                  //txn check related
                  currHoldingRow['isPurchaseAllowed'] = holdings[i].instrument?.mutualFundDetails?.isPurchaseAllowed;
                  currHoldingRow['isRedemptionAllowed'] = holdings[i].instrument?.mutualFundDetails?.isRedemptionAllowed;
                  currHoldingRow['isSwitchAllowed'] = holdings[i].instrument?.mutualFundDetails?.isSwitchAllowed;
                  currHoldingRow['maxAdditionalInvestmentAmount'] = holdings[i].instrument?.mutualFundDetails?.maxAdditionalInvestmentAmount;
                  currHoldingRow['maxInvestmentAmount'] = holdings[i].instrument?.mutualFundDetails?.maxInvestmentAmount;
                  currHoldingRow['maxRedemptionAmount'] = holdings[i].instrument?.mutualFundDetails?.maxRedemptionAmount;
                  currHoldingRow['maxRedemptionQuantity'] = holdings[i].instrument?.mutualFundDetails?.maxRedemptionQuantity;
                  currHoldingRow['minAdditionalInvestmentAmount'] = holdings[i].instrument?.mutualFundDetails?.minAdditionalInvestmentAmount;
                  currHoldingRow['minInvestmentAmount'] = holdings[i].instrument?.mutualFundDetails?.minInvestmentAmount;
                  currHoldingRow['minRedemptionAmount'] = holdings[i].instrument?.mutualFundDetails?.minRedemptionAmount;
                  currHoldingRow['minRedemptionQuantity'] = holdings[i].instrument?.mutualFundDetails?.minRedemptionQuantity;
                  currHoldingRow['purchaseAmountMultiplier'] = holdings[i].instrument?.mutualFundDetails?.purchaseAmountMultiplier;
                  currHoldingRow['redemptionAmountMultiplier'] = holdings[i].instrument?.mutualFundDetails?.redemptionAmountMultiplier;
                  currHoldingRow['redemptionQuantityMultiplier'] = holdings[i].instrument?.mutualFundDetails?.redemptionQuantityMultiplier;

                  currHoldingRow['categoryGroup'] = holdings[i].instrument?.categoryGroupId;

                  totalCurrentValue += holdings[i].totalCurrentValue;
                  totalHoldingRows += 1;

                  holdingRows.push(currHoldingRow);
                }
              }//holdings loop within Service Provider
            }

            //process currently running SIPs
            if (runningSIPs != undefined && runningSIPs.length > 0) {
              for (let i = 0; i < runningSIPs.length; i++) {
                //add row if non zero amount
                if (Math.abs(runningSIPs[i].amount) > 0) {
                  let currSIPRow: any = {};
                  currSIPRow['instrumentId'] = runningSIPs[i].instrumentId;
                  currSIPRow['instrumentName'] = runningSIPs[i].instrument?.name;
                  currSIPRow['serviceProviderAccountId'] = serviceProviderAccountId;
                  currSIPRow['isHeldAway'] = isHeldAway;
                  currSIPRow['folioNumber'] = folioNumber;
                  currSIPRow['amcId'] = serviceProviderAMCId;
                  currSIPRow['uniqueId'] = runningSIPs[i].id;
                  currSIPRow['amount'] = runningSIPs[i].amount;//
                  currSIPRow['units'] = runningSIPs[i].quantity;
                  currSIPRow['weight'] = 0;//to be calculated if not there
                  currSIPRow['portfolioTotalAmount'] = 0;//to be calculated if not there

                  currSIPRow['assetClass'] = runningSIPs[i].instrument?.assetId;
                  currSIPRow['category'] = runningSIPs[i].instrument?.instrumentCategoryId;
                  currSIPRow['assetClassName'] = runningSIPs[i].instrument?.asset?.name;
                  currSIPRow['categoryName'] = runningSIPs[i].instrument?.instrumentCategory?.name;


                  currSIPRow['freeAmount'] = runningSIPs[i].amount;//entire amount is free to be stopped
                  currSIPRow['lockedAmount'] = 0;
                  //we don't want to buy Hybrid but pure Eq/Debt as preference
                  //in worst case it will buy anyways
                  currSIPRow['isRecoCat'] = runningSIPs[i].instrument?.assetId == 9 ? 0 : 1;//@todo - remove hard-coding

                  let recommendationType = runningSIPs[i].instrument?.recommendationType ? runningSIPs[i].instrument?.recommendationType : null;
                  //we are using label in algo
                  let defaultReturnLabel = "SELL";
                  currSIPRow['isRecoScheme'] = this.getRecommendationTypeLabel(recommendationType, defaultReturnLabel);
                  currSIPRow['schemeRank'] = runningSIPs[i].instrument?.instrumentRank ? runningSIPs[i].instrument?.instrumentRank : 9999999;
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
                  let currentSIPSetting: SystematicMethodSetting | null = null;
                  if (runningSIPs[i].instrument?.mutualFundDetails?.systematicMethodSettings){
                    let systematicMethodSettings = runningSIPs[i].instrument?.mutualFundDetails?.systematicMethodSettings;
                    if (systematicMethodSettings.length > 0){
                      currentSIPSetting = systematicMethodSettings.find((systematicMethod: SystematicMethodSetting) =>
                        (systematicMethod.systematicMethodType === Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.sip.value &&
                        systematicMethod.frequency === Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value));
                    }
                  }

                  if (currentSIPSetting){
                    //we are using same object variables as in lumpsum so the main algo
                    //runs irrespective of SIP/LS with minimal changes
                    //currSIPRow['isPurchaseAllowed'] = currentSIPSetting.isSIPAllowed;
                    currSIPRow['isPurchaseAllowed'] = runningSIPs[i].instrument?.mutualFundDetails?.isPurchaseAllowed;
                    currSIPRow['isRedemptionAllowed'] = true;//SIPs can be stopped
                    currSIPRow['maxAdditionalInvestmentAmount'] = currentSIPSetting.minInstallmentAmount;
                    currSIPRow['maxInvestmentAmount'] = currentSIPSetting.maxInstallmentAmount;
                    currSIPRow['minAdditionalInvestmentAmount'] = currentSIPSetting.maxInstallmentAmount;
                    currSIPRow['minInvestmentAmount'] = currentSIPSetting.minInstallmentAmount;
                    currSIPRow['purchaseAmountMultiplier'] = currentSIPSetting.multiplier;
                    currSIPRow['sytematicMethodSIPSetting'] = currentSIPSetting; //put this for use in transaction setting
                  } else {
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

                  currSIPRow['categoryGroup'] = runningSIPs[i].instrument?.categoryGroupId;

                  totalSIPValue += currSIPMonthlyEquivalent;

                  totalSIPRows += 1;

                  sipRows.push(currSIPRow);
                }
              }//runningSIPs loop within Service Provider
            }

          }//serviceProvider loop

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
        catch(err){
          portfolioData.isSuccess = false;
          //If a known error then send the message
          if (err.message) {
            portfolioData.errorMessage =  err.message;
          } else {
            portfolioData.errorMessage =  'Something went wrong.';
          }

        }
      }

      public static convertSIPFrequencytoMonthly(sipFrequency: number) : number {
        let frequencyList = Option.GLOBALOPTIONS['SYSTEMATICMETHODFREQUENCY'];
        let freqObject: any = {};
        let multFactor: number = 0;

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

      public static createRebalanceCartItems(goalInformation: any, portfolioData: any, isLumpsum: boolean, returnCartItems: Array<Partial<CartItem>>): any{
        //let returnCartItems: Array<Partial<CartItem>> = [];
        const methodName = 'createRebalanceCartItems';
        if (!portfolioData || portfolioData.length == 0){
          return returnCartItems;
        }

        LoggingUtils.info(`goal-utils-Creating cart items for isLumpsum: ${isLumpsum}`, methodName);
        for (let i=0; i < portfolioData.length; i++){
          LoggingUtils.info(`goal-utils-portfolioData: ${JSON.stringify(portfolioData)}`, methodName);
          //skip if initial and final weight is zero
          if ((portfolioData[i].weightinIteration == 0) && (portfolioData[i].initialWeight == 0)){
            continue;
          }

          //Sells
          if (Math.abs(portfolioData[i].sellProcessedAmount) > 0){
            let currCartSellItem: Partial<CartItem> = {
              cartId: 123,//
              totalAmount: Math.abs(portfolioData[i].sellProcessedAmount),//
              instrumentId: portfolioData[i].instrumentId,//
              serviceProviderAccountId: portfolioData[i].serviceProviderAccountId,//@todo from list or ?
              goalId: goalInformation.goalId,//
              transactionTypeId: 2,//1 for buy, 2 for sell
              modeOfTransaction: 2,//1 for buy, 2 for sell
              transactionSubType: isLumpsum ? Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].normal.value : Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].systematic.value,
              isAllUnits: isLumpsum ? false : true, //since we are stopping SIP
              isStopSip: isLumpsum ? false : true,//for SIPs sell
              isRebalancingItem: true,//
              lineNumber: returnCartItems.length + 1,//increment
              //exras
              folioNumber: portfolioData[i].folioNumber,//
              sipLumpsum: isLumpsum ? 'Lumpsum' : 'SIP',
              buySell: isLumpsum ? 'Sell' : 'Stop SIP',
              instrumentName: portfolioData[i].instrumentName,
              isHeldAway: portfolioData[i].isHeldAway ? portfolioData[i].isHeldAway : false
            };

            //add SIP related items
            if (!isLumpsum){
              //not needed actually for selling but required in cart validation in cart facade
              currCartSellItem['frequency'] = Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value;
              //needed to stop SIP
              currCartSellItem['systematicMethodId'] = portfolioData[i].uniqueId;
            }

            returnCartItems.push(currCartSellItem);

          }

          //Buys
          if (Math.abs(portfolioData[i].buyProcessedAmount) > 0){
            let currCartBuyItem: Partial<CartItem> = {
              cartId: 123,//
              totalAmount: Math.abs(portfolioData[i].buyProcessedAmount),//
              instrumentId: portfolioData[i].instrumentId,//
              serviceProviderAccountId: portfolioData[i].serviceProviderAccountId,//@todo from list or ?
              goalId: goalInformation.goalId,//
              transactionTypeId: 1,//1 for buy, 2 for sell
              modeOfTransaction: 1,//1 for buy, 2 for sell
              transactionSubType: isLumpsum ? Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].normal.value : Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].systematic.value,
              isAllUnits:false,//
              isStopSip: false,//this is buy
              isRebalancingItem: true,//
              lineNumber: returnCartItems.length + 1,//increment
              //exras
              folioNumber: portfolioData[i].folioNumber,//
              sipLumpsum: isLumpsum ? 'Lumpsum' : 'SIP',
              buySell: isLumpsum ? 'Buy' : 'Start SIP',
              instrumentName: portfolioData[i].instrumentName,
              isHeldAway: portfolioData[i].isHeldAway ? portfolioData[i].isHeldAway : false
            };

            //add SIP related items
            if (!isLumpsum){
              currCartBuyItem['frequency'] = Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value;
              //if sytematicMethodSIPSetting exists then put dates/installments etc.
              if (portfolioData[i].sytematicMethodSIPSetting){
                let sipDetails = getSIPDetailsFromSettingData(portfolioData[i].sytematicMethodSIPSetting, goalInformation.endDate);
                if (sipDetails && sipDetails.isSuccess){
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

          if (isLumpsum && Math.abs(portfolioData[i].sellProcessedAmount) > 0 && Math.abs(portfolioData[i].buyProcessedAmount) > 0){
            LoggingUtils.error('PRODUCT-GoalUtils-createRebalanceCartItems: Buy and Sell both in same scheme ... oopsie... check for goalId ' + goalInformation.goalId);
          }

        }

        LoggingUtils.info(`goal-utils-Done cart items for isLumpsum: ${isLumpsum} ---- ${JSON.stringify(returnCartItems)}`, methodName);
        return returnCartItems;

        function getSIPDetailsFromSettingData(systematicMethodSetting: SystematicMethodSetting, goalEndDate: Date) : any {

          let returnObject: any = {};

          try {
            let todayDate = new Date();
            let frequencyDay: number | null = null;
            let todayDateValue = new Date().getDate();
            let allowedDates = systematicMethodSetting.dates;
            let allowedDatesArray = allowedDates?.split(',');
            let addMonth = 0;


            if (allowedDatesArray && allowedDatesArray.length > 0){
              //start date should be suggested 7 days after today
              let earliestDatevalue = todayDateValue + 7;
              //go to next month if current date is after 21st
              if (todayDateValue > 21){
                earliestDatevalue = 1;
                addMonth = 1;
              }

              let frequencyDayFoundValue = allowedDatesArray.find((dateValue: any) => parseInt(dateValue) >= earliestDatevalue);
              if(frequencyDayFoundValue){
                frequencyDay = parseInt(frequencyDayFoundValue);
              }
            }

            //if startDate not found then put 1st as default date
            if (!frequencyDay){
              frequencyDay = 1;
              addMonth = 1;
              LoggingUtils.error('PRODUCT-GOALUTILS-getSIPDetailsFromSettingData: SIP frequencyDay could not be fetched for mutualFundDetailsId ' + systematicMethodSetting.mutualFundDetailsId);
            }

            let startDateForSip = moment(todayDate.setDate(frequencyDay)).add(addMonth, 'month').toDate();
            let goalEndDateValue = goalEndDate.getDate();
            //if goalEnds before SIP day in that month then SIP end date would be previous month
            if (goalEndDateValue <= frequencyDay){
              addMonth = -1;
            } else {
              addMonth = 0;
            }
            let endDateForSip = moment(goalEndDate.setDate(frequencyDay)).add(addMonth, 'month').toDate();
            //SS -  changes start
            const startDateMoment = moment(startDateForSip).startOf('day');
            const endDateMoment = moment(endDateForSip).startOf('day');

           let transactionCount = endDateMoment.diff(startDateMoment, 'month') + 1;
            //SS -  changes end

            returnObject = {
              isSuccess: true,
              startDateForSip: startDateForSip,
              endDateForSip: endDateForSip,
              frequencyDay: frequencyDay,
              transactionCount: transactionCount
            }

            return returnObject;

          } catch (err: any) {

            LoggingUtils.error(err);
            LoggingUtils.error('PRODUCT-GOALUTILS-getSIPDetailsFromSettingData: SIP settings could not be created for mutualFundDetailsId ' + systematicMethodSetting.mutualFundDetailsId);
            returnObject = {
              isSuccess: false
            }

            return returnObject;

          }

        }

      }



}
