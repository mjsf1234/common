import { BaseSQLModel } from '..';
import { CartItem } from './cart-item.model';
export declare class Cart extends BaseSQLModel {
    uniqueId: string;
    remarks?: string;
    options?: object;
    createdByAppUserId: number;
    accountId: number;
    cartItems?: CartItem[];
    [prop: string]: any;
    constructor(data?: Partial<Cart>);
}
export interface CartRelations {
}
export declare type CartWithRelations = Cart & CartRelations;
