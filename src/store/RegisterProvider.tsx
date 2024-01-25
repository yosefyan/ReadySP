import { ReactNode, useState, useRef } from "react";
import { TRegisterProvider } from "../types/PagesTypes/registerTypes";
import registerNormalizer from "../pages/Register/registerNormalizer";
import { TRegisterNormalizer } from "../types/PagesTypes/registerTypes";
import DynamicContext from "./DynamicContext";

const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [percentage, setPercentage] = useState<number>(0);
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [registerInputs, setRegisterInputs] = useState<
    TRegisterNormalizer["DataForClient"]
  >(registerNormalizer().DataForClient);
  let [checkbox, setCheckBox] = useState<boolean>(false);
  const heightContainer = useRef<HTMLFormElement>(null);
  const inputRefs = Object.values(registerInputs).map(() => useRef(null));

  const contextValue: TRegisterProvider = {
    percentage,
    setPercentage,
    registerInputs,
    setRegisterInputs,
    checkbox,
    setCheckBox,
    scrollAmount,
    setScrollAmount,
    heightContainer,
    inputRefs,
  };

  return (
    <DynamicContext.Provider value={contextValue}>
      {children}
    </DynamicContext.Provider>
  );
};

export default RegisterProvider;
