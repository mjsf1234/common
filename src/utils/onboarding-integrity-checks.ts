import {AppUserRepository, LoggingUtils} from '..';
import { Option } from '..';

export const checkAppUserStatus = async (targetState : string | Array<string>, appUserRepository : AppUserRepository, appUserId: number)=>{

  try {
    let appUserData = await appUserRepository.findOne({
      where : {
        id :appUserId
      },
      fields : {
        appUserStatus : true
      }
    })
    targetState = typeof targetState == 'string' ? [targetState] : targetState;
    let acceptanceFlag: boolean = true
    for(let targetStateValue of targetState){
      let accepetedStates = Option.GLOBALOPTIONS.APPUSERSTATUS[targetStateValue].currentState;
      for(let accepetedStatesItem of accepetedStates){
        acceptanceFlag = false;
        if(appUserData?.appUserStatus == Option.GLOBALOPTIONS.APPUSERSTATUS[accepetedStatesItem].value){
          acceptanceFlag = true;
          break;
        }
      }
    }

    return {acceptanceFlag,appUserStatus : appUserData?.appUserStatus};
  } catch (error) {
    LoggingUtils.error(error)
  }

}
