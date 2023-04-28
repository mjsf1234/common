import { AuthorizationContext, AuthorizationDecision, AuthorizationMetadata, Authorizer } from '@loopback/authorization';
import { Provider } from '@loopback/core';
import * as casbin from 'casbin';
import { Response } from 'express';
export declare class CasbinAuthorizationProvider implements Provider<Authorizer> {
    private response;
    /**
     * @returns authorizerFn
     */
    constructor(response: Response);
    value(): Authorizer;
    authorize(authorizationCtx: AuthorizationContext, metadata: AuthorizationMetadata): Promise<AuthorizationDecision>;
    createEnforcer(): Promise<casbin.Enforcer>;
}
