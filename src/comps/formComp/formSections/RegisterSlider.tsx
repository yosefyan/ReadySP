import { useEffect, useContext, FormEvent } from "react";
import {
  buttonStyles,
  centerItem,
} from "../../../utils/utils";
import registerData from "../../../constants/registerData";
import { TriangleComp } from "../..";
import DynamicContext from "../../../store/DynamicContext";
import useJoiMessage from "../../../hooks/useJoiMessage";
import {  handleScroll, toastifyHelper } from "../../../helpers";
import dynamicPostRequest from "../../../services/dynamicPost";
import { useNavigate } from "react-router-dom";
import { EToastifyStatuses } from "../../../types/helpersTypes";
import PlanetsComp from "../../PlanetsComp";
import dynamicPut from "../../../services/putRequests/dynamicPut";
import { TFormComp } from "../../../types/componentTypes";
import MainSquare from "./MainSquare";

const RegisterSlider = ({
  inputsState,
  setInputsState,
  serverStructure,
  Icons,
  currentData,
  reqUrl,
  requiredInputs,
  submitData,
  reqType,
}: TFormComp) => {
  const navigate = useNavigate();
  const { message } = useJoiMessage("", "");
  const { Buttons } = registerData;
  const {
    scrollAmount,
    setScrollAmount,
    percentage,
    setPercentage,
    setCheckBox,
    heightContainer,
    inputRefs,
  } = useContext(DynamicContext);

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);
  useEffect(() => {
    let maxHeight =
      (Icons.length - 1) * (heightContainer.current?.clientHeight || 0);
    setPercentage((scrollAmount / maxHeight) * 100);
    heightContainer.current?.scroll({
      behavior: "smooth",
      top: scrollAmount,
    });
  }, [scrollAmount]);
  let handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget as HTMLFormElement;

    if (!formElement.checkValidity()) {
      toastifyHelper({
        status: EToastifyStatuses.error,
        message: "Please fill all required inputs.",
      });
    } else {
      try {
        reqType.request === "PUT"
          ? await dynamicPut(reqType.id, serverStructure)
          : await dynamicPostRequest(reqUrl, serverStructure);
        toastifyHelper({
          status: EToastifyStatuses.success,
          message: submitData.message,
        });
        navigate(submitData.navigate);
      } catch (error) {
        toastifyHelper({
          status: EToastifyStatuses.error,
          message:
            error.response.data.replace("Joi Error:", "") || message.joiError,
        });
      }
    }
  };
  return (
    <form
      noValidate
      ref={heightContainer}
      onSubmit={handleSubmit}
      className={`lg:w-[80%] lg:h-full w-[100vw] h-[100vh] overflow-hidden`}>
      {Object.entries(inputsState).map(([key, value], i) => {
        let Icon = Icons[i];
        let specialCases = ["first", "middle", "last"];

        const addName = specialCases.includes(key) ? key + " Name" : key;
        return (
          <div
            className={`rotateSpace transition-all min-w-full h-full relative ${centerItem()} flex-col`}
            key={`registerData${i}`}>
            <TriangleComp shouldDown={true}>
              <a
                onClick={() =>
                  handleScroll(
                    setScrollAmount,
                    heightContainer,
                    "clientHeight",
                    "back",
                    i,
                    true,
                    percentage,
                    true,
                    inputRefs
                  )
                }
                className={`${buttonStyles()} translate-y-[7vh]`}>
                {Buttons.normalButtons.names[0]}
              </a>
            </TriangleComp>
            <MainSquare
              inputsState={inputsState}
              theKey={key}
              addName={addName}
              value={value}
              currentData={currentData}
              requiredInputs={requiredInputs}
              i={i}
              Icon={Icon}
              setInputsState={setInputsState}
              inputsRefs={inputRefs}
              setCheckBox={setCheckBox}
            />
            <TriangleComp shouldDown={false}>
              {percentage >= 100 ? (
                <input
                  className="text-4xl w-[25vw] p-8 text-white/25 font-black tracking-widest translate-y-[-7vh] cursor-pointer"
                  type="submit"
                  value="SUBMIT"
                  disabled={false}
                />
              ) : (
                <a
                  onClick={() =>
                    handleScroll(
                      setScrollAmount,
                      heightContainer,
                      "clientHeight",
                      "next",
                      i,
                      true,
                      percentage,
                      true,
                      inputRefs
                    )
                  }
                  className={`${buttonStyles()} translate-y-[-7vh]`}>
                  {Buttons.normalButtons.names[1]}
                </a>
              )}
            </TriangleComp>
            <PlanetsComp />
          </div>
        );
      })}
    </form>
  );
};
export default RegisterSlider;
