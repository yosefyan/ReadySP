import React from "react";
import { Header, Main, Footer } from "../comps/WebsiteStructure";
import { TTypicalChildren } from "../types/componentTypes";
import useAutoLogin from "../hooks/useAutoLogin";
import Loading from "../pages/Loading/Loading";

const PageLayout: React.FC<TTypicalChildren> = ({ children }) => {
  const { finishedLoading } = useAutoLogin();
  const webComps: React.ComponentType[] = [Header, Main, Footer];
  return (
    <div className="w-[100vw] h-[100vh] max-lg:h-fit bg-[url('/src/assets/bgWebsite.png')] bg-center bg-[length:100%_100%]">
      {webComps.map((Comp: React.ComponentType<TTypicalChildren>, index) => {
        const compName = Comp.displayName || Comp.name;
        return (
          <React.Fragment key={index}>
            {compName === "Main" ? (
              <Comp>{finishedLoading ? children : <Loading />}</Comp>
            ) : (
              <Comp />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default PageLayout;
