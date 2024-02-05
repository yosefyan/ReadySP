import { ReactNode } from "react";
import {
  TName,
  TAddress,
  TSensitive,
  TPermission,
  TImage,
} from "./PagesTypes/inputsNormalizerTypes";
import { IconTree, IconType } from "react-icons";
import { TCardConst, TCreateCardData, TData } from "./constantsTypes";

export type TTypicalChildren = {
  children?: ReactNode;
};

export type TAuthProvider = {};

export type TDisplayInputs = {
  inputsState: { [key: string]: string | number };
  subTitleInfo: {
    title: string;
    text: string;
    navigate: string;
  };
  requiredInputs: Record<
    | keyof TImage
    | keyof TAddress
    | keyof TName
    | keyof TPermission
    | keyof TSensitive,
    string | boolean
  >;
  isMap: boolean;
};

export type TListComp = TTypicalChildren & {
  index?: number;
  listName?: string;
  currentRole?: {
    role: string;
    index: null | number;
  };
};

export type TIcon = {
  Icon: IconTree;
};

export type TMapComp = {
  city: string | number;
};

export type TFormComp = {
  Icons: IconType[];
  submitData?: {
    message: string;
    navigate: string;
  };
  shouldFloat: boolean;
  currentData: TCreateCardData;
  subTitleInfo: {
    title: string;
    text: string;
    navigate: string;
  };
  setInputsState: React.Dispatch<React.SetStateAction<any>>;
  reqUrl: string;
  reqType: {
    request: string;
    id: string;
  };

  inputsNormalizer: {};
  inputsState: {
    [key: string]: string | {};
  };
  serverStructure: {
    [key: string]: string | {};
  };
  requiredInputs: string[];
  isMap: boolean;
};

export type TTvComp = {
  on: boolean;
};

export type TCardComp = {
  rotate: string;
  title: string;
  which: string;
};

export type TUserReview = {
  person: IconType;
  review: string;
  sale: string;
};

export type TCustomSearch = {
  [key: string]: string | boolean;
};

export type TEyePassword = {
  hidePassword: boolean;
  handleEyeStatus: React.MouseEventHandler<HTMLElement>;
};

export type TLaser = {
  shouldRotate: boolean;
  direction: string;
  colorLaser: string;
};

export type TSortedData = {
  [key: string]: number;
};

export type TMessageComp = {
  [key: string]: string;
};

export type TMainSquare = {
  inputsState: { [key: string]: string | {} };
  value: string | {};
  currentData: TCreateCardData;
  i: number;
  Icon: IconType;
  addName: string;
  theKey: string;
  requiredInputs: string[];
  setCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
  setInputsState: React.Dispatch<React.SetStateAction<string>>;
  shouldFloat: boolean;
};

export type TDataComp = {
  card: TCardConst;
  data: TData;
  shouldShow: number;
  i: number;
  onLike: (cardId: string, card: [], i: number) => {};
  onDelete: (cardId: string) => {};
  shouldLike: {
    index: number;
    isLiked: boolean;
  };
};

export type THolograms = {
  url: string;
  full: string;
  shouldFilter: boolean;
};
