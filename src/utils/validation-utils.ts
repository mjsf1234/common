export abstract class ValidationUtils {
  public static validateEmail(email: string): boolean {
    /*eslint-disable */
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /*eslint-enable */
    return re.test(email);
  }

  public static validateMobileNumber(mobileNumber: string): boolean {
    const re = /^[0]?[6789]\d{9}$/;
    return re.test(mobileNumber);
  }

  public static validateGstin(gstin: string): boolean {
    /*eslint-disable */
    const re = /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/;
    /*eslint-enable */
    return re.test(gstin);
  }

  public static formatMobileNumber(mobileNumber: string): string {
    return mobileNumber.substr(mobileNumber.length - 10);
  }

  public static checkIfEmpty(str: string): boolean {
    str = '' + str;
    if (str == null || str == undefined || str == '') {
      return false;
    } else {
      return true;
    }
  }

  public static validatePAN(panCardNumber: string): boolean {
    /*eslint-disable */
    const re = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/g;
    /*eslint-enable */
    return re.test(panCardNumber);
  }

  public static validateGeoPoint(geoPoint: {lat: number; lng: number}): boolean {
    const lat = parseFloat(String(geoPoint.lat));
    const lng = parseFloat(String(geoPoint.lng));
    if (lat < -90 || lat > 90) {
      return false;
    } else if (lng < -180 || lng > 180) {
      return false;
    }
    return true;
  }

  public static validatePincode(pincode: string): boolean {
    return !isNaN(Number(pincode));
  }
}
