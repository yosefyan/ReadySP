import {
  defaultData,
  welcomeLinks,
  loggedInLinks,
  businessLinks,
  adminLinks,
} from "../layout/linksLayout";
import NavLinkComp from "./NavLinkComp";
import { centerItem, shadowEffects } from "../utils/utils";
import React, { useContext, useEffect, useState } from "react";
import DynamicContext from "../store/DynamicContext";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "../constants/iconsData";
import ROUTES from "../routes/ROUTES";
import useAutoLogin from "../hooks/useAutoLogin";
import ListComp from "./ListComp";
import { TTokenDataContext } from "../types/contextTypes";
import { LinkItem, TDetermineLinks } from "../types/linkTypes";

export const linksMapping: any = {
  Ghost: welcomeLinks,
  Normal: loggedInLinks,
  Business: businessLinks,
  Admin: adminLinks,
};
const DetermineLinks: React.FC = ({
  customHeight,
  filterTab,
}: TDetermineLinks) => {
  const [whichLinks, setWhichLinks] = useState<any>([]);
  const finishedLoading = useAutoLogin();
  const { tokenData, setTokenData, shouldLogout, setShouldLogout } =
    useContext<any>(DynamicContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTokenData((prevTokenData: TTokenDataContext) => ({
      ...prevTokenData,
      empty: true,
      user: null,
      role: "Ghost",
    }));
    setShouldLogout(true);
    navigate(ROUTES.WELCOME);
  };

  useEffect(() => {
    if (finishedLoading && localStorage.getItem("token")) {
      setShouldLogout(false);
    } else {
      setShouldLogout(true);
    }
  }, [finishedLoading, localStorage.getItem("token")]);

  useEffect(() => {
    setWhichLinks(linksMapping[tokenData?.role]);
  }, [tokenData]);

  const roleChecker = () => {
    if (tokenData?.role === "Ghost") {
      return shouldLogout && tokenData.empty;
    } else {
      return !shouldLogout && !tokenData.empty;
    }
  };

  return (
    <div
      className={`z-50 flex w-full ${
        customHeight || "h-[10%]"
      } justify-between text-white/50 text-center font-black text-3xl select-none`}>
      <div className={` grow-2 w-full max-lg:w-full z-50 ${centerItem()}`}>
        {filterTab ? (
          ""
        ) : (
          <ListComp listName={"ROLE LIST"}>
            {roleChecker() &&
              whichLinks?.map((lin: any, i: number) => {
                let Icon = lin.icon;
                return (
                  <NavLinkComp key={`loggedInLinks${i}`} to={lin.to}>
                    <Icon />
                    <span>{lin.children?.replace("-", " ").toUpperCase()}</span>
                  </NavLinkComp>
                );
              })}
          </ListComp>
        )}
        <div className={`w-full ${centerItem()} flex-col lg:flex-row`}>
          {Object.values(defaultData.defaultLinks).map((defa, i) => {
            let Icon: any = defa.icon;
            return (
              <div
                key={`defaultLinks${i}`}
                className={`${centerItem()} w-full xl:w-[80%] h-full ${shadowEffects}`}>
                <NavLinkComp filterTab={filterTab} to={defa.to}>
                  <Icon />
                  {filterTab ? "" : <span>{defa.children?.toUpperCase()}</span>}
                </NavLinkComp>
              </div>
            );
          })}
        </div>
        {!shouldLogout &&
          !tokenData.empty &&
          Object.values(defaultData.defaultLoggediInLinks).map((value, i) => {
            let Icon: any = value.icon;
            return filterTab ? (
              ""
            ) : (
              <React.Fragment key={`defaultDataLoggedIn${i}`}>
                <ListComp listName={"USER LIST"}>
                  <NavLinkComp key={`roleLinks${i}`} to={value.to}>
                    <Icon />
                    <span>{value.children?.toUpperCase()}</span>
                  </NavLinkComp>
                  <a
                    onClick={handleLogout}
                    className={`w-[60%] h-[50%] cursor-pointer hover:scale-95 gap-4 p-4 rounded-2xl bg-red-500/70 ${centerItem()}`}>
                    <i>
                      <IoIosLogOut />
                    </i>
                    LOG OUT
                  </a>
                </ListComp>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default DetermineLinks;
