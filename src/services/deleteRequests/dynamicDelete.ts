import api, { addAuthorizationToken } from "../axiosSettings";

const dynamicDelete = async (fullUrl: string) => {
  try {
    const config = addAuthorizationToken({ headers: {} }, true);
    const { data } = await api.delete(fullUrl, config);
    return data;
  } catch (error) {
    throw error;
  }
};

export default dynamicDelete;
