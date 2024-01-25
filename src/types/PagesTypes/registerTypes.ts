import { IconType } from "react-icons";

export type TName = {
  first: string;
  middle: string;
  last: string;
};

export type TImage = {
  url: string;
  alt: string;
};

export type TAddress = {
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  zip: string;
};

export type TSensitive = {
  phone: string;
  email: string;
  password: string;
};

export type TRegisterServer = TSensitive & {
  image: TImage;
  address: TAddress;
  name: TName;
};

export type TPermission = {
  business: boolean;
};

export type TRegisterNormalizer = {
  DataForLogin?: {
    email: string,
    password: string
  },
  DataForClient: Record<
    | keyof TImage
    | keyof TAddress
    | keyof TName
    | keyof TPermission
    | keyof TSensitive,
    string | boolean
  >;
  DataForRegister: TRegisterServer;
};

export type TRegisterData = {
  Icons: IconType[];
  Buttons: IconType[];
};

export type TRegisterProvider = {
  percentage: number;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
  registerInputs: TRegisterNormalizer["DataForClient"];
  setRegisterInputs: React.Dispatch<
    React.SetStateAction<TRegisterNormalizer["DataForClient"]>
  >;
  checkbox: boolean;
  setCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
  scrollAmount: number;
  setScrollAmount: React.Dispatch<React.SetStateAction<number>>;
  heightContainer: any;
  inputRefs: any;
};

export type TRegisterValidation = {
  whatOpening: string;
  min: number;
  max: number;
  regexType: string;
  isText: boolean;
  isRequired?: boolean
  validate?: any
};
