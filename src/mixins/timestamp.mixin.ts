import {Entity, juggler} from '@loopback/repository';

export abstract class TimestampMixin {
  public static async register(modelClass: typeof juggler.PersistedModel) {
    modelClass.observe('before save', async ctx => {
      if (ctx.instance) {
        if (ctx.instance.id) {
          // for existing instance
          ctx.instance.lastModifiedDate = new Date();
        } else {
          // for a new instance
          ctx.instance.lastModifiedDate = new Date();
          ctx.instance.createdDate = new Date();
        }
      } else if (ctx.data) {
        // for existing instance
        ctx.data.lastModifiedDate = new Date();
      }
    });
  }
}
