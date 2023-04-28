export abstract class OrderUtils {
  public static generateOrderUniqueId(orderId: number): string {
    const prefix = 'DL';
    const length = 10;
    const maskedNumber = String(orderId).padStart(length - prefix.length, '0');
    return prefix + maskedNumber;
  }

  public static generateOrderItemUniqueId(orderItemId: number): string {
    const seriesStarts = 500000000;
    return seriesStarts + orderItemId + '';
  }

  public static getRandomNumber(length: number): string {
    return String(Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)));
  }

  public static generateSystematicRegistrationNumber(systematicMethodId: number): string {
    const prefix = '1';
    const length = 10;
    const maskedNumber = String(systematicMethodId).padStart(length - prefix.length, '0');
    return prefix + maskedNumber;
  }
}
