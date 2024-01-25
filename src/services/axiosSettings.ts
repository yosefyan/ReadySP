import axios from "axios";

const api = axios.create({
  baseURL: "https://monkfish-app-z9uza.ondigitalocean.app/bcard2",
});

const addAuthorizationToken = (config, shouldIncludeToken: boolean = false) => {
  if (shouldIncludeToken) {
    config.headers['x-auth-token'] = localStorage.getItem('token');
  }

  return config;
};

api.interceptors.request.use(
  (config) => addAuthorizationToken(config, true),
  (error) => Promise.reject(error)
);


export default api