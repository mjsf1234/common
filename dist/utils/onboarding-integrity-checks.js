"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAppUserStatus = void 0;
const __1 = require("..");
const __2 = require("..");
const checkAppUserStatus = async (targetState, appUserRepository, appUserId) => {
    try {
        let appUserData = await appUserRepository.findOne({
            where: {
                id: appUserId
            },
            fields: {
                appUserStatus: true
            }
        });
        targetState = typeof targetState == 'string' ? [targetState] : targetState;
        let acceptanceFlag = true;
        for (let targetStateValue of targetState) {
            let accepetedStates = __2.Option.GLOBALOPTIONS.APPUSERSTATUS[targetStateValue].currentState;
            for (let accepetedStatesItem of accepetedStates) {
                acceptanceFlag = false;
                if ((appUserData === null || appUserData === void 0 ? void 0 : appUserData.appUserStatus) == __2.Option.GLOBALOPTIONS.APPUSERSTATUS[accepetedStatesItem].value) {
                    acceptanceFlag = true;
                    break;
                }
            }
        }
        return { acceptanceFlag, appUserStatus: appUserData === null || appUserData === void 0 ? void 0 : appUserData.appUserStatus };
    }
    catch (error) {
        __1.LoggingUtils.error(error);
    }
};
exports.checkAppUserStatus = checkAppUserStatus;
//# sourceMappingURL=onboarding-integrity-checks.js.map