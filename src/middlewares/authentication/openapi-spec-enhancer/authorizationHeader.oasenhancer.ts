import {injectable} from '@loopback/core';
import {
  asSpecEnhancer,
  OASEnhancer,
  OpenApiSpec,
} from '@loopback/rest';

/**
 * A spec enhancer to add OpenAPI info spec
 */
@injectable(asSpecEnhancer)
export class AuthorizationHeaderOASEnhancer implements OASEnhancer {
  name = 'authHeader';

  //this function modifies the current open api spec and adds the option of adding the authorization header in swagger
  modifySpec(spec: OpenApiSpec): any {

    const specCopy = Object.assign({}, spec);
    if(!("components" in specCopy)) specCopy.components = {} //add components if not present
    specCopy.components!.securitySchemes = {
      ApiKeyAuth : {
        type: "apiKey",
        in: "header",  // can be "header", "query" or "cookie"
        name: "Authorization"
      }
    }
    specCopy.security = [{ ApiKeyAuth : []}]
    return specCopy
  }
}
