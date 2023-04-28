export const  hasExcludedRoute = (route: string, routes: string[]|undefined) => {
  if(!routes) return false;
  let regex: RegExp = new RegExp(route);
  let matchedRoutes: string[] = routes.filter(route => regex.test(route));
  return matchedRoutes.length > 0;
}
