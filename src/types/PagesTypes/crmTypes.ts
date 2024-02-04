export type TUserSearchResult = {
  user: {
    name: {
      first: string;
      middle: string;
      last: string;
    };
    role: string;
    _id: string;
  };
  index: number;
};

export type TCurrentRole = {
  role: string;
  index: null | number;
};
