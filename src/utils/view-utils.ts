import fs from 'fs';
import _ from 'underscore';
import path from 'path';

export abstract class ViewUtils {
  //remember, the absoluteTemplatePath is absolute one
  public static getCompiledHtml(absoluteTemplatePath: string, data: object): any {
    let encoding, templateContent;
    templateContent = fs.readFileSync(absoluteTemplatePath, (encoding = 'utf8'));
    const templatize = _.template(templateContent);
    return templatize(data);
  }
}
