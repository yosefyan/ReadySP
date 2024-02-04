import {  ReactNode } from "react";
import {
  TName,
  TAddress,
  TSensitive,
  TPermission,
  TImage,
} from "./PagesTypes/registerTypes";
import { IconTree, IconType } from "react-icons";

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
  submitData: {
    message: string;
    navigate: string;
  };
  subTitleInfo: {
    title: string;
    text: string;
    navigate: string;
  };
  reqType: string;
  requiredInputs: string[];
  // serverStructure: {
  //   [key: string]: string | boolean | number | TImage;
  //   phone: string;
  //   email: string;
  //   password: string;
  // };
  isMap: boolean;
};


export type TTvComp = {
  on:boolean
}

export type TCardComp = {
  rotate: string;
  title: string;
  which: string;
}

export type TUserReview = {
  person: IconType
  review: string;
  sale: string;
}

export type TCustomSearch = {
  [key: string]: string | boolean
}

export type TEyePassword = {
  hidePassword: boolean;
  handleEyeStatus: React.MouseEventHandler<HTMLElement>;
};

export type TLaser = {
  shouldRotate: boolean;
  direction: string;
  colorLaser: string
}

export type TSortedData = {
  [key: string]: number;
}

export type TMessageComp = {
  [key:string]: string
}