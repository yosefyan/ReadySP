import { TServerRoutes } from "../../types/routesTypes";
import api, { addAuthorizationToken } from "../axiosSettings";

const dynamicPut = async (specificRoute: string, info: TServerRoutes) => {
  try {
    const config = addAuthorizationToken({ headers: {} }, true);
    const { data } = await api.put(specificRoute, info, config);
    return data;
  } catch (error) {
    throw error;
  }
};

export default dynamicPut;
