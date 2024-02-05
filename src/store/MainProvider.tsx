import { useState, useReducer, useContext, useRef, Reducer } from "react";
import DynamicContext from "./DynamicContext";
import { homeReducer, homeInitialState } from "../reducers/homeReducer";
import { TTypicalChildren } from "../types/componentTypes";
import inputsNormalizer from "../constants/inputsNormalizer";
import { TInputsNormalizer } from "../types/PagesTypes/inputsNormalizerTypes";
import { TSure } from "../types/contextTypes";
import { TInitialReducerData, TPayload } from "../types/reducerTypes";

const HomeProvider = ({ children }: TTypicalChildren) => {
  const [filteredData, setFilteredData] = useState([]);
  const [state, dispatch] = useReducer<Reducer<TInitialReducerData, TPayload>>(
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
  const { tokenData } = useContext(DynamicContext);
  const inputRefs = Object.values(registerInputs).map(() => useRef(null));
  const [cards, setCards] = useState([]);
  const [sure, setSure] = useState<TSure>({
    closed: true,
    data: null,
  });

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
  };

  return (
    <DynamicContext.Provider value={contextValue}>
      {children}
    </DynamicContext.Provider>
  );
};

export default HomeProvider;
