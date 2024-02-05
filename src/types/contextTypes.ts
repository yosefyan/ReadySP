import { TInputsNormalizer } from "./PagesTypes/inputsNormalizerTypes";

export type TTokenDataContext = {
  empty: boolean;
  user: {
    _id: string;
    iat: number;
    isAdmin: boolean;
    isBusiness: boolean;
  } | null;
  role: string;
};

export type TSure = {
  sure?: {
    req: string;
    id: string;
    route: string;
  };
  closed?: boolean;
  data?: null | unknown;
};

export type TMainProvider = TAuthProvider & {
  percentage: number;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
  registerInputs: TInputsNormalizer["RegisterClient"];
  setRegisterInputs: React.Dispatch<
    React.SetStateAction<TInputsNormalizer["RegisterClient"]>
  >;
  checkbox: boolean;
  setCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  scrollAmount: number;
  setScrollAmount: React.Dispatch<React.SetStateAction<number>>;
  heightContainer: any;
  inputRefs: any;
  tokenData: TTokenDataContext;
  setTokenData: React.Dispatch<React.SetStateAction<TTokenDataContext>>;
  state: unknown;
  dispatch: React.DispatchWithoutAction;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  cards: [];
  sure: TSure;
  setSure: React.Dispatch<React.SetStateAction<TSure>>;
};

export type TAuthProvider = {
  shouldLogout: boolean;
  setShouldLogout: React.Dispatch<React.SetStateAction<boolean>>;
};
