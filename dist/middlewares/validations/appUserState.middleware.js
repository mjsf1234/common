"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateAppUserState = void 0;
const repositories_1 = require("./../../repositories");
const utils_1 = require("./../../utils");
const constants_1 = require("../../constants");
const authenticateAppUserState = async function (requestContext, next) {
    var _a;
    var { request } = requestContext;
    const headers = request.headers;
    const acceptedUrls = Object.keys(constants_1.Option.GLOBALOPTIONS.APPUSERSTATUSVALIDATIONURLS);
    let acceptedStates = [];
    let urlExists = false;
    for (let eachUrl of acceptedUrls) {
        if ((_a = request.originalUrl) === null || _a === void 0 ? void 0 : _a.includes(eachUrl)) {
            urlExists = true;
            acceptedStates = constants_1.Option.GLOBALOPTIONS.APPUSERSTATUSVALIDATIONURLS[eachUrl].states;
            break;
        }
    }
    const appUserRepository = await this.getRepository(repositories_1.AppUserRepository);
    const userProfile = requestContext ? requestContext.getBinding('userProfile').getValue(requestContext) : null;
    if (urlExists && userProfile.appUserId) {
        let Validation = await (0, utils_1.checkAppUserStatus)(acceptedStates, appUserRepository, userProfile.appUserId);
        if (!(Validation === null || Validation === void 0 ? void 0 : Validation.acceptanceFlag)) {
            utils_1.LoggingUtils.info(Validation, 'Validation');
            throw new utils_1.RestError(484, JSON.stringify({ appUserStatus: Validation === null || Validation === void 0 ? void 0 : Validation.appUserStatus, message: 'Cannot Update AppUserStatus Reopen the APP!' }));
        }
    }
    const result = await next();
    return result;
};
exports.authenticateAppUserState = authenticateAppUserState;
//# sourceMappingURL=appUserState.middleware.js.map