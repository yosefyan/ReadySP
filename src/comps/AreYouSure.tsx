import { useContext } from "react";
import areYouSureData from "../constants/areYouSureData";
import { centerItem, gradient, iconStyles, titleStyles } from "../utils/utils";
import DynamicContext from "../store/DynamicContext";
import dynamicDelete from "../services/deleteRequests/dynamicDelete";
import { EToastifyStatuses } from "../types/helpersTypes";
import toastifyHelper from "../helpers/toastifyHelper";
import dynamicPatch from "../services/patchRequests/dynamicPatch";
import { TSure } from "../types/contextTypes";

const AreYouSure: React.FC = () => {
  const { card, sure, setSure, dispatch, usersData } =
    useContext<any>(DynamicContext);

  const handleConfirm = async (i: number) => {
    setSure((prev: TSure) => ({
      ...prev,
      closed: true,
    }));
    if (i === 1) {
      try {
        if (sure.data.req === "delete") {
          await dynamicDelete(`${sure.data.route}${sure.data.id}`);
          if (sure.data.route.includes("cards")) {
            dispatch({
              type: "FAV_CARD",
              payload: { data: card, cardId: sure.data.id },
            });
          }
          if (sure.data.route.includes("user")) {
            dispatch({
              type: "FIL_USER",
              payload: { usersData, userId: sure.data.id },
            });
          }
        } else if (sure.data.req === "patch") {
          await dynamicPatch(`${sure.data.route}${sure.data.id}`);
        }
        toastifyHelper({
          status: EToastifyStatuses.success,
          message: `${
            sure.data.req === "delete" ? "Deleted" : ""
          } successfully.`,
        });
      } catch (error) {
        toastifyHelper({
          status: EToastifyStatuses.error,
          message: "Item does not exist or error deleting.",
        });
        throw error;
      }
    }
  };

  return (
    <div
      className={`rounded-2xl ${
        sure.closed ? "scale-0" : "scale-1"
      } shadow transition-all shadow-black w-[80vw] lg:w-[60vw] h-[50vh] ${centerItem(
        "justify-evenly"
      )} flex-col ${gradient(false, "from-orange-500/50", "to-blue-500/50")}`}>
      <h1
        className={`text-center ${centerItem()} bg-black/25 p-4 w-full h-[30%] text-white/50 ${titleStyles(
          "text-6xl"
        )}`}>
        Are you sure?
      </h1>
      <div className={`w-[80%] h-[30%] ${centerItem("justify-evenly")}`}>
        {areYouSureData.icons.map((Icon, i) => {
          return (
            <div
              onClick={() => handleConfirm(i)}
              className={`${centerItem()} cursor-pointer hover:scale-95 transition-all w-[80%] lg:w-[40%] shadow-2xl shadow-black ${titleStyles()} p-4 rounded-2xl gap-4 h-[80%] ${
                i === 0 ? "bg-red-500/50" : "bg-green-500/50"
              }`}
              key={`areYouSureButtons${i}`}>
              <i className={`${iconStyles()} text-white`}>
                <Icon />
              </i>
              <button className="text-white/50">
                {areYouSureData.buttons[i]}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreYouSure;
