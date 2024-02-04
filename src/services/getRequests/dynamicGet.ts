import api, { addAuthorizationToken } from "../axiosSettings";

const dynamicGet = (url: string, shouldToken = false) => {
  const config = addAuthorizationToken({ headers: {} }, true);
  return api.get(url, shouldToken && config);
};

export default dynamicGet;
