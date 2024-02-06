import { useContext } from "react";
import DynamicContext from "../store/DynamicContext";
import useAutoLogin from "../hooks/useAutoLogin";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import toastifyHelper from "../helpers/toastifyHelper";
import { EToastifyStatuses } from "../types/helpersTypes";
import { TTypicalChildren } from "../types/componentTypes";

const DynamicRoleMiddleware = ({ children }: TTypicalChildren) => {
  const { finishedLoading } = useAutoLogin();
  const { tokenData } = useContext<any>(DynamicContext);

  if (finishedLoading) {
    toastifyHelper({
      status: EToastifyStatuses.error,
      message: "Invalid Route or insufficient Privileges",
    });
    return (
      <Navigate to={tokenData.role !== null ? ROUTES.HOME : ROUTES.LOGIN} />
    );
  }

  return null;
};

export default DynamicRoleMiddleware;
