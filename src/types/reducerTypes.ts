export type TInitialReducerData = {
  data: any[];
  searchResult: any[];
  userSearchResult: any[];
  usersData: any[];
};

//usersData
export type TSortedTitle = {
  title: string;
  name: {
    first: string;
  };
  _id: string;
  isAdmin: boolean;
  isBusiness: boolean;
};

//searchResult
export type TUpdatedCard = {
  _id: string;
  createdAt: string;
};

//data
export type TDataReducer = {
  likes: string[];
  title: string;
};

//usersSearchResult
export type TUsersSearchResult = {
  createdAt: string;
};

export type TPayload = {
  payload: {
    searchInput: string;
    data: TDataReducer
    cardId: string;
    userId: string;
    usersData: TSortedTitle[];
    shouldLike: boolean;
    userSearch: boolean;
  };
  type: string;
};
