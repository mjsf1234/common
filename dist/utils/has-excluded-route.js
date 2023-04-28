"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasExcludedRoute = void 0;
const hasExcludedRoute = (route, routes) => {
    if (!routes)
        return false;
    let regex = new RegExp(route);
    let matchedRoutes = routes.filter(route => regex.test(route));
    return matchedRoutes.length > 0;
};
exports.hasExcludedRoute = hasExcludedRoute;
//# sourceMappingURL=has-excluded-route.js.map