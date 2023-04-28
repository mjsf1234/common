export enum ReverseFeedProcessingQueueMessageEventType {
  REVERSE_FEED_PROCESSING = 'REVERSE_FEED_PROCESSING',
  RTA_HOLDING_FEED_PROCESSING = 'RTA_HOLDING_FEED_PROCESSING',
  RTA_HOLDING_RECONCILIATION = 'RTA_HOLDING_RECONCILIATION',
}
export class ReverseFeedProcessingQueueMessage {
  eventType: ReverseFeedProcessingQueueMessageEventType;
  reverseFeedId?: number;
  rtaHoldingId?: number;
  accountId?: number;
  serviceProividerAccountIds?: Array<number>;
}
