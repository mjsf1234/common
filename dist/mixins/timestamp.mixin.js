"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampMixin = void 0;
class TimestampMixin {
    static async register(modelClass) {
        modelClass.observe('before save', async (ctx) => {
            if (ctx.instance) {
                if (ctx.instance.id) {
                    // for existing instance
                    ctx.instance.lastModifiedDate = new Date();
                }
                else {
                    // for a new instance
                    ctx.instance.lastModifiedDate = new Date();
                    ctx.instance.createdDate = new Date();
                }
            }
            else if (ctx.data) {
                // for existing instance
                ctx.data.lastModifiedDate = new Date();
            }
        });
    }
}
exports.TimestampMixin = TimestampMixin;
//# sourceMappingURL=timestamp.mixin.js.map