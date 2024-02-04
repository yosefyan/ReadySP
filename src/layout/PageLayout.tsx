import React, { useEffect } from "react";
import { Header, Main, Footer } from "../comps/WebsiteStructure";
import { TTypicalChildren } from "../types/componentTypes";
import useAutoLogin from "../hooks/useAutoLogin";
import Loading from "../pages/Loading/Loading";
const PageLayout: React.FC<TTypicalChildren> = ({ children }) => {
  const finishedLoading = useAutoLogin();
  const webComps: React.ComponentType[] = [Header, Main, Footer];

  const handleResize = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="w-[100vw] h-[100vh] max-lg:h-fit bg-[url('/src/assets/bgWebsite.png')] bg-center bg-[length:100%_100%]">
      {webComps.map((Comp: React.ComponentType<TTypicalChildren>, index) => {
        return (
          <React.Fragment key={index}>
            <Comp>{finishedLoading ? children : <Loading />}</Comp>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default PageLayout;
