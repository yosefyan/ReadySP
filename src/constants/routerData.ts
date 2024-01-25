import {
  Home,
  Login,
  Register,
  About,
  Welcome,
  NotFound,
  CreateCard,
  FavoriteCards,
  MyCards,
  Profile,
  Dashboard,
} from "../pages";

enum Paths {
  Home = "/",
  Login = "/login",
  Register = "/register",
  About = "/about",
  Welcome = "/welcome",
  NotFound = "*",
  CreateCard = "/createCard",
  FavoriteCards = "/favoriteCards",
  MyCards = "/myCards",
  Profile = "/profile",
  Dashboard = "/dashboard",
}

const routerData = {
  paths: Object.values(Paths),
  elements: [
    Home,
    Login,
    Register,
    About,
    Welcome,
    NotFound,
    CreateCard,
    FavoriteCards,
    MyCards,
    Profile,
    Dashboard,
  ],
};

export default routerData;
