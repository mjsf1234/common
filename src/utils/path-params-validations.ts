import { reject } from "underscore";
import { RestError } from "./rest-error";

export abstract class PathParamsValidations {

  public static idValidations(id : number | undefined){
    if (!id) throw new RestError(422, "The requested path is invalid", { details: `Validation failed for path parameter ${id}`})
    if (id < 1 || id > 2147483647) {
      throw new RestError(422, "The requested path is invalid", { details: `Validation failed for path parameter ${id}`})
    }
    if ((id % 1 != 0)) {
      throw new RestError(422, "The requested path is invalid", { details: `Validation failed for path parameter ${id}`})
    }
  }
  public static limitValidations(limit : number | undefined){
    // if(!limit)  throw new RestError(422, "The requested path is invalid", { details: `Validation failed for Limit ${limit}`})
    if(limit  == undefined || limit == null)  return
    if (limit < 1 || limit > 100) {
      throw new RestError(422, "The requested path is invalid", { details: `Validation failed for Limit ${limit}`})
    }
    if ((limit % 1 != 0)) {
      throw new RestError(422, "The requested path is invalid", { details: `Validation failed for Limit ${limit}`})
    }
  }

  public static genericNumericValidations(numericParam : number | undefined,required=false){
    //undefined or null
    if(numericParam == undefined || numericParam == null){
      //if required not requires
      if(!required){
        return
      } else {
        throw new RestError(422, "The requested path is invalid", { details: `Validation failed for Numeric Param ${numericParam}`})
      }
    }
    if (numericParam < 1 || numericParam > 2147483647) {
      throw new RestError(422, "The requested path is invalid", { details: `Validation failed for Numeric Param ${numericParam}`})
    }
    if ((numericParam % 1 != 0)) {
      throw new RestError(422, "The requested path is invalid", { details: `Validation failed for Numeric Param ${numericParam}`})
    }
  }

}
