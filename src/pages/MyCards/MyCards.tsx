import TV from "./myCardsSections/TV";
import Controller from "./myCardsSections/Controller";
import { centerItem } from "../../utils/utils";
import { useContext, useState } from "react";
import AreYouSure from "../../comps/AreYouSure.tsx";
import DynamicContext from "../../store/DynamicContext";

const MyCards = () => {
  const [on, setOn] = useState(true);
  const { sure } = useContext(DynamicContext);
  return (
    <div
      style={{ height: "initial" }}
      className={`flex-col lg:flex-row w-full lg:h-[85vh] gap-8 lg:gap-0 ${centerItem()}`}>
      <div
        style={{ zIndex: sure.closed ? -999 : 999 }}
        className={`w-full h-full absolute ${centerItem()}`}>
        <AreYouSure />
      </div>
      <TV on={on} />
      <Controller on={on} setOn={setOn} />
    </div>
  );
};

export default MyCards;
