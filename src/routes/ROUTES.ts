import { TRoutesObject } from "../types/routesTypes";
import routerData from "../constants/routerData";

const ROUTES: TRoutesObject = {};

routerData.paths.forEach((path: string, i: number) => {
  ROUTES[routerData.elements[i].name.toUpperCase()] = path;
});

export default ROUTES;
