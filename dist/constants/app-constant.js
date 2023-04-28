"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppConstant {
}
exports.default = AppConstant;
AppConstant.MAX_DATA_FETCH_LIMIT = 30;
AppConstant.MIN_SEARCH_CHAR_LIMIT = 3;
AppConstant.ONE_CHAR_SEARCH = 1;
AppConstant.MAX_SEARCH_RESULT_LIMIT = 20;
AppConstant.UNITIZED_PRODUCT_IDS = [1, 2, 5, 8, 9, 10, 15, 16, 20];
AppConstant.NONUNITIZED_PRODUCT_IDS = [3, 4, 6, 7, 11, 12, 13, 14, 17, 18, 19, 21, 22, 23, 24, 25];
AppConstant.PPF_PRODUCT_ID = 25;
AppConstant.MUTUAL_FUND_PRODUCT_ID = 5;
AppConstant.BOND_PRODUCT_ID = 1;
AppConstant.PMS_PRODUCT_ID = 6;
AppConstant.FIXED_DEPOSIT_PRODUCT_ID = 3;
AppConstant.TRANSACTION_TYPE_FRESH_PURCHASE = 1;
AppConstant.ARBITRAGE_INSTRUMENT_CATEGORY_ID = 18;
AppConstant.BANKING_PRODUCT_IDS = [3];
AppConstant.MIN_DAYS_FOR_ELSS_FUND = 1096;
AppConstant.ELSS_FUND_CATEGORY_ID = 7;
AppConstant.OPERATION_RESULT_LIMIT = 20;
AppConstant.RTA_KARVY = 1;
AppConstant.RTA_CAMS = 2;
AppConstant.RTA_OTHER = 3;
AppConstant.OPERATIONTYPE_API = 'API';
AppConstant.OPERATIONTYPE_MANUAL = 'MANUAL';
AppConstant.ARN_RIA = 'ARN-0005';
AppConstant.ARN_USER_CODE = 'HDFCC';
AppConstant.BLOCK_ARNS_CAS = [
    'ARN--0005',
    'ARN-0005',
    'ARN-17754',
    'ARN0005',
    'HDFC',
    'HDFC BANK',
    'HDFCADV',
    'HDFCPB',
    'TIMES',
    'AV0124'
];
AppConstant.DEVICE_BIND_LIMIT = 1;
AppConstant.BROKER_CODE = 'HDFCPB';
AppConstant.BROKER_CODE_CAMS = 'HDFCPB';
AppConstant.BROKER_CODE_KFINTECH = 'ARN-0005';
AppConstant.BROKER_CODE_CAMS_FF = 'HDFCPB';
AppConstant.BROKER_CODE_KFINTECH_FF = 'HDFCPB';
AppConstant.BROKER_CODE_CAMS_RF = 'HDFCPB';
AppConstant.BROKER_CODE_KFINTECH_RF = 'ARN-0005';
AppConstant.BROKER_CODE_CAMS_HR = 'HDFCPB';
AppConstant.BROKER_CODE_KFINTECH_HR = 'ARN-0005';
AppConstant.VRO_KFIN_POSS_VALUES = ['KFin Technologies Pvt Ltd.', 'KFin Technologies Ltd.'];
AppConstant.NO_OF_DAYS_FOR_EXPIRY_NEW_USER = 30;
AppConstant.NO_OF_DAYS_FOR_EXPIRY_ALREADY_LOGGED_IN_USER = 90;
AppConstant.RTA_DOC_CAMS = 'CAMS';
AppConstant.RTA_DOC_KFINTECH = 'ARN-0005';
AppConstant.PAN_NUMBER_REG_EX = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
AppConstant.ALLOWED_BANK_ACCOUNT_TYPES = ['SOW', 'JOF', 'JOO'];
AppConstant.REGEX_ALPHABETS_WITH_SPACE = /^[a-zA-Z ]*$/;
AppConstant.TAX_SAVING_LOCKIN_PERIOD_IN_YEARS = 5;
//# sourceMappingURL=app-constant.js.map