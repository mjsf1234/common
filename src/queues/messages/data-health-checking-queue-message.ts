export enum DataHealthCheckingQueueMessageEventType {
  FULL_DATA_HEALTH_CHECK = 'FULL_DATA_HEALTH_CHECK',
  DORMANT_USERS_CHECK_CRON = 'DORMANT_USERS_CHECK_CRON',
  GOAL_DELETE_CRON = 'GOAL_DELETE_CRON',
  EXPORT_UAM_REPORTS = 'EXPORT_UAM_REPORTS'
}

export class DataHealthCheckingQueueMessage {
  eventType: DataHealthCheckingQueueMessageEventType;
  eventDate?: Date;
  cronJobName?: string;
}
