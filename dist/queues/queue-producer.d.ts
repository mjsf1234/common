import { CommunicationQueueMessage, DataHealthCheckingQueueMessage, LogProcessingQueueMessage, MarketDataProcessingQueueMessage, OrderProcessingQueueMessage, ReverseFeedProcessingQueueMessage, TransactionalDataRefreshingQueueMessage } from './messages';
export declare abstract class QueueProducer {
    static sendMessageInCommunicationQueue(message: CommunicationQueueMessage): Promise<any>;
    static sendMessageInDataHealthCheckingQueue(message: DataHealthCheckingQueueMessage): Promise<any>;
    static sendMessageInLogProcessingQueue(message: LogProcessingQueueMessage): Promise<any>;
    static sendMessageInMarketDataProcessingQueue(message: MarketDataProcessingQueueMessage): Promise<any>;
    static sendMessageInMarketDataProcessingTimeConsumingQueue(message: MarketDataProcessingQueueMessage): Promise<any>;
    static sendMessageInOrderProcessingQueue(message: OrderProcessingQueueMessage): Promise<any>;
    static sendMessageInReverseFeedProcessingQueue(message: ReverseFeedProcessingQueueMessage): Promise<any>;
    static sendMessageInTransactionalDataRefreshingQueue(message: TransactionalDataRefreshingQueueMessage): Promise<any>;
    static sendMessageInTransactionalDataRefreshingMediumPriorityQueue(message: TransactionalDataRefreshingQueueMessage): Promise<any>;
    static sendMessageInTransactionalDataRefreshingLowPriorityQueue(message: TransactionalDataRefreshingQueueMessage): Promise<any>;
}
