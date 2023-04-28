import { OASEnhancer, OpenApiSpec } from '@loopback/rest';
/**
 * A spec enhancer to add OpenAPI info spec
 */
export declare class AuthorizationHeaderOASEnhancer implements OASEnhancer {
    name: string;
    modifySpec(spec: OpenApiSpec): any;
}
