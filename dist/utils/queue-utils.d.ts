export declare abstract class QueueUtils {
    static createQueue(name: string): Promise<any>;
    static sendMessage(queueName: string, message: Object): Promise<any>;
    static deleteMessage(queueName: string, messageId: string): Promise<any>;
    static listQueues(): Promise<any>;
    static deleteQueues(queueName: string): Promise<any>;
}
