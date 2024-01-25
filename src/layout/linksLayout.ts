import ROUTES from "../routes/ROUTES";
import { FaHome, FaPencilAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { GiFallingStar } from "react-icons/gi";
import { MdDashboard, MdWavingHand } from "react-icons/md";
import { BsCardHeading, BsPerson } from "react-icons/bs";

const generateLinks = (
  times: number,
  route: string[],
  icon: React.ReactElement[]
) => {
  return Array.from({ length: times }, (_, i) => ({
    to: route[i],
    children: route[i].replace("/", ""),
    icon: icon[i],
  }));
};

const defaultData = {
  defaultLinks: generateLinks(
    2,
    [ROUTES.ABOUT, ROUTES.HOME],
    [GiFallingStar, FaHome]
  ),
  defaultLoggediInLinks: generateLinks(1, [ROUTES.PROFILE], [BsPerson]),
};

const welcomeLinks = generateLinks(
  3,
  [ROUTES.WELCOME, ROUTES.LOGIN, ROUTES.REGISTER],
  [MdWavingHand, IoMdLogIn, FaPencilAlt]
);

const loggedInLinks = generateLinks(1, [ROUTES.FAVCARDS], [BsCardHeading]);

const businessLinks = generateLinks(1, [ROUTES.MYCARDS], [FaHome]);
const adminLinks = generateLinks(1, [ROUTES.DASHBOARD], [MdDashboard]);
// const defaultLinks = generateLinks(
//   2,
//   [ROUTES.ABOUT, ROUTES.HOME],
//   [GiFallingStar, FaHome]
// );
// const defaultLoggediInLinks = generateLinks(1, ROUTES.PROFILE, [BsPerson]);
// const loggedInLinks = generateLinks(
//   2,
//   [ROUTES.LOGIN, ROUTES.REGISTER],
//   [IoMdLogIn, FaPencilAlt]
// );

export { defaultData, welcomeLinks, loggedInLinks, businessLinks, adminLinks };
