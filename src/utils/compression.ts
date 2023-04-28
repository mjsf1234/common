const compression = require('compression');

export abstract class Compression {
  public static Compress():any{
    return compression({filter:this.shouldCompress})
  }

  public static shouldCompress(req:any, res:any) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }
    // fallback to standard filter function
    return compression.filter(req, res);
  }
}
