import {BindingScope, inject, injectable, service} from '@loopback/core';
import {post, requestBody, RestBindings, Request} from '@loopback/rest';
import {LogApiCallUtils} from '../../../utils/log-api-call-utils';
import {BaseCronFacade} from '../facades';
import {Option} from '../../../constants';
import {CryptoUtils} from '../../../utils';

@injectable({scope: BindingScope.TRANSIENT})
export class BaseCronController {
  constructor(
    @inject(RestBindings.Http.REQUEST) private request: Request,
    @inject('additionalHeaders') private additionalHeaders: any,
    @service(BaseCronFacade) private baseCronFacade: BaseCronFacade
  ) {}

  @post('/invokeCron')
  async processCron(
    @requestBody({
      content: {
        'application/octet-stream': {}
      }
    })
    gcProps: any
  ) {
    const {logParams} = this.additionalHeaders;
    const headers = this.request.headers;
    const parseObj = JSON.parse(CryptoUtils.decrypt(gcProps.toString('utf8')));
    const response = await this.baseCronFacade.processBody(parseObj, headers);
    LogApiCallUtils.sendMessageIncomingApiCall({
      url: logParams.url,
      request: parseObj,
      response: response,
      success: response.success ?? false,
      externalSystemName: Option.GLOBALOPTIONS.EXTERNALAPISYSTEMNAME.GOOGLE_SCHEDULER
    });
    return response;
  }
}
