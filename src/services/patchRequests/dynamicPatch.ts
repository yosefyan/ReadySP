import api, { addAuthorizationToken } from "../axiosSettings";

const dynamicPatch = async (fullUrl: string) => {
  try {
    const config = addAuthorizationToken({ headers: {} }, true);
    const { data } = await api.patch(fullUrl, config);
    return data;
  } catch (error) {
    throw error;
  }
};

export default dynamicPatch;
