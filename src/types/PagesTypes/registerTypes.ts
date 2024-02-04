import { IconType } from "../../constants/iconsData";

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
  checkbox: boolean;
};


export type TInputsNormalizer = TPermission & {
  LoginClient?: {
    email: string;
    password: string;
  };
  RegisterClient: Record<
    | keyof TImage
    | keyof TAddress
    | keyof TName
    | keyof TPermission
    | keyof TSensitive,
    string
  >;
  RegisterServer: TRegisterServer;
};

export type TRegisterData = {
  Icons: IconType[];
  Buttons: IconType[];
};

export type TRegisterValidation = {
  whatOpening: string;
  min: number;
  max: number;
  regexType: string;
  isText: boolean;
  isRequired?: boolean;
  validate?: any;
};
