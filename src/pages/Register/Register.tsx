import { centerItem } from "../../utils/utils";
import { RocketProgress, RegisterSlider } from "../../pages";
import RegisterProvider from "../../store/RegisterProvider";
import DisplayInputs from "./registerSections/DisplayInputs";

const Register = () => {
  return (
    <RegisterProvider>
      <div
        className={`${centerItem()} overflow-hidden flex-col xl:flex-row h-[90%] p-4 overflow-hidden`}>
        <div className={`w-[80%] xl:w-[60%] lg:w-full h-full ${centerItem()}`}>
          <RegisterSlider />
          <RocketProgress />
        </div>
        <div className="lg:w-[40%] hidden xl:block lg:h-full w-full h-[100vh]">
          <DisplayInputs />
        </div>
      </div>
    </RegisterProvider>
  );
};

export default Register;
