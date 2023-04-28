import { BaseSQLModel } from '..';
import { OrderItem } from './order-item.model';
export declare class Order extends BaseSQLModel {
    uniqueId?: string;
    orderDate: Date;
    orderExecutionDate?: Date;
    orderStatus: number;
    orderReceiptMode?: number;
    orderType?: number;
    ipAddress?: string;
    remarks?: string;
    options?: object;
    checkerStatus?: number;
    retryCount?: number;
    orderAuthStatus?: number;
    accountId: number;
    orderItems?: OrderItem[];
    [prop: string]: any;
    constructor(data?: Partial<Order>);
}
export interface OrderRelations {
}
export declare type OrderWithRelations = Order & OrderRelations;
