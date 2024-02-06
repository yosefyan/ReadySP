import { centerItem } from "../../utils/utils";
import { RocketProgress, RegisterSlider } from "../../comps";
import DisplayInputs from "./formSections/DisplayInputs";
import { TFormComp } from "../../types/componentTypes";

const FormComp = ({
  Icons,
  inputsState,
  setInputsState,
  inputsNormalizer,
  serverStructure,
  requiredInputs,
  subTitleInfo,
  currentData,
  reqUrl,
  submitData,
  reqType,
  isMap,
  shouldFloat,
}: TFormComp) => {
  return (
    <div
      className={`${centerItem()} ${
        shouldFloat && "absolute w-full bg-black/75"
      } overflow-hidden flex-col xl:flex-row h-[90%] p-4 overflow-hidden`}>
      <div className={`w-[80%] xl:w-[60%] lg:w-full h-full ${centerItem()}`}>
        <RegisterSlider
          reqType={reqType}
          submitData={submitData}
          currentData={currentData}
          Icons={Icons}
          serverStructure={serverStructure}
          inputsNormalizer={inputsNormalizer}
          inputsState={inputsState}
          setInputsState={setInputsState}
          reqUrl={reqUrl}
          requiredInputs={requiredInputs}
          shouldFloat={shouldFloat}
        />
        <RocketProgress />
      </div>
      <div className="lg:w-[40%] hidden xl:block lg:h-full w-full h-[100vh]">
        <DisplayInputs
          subTitleInfo={subTitleInfo}
          requiredInputs={requiredInputs}
          inputsState={inputsState}
          isMap={isMap}
        />
      </div>
    </div>
  );
};

export default FormComp;
