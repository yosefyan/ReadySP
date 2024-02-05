export type TUserSearchResult = {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  role: string;
  _id: string;
  index: number;
  phone: string;
  address: {
    country: string;
    city: string;
    street: string;
  };
};

export type TCurrentRole = {
  role: string;
  index: null | number;
};
