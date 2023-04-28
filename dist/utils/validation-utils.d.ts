export declare abstract class ValidationUtils {
    static validateEmail(email: string): boolean;
    static validateMobileNumber(mobileNumber: string): boolean;
    static validateGstin(gstin: string): boolean;
    static formatMobileNumber(mobileNumber: string): string;
    static checkIfEmpty(str: string): boolean;
    static validatePAN(panCardNumber: string): boolean;
    static validateGeoPoint(geoPoint: {
        lat: number;
        lng: number;
    }): boolean;
    static validatePincode(pincode: string): boolean;
}
