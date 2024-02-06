import { NavLink } from "react-router-dom";
import { TNavigateLink } from "../types/linkTypes";
import { centerItem, gradient } from "../utils/utils";
import { textColors } from "../constants/colors";

const NavLinkComp = ({ to, children, filterTab }: TNavigateLink) => {
  return (
    <NavLink
      className={`z-20 w-full h-full p-[2rem] border-b-4 border-sky-500/25 xl:w-[80%] rotateSpace bg-black/90 text-white/50 rounded-lg h-full hover:shadow-sky-500/25 hover:text-blue-500 transition-all ${gradient(
        true,
        "from-orange-500/50",
        "to-blue-500/50"
      )} ${centerItem()} gap-4`}
      to={`/#/${to}`}>
      {({ isActive }) => (
        <p
          className={`${
            isActive ? textColors.SECONDARY : ""
          } ${centerItem()} gap-4`}>
          {children}
          {to === "/" && !filterTab && `HOME`}
        </p>
      )}
    </NavLink>
  );
};

export default NavLinkComp;
