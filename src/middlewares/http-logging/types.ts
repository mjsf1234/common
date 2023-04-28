

export type ApplicationErrorLogs = {
  requestMethod : String;
  requestURL : String;
  transactionId : String;
  errorMessage : String;
  errorStack : String;
  errorDetails: String;

}

export type RequestInfoLogs = {
  startTime : string;
  requestMethod : String;
  requestURL : String;
  transactionId : String;
}
