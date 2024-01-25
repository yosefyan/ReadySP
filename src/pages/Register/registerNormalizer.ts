import {
  TName,
  TAddress,
  TImage,
  TSensitive,
  TPermission,
  TRegisterNormalizer,
} from "../../types/PagesTypes/registerTypes";

const registerNormalizer = (
  nameData?,
  phone?,
  email?,
  password?,
  imageData?,
  addressData?,
  business?
): TRegisterNormalizer => {
  const nameFormat: TName = {
    first: "",
    middle: "",
    last: "",
  };

  const imageFormat: TImage = {
    url: "",
    alt: "",
  };

  const addressFormat: TAddress = {
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  };

  const sensitiveFormat: TSensitive = {
    email: "",
    password: "",
    phone: "",
  };

  const permissionsFormat: TPermission = {
    business: false,
  };

  return {
    DataForLogin: {
      email,
      password
    },
    DataForClient: {
      ...nameFormat,
      ...sensitiveFormat,
      ...imageFormat,
      ...addressFormat,
      ...permissionsFormat,
    },
    DataForRegister: {
      name: {
        ...nameData,
      },
      phone,
      email,
      password,
      image: {
        ...imageData,
      },
      address: {
        ...addressData,
      },
      isBusiness: business,
    },
  };
};

export default registerNormalizer;
