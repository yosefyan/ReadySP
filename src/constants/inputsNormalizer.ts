import {
  TName,
  TAddress,
  TImage,
  TSensitive,
  TPermission,
  TInputsNormalizer,
} from "../types/PagesTypes/registerTypes";

const inputsNormalizer = ({
  first = "",
  middle = "",
  last = "",
  nameData = {},
  title = "",
  subtitle = "",
  description = "",
  phone = "",
  email = "",
  web = "",
  password = "",
  imageData = {},
  addressData = {},
  isBusiness = {},
  url = "",
  alt = "",
  state = "",
  country = "",
  city = "",
  street = "",
  houseNumber = "",
  zip = "",
}): TInputsNormalizer => {
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
    phone: "",
    email: "",
    password: "",
  };

  const permissionsFormat: TPermission = {
    isBusiness: false,
  };

  const inlineCardFormat = {
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
  };

  return {
    LoginClient: {
      email,
      password,
    },
    RegisterClient: {
      ...nameFormat,
      ...sensitiveFormat,
      ...imageFormat,
      ...addressFormat,
      ...permissionsFormat,
    },
    RegisterServer: {
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
      ...permissionsFormat,
    },
    CardClient: {
      ...inlineCardFormat,
      ...imageFormat,
      ...addressFormat,
    },
    CardServer: {
      title,
      subtitle,
      description,
      phone,
      email,
      web,
      image: {
        ...imageData,
      },
      address: {
        ...addressData,
      },
    },
    EditCardClient: {
      title,
      subtitle,
      description,
      phone,
      email,
      web,
      url,
      alt,
      state,
      country,
      city,
      street,
      houseNumber,
      zip,
    },
    EditProfileClient: {
      first,
      middle,
      last,
      phone,
      url,
      alt,
      state,
      country,
      city,
      street,
      houseNumber,
      zip,
    },
    EditProfileServer: {
      name: {
        ...nameData,
      },
      phone,
      image: {
        ...imageData,
      },
      address: {
        ...addressData,
      },
    },
  };
};

export default inputsNormalizer;
