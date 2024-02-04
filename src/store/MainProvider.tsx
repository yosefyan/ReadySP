import {
  useState,
  useReducer,
  useContext,
  useRef,
} from "react";
import { THomeProvider } from "../types/PagesTypes/homeTypes";
import DynamicContext from "./DynamicContext";
import { homeReducer, homeInitialState } from "../reducers/homeReducer";
import { TTypicalChildren } from "../types/componentTypes";
import inputsNormalizer from "../constants/inputsNormalizer";
import { TInputsNormalizer } from "../types/PagesTypes/registerTypes";

const HomeProvider = ({ children }: TTypicalChildren) => {
  const [filteredData, setFilteredData] = useState([]);
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);
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
 const [sure, setSure] = useState({
   closed: true,
   data: null,
 });

  const contextValue: THomeProvider = {
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
    setSure
  };

  return (
    <DynamicContext.Provider value={contextValue}>
      {children}
    </DynamicContext.Provider>
  );
};

export default HomeProvider;
