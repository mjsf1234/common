import { LoggingUtils } from './logging-utils';


export abstract class ValidateSequence {
  public static async checkIfSequenceIsCorrect (repository : any,model : string,uniqueKeyColumn : string ,schema = "public") {
    const seqName = `${model}_${uniqueKeyColumn}_seq`;
    let customSQL =`do $$ \n\
    begin \n\
    IF (select case when max("${uniqueKeyColumn}")  > nextval('${seqName}') then true else false end from "${schema}"."${model}" ) THEN \n\
      SELECT pg_catalog.setval(('${seqName}'), (SELECT MAX("${uniqueKeyColumn}") FROM "${schema}"."${model}" )+1); \n\
    END IF;\n\
    end\n\
    $$\n`
    try{
        if(!customSQL){
          throw new Error('all parameters do not have the correct value')
        }
        else{
          await repository.execute(customSQL)
          LoggingUtils.info("Query Execution was successful\n" + customSQL)
        }
    }
    catch(err:any){
      LoggingUtils.error(err)
    }

  }
}

