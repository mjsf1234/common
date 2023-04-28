import { ConstructorOptions } from 'rsmq';
export default class RSMQConfiguration implements ConstructorOptions {
    host: string;
    port: number;
    ns: 'rsmq';
    options: object;
    constructor();
}
