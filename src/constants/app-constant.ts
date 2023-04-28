export default abstract class AppConstant {
  static readonly MAX_DATA_FETCH_LIMIT: number = 30;
  static readonly MIN_SEARCH_CHAR_LIMIT: number = 3;
  static readonly ONE_CHAR_SEARCH: number = 1;
  static readonly MAX_SEARCH_RESULT_LIMIT: number = 20;
  static readonly UNITIZED_PRODUCT_IDS: Array<number> = [1, 2, 5, 8, 9, 10, 15, 16, 20];
  static readonly NONUNITIZED_PRODUCT_IDS: Array<number> = [3, 4, 6, 7, 11, 12, 13, 14, 17, 18, 19, 21, 22, 23, 24, 25];
  static readonly PPF_PRODUCT_ID: number = 25;
  static readonly MUTUAL_FUND_PRODUCT_ID: number = 5;
  static readonly BOND_PRODUCT_ID: number = 1;
  static readonly PMS_PRODUCT_ID: number = 6;
  static readonly FIXED_DEPOSIT_PRODUCT_ID: number = 3;
  static readonly TRANSACTION_TYPE_FRESH_PURCHASE: number = 1;
  static readonly ARBITRAGE_INSTRUMENT_CATEGORY_ID: number = 18;
  static readonly BANKING_PRODUCT_IDS: Array<number> = [3];
  static readonly MIN_DAYS_FOR_ELSS_FUND: number = 1096;
  static readonly ELSS_FUND_CATEGORY_ID: number = 7;
  static readonly OPERATION_RESULT_LIMIT: number = 20;
  static readonly RTA_KARVY = 1;
  static readonly RTA_CAMS = 2;
  static readonly RTA_OTHER = 3;
  static readonly OPERATIONTYPE_API = 'API';
  static readonly OPERATIONTYPE_MANUAL = 'MANUAL';
  static readonly ARN_RIA = 'ARN-0005';
  static readonly ARN_USER_CODE = 'HDFCC';
  static readonly BLOCK_ARNS_CAS: Array<string> = [
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
  static readonly DEVICE_BIND_LIMIT: number = 1;
  static readonly BROKER_CODE = 'HDFCPB';
  static readonly BROKER_CODE_CAMS = 'HDFCPB';
  static readonly BROKER_CODE_KFINTECH = 'ARN-0005';
  static readonly BROKER_CODE_CAMS_FF = 'HDFCPB';
  static readonly BROKER_CODE_KFINTECH_FF = 'HDFCPB';
  static readonly BROKER_CODE_CAMS_RF = 'HDFCPB';
  static readonly BROKER_CODE_KFINTECH_RF = 'ARN-0005';
  static readonly BROKER_CODE_CAMS_HR = 'HDFCPB';
  static readonly BROKER_CODE_KFINTECH_HR = 'ARN-0005';
  static readonly VRO_KFIN_POSS_VALUES: Array<string> = ['KFin Technologies Pvt Ltd.', 'KFin Technologies Ltd.'];
  static readonly NO_OF_DAYS_FOR_EXPIRY_NEW_USER = 30;
  static readonly NO_OF_DAYS_FOR_EXPIRY_ALREADY_LOGGED_IN_USER = 90;
  static readonly RTA_DOC_CAMS = 'CAMS';
  static readonly RTA_DOC_KFINTECH = 'ARN-0005';
  static readonly PAN_NUMBER_REG_EX = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  static readonly ALLOWED_BANK_ACCOUNT_TYPES = ['SOW', 'JOF', 'JOO'];
  static readonly REGEX_ALPHABETS_WITH_SPACE = /^[a-zA-Z ]*$/;
  static readonly TAX_SAVING_LOCKIN_PERIOD_IN_YEARS = 5;
}
