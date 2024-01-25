import { NavLink } from "react-router-dom";
import { TNavigateLink } from "../types/linkTypes";
import { centerItem } from "../utils/utils";
import { textColors } from "../constants/colors";

const NavLinkComp = ({ to, children }: TNavigateLink) => {
  return (
    <NavLink
      className={`${
        to === "/login" || to === "/register" ? "w-full" : "w-1/4"
      } rotateSpace tShadow shadow-lg shadow-white/25 p-[2rem] xl:p-[0rem] bg-black/50 rounded-full h-full hover:shadow-sky-500/25 hover:text-blue-500 transition-all ${centerItem()} gap-4`}
      to={to}>
      {({ isActive }) => (
        <p
          className={`${
            isActive ? textColors.SECONDARY : ""
          } ${centerItem()} gap-4`}>
          {children}
          {to === "/" && `home`}
        </p>
      )}
    </NavLink>
  );
};

export default NavLinkComp;
