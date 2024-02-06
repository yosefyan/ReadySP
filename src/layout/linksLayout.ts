import ROUTES from "../routes/ROUTES";
import {
  FaHome,
  FaPencilAlt,
  IoMdLogIn,
  GiFallingStar,
  MdDashboard,
  MdWavingHand,
  BsCardHeading,
  BsPerson,
  IoAddCircle,
  FaHeart,
  BiSolidCollection,
} from "../constants/iconsData";

const generateLinks = (
  times: number,
  route: string[],
  comp: string[],
  icon: React.ReactElement[]
) => {
  return Array.from({ length: times }, (_, i) => ({
    to: route[i],
    children: route[i],
    comp,
    icon: icon[i],
  }));
};

const defaultData = {
  defaultLinks: generateLinks(
    2,
    [ROUTES.HOME, ROUTES.ABOUT],
    ["Home", "About"],
    [FaHome, GiFallingStar]
  ),

  defaultLoggediInLinks: generateLinks(
    1,
    [ROUTES.PROFILE],
    ["Profile"],
    [BsPerson]
  ),
};

const welcomeLinks = generateLinks(
  3,
  [ROUTES.WELCOME, ROUTES.LOGIN, ROUTES.REGISTER],
  ["Welcome", "Login", "Register"],
  [MdWavingHand, IoMdLogIn, FaPencilAlt]
);

const loggedInLinks = generateLinks(
  1,
  [ROUTES.FAVCARDS],
  ["FavCards"],
  [BsCardHeading]
);

const businessLinks = generateLinks(
  3,
  [ROUTES.FAVCARDS, ROUTES.MYCARDS, ROUTES.CREATECARD],
  ["FavCards", "MyCards", "CreateCard", "EditCard"],
  [FaHeart, BiSolidCollection, IoAddCircle]
);
const adminLinks = generateLinks(
  4,
  [ROUTES.FAVCARDS, ROUTES.MYCARDS, ROUTES.CREATECARD, ROUTES.CRM],
  ["FavCards", "MyCards", "CreateCard", "CRM", "EditCard"],
  [FaHeart, BiSolidCollection, IoAddCircle, MdDashboard]
);

export { defaultData, welcomeLinks, loggedInLinks, businessLinks, adminLinks };
