import { TServerRoutes } from "../types/routesTypes";
import api from "./axiosSettings";

const dynamicPostRequest = async (route: string, data:TServerRoutes) => {
  try {
    return api.post(route, data);
  } catch (error) {
    return new Error(`Error for route ${route} with the following data ${data}`);
  }
};

export default dynamicPostRequest;
