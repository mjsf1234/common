"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateSequence = void 0;
const logging_utils_1 = require("./logging-utils");
class ValidateSequence {
    static async checkIfSequenceIsCorrect(repository, model, uniqueKeyColumn, schema = "public") {
        const seqName = `${model}_${uniqueKeyColumn}_seq`;
        let customSQL = `do $$ \n\
    begin \n\
    IF (select case when max("${uniqueKeyColumn}")  > nextval('${seqName}') then true else false end from "${schema}"."${model}" ) THEN \n\
      SELECT pg_catalog.setval(('${seqName}'), (SELECT MAX("${uniqueKeyColumn}") FROM "${schema}"."${model}" )+1); \n\
    END IF;\n\
    end\n\
    $$\n`;
        try {
            if (!customSQL) {
                throw new Error('all parameters do not have the correct value');
            }
            else {
                await repository.execute(customSQL);
                logging_utils_1.LoggingUtils.info("Query Execution was successful\n" + customSQL);
            }
        }
        catch (err) {
            logging_utils_1.LoggingUtils.error(err);
        }
    }
}
exports.ValidateSequence = ValidateSequence;
//# sourceMappingURL=validate-sequence.js.map