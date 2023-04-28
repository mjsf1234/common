import {Option, StaticData} from '../constants';
import {ModelPortfolioInstrument, ServiceProviderAccount, Account, SystematicMethodSetting, SystematicMethod} from '../models';
import {LoggingUtils} from './logging-utils';
import {GoalUtils} from './goal-utils';
import {any} from 'underscore';
export abstract class RebalancingUtils {
  public static doGoalRebalancing(goalInformation: any, portfolioData: any, modelPortfolio: any, isLumpsum: boolean): any {
    //*** DEFINE GLOABAL VARIABLES FOR THIS REBALANCING SCOPE ***
    //*** GLOBAL VARS DEFINITION STARTS ***///

    //master Data
    let assetClasses = Option.GLOBALOPTIONS.ASSETCLASSES.data;
    let assetClassesNames = Option.GLOBALOPTIONS.ASSETCLASSES.name;
    let categories = Option.GLOBALOPTIONS.CATEGORIES.data;
    let categoriesNames = Option.GLOBALOPTIONS.CATEGORIES.name;
    let groupCategories = Option.GLOBALOPTIONS.GROUPCATEGORIES.data;
    let groupCategoriesNames = Option.GLOBALOPTIONS.GROUPCATEGORIES.name;
    let categoryAssetExposure = Option.GLOBALOPTIONS.CATEGORYASSETEXPOSURE.data;
    let assetToDefaultCategories = Option.GLOBALOPTIONS.ASSETTODEFAULTCATEGORIES.data;
    let categoryGroupCategoryMapping = Option.GLOBALOPTIONS.CATEGORYGROUPCATEGORYMAPPING.data;
    let categoryGroupAssetExposure = Option.GLOBALOPTIONS.CATEGORYGROUPASSETEXPOSURE.data;

    //this could also be master Data but calculating for now
    //let categoryCrossExposure = {};
    let categoryCategoryGroupExposure: any = {};

    //****** MAIN WORK STARTS ******//

    //SYSTEM VARIABLES
    let precisionPoint = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.precisionPoint; //rebalancing till 0.001%
    let percentCentBase = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.percentCentBase; //1 => 100%, 5.23% shall be like 0.0523 in data (change to 100 otherwise)
    let cleanUpNotRecommendedSchemes = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.cleanUpNotRecommendedSchemes;

    //Tolerance for regular alerts
    let goalShortfallTolerance = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.goalShortfallTolerance; //10%
    let assetClassDeviationTolerance = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationTolerance; //5%
    let categoryGroupDeviationTolerance = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationTolerance; //5%

    //Tolerance for urgent alerts
    let goalShortfallToleranceUrgent = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.goalShortfallToleranceUrgent; //20%
    let assetClassDeviationToleranceUrgent = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.assetClassDeviationToleranceUrgent; //10%
    let categoryGroupDeviationToleranceUrgent = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.categoryGroupDeviationToleranceUrgent; //10%

    //Tolerance in waterfall approach for buys
    let waterfallTolerance = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.waterfallTolerance;
    let maxSchemeWeight = Option.GLOBALOPTIONS.REBALANCINGSETTINGS.maxSchemeWeight;

    //INPUT DATA VARIABLES
    let additionalBuy: number = 0;

    //CALCULATION VARIABLES
    let assetClassTotal: any = [];
    //let categoriesTotal = [];
    let categoryGroupTotal: any = [];
    let categoryGroupDeviationsTotal: any = [];
    let assetClassDeviationsTotal: any = [];

    //rebalancing Check flags
    //let isRebalancingNeeded = false;
    //let isUrgentRebalancingNeeded = false;
    let toDoRebalancing = true;
    //let rebalancingOutput = {"goalSufficiency": {}, "rebalancedLumpsumPortfolio": {}, "rebalancedSIPPortfolio": {}, "isRebalancingNeeded": false, "isUrgentRebalancingNeeded": false};

    //buyPriorityArray
    let buyPriorityArray = StaticData.REBALANCINGDATA.BUYPRIORITY.data;

    let inputObject = goalInformation;
    let modelPortfolioAllocations: any = {};

    //*** GLOBAL VARS DEFINITION ENDS ***///

    //*** PROCESSING STARTS */
    let returnObject: any = {
      processSuccessful: false,
      rebalancingProcessSuccess: false,
      message: '',
      portfolioAssetDistribution: {},
      modelAssetDistribution: {},
      assetClasses: assetClasses,
      assetClassNames: assetClassesNames,
      portfolioData: []
    };
    //1. call the function
    mainRebalancingHandler();

    //2. return object
    returnObject.portfolioData = portfolioData;
    return returnObject;
    //*** PROCESSING ENDS */

    //*** ONLY FUNCTION BELOW THIS  */

    //Drives rebalancing and returns rebalanacing output
    function mainRebalancingHandler() {
      categoryCategoryGroupExposure = GoalUtils.createCategoryCrossExpMatrix();

      LoggingUtils.info('done categoryCategoryGroupExposure');
      initialize();
      LoggingUtils.info('done initialization');

      //LoggingUtils.info('goalInformation: ', goalInformation);
      //sell first for rebalancing
      //Sell only if it's rebalancing case
      if (inputObject.fullRebalance) {
        if (toDoRebalancing) {
          processSell();
        } else {
          if (inputObject.additionalLumpsumBuy > 0) {
            //continue further to do buy
            LoggingUtils.info('Rebalancing not needed as there is no deviation. We will process the additional buy needed.');
            returnObject.processSuccessful = true;
            returnObject.rebalancingProcessSuccess = false;
          } else {
            LoggingUtils.info('Rebalancing not needed as there is no deviation.');
            returnObject.processSuccessful = true;
            returnObject.rebalancingProcessSuccess = false;
            returnObject.message = 'Rebalancing not needed as there is no deviation.';
            return;
          }
        }
      } else {
        if ((inputObject.additionalLumpsumBuy > 0 && isLumpsum) || (inputObject.additionalSIPBuy > 0 && !isLumpsum)) {
          //continue further to do buy
          LoggingUtils.info('Additional buy journey. We will process the additional buy needed.');
        } else {
          LoggingUtils.info('Neither rebalancing asked nor any additional Buy is there. INVALID CASE of inputs.');
          LoggingUtils.info('Abe bacche ki jaan lega kya !!! :))))');
          returnObject.message = 'Neither rebalancing asked nor any additional Buy is there. INVALID CASE of inputs.';
          return;
        }
      }

      //buy and fill the gaps
      processBuy();

      //check if total isn't 100%... raise error
      assetClassTotal = GoalUtils.sumProduct(
        portfolioData,
        'weightinIteration',
        assetClasses,
        categoryAssetExposure,
        'category',
        'initialNetAssetWeights'
      );
      if (Math.abs(1 - getArraySum(assetClassTotal)) < precisionPoint) {
        LoggingUtils.info('Successfully completed rebalancing !!!');
        returnObject.processSuccessful = true;
        returnObject.rebalancingProcessSuccess = true;
        returnObject.message = 'Successfully completed rebalancing !!!';
        //createRows();
      } else {
        if (Math.abs(1 - getArraySum(assetClassTotal)) < waterfallTolerance) {
          LoggingUtils.info('Successfully completed rebalancing with some buy remaining for minumum amounts !!!');
          returnObject.processSuccessful = true;
          returnObject.rebalancingProcessSuccess = true;
          returnObject.message = 'Successfully completed rebalancing with some buy remaining for minumum amounts !!!';
          //createRows();
        } else {
          LoggingUtils.info('Something wrong... ERROR !!!');
          returnObject.processSuccessful = false;
          returnObject.rebalancingProcessSuccess = false;
          returnObject.message = 'Something wrong... ERROR !!!';
        }
      }
    }

    function initialize() {
      //merge empty model schemes into portfolio
      //this may be needed for buys as portfolio may not have recommended schemes
      //before that update totalPortfolio amount as it's in portfolio data only
      //SS - added check as a goal may not have existing investments
      let portfolioTotalAmount: number = 0;
      let origPortfolioTotalAmount: number = 0;

      if (portfolioData && portfolioData.length > 0) {
        portfolioTotalAmount = portfolioData[0]['portfolioTotalAmount'];
        origPortfolioTotalAmount = portfolioData[0]['portfolioTotalAmount'];
      }

      //handle additional investments
      //if called for lumpsum add additionalLumpsum
      if (inputObject.additionalLumpsumBuy > 0 && isLumpsum) {
        //update portfolioTotalAmount
        portfolioTotalAmount += inputObject.additionalLumpsumBuy;
      }

      //if called for SIP add additionalSIP
      if (inputObject.additionalSIPBuy > 0 && !isLumpsum) {
        //update portfolioTotalAmount
        portfolioTotalAmount += inputObject.additionalSIPBuy;
      }

      inputObject['portfolioTotalAmount'] = portfolioTotalAmount;
      LoggingUtils.debug(`appending ModelPortfolio: ${JSON.stringify(modelPortfolio)}`);
      appendModelRowstoPortfolio(portfolioTotalAmount);
      LoggingUtils.debug(`done appending: ${JSON.stringify(portfolioData)}`);

      let tenureMonths = inputObject.tenureMonths;
      let totalAmount = inputObject.portfolioTotalAmount;
      let riskProfileId = inputObject.riskProfileId;

      modelPortfolioAllocations = GoalUtils.setModelPortfolio(tenureMonths, totalAmount, riskProfileId, isLumpsum);
      LoggingUtils.info('done modelPortfolioAllocations');

      //set in return object
      returnObject.modelAssetDistribution = modelPortfolioAllocations['assetClassLevel'];

      let mpMiniFull = modelPortfolioAllocations['miniFullOption'];
      //initialize and put net wt array
      //put that in portfolioData
      for (let i = 0; i < portfolioData.length; i++) {
        //calculate and update weights
        //may have come with data but update if there is an additional buy
        portfolioData[i]['portfolioTotalAmount'] = portfolioTotalAmount;
        portfolioData[i]['weight'] = portfolioData[i]['amount'] / portfolioTotalAmount;
        portfolioData[i]['originalWeight'] = origPortfolioTotalAmount > 0 ? portfolioData[i]['amount'] / origPortfolioTotalAmount : 0;
        portfolioData[i]['freeUnits'] = portfolioData[i]['freeAmount'] / portfolioTotalAmount;
        portfolioData[i]['lockedUnits'] = portfolioData[i]['lockedAmount'] / portfolioTotalAmount;
        //just to handle any error input case
        portfolioData[i]['freeUnits'] = Math.min(
          portfolioData[i]['freeUnits'],
          portfolioData[i]['weight'] - portfolioData[i]['lockedUnits']
        );

        //general columns
        portfolioData[i]['initialNetAssetWeights'] = GoalUtils.createWtArray(assetClasses);
        portfolioData[i]['initialNetCategoryWeights'] = GoalUtils.createWtArray(categories);
        portfolioData[i]['initialGroupCategoryWeights'] = GoalUtils.createWtArray(groupCategories);

        //sell related columns
        portfolioData[i]['canProcess'] = false;
        portfolioData[i]['initialWeight'] = portfolioData[i]['weight'];

        portfolioData[i]['groupCategoryWeightstoFulfill'] = GoalUtils.createWtArray(groupCategories);
        portfolioData[i]['maxTotalSellpostIteration'] = 0;
        portfolioData[i]['sellProcessed'] = 0;
        portfolioData[i]['sellProcessedAmount'] = 0;
        //initialize with portfolio weights
        portfolioData[i]['weightinIteration'] = portfolioData[i]['weight'];
        portfolioData[i]['maxSellPossible'] = portfolioData[i]['weight'] - portfolioData[i]['lockedUnits'];

        //buy related
        portfolioData[i]['buyProcessed'] = 0;
        portfolioData[i]['buyProcessedAmount'] = 0;
        //portfolioData[i]["maxBuyLimit"] = percentCentBase;
        //get as per category group weight
        //portfolioData[i]["maxBuyLimit"] = maxSchemeWeight;
        portfolioData[i]['maxBuyLimit'] = getMaxSchemeWeight(portfolioData[i]['categoryGroup'], mpMiniFull);

        portfolioData[i]['maxTotalBuypostIteration'] = 0;
      }

      LoggingUtils.info('done portfolioData initialization');


      //prepare for returnObject
      //calculate net exposures using originalWeight without additional investments
      //to depict original portfolio weight on UI
      assetClassTotal = GoalUtils.sumProduct(
        portfolioData,
        'originalWeight',
        assetClasses,
        categoryAssetExposure,
        'category',
        'initialNetAssetWeights'
      );      
      let portfolioAC: any = {};
      for (let i = 0; i < assetClasses.length; i++) {
        portfolioAC[assetClasses[i]] = assetClassTotal[i];
      }
      returnObject.portfolioAssetDistribution = portfolioAC;

      //calculate net exposures
      //again for assetClass because now we shall use this for deviations... 
      //so calculate using weight which includes additional investments
      //needed to handle multi-asset schemes like hybrid/savings etc which aren't 100% exposed to one asset class or one category
      assetClassTotal = GoalUtils.sumProduct(
        portfolioData,
        'weight',
        assetClasses,
        categoryAssetExposure,
        'category',
        'initialNetAssetWeights'
      );
      //categoriesTotal = GoalUtils.sumProduct(portfolioData, "weight", categories, categoryCrossExposure, "category", "initialNetCategoryWeights");
      categoryGroupTotal = GoalUtils.sumProduct(
        portfolioData,
        'weight',
        groupCategories,
        categoryCategoryGroupExposure,
        'category',
        'initialGroupCategoryWeights'
      );

      LoggingUtils.info('done totals');

      //get the deviations at Asset Class level
      assetClassDeviationsTotal = GoalUtils.getAggregateDeviations(
        assetClasses,
        assetClassesNames,
        assetClassTotal,
        'assetClassLevel',
        'assetClass',
        'deviation',
        modelPortfolioAllocations
      );
      //get deviations at Category Group level
      categoryGroupDeviationsTotal = GoalUtils.getAggregateDeviations(
        groupCategories,
        groupCategoriesNames,
        categoryGroupTotal,
        'categoryGroupLevel',
        'categoryGroup',
        'deviation',
        modelPortfolioAllocations
      );

      LoggingUtils.info('done aggregations');

      LoggingUtils.info(`assetClassTotal: , ${JSON.stringify(assetClassTotal)}`);
      LoggingUtils.info(`categoryGroupTotal: , ${JSON.stringify(categoryGroupTotal)}`);
      LoggingUtils.info(`assetClassDeviationsTotal : , ${JSON.stringify(assetClassDeviationsTotal)}`);
      LoggingUtils.info(`categoryGroupDeviationsTotal : , ${JSON.stringify(categoryGroupDeviationsTotal)}`);
    }

    function getMaxSchemeWeight(categoryGroupId: number, mpMiniFull: string): number {
      //default if we don't get anything
      let maxWeight = maxSchemeWeight;

      //get weight in model portfolio of the categoryGroup
      //let categoryGroupWeight = modelPortfolioAllocations["categoryGroupLevel"][groupCategories.indexOf(categoryGroupId)];
      let categoryGroupWeight = modelPortfolioAllocations['categoryGroupLevel'][categoryGroupId]; //fixed

      //non recommended category won't be found
      if (!categoryGroupWeight) {
        LoggingUtils.info(`Non reco category max weight could not be found. Setting  ${maxWeight * 100}, '% by default`);
        return maxWeight;
      }

      let maxSchemeWeights = Option.GLOBALOPTIONS.MAXSHCEMEWEIGHTSETTING[mpMiniFull].maxSchemeWeight;
      let categoryWeights = Option.GLOBALOPTIONS.MAXSHCEMEWEIGHTSETTING[mpMiniFull].categoryWeight;

      categoryGroupWeight = categoryGroupWeight * 100; //base to 100 for search as settings is on base 100 for better rounding

      let foundIndex = -1;
      for (let i = 1; i < categoryWeights.length; i++) {
        if (categoryGroupWeight >= categoryWeights[i - 1] && categoryGroupWeight <= categoryWeights[i]) {
          foundIndex = i - 1;
          break;
        }
      }

      if (foundIndex == -1) {
        LoggingUtils.info('Error: max weight could not be found. Setting ', maxWeight * 100 + `% by default`);
        //maxWeight = 0.3;
        maxWeight = maxSchemeWeight;
      } else {
        maxWeight = maxSchemeWeights[foundIndex] / 100; // convert to percentbase
        //LoggingUtils.info('Setting max weight for categoryGroup weight | set maxWeight: ',categoryGroupWeight , '% | ', maxWeight * 100, '%');
      }

      return maxWeight;
    }

    function appendModelRowstoPortfolio(portfolioTotalAmount: number) {
      //This function appends recommended schemes from model portfolio
      //these new rows have zero weight
      //these would be used if we need more schemes to buy while rebalancing

      LoggingUtils.info('in appendModelRowstoPortfolio');
      let holdings = modelPortfolio;

      if (holdings) {
        LoggingUtils.info(`appending modelPortfolio data with rows = , ${modelPortfolio.length}`);
        for (let i = 0; i < holdings.length; i++) {
          let obj = portfolioData.find((item: any) => item.instrumentId === holdings[i].instrumentId);

          //if non empty then skip as this scheme already exists in portfolio data
          if (obj) {
            continue;
          }

          let currHoldingRow: any = {};
          currHoldingRow['instrumentId'] = holdings[i].instrumentId;
          currHoldingRow['instrumentName'] = holdings[i].name;
          currHoldingRow['serviceProviderAccountId'] = null; //SPA info shall be taken from list later while finalizing rebalancing data
          currHoldingRow['isHeldAway'] = false; //to allow these rows to buy because either held would be provided or new
          currHoldingRow['folioNumber'] = null;
          currHoldingRow['serviceProviderList'] = holdings[i].serviceProviderList; //existing SPAs in amc

          currHoldingRow['amcId'] = holdings[i].amcId;
          currHoldingRow['uniqueId'] = null; //new model data
          currHoldingRow['amount'] = 0;
          currHoldingRow['units'] = 0;
          currHoldingRow['weight'] = 0; //model row added to get recommended schemes if needed
          currHoldingRow['portfolioTotalAmount'] = portfolioTotalAmount;

          currHoldingRow['assetClass'] = holdings[i].assetClass;
          currHoldingRow['category'] = holdings[i].category;
          currHoldingRow['assetClassName'] = holdings[i].assetName;
          currHoldingRow['categoryName'] = holdings[i].categoryname;

          currHoldingRow['freeAmount'] = 0;
          currHoldingRow['lockedAmount'] = 0;
          currHoldingRow['isRecoCat'] = 1;
          //keeping default as Buy here as this row is from model
          //in holding if column isn't found then we kept it as default Sell
          let recommendationType = holdings[i]['isRecoScheme'] ? holdings[i]['isRecoScheme'] : null;
          //we are using label in algo
          let defaultReturnLabel = 'BUY';
          currHoldingRow['isRecoScheme'] = GoalUtils.getRecommendationTypeLabel(recommendationType, defaultReturnLabel);
          currHoldingRow['schemeRank'] = holdings[i].schemeRank ? holdings[i].schemeRank : 1; //by default top rank to reco schemes
          currHoldingRow['freeUnitsPortion'] = 1;
          currHoldingRow['freeUnits'] = 0;
          currHoldingRow['exitFreeUnits'] = 0;
          currHoldingRow['taxFreeUnits'] = 0; // free etc stuff won't be used as these rows would be needed for buy only

          //txn check related fields
          if (isLumpsum) {
            currHoldingRow['isPurchaseAllowed'] = holdings[i].isPurchaseAllowed;
            currHoldingRow['isRedemptionAllowed'] = holdings[i].isRedemptionAllowed;
            currHoldingRow['maxAdditionalInvestmentAmount'] = holdings[i].maxAdditionalInvestmentAmount;
            currHoldingRow['maxInvestmentAmount'] = holdings[i].maxInvestmentAmount;
            currHoldingRow['minAdditionalInvestmentAmount'] = holdings[i].minAdditionalInvestmentAmount;
            currHoldingRow['minInvestmentAmount'] = holdings[i].minInvestmentAmount;
            currHoldingRow['purchaseAmountMultiplier'] = holdings[i].purchaseAmountMultiplier;

            currHoldingRow['isSwitchAllowed'] = holdings[i].isSwitchAllowed;
            currHoldingRow['maxRedemptionAmount'] = holdings[i].maxRedemptionAmount;
            currHoldingRow['maxRedemptionQuantity'] = holdings[i].maxRedemptionQuantity;
            currHoldingRow['minRedemptionAmount'] = holdings[i].minRedemptionAmount;
            currHoldingRow['minRedemptionQuantity'] = holdings[i].minRedemptionQuantity;
            currHoldingRow['redemptionAmountMultiplier'] = holdings[i].redemptionAmountMultiplier;
            currHoldingRow['redemptionQuantityMultiplier'] = holdings[i].redemptionQuantityMultiplier;
          } else {
            //for SIPs... lets' get the systematicMethod setting
            //provided already as a single monthly frequency SIP output
            //kept the entire array for future if needed for other types and frequency

            //get the systematic method data if it exists
            /*let currentSIPSetting: SystematicMethodSetting | null = null;
            if (holdings[i].systematicMethodSettings){
              let systematicMethodSettings = holdings[i].systematicMethodSettings;
              //filter and get monthly SIPs as we shall recommend monthly only
              if (systematicMethodSettings.length > 0){
                currentSIPSetting = systematicMethodSettings.find((systematicMethod: SystematicMethodSetting) =>
                  (systematicMethod.systematicMethodType === Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.sip.value &&
                  systematicMethod.frequency === Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value));
              }
            }  */

            let currentSIPSetting: SystematicMethodSetting | null = holdings[i].currentSIPSetting;

            if (currentSIPSetting) {
              //we are using same object variables as in lumpsum so the main algo
              //runs irrespective of SIP/LS with minimal changes
              currHoldingRow['isPurchaseAllowed'] = holdings[i].isSIPAllowed ? holdings[i].isSIPAllowed : true;
              currHoldingRow['isRedemptionAllowed'] = true; //SIPs can be stopped
              currHoldingRow['maxAdditionalInvestmentAmount'] = currentSIPSetting.minInstallmentAmount;
              currHoldingRow['maxInvestmentAmount'] = currentSIPSetting.maxInstallmentAmount;
              currHoldingRow['minAdditionalInvestmentAmount'] = currentSIPSetting.maxInstallmentAmount;
              currHoldingRow['minInvestmentAmount'] = currentSIPSetting.minInstallmentAmount;
              currHoldingRow['purchaseAmountMultiplier'] = currentSIPSetting.multiplier;
              currHoldingRow['sytematicMethodSIPSetting'] = currentSIPSetting; //put this for use in traansaction setting
            } else {
              //shouldn't be the case but block this row for action then
              currHoldingRow['isPurchaseAllowed'] = false;
              currHoldingRow['isRedemptionAllowed'] = true;
            }

            //putting nulls to maintain the data structure
            currHoldingRow['isSwitchAllowed'] = false;
            currHoldingRow['maxRedemptionAmount'] = null;
            currHoldingRow['maxRedemptionQuantity'] = null;
            currHoldingRow['minRedemptionAmount'] = null;
            currHoldingRow['minRedemptionQuantity'] = null;
            currHoldingRow['redemptionAmountMultiplier'] = null;
            currHoldingRow['redemptionQuantityMultiplier'] = null;
          }

          currHoldingRow['categoryGroup'] = holdings[i].categoryGroup;

          portfolioData.push(currHoldingRow);
        }
      }
    }

    //** Start other functions */

    function processBuy() {
      processBuywithPriorityLoops();

      return;
    }

    function getArraySum(inputArray: any): any {
      let totalCurrWeight = 0;
      for (let i = 0; i < inputArray.length; i++) {
        totalCurrWeight += inputArray[i];
      }
      return totalCurrWeight;
    }

    function processBuywithPriorityLoops() {
      //this is perhaps not needed
      //1. find the total Buy needed at start
      //get total buys done
      //NOTE1: We are using buyProcessed column for totalBuys done which shall disturb expected values in output initialNetAssetWeights column
      //So we shall revert immediately once we have the data calculated
      let totalBuysDone = GoalUtils.sumProduct(
        portfolioData,
        'buyProcessed',
        assetClasses,
        categoryAssetExposure,
        'category',
        'initialNetAssetWeights'
      );
      //NOTE2: Reverting
      assetClassTotal = GoalUtils.sumProduct(
        portfolioData,
        'weightinIteration',
        assetClasses,
        categoryAssetExposure,
        'category',
        'initialNetAssetWeights'
      );

      let totalCurrWeight = 0;
      let totalBought = 0;
      for (let i = 0; i < assetClassTotal.length; i++) {
        totalCurrWeight += assetClassTotal[i];
        totalBought += totalBuysDone[i];
      }

      //check if this is additional investment without rebalancing case
      //if Yes then we need not rebalance everything and just fill in
      //otherwise we can keep buying to fill everything needed
      //let maxBuy = toDoRebalancing ? percentCentBase - totalCurrWeight : additionalBuy - totalBought;
      let maxBuy = percentCentBase - totalCurrWeight;
      LoggingUtils.info(`totalCurrWeight, totalBought, maxBuy: ', ${totalCurrWeight}, ${totalBought}, ${maxBuy}`);
      //keeeping it positive
      maxBuy = Math.max(0, maxBuy);

      if (maxBuy < precisionPoint) {
        return;
      }

      let buyDone = -1;

      //may be need to handle later to skip the assetClass if it wasn't able to buy anything
      //but that may happen only for very low buys which can't be done anyways
      //SS-CHECK: Sorting by min amount will ensure that we buy the min inv amount new sceme first so that remaining can be bought in that
      while (buyDone != 0) {
        buyDone = -1;

        //do for all assetClass
        //2. get asset to buy using waterfall
        let currAssetWaterfall = getBuyAssetClasswithWaterfall();

        LoggingUtils.info(`currAssetWaterfall,${JSON.stringify(currAssetWaterfall)}`);

        //3. get categoryGroup to buy using waterfall, within the assetClass selected
        let currCategoryGroupWaterfall: any = {};
        if (Object.keys(currAssetWaterfall).length === 0) {
          //this is the case where buy was there but deviations across asset classes are settled
          //categoryGroup level Buys are still to be done
          //get buy at categoryGroup level
          //in this case deviations at category level may still be there
          //handle empty object in function
          currCategoryGroupWaterfall = getBuyCategoryGroupwithWaterfall(currAssetWaterfall);
        } else {
          //if all buy is done then we are returning 0 value object
          if (currAssetWaterfall.buyValue == 0) {
            return;
          } else {
            //get buy at categoryGroup level
            currCategoryGroupWaterfall = getBuyCategoryGroupwithWaterfall(currAssetWaterfall);
          }
        }

        LoggingUtils.info(`currCategoryGroupWaterfall, ${JSON.stringify(currCategoryGroupWaterfall)}`);
        let currGroupCategoryBuyNeeded = currCategoryGroupWaterfall.buyValue;

        /*if (Object.keys(currCategoryGroupWaterfall).length === 0){
          //all categoryGroup is also done
          LoggingUtils.info("All categoryGroup buy done.");
          return;
        }*/

        let buyDoneinCategoryGroup = 0;
        for (let i = 0; i < buyPriorityArray.length; i++) {
          let colConditionArray = buyPriorityArray[i];
          let maxBuyColumn = 'maxBuyLimit';

          LoggingUtils.info(`Processing buys with P, ${i + 1}`);

          //3. put what can be sold or not depending on iteration and priority
          setInstrumentProcessFlag(colConditionArray);

          //4. Calculate instrumentBuyNeeded
          calculateInstrumentBuySellNeeded(maxBuyColumn, false);

          //5. Buy in the groupCategory
          buyDoneinCategoryGroup += buyGroupCategory(currCategoryGroupWaterfall, maxBuyColumn, buyDoneinCategoryGroup);

          if (Math.abs(buyDoneinCategoryGroup - currGroupCategoryBuyNeeded) < precisionPoint) {
            LoggingUtils.info(`Done buy for categoryGroup total: , ${buyDoneinCategoryGroup}`);
            break;
          }
        }

        buyDone = buyDoneinCategoryGroup;

        assetClassTotal = GoalUtils.sumProduct(
          portfolioData,
          'weightinIteration',
          assetClasses,
          categoryAssetExposure,
          'category',
          'initialNetAssetWeights'
        );
        LoggingUtils.info(`After processing assetWaterfall: ', ${assetClassTotal}, ${getArraySum(assetClassTotal)}`);

        if (Math.abs(1 - getArraySum(assetClassTotal)) < precisionPoint) {
          LoggingUtils.info('Buys completed.');
          return;
        } else {
          if (buyDone == 0) {
            LoggingUtils.info(`Will exit this asset class as it's not able to buy for min amount = , ${currAssetWaterfall.buyValue}`);
            LoggingUtils.info(`portfolioData ', ${JSON.stringify(portfolioData)}`);
          }
        }
      }
    }

    function buyGroupCategory(currGroupCategoryObject: any, maxBuyColumn: string, buyDoneinCategoryGroup: number): number {
      //to buy in group category we need to buy the one which needs minimum buy to fulfull requirement
      //since this will be buy we need to sort ascending
      //=> if one scheme needs 3.5% buy to fullfill the buy needed for group-category while other needs 5%
      //=> we need to pick the 3.5% first
      //hence sort ascending on groupCategoryWeightstoFulfill
      //sending the index of currGroupCategory to be sorted
      let currGroupCategory = currGroupCategoryObject.categoryGroup;
      let currGroupCategoryBuy = currGroupCategoryObject.buyValue - buyDoneinCategoryGroup;
      //sort then by rank
      setProcessingOrder(
        portfolioData,
        'groupCategoryWeightstoFulfill',
        'ascending',
        true,
        groupCategories.indexOf(currGroupCategory),
        'schemeRank',
        'ascending'
      );
      //LoggingUtils.info("in buyGroupCategory");
      //LoggingUtils.info(portfolioData);

      let totalBuyDone = 0;
      LoggingUtils.info(`Starting loop for currGroupCategory: , ${currGroupCategory}`);
      //loop through and sell
      for (let i = 0; i < portfolioData.length; i++) {
        LoggingUtils.info(`Trying with instrument: , ${portfolioData[i]['instrumentName']}`);
        //checking if anything can be boiught considering initial weights
        let maxPossibleBuyLeft = Math.max(0, portfolioData[i]['maxTotalBuypostIteration'] - portfolioData[i]['weightinIteration']);
        //let maxPossibleBuyLeft = Math.max(0, portfolioData[i]["maxTotalBuypostIteration"] - portfolioData[i]["buyProcessed"]);
        maxPossibleBuyLeft = maxPossibleBuyLeft > 0 ? maxPossibleBuyLeft : 0;

        let buyNeeded = portfolioData[i]['groupCategoryWeightstoFulfill'][groupCategories.indexOf(currGroupCategory)];
        LoggingUtils.info(`Buy needed from this instrument - , ${buyNeeded}`);
        //if the buy is needed to fulfill gap

        let buyCurrIteration = Math.max(0, currGroupCategoryBuy - totalBuyDone);
        buyCurrIteration = Math.min(maxPossibleBuyLeft, buyCurrIteration);

        if (buyNeeded > 0 && buyCurrIteration > 0) {
          LoggingUtils.info(`buyCurrIteration, totalBuyDone :, ${buyCurrIteration}, ${totalBuyDone}`);

          let isSell = false;
          let buyCurrIterationAmount = 0;
          let buyCurrIterationInstrumentCheck = buySellCheckforInstrument(isLumpsum, isSell, buyCurrIteration, portfolioData[i]);

          buyCurrIteration = buyCurrIterationInstrumentCheck[0]; //percent
          buyCurrIterationAmount = buyCurrIterationInstrumentCheck[1]; //amount

          LoggingUtils.info(`buyCurrIterationInstrumentCheck :, ${JSON.stringify(buyCurrIterationInstrumentCheck)}`);
          if (buyCurrIteration > 0) {
            portfolioData[i]['buyProcessed'] = portfolioData[i]['buyProcessed'] + buyCurrIteration;
            portfolioData[i]['weightinIteration'] =
              portfolioData[i]['weight'] + portfolioData[i]['sellProcessed'] + portfolioData[i]['buyProcessed'];

            totalBuyDone += buyCurrIteration;

            portfolioData[i]['buyProcessedAmount'] = portfolioData[i]['buyProcessedAmount'] + buyCurrIterationAmount;

            LoggingUtils.info(`Bought: , portfolioData[i]['instrumentId'] - , ${buyCurrIteration}, ', Rs. ', ${buyCurrIterationAmount}`);
          }

          //reclaculate values to buy
          //check if needed
          //calculateInstrumentSellNeeded(maxSellColumn);
          //calculateInstrumentBuySellNeeded(maxSellColumn, true);
        }
      }

      return totalBuyDone;
    }

    //Calculates groupCategoryWeightstoFulfill for each row of instrument the buy needed to fulfill
    //the deviation on groupCategory level, through that row alone
    function calculateInstrumentBuySellNeeded(maxColumn: string, isSell: boolean) {
      //recalculate this as we shall call this function in iteration after incremental sell
      //to configure instrument wise sell needed
      //because after each incremental sell the deviation would change (reduce)
      //NOTE: We are using weightinIteration column and not weight: weightinIteration is updated in each iterative sell
      categoryGroupTotal = GoalUtils.sumProduct(
        portfolioData,
        'weightinIteration',
        groupCategories,
        categoryCategoryGroupExposure,
        'category',
        'initialGroupCategoryWeights'
      );
      LoggingUtils.info(`currCategoryGroupWaterfall,${JSON.stringify(categoryGroupTotal)}`);

      for (let i = 0; i < portfolioData.length; i++) {
        //initialize
        portfolioData[i]['groupCategoryWeightstoFulfill'] = GoalUtils.createWtArray(groupCategories);

        if (!portfolioData[i]['canProcess']) {
          //this row can't be sold/bought... so skip
          continue;
        }

        //Find max buy/sell needed from this row instrument to be able to meet the requirement

        //update how much can be processed to achieve for the row segregated into group categories
        let currCategory = portfolioData[i]['category'];
        //get category exposures to categoryGroup
        let currCategoryCategoryGroupExposure = categoryCategoryGroupExposure[currCategory];

        for (let j = 0; j < groupCategories.length; j++) {
          let currCategoryGroup = groupCategories[j];
          let currExposure = categoryGroupTotal[j];
          let modelExposure = modelPortfolioAllocations['categoryGroupLevel'][currCategoryGroup];

          let deviation = modelExposure - currExposure; //overweight in portfolio shall give negative => sell
          //if there is a deviation
          //if sell calculate only for deviations < 0 and vici-versa for buy
          let processGroupCategory = true;
          processGroupCategory = isSell ? (deviation < 0.0 ? true : false) : deviation > 0 ? true : false;
          //if(deviation < 0.0){
          //if(deviation > 0.0){
          if (processGroupCategory) {
            //if current scheme has exposure to this categoryGroup
            if (currCategoryCategoryGroupExposure[j] > 0) {
              let sellNeededtoFillDeviation = deviation / currCategoryCategoryGroupExposure[j];
              portfolioData[i]['groupCategoryWeightstoFulfill'][j] = sellNeededtoFillDeviation;
            }
          }
        }

        //Put max sell in iteration
        if (isSell) {
          portfolioData[i]['maxTotalSellpostIteration'] = portfolioData[i][maxColumn];
        }
        //Put max buy
        if (!isSell) {
          portfolioData[i]['maxTotalBuypostIteration'] = portfolioData[i][maxColumn];
        }
      }
    }

    function sellNonRecommendedSchemes() {
      for (let i = 0; i < portfolioData.length; i++) {
        //check if not recommended
        if (portfolioData[i]['isRecoScheme'] == 'SELL') {
          let sellCurrIteration = portfolioData[i]['freeUnits'];
          let isSell = true;
          let sellCurrIterationAmount = 0;
          let sellCurrIterationInstrumentCheck = buySellCheckforInstrument(isLumpsum, isSell, sellCurrIteration, portfolioData[i]);

          sellCurrIteration = sellCurrIterationInstrumentCheck[0]; //percent
          sellCurrIterationAmount = sellCurrIterationInstrumentCheck[1]; //amount

          portfolioData[i]['sellProcessed'] = portfolioData[i]['sellProcessed'] - sellCurrIteration;
          portfolioData[i]['weightinIteration'] = portfolioData[i]['weight'] + portfolioData[i]['sellProcessed'];
          portfolioData[i]['sellProcessedAmount'] = portfolioData[i]['sellProcessedAmount'] - sellCurrIterationAmount;

          LoggingUtils.info(
            `Sold not recommended : ',
            ${portfolioData[i]['instrumentId']},
            ' - ',
            ${sellCurrIteration},
            ', Rs. ',
            ${sellCurrIterationAmount}`
          );
        }
      }
    }

    function processSell() {
      //sell one by one in priority order

      if (cleanUpNotRecommendedSchemes) {
        sellNonRecommendedSchemes();

        LoggingUtils.info('******* Non recommended Sell Done *******');
        categoryGroupTotal = GoalUtils.sumProduct(
          portfolioData,
          'weightinIteration',
          groupCategories,
          categoryCategoryGroupExposure,
          'category',
          'initialGroupCategoryWeights'
        );
        categoryGroupDeviationsTotal = GoalUtils.getAggregateDeviations(
          groupCategories,
          groupCategoriesNames,
          categoryGroupTotal,
          'categoryGroupLevel',
          'categoryGroup',
          'deviation',
          modelPortfolioAllocations
        );
        LoggingUtils.info(`Category Group Deviations after Non recommended sell: , ${JSON.stringify(categoryGroupDeviationsTotal)}`);

        assetClassTotal = GoalUtils.sumProduct(
          portfolioData,
          'weightinIteration',
          assetClasses,
          categoryAssetExposure,
          'category',
          'initialNetAssetWeights'
        );
        assetClassDeviationsTotal = GoalUtils.getAggregateDeviations(
          assetClasses,
          assetClassesNames,
          assetClassTotal,
          'assetClassLevel',
          'assetClass',
          'deviation',
          modelPortfolioAllocations
        );
        LoggingUtils.info(`Asset class Deviations after Non recommended sell: , ${JSON.stringify(assetClassDeviationsTotal)}`);
      }
      //1A. Sell of
      //a. Non-reco Category: isRecoCat = 0
      //b. freeUnits
      LoggingUtils.info('Selling P1A');
      processSellwithPriority([['isRecoCat', '==', 0]], 'freeUnits');

      //1B. Sell of
      //a. Non-reco Category: isRecoCat = 0
      //b. allUnits: maxSellPossible
      LoggingUtils.info('Selling P1B');
      processSellwithPriority([['isRecoCat', '==', 0]], 'maxSellPossible');

      //2A. Sell of
      //a. Non-reco schemes: isRecoScheme = "SELL"
      //b. freeUnits
      LoggingUtils.info('Selling P2A');
      processSellwithPriority([['isRecoScheme', '==', 'SELL']], 'freeUnits');

      //2B. Sell of
      //a. Sell Schemes: isRecoScheme = "SELL"
      //b. allUnits: maxSellPossible
      LoggingUtils.info('Selling P2B');
      processSellwithPriority([['isRecoScheme', '==', 'SELL']], 'maxSellPossible');

      //3A. Sell of
      //a. Hold Schemes: isRecoScheme = "HOLD"
      //b. freeUnits
      LoggingUtils.info('Selling P3A');
      processSellwithPriority([['isRecoScheme', '==', 'HOLD']], 'freeUnits');

      //3B. Sell of
      //a. Hold Schemes: isRecoScheme = "HOLD"
      //b. allUnits: maxSellPossible
      LoggingUtils.info('Selling P3B');
      processSellwithPriority([['isRecoScheme', '==', 'HOLD']], 'maxSellPossible');

      //4A. Sell of
      //a. Buy Schemes: isRecoScheme = "BUY"
      //b. freeUnits
      LoggingUtils.info('Selling P4A');
      processSellwithPriority([['isRecoScheme', '==', 'BUY']], 'freeUnits');

      //4B. Sell of
      //a. Buy Schemes: isRecoScheme = "BUY"
      //b. allUnits: maxSellPossible
      LoggingUtils.info('Selling P4B');
      processSellwithPriority([['isRecoScheme', '==', 'BUY']], 'maxSellPossible');

      LoggingUtils.info('******* Category Group Sell Done *******');
      categoryGroupTotal = GoalUtils.sumProduct(
        portfolioData,
        'weightinIteration',
        groupCategories,
        categoryCategoryGroupExposure,
        'category',
        'initialGroupCategoryWeights'
      );
      categoryGroupDeviationsTotal = GoalUtils.getAggregateDeviations(
        groupCategories,
        groupCategoriesNames,
        categoryGroupTotal,
        'categoryGroupLevel',
        'categoryGroup',
        'deviation',
        modelPortfolioAllocations
      );
      LoggingUtils.info(`Category Group Deviations after sell: ',${JSON.stringify(categoryGroupDeviationsTotal)} `);

      assetClassTotal = GoalUtils.sumProduct(
        portfolioData,
        'weightinIteration',
        assetClasses,
        categoryAssetExposure,
        'category',
        'initialNetAssetWeights'
      );
      assetClassDeviationsTotal = GoalUtils.getAggregateDeviations(
        assetClasses,
        assetClassesNames,
        assetClassTotal,
        'assetClassLevel',
        'assetClass',
        'deviation',
        modelPortfolioAllocations
      );

      //check if any assetClass sell left then we need to sell irrespective of categoryGroups
      //because whatever couldn't have been sold ion category Groups would be because of locked qty
      //however we have to get asset class deviations to minimum as asset class is higher priority
      setProcessingOrder(assetClassDeviationsTotal, 'deviation', 'ascending');
      LoggingUtils.info(`Asset class Deviations after sell: , ${JSON.stringify(assetClassDeviationsTotal)}`);
      //check if the top one still needs sell means >= 1 asset classes still need sell and we should do
      if (assetClassDeviationsTotal[0]['deviation'] < 0 && Math.abs(assetClassDeviationsTotal[0]['deviation']) > precisionPoint) {
        doAssetClassSellProcessing();
      }
    }

    function doAssetClassSellProcessing() {
      LoggingUtils.info('****** Deviations at assetClass exist even after categoryGroup sell.');
      LoggingUtils.info('****** This may happen when something at category level was locked and didnt allow the sell needed.');
      LoggingUtils.info('****** Now selling by assetClass. So CategoryGroup deviations may remain/enhanced.');
      LoggingUtils.info('****** Asset class deviation is higher priority.');

      //assetClassDeviationsTotal is already sorted descending
      for (let i = 0; i < assetClasses.length; i++) {
        let currAssetClass = assetClassDeviationsTotal[i]['assetClass'];
        let currAssetClassName = assetClassDeviationsTotal[i]['assetClassName'];
        let currAssetClassDeviation = assetClassDeviationsTotal[i]['deviation'];

        //do for asset class if there is sell needed
        if (currAssetClassDeviation < 0 && Math.abs(currAssetClassDeviation) >= precisionPoint) {
          let soldAssetClassValue = sellAssetClass(currAssetClass, currAssetClassName, currAssetClassDeviation);

          LoggingUtils.info(`Sold Asset class: ', ${JSON.stringify(currAssetClass)}, '::', ${JSON.stringify(currAssetClassName)}, '::', ${JSON.stringify(soldAssetClassValue)}`);

          if (Math.abs(currAssetClassDeviation - soldAssetClassValue) < precisionPoint) {
            LoggingUtils.info('Achieved asset class alignment via Asset class sell');
          } else {
            LoggingUtils.info('Could NOT achieve asset class alignment via Asset class sell');
          }
        }
      }
    }

    function sellAssetClass(currAssetClass: number, currAssetClassName: string, currAssetClassDeviation: number): number {
      LoggingUtils.info(`Trying to sell Asset class: , ${JSON.stringify(currAssetClass)}, '::', ${JSON.stringify(currAssetClassName)}, '::', ${JSON.stringify(currAssetClassDeviation)}`);
      let totalAssetSellNeeded = currAssetClassDeviation;
      //sort by rank descending so ba rank gets sold first
      setProcessingOrder(portfolioData, 'schemeRank', 'descending');

      //loop through and sell
      for (let i = 0; i < portfolioData.length; i++) {
        //only process for current asset class
        if (portfolioData[i]['assetClass'] != currAssetClass) {
          continue;
        }

        //sellProcessed is negative... note that
        let sellNeeded = Math.abs(totalAssetSellNeeded);
        let maxPossibleSellLeft = Math.max(0, portfolioData[i]['maxSellPossible'] + portfolioData[i]['sellProcessed']);
        let sellCurrIteration = Math.min(maxPossibleSellLeft, sellNeeded);

        let isSell = true;
        let sellCurrIterationAmount = 0;
        let sellCurrIterationInstrumentCheck = buySellCheckforInstrument(isLumpsum, isSell, sellCurrIteration, portfolioData[i]);

        sellCurrIteration = sellCurrIterationInstrumentCheck[0]; //percent
        sellCurrIterationAmount = sellCurrIterationInstrumentCheck[1]; //amount

        portfolioData[i]['sellProcessed'] = portfolioData[i]['sellProcessed'] - sellCurrIteration;
        portfolioData[i]['weightinIteration'] = portfolioData[i]['weight'] + portfolioData[i]['sellProcessed'];
        portfolioData[i]['sellProcessedAmount'] = portfolioData[i]['sellProcessedAmount'] - sellCurrIterationAmount;

        totalAssetSellNeeded = totalAssetSellNeeded - sellCurrIteration;

        LoggingUtils.info(`Sold: ', ${portfolioData[i]['instrumentId']}, ' - ', ${sellCurrIteration}, ', Rs. ', ${sellCurrIterationAmount}`);

        //avoid rounding off issues... it may become delta positive or so
        if (Math.abs(totalAssetSellNeeded) < precisionPoint) {
          return currAssetClassDeviation - totalAssetSellNeeded;
        }
      }

      return currAssetClassDeviation - totalAssetSellNeeded;
    }

    function processSellwithPriority(colConditionArray: any, maxSellColumn: string) {
      //1. calculate deviations at Category Group level
      //get deviations at Category Group level
      categoryGroupDeviationsTotal = GoalUtils.getAggregateDeviations(
        groupCategories,
        groupCategoriesNames,
        categoryGroupTotal,
        'categoryGroupLevel',
        'categoryGroup',
        'deviation',
        modelPortfolioAllocations
      );

      //2. put order of processing of categoryGroups
      setProcessingOrder(categoryGroupDeviationsTotal, 'deviation', 'ascending');
      //LoggingUtils.info(categoryGroupDeviationsTotal);

      //Check if any sell is needed
      //Check if the min one is negative and needs sell
      if (categoryGroupDeviationsTotal[0]['deviation'] < -1 * precisionPoint) {
      } else {
        //sell done
        LoggingUtils.info('sell is Done...');
        return true;
      }

      //3. put what can be sold or not depending on iteration and priority
      setInstrumentProcessFlag(colConditionArray);

      //4. calculate instrument wise, how much sell is needed to fiulfill the deviation with model
      //pass the maxSellColumn which may be initial total weights or the free weights
      //calculateInstrumentSellNeeded(maxSellColumn);
      calculateInstrumentBuySellNeeded(maxSellColumn, true);

      //5. execute the sell
      doSellLoops(maxSellColumn);
    }

    function doSellLoops(maxSellColumn: string) {
      //loop through sorted categories
      //for (let i=0; i<1; i++){
      for (let i = 0; i < categoryGroupDeviationsTotal.length; i++) {
        //since sell, we need to process only ones less than 0
        if (categoryGroupDeviationsTotal[i]['deviation'] < -1 * precisionPoint) {
          LoggingUtils.info(
            `Selling categoryGroup:',
            ${categoryGroupDeviationsTotal[i]['categoryGroup']},
            ' - ',
            ${categoryGroupDeviationsTotal[i]['categoryGroupName']}`
          );
          let currGroupCategory = categoryGroupDeviationsTotal[i]['categoryGroup'];
          sellGroupCategory(currGroupCategory, maxSellColumn);
        }
      }
    }

    function sellGroupCategory(currGroupCategory: number, maxSellColumn: string) {
      //to sell in group category we need to sell the one which needs minimum sell to fulfull requirement
      //since this will be sell we need to sort descending
      //=> if one scheme needs -3.5% sell to fullfill the sell needed for group-category while other needs -5%
      //=> we need to pick the -3.5% first
      //hence sort descending on groupCategoryWeightstoFulfill
      //sending the index of currGroupCategory to be sorted
      //also sort by schemeRank descending
      setProcessingOrder(
        portfolioData,
        'groupCategoryWeightstoFulfill',
        'descending',
        true,
        groupCategories.indexOf(currGroupCategory),
        'schemeRank',
        'descending'
      );

      //LoggingUtils.info(portfolioData);

      //loop through and sell
      for (let i = 0; i < portfolioData.length; i++) {
        let sellNeeded = portfolioData[i]['groupCategoryWeightstoFulfill'][groupCategories.indexOf(currGroupCategory)];
        //LoggingUtils.info(' sellneed with scheme ', portfolioData[i]["instrumentId"], " - ", sellNeeded);
        //if the sell is needed to fulfill gap
        //and instrument had any holdings to start with
        if (sellNeeded < 0 && portfolioData[i]['weight'] > 0) {
          sellNeeded = Math.abs(sellNeeded);
          //remember sellProcessed is -ve due to sell, avoid < 0
          let maxPossibleSellLeft = Math.max(0, portfolioData[i]['maxTotalSellpostIteration'] + portfolioData[i]['sellProcessed']);
          let sellCurrIteration = Math.min(maxPossibleSellLeft, sellNeeded);

          //LoggingUtils.info('sending to check: scheme, max, current needed', portfolioData[i]["instrumentId"], " : ", maxPossibleSellLeft, sellCurrIteration);

          let isSell = true;
          let sellCurrIterationAmount = 0;
          let sellCurrIterationInstrumentCheck = buySellCheckforInstrument(isLumpsum, isSell, sellCurrIteration, portfolioData[i]);

          sellCurrIteration = sellCurrIterationInstrumentCheck[0]; //percent
          sellCurrIterationAmount = sellCurrIterationInstrumentCheck[1]; //amount
          //LoggingUtils.info('returned %: ', sellCurrIteration);

          portfolioData[i]['sellProcessed'] = portfolioData[i]['sellProcessed'] - sellCurrIteration;
          portfolioData[i]['weightinIteration'] = portfolioData[i]['weight'] + portfolioData[i]['sellProcessed'];
          portfolioData[i]['sellProcessedAmount'] = portfolioData[i]['sellProcessedAmount'] - sellCurrIterationAmount;

          LoggingUtils.info(`Sold: ', portfolioData[i]['instrumentId'], ' - ', ${sellCurrIteration}, ', Rs. ', ${sellCurrIterationAmount}`);

          //reclaculate values to sell
          //calculateInstrumentSellNeeded(maxSellColumn);
          calculateInstrumentBuySellNeeded(maxSellColumn, true);
        }
      }
    }

    function buySellCheckforInstrument(isLumpsum: boolean, isSell: boolean, processCurrIteration: number, portfolioDataRow: any): any {
      //Convert % to amount
      let toProcessAmount = processCurrIteration * portfolioDataRow['portfolioTotalAmount'];
      let toProcessPercent = processCurrIteration;

      //if it is a SIP and needs to be sold then we can only STOP the SIP
      //so we would make the entire amount as sell
      //while creating txn we shall configure that as STOP SIP
      if (!isLumpsum && isSell) {
        toProcessAmount = portfolioDataRow['amount'];
        toProcessPercent = portfolioDataRow['initialWeight'];

        return [toProcessPercent, toProcessAmount];
      }

      let hasInvestment = false;
      hasInvestment = portfolioDataRow['amount'] != 0 ? true : false;

      let minMaxInvestible = getMinMaxTransaction(isLumpsum, isSell, hasInvestment, portfolioDataRow);

      let minProcess = minMaxInvestible[0];
      let maxProcess = minMaxInvestible[1];

      //fix for case where min is fine in DB but max is provided as zero (null we have handled in handleNull...)
      //checking here is min is fine but max is 0 then set max to big value
      maxProcess = maxProcess < minProcess ? 1000000000 : maxProcess; //100 crores if zero

      let amountMultiplier = 1;

        amountMultiplier = isSell
          ? handleNullMinMaxParams(portfolioDataRow['redemptionAmountMultiplier'], 'mult')
          : handleNullMinMaxParams(portfolioDataRow['purchaseAmountMultiplier'], 'mult');

      amountMultiplier = amountMultiplier == 0 ? 1 : amountMultiplier;

      toProcessAmount = Math.round(toProcessAmount / amountMultiplier) * amountMultiplier;
      //SS-Dec22: to handle trailing 0000000001 idiosyncracies
      toProcessAmount = parseFloat(toProcessAmount.toFixed(2));

      toProcessAmount = toProcessAmount >= minProcess ? toProcessAmount : 0;
      toProcessAmount = toProcessAmount <= maxProcess ? toProcessAmount : maxProcess;

      toProcessPercent = toProcessAmount / portfolioDataRow['portfolioTotalAmount'];

      return [toProcessPercent, toProcessAmount];
    }

    function getMinMaxTransaction(isLumpsum: boolean, isSell: boolean, hasInvestment: boolean, portfolioDataRow: any): any {
      //not working on quantity and multiples as of now

      let isProcessAllowed = false;
      let maxProcess = 1000000000;
      let minProcess = 0;

      //Lumpsum Buy
      if (isLumpsum && !isSell) {
        isProcessAllowed = portfolioDataRow['isPurchaseAllowed'];

        if (!isProcessAllowed) {
          return [0, 0];
        }

        if (hasInvestment) {
          maxProcess = handleNullMinMaxParams(portfolioDataRow['maxAdditionalInvestmentAmount'], 'max');
          minProcess = handleNullMinMaxParams(portfolioDataRow['minAdditionalInvestmentAmount'], 'min');
        } else {
          maxProcess = handleNullMinMaxParams(portfolioDataRow['maxInvestmentAmount'], 'max');
          minProcess = handleNullMinMaxParams(portfolioDataRow['minInvestmentAmount'], 'min');
        }
      }

      //Lumpsum Sell
      if (isLumpsum && isSell) {
        isProcessAllowed = portfolioDataRow['isRedemptionAllowed'];

        if (!isProcessAllowed) {
          return [0, 0];
        }

        maxProcess = handleNullMinMaxParams(portfolioDataRow['maxRedemptionAmount'], 'max');
        minProcess = handleNullMinMaxParams(portfolioDataRow['minRedemptionAmount'], 'min');
      }

      //SIP Buy
      //Note: while forming data we have created the data structure in same way for SIP/LS
      //Though the params name for SIP are different.. like for SIP it is isSIPAllowed etc.
      if (!isLumpsum && !isSell) {
        isProcessAllowed = portfolioDataRow['isPurchaseAllowed'];

        if (!isProcessAllowed) {
          return [0, 0];
        }

        maxProcess = handleNullMinMaxParams(portfolioDataRow['maxInvestmentAmount'], 'max');
        minProcess = handleNullMinMaxParams(portfolioDataRow['minInvestmentAmount'], 'min');

        //only for browser test version as here we have different columns
        //so here overriding with sip columns with ... in main node  code we have managed with same columns
        //maxProcess = handleNullMinMaxParams(portfolioDataRow['maxSIPAmount'], 'max');
        //minProcess = handleNullMinMaxParams(portfolioDataRow['minSIPAmount'], 'min');
      }

      return [minProcess, maxProcess];
    }

    function handleNullMinMaxParams(inputParam: number | null, minMaxMult: string): any {
      let isEmpty = false;
      let returnParam = inputParam;

      if (!inputParam) {
        isEmpty = true;
      } else {
        if (inputParam == 0) {
          isEmpty = true;
        }
      }

      //if empty put default values
      if (isEmpty) {
        switch (minMaxMult) {
          case 'min':
            returnParam = 0;
            break;
          case 'max':
            returnParam = 1000000000; //100 crores
            break;
          case 'mult':
            returnParam = 0.01;
            break;
          default:
            returnParam = inputParam;
        }
      }

      return returnParam;
    }

    function setProcessingOrder(
      objectArray: any,
      sortProperty: string,
      order: string,
      sortPropertyisArray = false,
      arrayIndexToSort = 0,
      sortSecondProperty = '',
      orderSecond = 'ascending',
      sortSecondPropertyisArray = false,
      arrayIndexToSortSecond = 0
    ) {
      objectArray.sort((a: any, b: any) => {
        if (sortSecondProperty == '') {
          let aFirst = sortPropertyisArray ? a[sortProperty][arrayIndexToSort] : a[sortProperty];
          let bFirst = sortPropertyisArray ? b[sortProperty][arrayIndexToSort] : b[sortProperty];
          let firstTrue = order == 'ascending' ? aFirst - bFirst : bFirst - aFirst;

          return firstTrue;
        } else {
          let aFirst = sortPropertyisArray ? a[sortProperty][arrayIndexToSort] : a[sortProperty];
          let bFirst = sortPropertyisArray ? b[sortProperty][arrayIndexToSort] : b[sortProperty];
          let aSecond = sortSecondPropertyisArray ? a[sortSecondProperty][arrayIndexToSortSecond] : a[sortSecondProperty];
          let bSecond = sortSecondPropertyisArray ? b[sortSecondProperty][arrayIndexToSortSecond] : b[sortSecondProperty];

          let firstTrue = order == 'ascending' ? aFirst - bFirst : bFirst - aFirst;
          let secondTrue = orderSecond == 'ascending' ? aSecond - bSecond : bSecond - aSecond;

          return firstTrue || secondTrue;
        }
      });
    }

    //return asset to be processed for buy
    function getBuyAssetClasswithWaterfall(): any {
      //get total buys done
      //NOTE1: We are using buyProcessed column for totalBuys done which shall disturb expected values in output initialNetAssetWeights column
      //So we shall revert immediately once we have the data calculated
      let totalBuysDone = GoalUtils.sumProduct(
        portfolioData,
        'buyProcessed',
        assetClasses,
        categoryAssetExposure,
        'category',
        'initialNetAssetWeights'
      );
      //NOTE2: Reverting
      assetClassTotal = GoalUtils.sumProduct(
        portfolioData,
        'weightinIteration',
        assetClasses,
        categoryAssetExposure,
        'category',
        'initialNetAssetWeights'
      );

      let totalCurrWeight = 0;
      let totalBought = 0;
      for (let i = 0; i < assetClassTotal.length; i++) {
        totalCurrWeight += assetClassTotal[i];
        totalBought += totalBuysDone[i];
      }

      //check if this is additional investment without rebalancing case
      //if Yes then we need not rebalance everything and just fill in
      //otherwise we can keep buying to fill everything needed
      //let maxBuy = toDoRebalancing ? percentCentBase - totalCurrWeight : additionalBuy - totalBought;
      let maxBuy = percentCentBase - totalCurrWeight;
      //keeeping it positive
      maxBuy = Math.max(0, maxBuy);

      let buyAssetObject = {};

      if (maxBuy < precisionPoint) {
        LoggingUtils.info('All buy done.');
        buyAssetObject = {assetClass: '', buyValue: 0};
        return buyAssetObject;
      }

      //Calculate deviations at asset class level
      //calculate/refresh assetClasstassetClassTotalotals first
      //NOTE: We are using weightinIteration column and not weight:
      //weightinIteration is updated in each iteration and includes any sell/buy that may have happened
      assetClassTotal = GoalUtils.sumProduct(
        portfolioData,
        'weightinIteration',
        assetClasses,
        categoryAssetExposure,
        'category',
        'initialNetAssetWeights'
      );
      //get the deviations at Asset Class level
      assetClassDeviationsTotal = GoalUtils.getAggregateDeviations(
        assetClasses,
        assetClassesNames,
        assetClassTotal,
        'assetClassLevel',
        'assetClass',
        'deviation',
        modelPortfolioAllocations
      );
      LoggingUtils.info(`assetClassDeviationsTotal: , ${JSON.stringify(assetClassDeviationsTotal)}`);
      buyAssetObject = getBuyObjectWithWaterfall(assetClassDeviationsTotal, 'assetClass', maxBuy);

      return buyAssetObject;
    }

    //return category group to be processed for buy
    function getBuyCategoryGroupwithWaterfall(buyAssetObject: any): any {
      let processAsset = '';
      let processValue = percentCentBase; //keep as 100% by default
      let processAssetIndex = 0;

      if (Object.keys(buyAssetObject).length === 0) {
        //Implies there is no deviation at assetClass level
        //category levels may be there
        //so we will allow category levels to flow freely and buy whatever max is possible
        //because if it was additional buy then there would be asset class deviation which was fulfilled with buy in earlier iteration
        //and buyLeft would have been zero
        //so this can only be a case if free flow
        //SHARAD CHECK: check if in additional case it can happen that this  can come with limited buy
        LoggingUtils.info('Doing categoryGroup waterfall for all categoryGroups');
      } else {
        //
        //put values for non empty data received
        processAsset = buyAssetObject.assetClass;
        processValue = buyAssetObject.buyValue;
        processAssetIndex = assetClasses.indexOf(processAsset);
        LoggingUtils.info(`Doing categoryGroup waterfall ONLY for assetClass in ', ${processAsset}, ' : ', ${processAssetIndex}`);
      }

      //process the categories within this asset class

      //Calculate deviations at category level
      //calculate/refresh categoryGroupTotal first
      //NOTE: We are using weightinIteration column and not weight:
      //weightinIteration is updated in each iteration and includes any sell/buy that may have happened
      categoryGroupTotal = GoalUtils.sumProduct(
        portfolioData,
        'weightinIteration',
        groupCategories,
        categoryCategoryGroupExposure,
        'category',
        'initialGroupCategoryWeights'
      );
      //get deviations at Category Group level
      categoryGroupDeviationsTotal = GoalUtils.getAggregateDeviations(
        groupCategories,
        groupCategoriesNames,
        categoryGroupTotal,
        'categoryGroupLevel',
        'categoryGroup',
        'deviation',
        modelPortfolioAllocations
      );
      LoggingUtils.info(`categoryGroupDeviationsTotal,${JSON.stringify(categoryGroupDeviationsTotal)}`);

      //filter the category array for asset class that has to be processed
      let tempCategoryDeviations = [];

      for (let j = 0; j < categoryGroupDeviationsTotal.length; j++) {
        let tempCategoryGroup = categoryGroupDeviationsTotal[j].categoryGroup;
        //if the object has come empty then we need to apply waterfall across all categoryGroups
        if (processAsset == '') {
          tempCategoryDeviations.push(categoryGroupDeviationsTotal[j]);
        } else {
          //otherWise we need to apply waterfall only in categoryGroups of received assetClass
          //because we need to fill that right now
          //check if this belongs to the assetClass under iteration
          //and if this has deviation
          LoggingUtils.info(
            `tempCategoryGroup, processAssetIndex, deviation --- ',
            ${JSON.stringify(tempCategoryGroup)},
            ' : ',
            ${processAssetIndex},
            ' : ',
            ${JSON.stringify(categoryGroupDeviationsTotal[j].deviation)}`
          );
          if (categoryGroupAssetExposure[tempCategoryGroup][processAssetIndex] == 1 && categoryGroupDeviationsTotal[j].deviation > 0) {
            tempCategoryDeviations.push(categoryGroupDeviationsTotal[j]);
          }
        }
      }

      //we will get category to be bought in as a waterfall
      //Handle for case where assetClass deviation is sorted and categoryGroup is remaining
      //In that case processValue received shall be 0
      //So let's give processValue as 1 in that case

      let buyCategoryGroupObject = getBuyObjectWithWaterfall(tempCategoryDeviations, 'categoryGroup', processValue);

      return buyCategoryGroupObject;
    }

    function getBuyObjectWithWaterfall(inputArray: any, keyName: any, maxBuy: number): any {
      //sort the asset class array by deviations to pick the first asset class
      setProcessingOrder(inputArray, 'deviation', 'descending');

      //calculate waterfall
      let buyObject: any = {};
      //pick top 2 and calculate waterfall buy amount
      let topItem = inputArray[0];
      let secondItem: any = {};

      //if we have money to do all buys then waterfall isn't needed as everything shall be fulfilled
      //sabka maalik ek hai case
      let totalDeviation = 0;
      for (let i = 0; i < inputArray.length; i++) {
        //add the buys
        totalDeviation += inputArray[i].deviation > 0 ? inputArray[i].deviation : 0;
      }

      if (Math.abs(totalDeviation - maxBuy) < precisionPoint) {
        //waterfall not needed
        //send top entire item for buy
        buyObject[keyName] = topItem[keyName];
        buyObject['buyValue'] = topItem.deviation;

        return buyObject;
      }

      //topitem and seconditem won't do as there can be multiple which are equal
      //besides for waterfall, we will use waterfallTolerance to find the top rather than any difference
      //this would avoid inability to buy/sell because of very low amounts
      //waterfallTolerance

      //if the % is small put it in one category to avoid non possibility of buying small amount
      if (maxBuy <= waterfallTolerance) {
        buyObject[keyName] = topItem[keyName];
        buyObject['buyValue'] = maxBuy;
        return buyObject;
      }

      if (inputArray.length == 1) {
        //put dummy second item
        secondItem = {keyName: '', deviation: 0};
      } else {
        secondItem = inputArray[1];
      }

      //only do if Buy is needed
      //deviation = Model - Portfolio => Underweight is Positive
      if (topItem.deviation > 0) {
        //handle if deviation is negative

        let waterfallBase = Math.max(secondItem.deviation, 0);
        buyObject[keyName] = topItem[keyName];

        if (topItem.deviation - waterfallBase > waterfallTolerance) {
          buyObject['buyValue'] = Math.min(topItem.deviation - waterfallBase, maxBuy);
        } else {
          //if items are equal
          if (topItem.deviation - waterfallBase < waterfallTolerance && topItem.deviation - waterfallBase >= 0) {
            buyObject['buyValue'] = Math.min(topItem.deviation * 2, maxBuy) / 2;
          }
        }
      }

      return buyObject;
    }

    function setInstrumentProcessFlag(colConditionArray: any) {
      for (let i = 0; i < portfolioData.length; i++) {
        //initialize
        portfolioData[i]['canProcess'] = false;

        //Update rows that can be processed in this iteration as per conditions, if any
        //process through conditions for each row
        let canProcess = 1;
        for (let j = 0; j < colConditionArray.length; j++) {
          //conditions to be tested as AND
          //if(portfolioData[i][colConditionArray[j][0]] == colConditionArray[j][1]){
          if (dynamicCompare(portfolioData[i][colConditionArray[j][0]], colConditionArray[j][1], colConditionArray[j][2])) {
            //update canProcess value
            canProcess = canProcess * 1;
          } else {
            canProcess = canProcess * 0;
          }
          //LoggingUtils.info(portfolioData[i][colConditionArray[j][0]], colConditionArray[j][1]);
        }

        portfolioData[i]['canProcess'] = canProcess == 1 ? true : false;
      }
    }

    function dynamicCompare(post: any, operator: string, value: any): boolean {
      switch (operator) {
        case '>':
          return post > value;
        case '<':
          return post < value;
        case '>=':
          return post >= value;
        case '<=':
          return post <= value;
        case '==':
          return post == value;
        case '!=':
          return post != value;
        case '===':
          return post === value;
        case '!==':
          return post !== value;
        case 'boolean':
          return value ? post : !post; //if true is required then return the post else !post ... post => value in data
        default:
          return false;
      }
    }
  }
}
