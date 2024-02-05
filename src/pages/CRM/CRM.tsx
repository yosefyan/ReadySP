import UsersData from "./crmSections/UsersData";
import RolesGraph from "./crmSections/RolesGraph";
import CrmSettings from "./crmSections/CrmSettings";
import AreYouSure from "../../comps/AreYouSure";
import { centerItem } from "../../utils/utils";
import { useContext } from "react";
import DynamicContext from "../../store/DynamicContext";

const CRM = () => {
  const { sure } = useContext(DynamicContext);
  
  return (
    <div className="w-full h-[90%] flex flex-col-reverse lg:flex-row relative">
      <div
        style={{ zIndex: sure.closed ? -999 : 999 }}
        className={`w-full h-full absolute ${centerItem()}`}>
        <AreYouSure />
      </div>
      <UsersData />
      <div className={`w-full lg:w-[35%]`}>
        <RolesGraph />
        <CrmSettings />
      </div>
    </div>
  );
};

export default CRM;
