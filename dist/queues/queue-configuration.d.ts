import RSMQConfiguration from './rsmq-configuration';
export default abstract class QueueConfiguration {
    static readonly queueConfig: RSMQConfiguration;
    static readonly host: string;
    static readonly port: string;
    static readonly namespace: string;
    static readonly realtime: boolean;
    static readonly options: any;
    static readonly queues: any;
}
