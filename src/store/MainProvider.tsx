import { useState, useReducer, useContext, useRef } from "react";
import DynamicContext from "./DynamicContext";
import { homeReducer, homeInitialState } from "../reducers/homeReducer";
import { TTypicalChildren } from "../types/componentTypes";
import inputsNormalizer from "../constants/inputsNormalizer";
import { TInputsNormalizer } from "../types/PagesTypes/inputsNormalizerTypes";
import { TSure } from "../types/contextTypes";

const HomeProvider = ({ children }: TTypicalChildren) => {
  const [filteredData, setFilteredData] = useState([]);
  const [state, dispatch] = useReducer<any>(
    homeReducer,
    homeInitialState
  );
  const [checkbox, setCheckBox] = useState<boolean>(false);
  const heightContainer = useRef<HTMLFormElement>(null);
  const [percentage, setPercentage] = useState<number>(0);
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [registerInputs, setRegisterInputs] = useState<
    TInputsNormalizer["RegisterClient"]
  >(inputsNormalizer({}).RegisterClient);
  const { tokenData } = useContext<any>(DynamicContext);
  const inputRefs = Object.values(registerInputs).map(() => useRef(null));
  const [cards, setCards] = useState([]);
  const [sure, setSure] = useState<TSure>({
    closed: true,
    data: null,
  });
  const [currentPreview, setCurrentPreview] = useState(null);
  const [close, setClose] = useState<boolean>(true);

  const contextValue = {
    ...state,
    dispatch,
    checkbox,
    setCheckBox,
    cards,
    setCards,
    filteredData,
    inputRefs,
    setScrollAmount,
    setFilteredData,
    setRegisterInputs,
    scrollAmount,
    tokenData,
    percentage,
    setPercentage,
    heightContainer,
    sure,
    setSure,
    currentPreview,
    setCurrentPreview,
    close,
    setClose
  };

  return (
    <DynamicContext.Provider value={contextValue}>
      {children}
    </DynamicContext.Provider>
  );
};

export default HomeProvider;
