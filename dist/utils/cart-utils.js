"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartUtils = void 0;
const constants_1 = require("../constants");
const logging_utils_1 = require("./logging-utils");
const math = require('mathjs');
class CartUtils {
    static transactionValidator(transactionItem) {
        const validationFunctions = {
            1: freshPurchaseValidator,
            2: additionalPurchaseValidator,
            3: partialRedemptionValidator,
            4: fullRedemptionValidator,
            11: switchValidator
        };
        const systematicValidationFunctions = {
            1: sipFreshPurchaseValidator,
            2: sipAdditionalPurchaseValidator,
            3: swpPartialRedemptionValidator,
            4: swpFullRedemptionValidator,
            11: stpSwitchValidator
        };
        if (transactionItem.transactionSubType === constants_1.Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].systematic.value) {
            console.log('Transaction validator: in sip validation');
            let itemCheck = {
                isValid: true,
                message: ''
            };
            if (systematicValidationFunctions[transactionItem.transactionTypeId]) {
                console.log('Validating for transaction type: ', transactionItem.transactionTypeId);
                itemCheck = systematicValidationFunctions[transactionItem.transactionTypeId](transactionItem);
            }
            else {
                itemCheck = {
                    isValid: true,
                    message: 'Passed without validation as function not active/found'
                };
            }
            return itemCheck;
        }
        if (transactionItem.transactionSubType === constants_1.Option.GLOBALOPTIONS['TRANSACTIONSUBTYPE'].normal.value) {
            console.log('Transaction validator: in Lumpsum validation');
            let itemCheck = {
                isValid: true,
                message: ''
            };
            if (validationFunctions[transactionItem.transactionTypeId]) {
                console.log('Validating for transaction type: ', transactionItem.transactionTypeId);
                itemCheck = validationFunctions[transactionItem.transactionTypeId](transactionItem);
            }
            else {
                itemCheck = {
                    isValid: true,
                    message: 'Passed without validation as function not active/found'
                };
            }
            return itemCheck;
        }
        function freshPurchaseValidator(transactionItem) {
            let overallCheck = {};
            const productDetails = transactionItem.instrument.mutualFundDetails;
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isPurchaseAllowed, true, 'Purchase Allowed']],
                [numericMorethanZeroCheck, [transactionItem.totalAmount, 'Amount']],
                //[serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, false]],//serviceProviderAccount should NOT be there
                [rangeCheck, [productDetails.minInvestmentAmount, productDetails.maxInvestmentAmount, transactionItem.totalAmount, 'Amount']],
                [multiplierCheck, [productDetails.purchaseAmountMultiplier, transactionItem.totalAmount, 'Amount']] //multiplier check for amount
            ];
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function additionalPurchaseValidator(transactionItem) {
            let overallCheck = {};
            const productDetails = transactionItem.instrument.mutualFundDetails;
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isPurchaseAllowed, true, 'Purchase Allowed']],
                [numericMorethanZeroCheck, [transactionItem.totalAmount, 'Amount']],
                [serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, true]],
                [rangeCheck, [productDetails.minAdditionalInvestmentAmount, productDetails.maxAdditionalInvestmentAmount, transactionItem.totalAmount, 'Amount']],
                [multiplierCheck, [productDetails.purchaseAmountMultiplier, transactionItem.totalAmount, 'Amount']] //multiplier check for amount        
            ];
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function partialRedemptionValidator(transactionItem) {
            let overallCheck = {};
            const productDetails = transactionItem.instrument.mutualFundDetails;
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isRedemptionAllowed, true, 'Redemption Allowed']],
                [serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, true]] //serviceProviderAccount should be there
            ];
            //only one of quantity or amount should be provided and we should push those checks
            if ((transactionItem.quantity && transactionItem.totalAmount)) {
                overallCheck = {
                    isValid: false,
                    message: 'Quantity and Amount both can not be present'
                };
                return overallCheck;
            }
            if ((!transactionItem.quantity && !transactionItem.totalAmount)) {
                overallCheck = {
                    isValid: false,
                    message: 'One of Quantity and Amount must be provided'
                };
                return overallCheck;
            }
            if (transactionItem.quantity) {
                validationSets.push([numericMorethanZeroCheck, [transactionItem.quantity, 'Quantity']]);
                validationSets.push([rangeCheck, [productDetails.minRedemptionQuantity, productDetails.maxRedemptionQuantity, transactionItem.quantity, 'Quantity']]);
                validationSets.push([multiplierCheck, [productDetails.redemptionQuantityMultiplier, transactionItem.quantity, 'Quantity']]);
            }
            else {
                validationSets.push([numericMorethanZeroCheck, [transactionItem.totalAmount, 'Amount']]);
                validationSets.push([rangeCheck, [productDetails.minRedemptionAmount, productDetails.maxRedemptionAmount, transactionItem.totalAmount, 'Amount']]);
                validationSets.push([multiplierCheck, [productDetails.redemptionAmountMultiplier, transactionItem.totalAmount, 'Amount']]);
            }
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function fullRedemptionValidator(transactionItem) {
            let overallCheck = {};
            const productDetails = transactionItem.instrument.mutualFundDetails;
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isRedemptionAllowed, true, 'Redemption Allowed']],
                [serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, true]] //serviceProviderAccount should be there
            ];
            //no quantity  or amount checks... even if they are there they would be ignored
            //since it's a full sell
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function sipFreshPurchaseValidator(transactionItem) {
            let overallCheck = {};
            const productDetails = transactionItem.instrument.mutualFundDetails;
            let systematicMethodType = constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.sip.value;
            let frequency = transactionItem.frequency;
            let productDetailRows = transactionItem.instrument.mutualFundDetails.systematicMethodSettings;
            if (!productDetailRows) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method details info not found'
                };
                return overallCheck;
            }
            //filter systematic method settings to get relevant row for systematicType and frequency
            let systematicDetailsArray = productDetailRows === null || productDetailRows === void 0 ? void 0 : productDetailRows.filter((detailItem) => {
                if ((detailItem.frequency == frequency) && (detailItem.systematicMethodType == systematicMethodType)) {
                    return detailItem;
                }
            });
            //there should be only 1 row as output
            if (systematicDetailsArray.length != 1) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method info not found for given frequency and systematic type'
                };
                return overallCheck;
            }
            let systematicDetails = systematicDetailsArray[0];
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isSIPAllowed, true, 'SIP Allowed']],
                [numericMorethanZeroCheck, [transactionItem.totalAmount, 'Amount']],
                [numericMorethanZeroCheck, [transactionItem.frequency, 'Frequency']],
                [numericMorethanZeroCheck, [transactionItem.frequencyDay, 'Installment date']],
                [numericMorethanZeroCheck, [transactionItem.transactionCount, 'TransactionCount']],
                //[serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, false]],//serviceProviderAccount should NOT be there
                [rangeCheck, [systematicDetails.minInstallmentAmount, systematicDetails.maxInstallmentAmount, transactionItem.totalAmount, 'Amount']],
                [rangeCheck, [systematicDetails.minInstallmentNumber, systematicDetails.maxInstallmentNumber, transactionItem.transactionCount, 'Transaction Count']],
                [multiplierCheck, [systematicDetails.multiplier, transactionItem.totalAmount, 'Amount']],
                [validSystematicDates, [systematicDetails.dates, transactionItem.frequencyDay, 'Installment Date']] //frequency day is in allowed dates
            ];
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function sipAdditionalPurchaseValidator(transactionItem) {
            let overallCheck = {};
            const productDetails = transactionItem.instrument.mutualFundDetails;
            let systematicMethodType = constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.sip.value;
            let frequency = transactionItem.frequency;
            let productDetailRows = transactionItem.instrument.mutualFundDetails.systematicMethodSettings;
            if (!productDetailRows) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method details info not found'
                };
                return overallCheck;
            }
            //filter systematic method settings to get relevant row for systematicType and frequency
            let systematicDetailsArray = productDetailRows === null || productDetailRows === void 0 ? void 0 : productDetailRows.filter((detailItem) => {
                if ((detailItem.frequency == frequency) && (detailItem.systematicMethodType == systematicMethodType)) {
                    return detailItem;
                }
            });
            //there should be only 1 row as output
            if (systematicDetailsArray.length != 1) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method info not found for given frequency and systematic type'
                };
                return overallCheck;
            }
            let systematicDetails = systematicDetailsArray[0];
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isSIPAllowed, true, 'SIP Allowed']],
                [numericMorethanZeroCheck, [transactionItem.totalAmount, 'Amount']],
                [numericMorethanZeroCheck, [transactionItem.frequency, 'Frequency']],
                [numericMorethanZeroCheck, [transactionItem.frequencyDay, 'Installment date']],
                [numericMorethanZeroCheck, [transactionItem.transactionCount, 'TransactionCount']],
                [serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, true]],
                [rangeCheck, [systematicDetails.minInstallmentAmount, systematicDetails.maxInstallmentAmount, transactionItem.totalAmount, 'Amount']],
                [rangeCheck, [systematicDetails.minInstallmentNumber, systematicDetails.maxInstallmentNumber, transactionItem.transactionCount, 'Transaction Count']],
                [multiplierCheck, [systematicDetails.multiplier, transactionItem.totalAmount, 'Amount']],
                [validSystematicDates, [systematicDetails.dates, transactionItem.frequencyDay, 'Installment Date']] //frequency day is in allowed dates
            ];
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function stpSwitchValidator(transactionItem) {
            let overallCheck = {};
            //LoggingUtils.info(`in stpSwitchValidator: ${JSON.stringify(modelPortfolio)}`);
            logging_utils_1.LoggingUtils.info(`in stpSwitchValidator`);
            const productDetails = transactionItem.secondaryInstrument.mutualFundDetails;
            let systematicMethodType = constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.stp.value;
            let frequency = transactionItem.frequency;
            //for STP the row for secondaryInstrument is needed
            let productDetailRows = null;
            if (transactionItem.secondaryInstrument) {
                productDetailRows = transactionItem.secondaryInstrument.mutualFundDetails.systematicMethodSettings;
            }
            if (!productDetailRows) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method details info not found for to-instrument'
                };
                return overallCheck;
            }
            //filter systematic method settings to get relevant row for systematicType and frequency
            let systematicDetailsArray = productDetailRows === null || productDetailRows === void 0 ? void 0 : productDetailRows.filter((detailItem) => {
                if ((detailItem.frequency == frequency) && (detailItem.systematicMethodType == systematicMethodType)) {
                    return detailItem;
                }
            });
            //there should be only 1 row as output
            if (systematicDetailsArray.length != 1) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method info not found for to-instrument, for given frequency and systematic type'
                };
                return overallCheck;
            }
            let systematicDetails = systematicDetailsArray[0];
            logging_utils_1.LoggingUtils.info(`SystematicDetails: ${JSON.stringify(systematicDetails)}`);
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isSTPAllowed, true, 'STP Allowed']],
                // [miscBooleanCheck, [productDetails.isRedemptionAllowed, true, 'Redemption Allowed']],
                [numericMorethanZeroCheck, [transactionItem.frequency, 'Frequency']],
                [numericMorethanZeroCheck, [transactionItem.frequencyDay, 'Installment date']],
                [numericMorethanZeroCheck, [transactionItem.transactionCount, 'TransactionCount']],
                //[serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, true]],//serviceProviderAccount should be there
                [rangeCheck, [systematicDetails.minInstallmentNumber, systematicDetails.maxInstallmentNumber, transactionItem.transactionCount, 'Transaction Count']],
                [validSystematicDates, [systematicDetails.dates, transactionItem.frequencyDay, 'Installment Date']] //frequency day is in allowed dates
            ];
            //only one of quantity or amount should be provided and we should push those checks
            if ((transactionItem.quantity && transactionItem.totalAmount)) {
                overallCheck = {
                    isValid: false,
                    message: 'Quantity and Amount both can not be present'
                };
                return overallCheck;
            }
            if ((!transactionItem.quantity && !transactionItem.totalAmount)) {
                overallCheck = {
                    isValid: false,
                    message: 'One of Quantity and Amount must be provided'
                };
                return overallCheck;
            }
            if (transactionItem.quantity) {
                validationSets.push([numericMorethanZeroCheck, [transactionItem.quantity, 'Quantity']]);
                validationSets.push([rangeCheck, [systematicDetails.minInstallmentQuantity, systematicDetails.maxInstallmentQuantity, transactionItem.quantity, 'Quantity']]);
                let quantityMultiplier = systematicDetails.quantityMultiplier ? systematicDetails.quantityMultiplier : 0.01;
                validationSets.push([multiplierCheck, [quantityMultiplier, transactionItem.quantity, 'Quantity']]);
            }
            else {
                validationSets.push([numericMorethanZeroCheck, [transactionItem.totalAmount, 'Amount']]);
                validationSets.push([rangeCheck, [systematicDetails.minInstallmentAmount, systematicDetails.maxInstallmentAmount, transactionItem.totalAmount, 'Amount']]);
                validationSets.push([multiplierCheck, [systematicDetails.multiplier, transactionItem.totalAmount, 'Amount']]);
            }
            logging_utils_1.LoggingUtils.info(`validationSets: ${JSON.stringify(validationSets)}`);
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function switchValidator(transactionItem) {
            let overallCheck = {};
            //LoggingUtils.info(`in stpSwitchValidator: ${JSON.stringify(modelPortfolio)}`);
            logging_utils_1.LoggingUtils.info(`in switchValidator`);
            const productDetails = transactionItem.instrument.mutualFundDetails;
            const productDetailsSecondary = transactionItem.secondaryInstrument.mutualFundDetails;
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isSwitchOutAllowed, true, 'SwitchOut Allowed']],
                [miscBooleanCheck, [productDetailsSecondary.isSwitchInAllowed, true, 'SwitchIn Allowed']],
                [serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, true]] //serviceProviderAccount should be there
            ];
            //only one of quantity or amount should be provided and we should push those checks
            if ((transactionItem.quantity && transactionItem.totalAmount)) {
                overallCheck = {
                    isValid: false,
                    message: 'Quantity and Amount both can not be present'
                };
                return overallCheck;
            }
            if ((!transactionItem.quantity && !transactionItem.totalAmount)) {
                overallCheck = {
                    isValid: false,
                    message: 'One of Quantity and Amount must be provided'
                };
                return overallCheck;
            }
            if (transactionItem.totalAmount) {
                let minInFund = productDetailsSecondary.minInvestmentAmount ? productDetailsSecondary.minInvestmentAmount : 0;
                let maxInFund = productDetailsSecondary.maxInvestmentAmount ? productDetailsSecondary.maxInvestmentAmount : 1000000000;
                let minOutFund = productDetails.minRedemptionAmount ? productDetails.minRedemptionAmount : 0;
                let maxOutFund = productDetails.maxRedemptionAmount ? productDetails.maxRedemptionAmount : 1000000000;
                let minOverall = Math.max(minInFund, minOutFund);
                let maxOverall = Math.min(maxInFund, maxOutFund);
                validationSets.push([numericMorethanZeroCheck, [transactionItem.totalAmount, 'Amount']]);
                validationSets.push([rangeCheck, [minOverall, maxOverall, transactionItem.totalAmount, 'Amount']]);
                validationSets.push([multiplierCheck, [productDetailsSecondary.purchaseAmountMultiplier, transactionItem.totalAmount, 'Amount']]);
            }
            else {
                //quantity check 
                //we will check by redemption quantity
                let minOverall = productDetails.minRedemptionQuantity;
                let maxOverall = productDetails.maxRedemptionQuantity;
                validationSets.push([numericMorethanZeroCheck, [transactionItem.quantity, 'Quantity']]);
                validationSets.push([rangeCheck, [minOverall, maxOverall, transactionItem.quantity, 'Quantity']]);
                validationSets.push([multiplierCheck, [productDetails.redemptionQuantityMultiplier, transactionItem.quantity, 'Quantity']]);
            }
            logging_utils_1.LoggingUtils.info(`validationSets: ${JSON.stringify(validationSets)}`);
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function swpPartialRedemptionValidator(transactionItem) {
            let overallCheck = {};
            const productDetails = transactionItem.instrument.mutualFundDetails;
            let systematicMethodType = constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.swp.value;
            let frequency = transactionItem.frequency;
            let productDetailRows = transactionItem.instrument.mutualFundDetails.systematicMethodSettings;
            if (!productDetailRows) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method details info not found'
                };
                return overallCheck;
            }
            //filter systematic method settings to get relevant row for systematicType and frequency
            let systematicDetailsArray = productDetailRows === null || productDetailRows === void 0 ? void 0 : productDetailRows.filter((detailItem) => {
                if ((detailItem.frequency == frequency) && (detailItem.systematicMethodType == systematicMethodType)) {
                    return detailItem;
                }
            });
            //there should be only 1 row as output
            if (systematicDetailsArray.length != 1) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method info not found for given frequency and systematic type'
                };
                return overallCheck;
            }
            let systematicDetails = systematicDetailsArray[0];
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isSWPAllowed, true, 'SWP Allowed']],
                // [miscBooleanCheck, [productDetails.isRedemptionAllowed, true, 'Redemption Allowed']],
                [numericMorethanZeroCheck, [transactionItem.frequency, 'Frequency']],
                [numericMorethanZeroCheck, [transactionItem.frequencyDay, 'Installment date']],
                [numericMorethanZeroCheck, [transactionItem.transactionCount, 'TransactionCount']],
                [serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, true]],
                [rangeCheck, [systematicDetails.minInstallmentNumber, systematicDetails.maxInstallmentNumber, transactionItem.transactionCount, 'Transaction Count']],
                [validSystematicDates, [systematicDetails.dates, transactionItem.frequencyDay, 'Installment Date']] //frequency day is in allowed dates
            ];
            //only one of quantity or amount should be provided and we should push those checks
            if ((transactionItem.quantity && transactionItem.totalAmount)) {
                overallCheck = {
                    isValid: false,
                    message: 'Quantity and Amount both can not be present'
                };
                return overallCheck;
            }
            if ((!transactionItem.quantity && !transactionItem.totalAmount)) {
                overallCheck = {
                    isValid: false,
                    message: 'One of Quantity and Amount must be provided'
                };
                return overallCheck;
            }
            if (transactionItem.quantity) {
                validationSets.push([numericMorethanZeroCheck, [transactionItem.quantity, 'Quantity']]);
                validationSets.push([rangeCheck, [systematicDetails.minInstallmentQuantity, systematicDetails.maxInstallmentQuantity, transactionItem.quantity, 'Quantity']]);
                let quantityMultiplier = systematicDetails.quantityMultiplier ? systematicDetails.quantityMultiplier : 0.01;
                validationSets.push([multiplierCheck, [quantityMultiplier, transactionItem.quantity, 'Quantity']]);
            }
            else {
                validationSets.push([numericMorethanZeroCheck, [transactionItem.totalAmount, 'Amount']]);
                validationSets.push([rangeCheck, [systematicDetails.minInstallmentAmount, systematicDetails.maxInstallmentAmount, transactionItem.totalAmount, 'Amount']]);
                validationSets.push([multiplierCheck, [systematicDetails.multiplier, transactionItem.totalAmount, 'Amount']]);
            }
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function swpFullRedemptionValidator(transactionItem) {
            let overallCheck = {};
            const productDetails = transactionItem.instrument.mutualFundDetails;
            let systematicMethodType = constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODTYPE.swp.value;
            let frequency = transactionItem.frequency;
            let productDetailRows = transactionItem.instrument.mutualFundDetails.systematicMethodSettings;
            if (!productDetailRows) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method details info not found'
                };
                return overallCheck;
            }
            //filter systematic method settings to get relevant row for systematicType and frequency
            //filter systematic method settings to get relevant row for systematicType and frequency
            let systematicDetailsArray = productDetailRows === null || productDetailRows === void 0 ? void 0 : productDetailRows.filter((detailItem) => {
                if ((detailItem.frequency == frequency) && (detailItem.systematicMethodType == systematicMethodType)) {
                    return detailItem;
                }
            });
            //there should be only 1 row as output
            if (systematicDetailsArray.length != 1) {
                overallCheck = {
                    isValid: false,
                    message: 'Systematic method info not found for given frequency and systematic type'
                };
                return overallCheck;
            }
            let systematicDetails = systematicDetailsArray[0];
            let validationSets = [
                //function and parameter sets
                [miscBooleanCheck, [productDetails.isSWPAllowed, true, 'SWP Allowed']],
                // [miscBooleanCheck, [productDetails.isRedemptionAllowed, true, 'Redemption Allowed']],
                [numericMorethanZeroCheck, [transactionItem.quantity, 'Quantity']],
                [numericMorethanZeroCheck, [transactionItem.frequency, 'Frequency']],
                [numericMorethanZeroCheck, [transactionItem.frequencyDay, 'Installment date']],
                [numericMorethanZeroCheck, [transactionItem.transactionCount, 'TransactionCount']],
                [serviceProviderAccountIdCheck, [transactionItem.serviceProviderAccountId, true]],
                [rangeCheck, [systematicDetails.minInstallmentNumber, systematicDetails.maxInstallmentNumber, transactionItem.transactionCount, 'Transaction Count']],
                [validSystematicDates, [systematicDetails.dates, transactionItem.frequencyDay, 'Installment Date']] //frequency day is in allowed dates
            ];
            overallCheck = executeValidations(validationSets);
            return overallCheck;
        }
        function executeValidations(validationSets) {
            let overallCheck = {};
            //loop and perform validations
            for (let i = 0; i < validationSets.length; i++) {
                //console.log('calling ', validationSets[i][0])
                overallCheck = validationSets[i][0](validationSets[i][1]);
                //console.log(overallCheck);
                if (!overallCheck.isValid) {
                    //console.log('found invalid and returning');
                    return overallCheck;
                }
            }
            return overallCheck;
        }
        function inRange(min, max, value) {
            const validations = [];
            if (min) {
                validations.push(min <= value);
            }
            if (max) {
                validations.push(max >= value);
            }
            return validations.indexOf(false) > -1 ? false : true;
        }
        function serviceProviderAccountIdCheck(inputParams) {
            let validationCheck = {
                isValid: true,
                message: ''
            };
            let serviceProviderAccountId = inputParams[0];
            let required = inputParams[1];
            if (required) {
                if (serviceProviderAccountId == null) {
                    validationCheck.isValid = false;
                    validationCheck.message = 'Service Provider Account not found for additional purchase';
                    return validationCheck;
                }
            }
            else {
                if (serviceProviderAccountId) {
                    validationCheck.isValid = false;
                    validationCheck.message = 'Service Provider Account should not be provided for fresh purchase';
                    return validationCheck;
                }
            }
            return validationCheck;
        }
        function multiplierCheck(inputParams) {
            let validationCheck = {
                isValid: true,
                message: ''
            };
            let multiplier = inputParams[0];
            let value = parseFloat(inputParams[1]);
            let nameForMessage = inputParams[2];
            let multiplierChecked = handleNullMinMaxParams(multiplier, 'mult');
            if (value === null) {
                validationCheck.isValid = false;
                validationCheck.message = nameForMessage + ' cannot be null';
                return validationCheck;
            }
            //SS-22Dec22: Changing Javascript idiosyncracies
            //0.1 creating issues
            //find correct value as per multiplier around the amount and check with that
            let correctValue = Math.round(value / multiplierChecked) * multiplierChecked;
            correctValue = parseFloat(correctValue.toFixed(2));
            //if (math.round(math.abs(math.mod(value, multiplierChecked)) * 100) / 100 > 0) {
            if (correctValue == value) {
                //all good, do nothing
                logging_utils_1.LoggingUtils.info(`multiplierCheck-passed: value|multiplierChecked|correctValue|nameForMessage ${value} | ${multiplierChecked} | ${correctValue} | ${nameForMessage}`);
            }
            else {
                logging_utils_1.LoggingUtils.info(`multiplierCheck-failed: value|multiplierChecked|correctValue|nameForMessage ${value} | ${multiplierChecked} | ${correctValue} | ${nameForMessage}`);
                validationCheck.isValid = false;
                validationCheck.message = nameForMessage + ' not in proper multiples';
                return validationCheck;
            }
            return validationCheck;
        }
        function DateInRange(min, max, value) {
            const validations = [];
            if (min) {
                validations.push(min <= value);
            }
            if (max) {
                validations.push(max > value);
            }
            return validations.indexOf(false) > -1 ? false : true;
        }
        ;
        function handleNullMinMaxParams(inputParam, minMaxMult) {
            let isEmpty = false;
            let returnParam = inputParam ? inputParam : 0;
            if (inputParam === null) {
                isEmpty = true;
            }
            else {
                if (inputParam == 0) {
                    isEmpty = true;
                }
            }
            //if empty put default values
            if (isEmpty) {
                switch (minMaxMult) {
                    case 'min':
                        returnParam = 1;
                        break;
                    case 'max':
                        returnParam = 1000000000; //100 crores
                        break;
                    case 'mult':
                        returnParam = 0.001;
                        break;
                    default:
                        returnParam = 0;
                }
            }
            return returnParam;
        }
        function numericMorethanZeroCheck(inputParams) {
            let validationCheck = {
                isValid: true,
                message: ''
            };
            let value = inputParams[0];
            let nameForMessage = inputParams[1];
            if (value === null || value <= 0) {
                validationCheck.isValid = false;
                validationCheck.message = nameForMessage + ' not found or zero or negative';
            }
            return validationCheck;
        }
        function validSystematicDates(inputParams) {
            let validationCheck = {
                isValid: true,
                message: ''
            };
            let allowedDates = inputParams[0];
            let givenDate = inputParams[1];
            let nameForMessage = inputParams[2];
            if (allowedDates && allowedDates.length > 0) {
                if (allowedDates.indexOf(givenDate) == -1) {
                    validationCheck.isValid = false;
                    validationCheck.message = nameForMessage + ' is not in allowed dates';
                }
            }
            else {
                validationCheck.isValid = false;
                validationCheck.message = 'Valid dates array is empty.';
            }
            return validationCheck;
        }
        function miscBooleanCheck(inputParams) {
            let validationCheck = {
                isValid: true,
                message: ''
            };
            let toCheckParam = inputParams[0];
            let required = inputParams[1];
            let itemName = inputParams[2];
            if ((toCheckParam && required) || (!toCheckParam && !required)) {
            }
            else {
                validationCheck.isValid = false;
                validationCheck.message = itemName + ' is not available or improper.';
            }
            return validationCheck;
        }
        function rangeCheck(inputParams) {
            let validationCheck = {
                isValid: true,
                message: ''
            };
            let min = inputParams[0];
            let max = inputParams[1];
            let value = inputParams[2];
            let nameForMessage = inputParams[3];
            let minChecked = handleNullMinMaxParams(min, 'min');
            let maxChecked = handleNullMinMaxParams(max, 'max');
            if (value === null) {
                validationCheck.isValid = false;
                validationCheck.message = nameForMessage + ' cannot be null';
                return validationCheck;
            }
            if (!inRange(minChecked, maxChecked, value)) {
                validationCheck.isValid = false;
                validationCheck.message = nameForMessage + ' not in range';
                return validationCheck;
            }
            return validationCheck;
        }
    }
    static getNetMonthlySIPAmount(currentAmount, frequency) {
        switch (frequency) {
            case constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.daily.value:
                currentAmount = currentAmount * constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.daily.convertToMonthlyFactorNum / constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.daily.convertToMonthlyFactorDen;
                break;
            case constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.weekly.value:
                currentAmount = currentAmount * constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.weekly.convertToMonthlyFactorNum / constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.weekly.convertToMonthlyFactorDen;
                break;
            case constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.value:
                currentAmount = currentAmount * constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.convertToMonthlyFactorNum / constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.monthly.convertToMonthlyFactorDen;
                break;
            case constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.quarterly.value:
                currentAmount = currentAmount * constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.quarterly.convertToMonthlyFactorNum / constants_1.Option.GLOBALOPTIONS.SYSTEMATICMETHODFREQUENCY.quarterly.convertToMonthlyFactorDen;
                break;
            default:
                break;
        }
        return currentAmount;
    }
}
exports.CartUtils = CartUtils;
//# sourceMappingURL=cart-utils.js.map