import {stat} from 'fs';
import {row} from 'mathjs';
import {RequestToEngineRepository, LoggingUtils} from '..';
import { Option } from '..';

export abstract class EngineRequestUtils {
 public static checkRequestToEngineStatus = async (requestToEngineRepository : RequestToEngineRepository, rowId: number)=>{

  try {
    let data = await requestToEngineRepository.findOne({
      where : {
        id :rowId
      }
    });

    if(data?.isParallel){
      return {processFlag : true, eventType : data?.eventType, parameters : data?.parameters};
    }

    let prcoessingData = await requestToEngineRepository.find({
      where : {
        eventType : data?.eventType,
        status : Option.GLOBALOPTIONS.REQUESTTOENGINESTATUS['processing'].value
      }
    })

    if(prcoessingData.length > 0){
      return {processFlag : false, eventType : data?.eventType, parameters : data?.parameters};
    }


    return {processFlag : true, eventType : data?.eventType, parameters : data?.parameters};
  } catch (error) {
    LoggingUtils.error(error)
  }

}

public static updateRequestToEngineStatus = async (requestToEngineRepository : RequestToEngineRepository, rowId: number,status : number,remarks : string = '') => {
  try {
    return await requestToEngineRepository.updateById(rowId,{status : status,remarks : remarks})
  } catch (error) {
    LoggingUtils.error(error)
  }
}
}
