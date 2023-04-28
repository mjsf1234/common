"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const cart_item_model_1 = require("./cart-item.model");
let Cart = class Cart extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cart.prototype, "uniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cart.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'options', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Cart.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'createdByAppUser',
        keyFrom: 'createdByAppUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_created_by_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Cart.prototype, "createdByAppUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Cart.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => cart_item_model_1.CartItem, { keyTo: 'cartId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Cart.prototype, "cartItems", void 0);
Cart = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'cart' },
            plural: 'Carts',
            foreignKeys: {
                fkidx_cart_user_fk_id_created_by_user: {
                    name: 'fkidx_cart_user_fk_id_created_by_user',
                    foreignKey: 'fk_id_created_by_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_cart_account_fk_id_account: {
                    name: 'fkidx_cart_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Cart);
exports.Cart = Cart;
//# sourceMappingURL=cart.model.js.map