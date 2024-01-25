import { RouteObject, useRoutes } from "react-router-dom";
import routerData from "../constants/routerData";

const Routes = () => {
  return useRoutes(
    routerData.elements.map(
      (Comp: React.ComponentType, i: number): RouteObject => ({
        path: routerData.paths[i],
        element: <Comp />,
      })
    )
  );
};

export default Routes;
