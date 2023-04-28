import {Middleware} from '@loopback/rest';
import { AppUserRepository} from './../../repositories';
import { LoggingUtils, RestError,checkAppUserStatus} from './../../utils';
import {IncomingHttpHeaders} from 'http2';
import { Option } from '../../constants';



export const authenticateAppUserState: Middleware = async function (this: any, requestContext, next) {
  var {request} = requestContext;
  const headers: IncomingHttpHeaders = request.headers;

  const acceptedUrls = Object.keys(Option.GLOBALOPTIONS.APPUSERSTATUSVALIDATIONURLS)
  let acceptedStates : Array<string>=[];
  let urlExists : boolean = false;
  for(let eachUrl of acceptedUrls){
    if(request.originalUrl?.includes(eachUrl)){
      urlExists = true;
      acceptedStates = Option.GLOBALOPTIONS.APPUSERSTATUSVALIDATIONURLS[eachUrl].states
      break;
    }
  }

  const appUserRepository = await this.getRepository(AppUserRepository);
  const userProfile = requestContext ? requestContext.getBinding('userProfile').getValue(requestContext) : null;
  if(urlExists && userProfile.appUserId){

    let Validation = await checkAppUserStatus(acceptedStates,appUserRepository,userProfile.appUserId)
    if(!Validation?.acceptanceFlag){
      LoggingUtils.info(Validation,'Validation')
      throw new RestError(484,JSON.stringify({appUserStatus : Validation?.appUserStatus,message : 'Cannot Update AppUserStatus Reopen the APP!'}))
    }
  }
  const result = await next();
  return result;
};

