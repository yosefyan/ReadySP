import React, { useContext } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { routerData } from "./ROUTES";
import DynamicRoleMiddleware from "../middlewares/DynamicRoleMiddleware";
import { defaultData } from "../layout/linksLayout";
import DynamicContext from "../store/DynamicContext";
import { linksMapping } from "../comps/DetermineLinks";
import { TMainProvider } from "../types/contextTypes";

const Routes = () => {
  const { tokenData } = useContext<TMainProvider>(DynamicContext);
  const routeLogic = (Comp: React.ComponentType) => {
    if (
      linksMapping[tokenData.role][0].comp.includes(Comp.name) ||
      defaultData.defaultLinks[0].comp.includes(Comp.name) ||
      (tokenData.role !== "Ghost" &&
        defaultData.defaultLoggediInLinks[0].comp.includes(Comp.name))
    ) {
      return <Comp />;
    } else {
      return (
        <DynamicRoleMiddleware>
          <Comp />
        </DynamicRoleMiddleware>
      );
    }
  };

  return useRoutes(
    routerData.elements.map(
      (Comp: React.ComponentType, i: number): RouteObject => ({
        path: routerData.paths[i].includes("edit")
          ? `${routerData.paths[i]}/:cardId`
          : routerData.paths[i],
        element: routeLogic(Comp),
      })
    )
  );
};

export default Routes;
