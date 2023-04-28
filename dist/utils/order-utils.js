"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUtils = void 0;
class OrderUtils {
    static generateOrderUniqueId(orderId) {
        const prefix = 'DL';
        const length = 10;
        const maskedNumber = String(orderId).padStart(length - prefix.length, '0');
        return prefix + maskedNumber;
    }
    static generateOrderItemUniqueId(orderItemId) {
        const seriesStarts = 500000000;
        return seriesStarts + orderItemId + '';
    }
    static getRandomNumber(length) {
        return String(Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)));
    }
    static generateSystematicRegistrationNumber(systematicMethodId) {
        const prefix = '1';
        const length = 10;
        const maskedNumber = String(systematicMethodId).padStart(length - prefix.length, '0');
        return prefix + maskedNumber;
    }
}
exports.OrderUtils = OrderUtils;
//# sourceMappingURL=order-utils.js.map