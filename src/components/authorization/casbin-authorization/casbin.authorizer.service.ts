// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-access-control-migration
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {AuthorizationContext, AuthorizationDecision, AuthorizationMetadata, Authorizer} from '@loopback/authorization';
import path from 'path';
import {Provider, service,inject} from '@loopback/core';
import * as casbin from 'casbin';
import {LoggingUtils, RestError} from '../../../utils';
import { RestBindings} from '@loopback/rest';
const debug = require('debug')('loopback:example:acl');
import {Response } from 'express';
import { Option } from '../../../constants';

const DEFAULT_SCOPE = 'EXECUTE';
// Class level authorizer
export class CasbinAuthorizationProvider implements Provider<Authorizer> {
  /**
   * @returns authorizerFn
   */
   constructor(@inject(RestBindings.Http.RESPONSE) private response:Response){}
  value(): Authorizer {
    return this.authorize.bind(this);
  }

  async authorize(authorizationCtx: AuthorizationContext, metadata: AuthorizationMetadata): Promise<AuthorizationDecision> {

    const enableAuth  = (process.env.GLOBAL_ENABLE_AUTHORIZATION ?? "false")
    if (!Option.GLOBALOPTIONS.BOOLEANVARS[enableAuth]) {
      return AuthorizationDecision.ALLOW;
    }
    //get the parent context
    const requestContext = authorizationCtx.invocationContext.parent ? authorizationCtx.invocationContext.parent : null;
    //get access to request
    const request = requestContext ? requestContext.getBinding('rest.http.request').getValue(requestContext) : null;
    const userProfile = requestContext ? requestContext.getBinding('userProfile').getValue(requestContext) : null;
    const headers = request.headers;

    //@todo - need to remove this . adding this to identify any endpoints which might have been missed from inclusion in the rules
    // if(request) return AuthorizationDecision.ALLOW;

    const allowedRoles = userProfile.resolvedRoles || null;

    //allow if request coming from external system
    if (allowedRoles[0] === 'external-system') return AuthorizationDecision.ALLOW;

    const object = request.url.split('?')[0];
    const action = metadata.scopes ? metadata.scopes[0] : DEFAULT_SCOPE;

    let allow = false;
    for (const subject of allowedRoles) {
      const enforcer = await this.createEnforcer();
      const allowedByRole = await enforcer.enforce(subject, object, action);
      // LoggingUtils.info(`authorizer role: ${subject}, result: ${allowedByRole}`);
      if (allowedByRole) {
        allow = true;
        break;
      }
    }
    // LoggingUtils.info('final result: ' + allow);
    if (allow) return AuthorizationDecision.ALLOW;
    else if (allow === false){

      if(userProfile.anotherUserLoggedIn){
        // this.response.status(461).send({error: {message : "You have logged in from another device"}})
        throw new RestError(461, "You have logged in from another device." )
      }

      else if(userProfile.isExpired){
        throw new RestError(401, "Your session has expired. Please login again." )
        // this.response.status(401).send({error: {message : "Access Token Expired"}})
      }
      return AuthorizationDecision.DENY;
    }
    return AuthorizationDecision.ABSTAIN;
  }

  async createEnforcer(): Promise<casbin.Enforcer> {
    const conf = path.resolve(__dirname, './../../../../casbin-conf/rbac_model.conf');
    const policyPath = path.resolve(__dirname, './../../../../casbin-conf/rbac_policy.csv');
    let e = await casbin.newEnforcer(conf, policyPath);

    return e;
  }
}
