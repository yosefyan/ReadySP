import {
  defaultData,
  welcomeLinks,
  loggedInLinks,
  businessLinks,
  adminLinks,
} from "../layout/linksLayout";
import NavLinkComp from "./NavLinkComp";
import { centerItem } from "../utils/utils";
import { useEffect, useState } from "react";
import useRoleMatch from "../hooks/useRoleMath";

const DetermineLinks = () => {
  const [whichLinks, setWhichLinks] = useState([]);
  // const { neededRole } = useRoleMatch({
  //   ghost: welcomeLinks,
  //   normal: loggedInLinks,
  //   business: businessLinks,
  //   admin: adminLinks,
  // });
  
  useEffect(() => {
    // const linksMapping = {
    //   Ghost: welcomeLinks,
    //   Normal: loggedInLinks,
    //   Business: businessLinks,
    //   Admin: adminLinks,
    // };
    // setWhichLinks(neededRole[neededRole.join("")]);







    // if (determineRole.includes("Ghost")) {
    //   setWhichLinks(welcomeLinks);
    //   return;
    // }
    // if (determineRole.includes("Normal")) {
    //   setWhichLinks(loggedInLinks);
    //   return;
    // }
    // if (determineRole.includes("Business")) {
    //   setWhichLinks(businessLinks);
    //   return;
    // }
    // if (determineRole.includes("Admin")) {
    //   setWhichLinks(adminLinks);
    //   return;
    // }
  }, []);
  //! BIG CHALLENGE - FIGURE IT OUT HOW TO CLEAN THIS CODE
  return (
    <div className="flex w-full h-[10%] justify-between text-white text-center font-black text-3xl">
      {/* {Object.values(defaultData).map((defa) => {
        return Object.entries(defa).map(([key, value], i) => {
          let Icon = value.icon;

          return key === "defaultLoggediInLinks" ||
            !neededRole?.includes("Ghost") ? (
            <NavLinkComp key={`defaultLinks${i}`} to={value.to}>
              <Icon /> <span>{value.children}</span>
            </NavLinkComp>
          ) : (
            <NavLinkComp
              key={`defaultLinks${i}`}
              to={defaultData.defaultLinks.to}>
              <Icon /> <span>{defaultData.defaultLinks.children}</span>
            </NavLinkComp>
          );
        });
      })} */}
      <div className={`grow-2 w-1/4 max-lg:w-full ${centerItem()}`}>
        {whichLinks?.map((lin, i) => {
          let Icon = lin.icon;
          return (
            <NavLinkComp key={`loggedInLinks${i}`} to={lin.to}>
              <Icon /> <span>{lin.children}</span>
            </NavLinkComp>
          );
        })}
      </div>
    </div>
  );
};

export default DetermineLinks;
