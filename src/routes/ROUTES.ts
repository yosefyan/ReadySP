import { TRouterData, TRoutesObject } from "../types/routesTypes";
import { Paths } from "../constants/routerData";
import {
  Home,
  Login,
  Register,
  About,
  Welcome,
  NotFound,
  CreateCard,
  FavCards,
  MyCards,
  Profile,
  CRM,
  EditCard,
} from "../pages";

const ROUTES: TRoutesObject = {};

export const routerData: TRouterData = {
  paths: Object.values(Paths),
  elements: [
    Home,
    Login,
    Register,
    About,
    Welcome,
    NotFound,
    CreateCard,
    EditCard,
    FavCards,
    MyCards,
    Profile,
    CRM,
  ],
};

routerData.paths.forEach((path: string, i: number) => {
  ROUTES[routerData.elements[i].name.toUpperCase()] = path;
});

export default ROUTES;
