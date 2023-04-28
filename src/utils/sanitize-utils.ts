const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

export abstract class SanitizeUtils{

  public static sanitizeHTML(element : string){
    try{
      const window = new JSDOM('').window;
      const DOMPurify = createDOMPurify(window);
      const clean = DOMPurify.sanitize(element)
      return clean
    }
    catch{
      throw new Error('There was a error trying to sanitize HTML/SVG')
    }

  }

}
