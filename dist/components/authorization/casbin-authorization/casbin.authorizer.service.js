"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-access-control-migration
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasbinAuthorizationProvider = void 0;
const tslib_1 = require("tslib");
const authorization_1 = require("@loopback/authorization");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const core_1 = require("@loopback/core");
const casbin = (0, tslib_1.__importStar)(require("casbin"));
const utils_1 = require("../../../utils");
const rest_1 = require("@loopback/rest");
const debug = require('debug')('loopback:example:acl');
const constants_1 = require("../../../constants");
const DEFAULT_SCOPE = 'EXECUTE';
// Class level authorizer
let CasbinAuthorizationProvider = class CasbinAuthorizationProvider {
    /**
     * @returns authorizerFn
     */
    constructor(response) {
        this.response = response;
    }
    value() {
        return this.authorize.bind(this);
    }
    async authorize(authorizationCtx, metadata) {
        var _a;
        const enableAuth = ((_a = process.env.GLOBAL_ENABLE_AUTHORIZATION) !== null && _a !== void 0 ? _a : "false");
        if (!constants_1.Option.GLOBALOPTIONS.BOOLEANVARS[enableAuth]) {
            return authorization_1.AuthorizationDecision.ALLOW;
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
        if (allowedRoles[0] === 'external-system')
            return authorization_1.AuthorizationDecision.ALLOW;
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
        if (allow)
            return authorization_1.AuthorizationDecision.ALLOW;
        else if (allow === false) {
            if (userProfile.anotherUserLoggedIn) {
                // this.response.status(461).send({error: {message : "You have logged in from another device"}})
                throw new utils_1.RestError(461, "You have logged in from another device.");
            }
            else if (userProfile.isExpired) {
                throw new utils_1.RestError(401, "Your session has expired. Please login again.");
                // this.response.status(401).send({error: {message : "Access Token Expired"}})
            }
            return authorization_1.AuthorizationDecision.DENY;
        }
        return authorization_1.AuthorizationDecision.ABSTAIN;
    }
    async createEnforcer() {
        const conf = path_1.default.resolve(__dirname, './../../../../casbin-conf/rbac_model.conf');
        const policyPath = path_1.default.resolve(__dirname, './../../../../casbin-conf/rbac_policy.csv');
        let e = await casbin.newEnforcer(conf, policyPath);
        return e;
    }
};
CasbinAuthorizationProvider = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)(rest_1.RestBindings.Http.RESPONSE)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CasbinAuthorizationProvider);
exports.CasbinAuthorizationProvider = CasbinAuthorizationProvider;
//# sourceMappingURL=casbin.authorizer.service.js.map