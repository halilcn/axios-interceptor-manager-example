import { DEFAULT_AUTH_TOKEN_HEADER_NAME } from "../../constants";

export const authTokenInterceptor = (payload) => (config) => {
  const { token, authHeaderName = DEFAULT_AUTH_TOKEN_HEADER_NAME } = payload;

  config.headers[authHeaderName] = token;

  return config;
};

export const responseHandlerInterceptor = () => (response) => response;

export const responseHeavyHandlerInterceptor = () => (response) => {
  console.log("it is a heavy compute....", response.config.url);
  return response;
};

export const errorHandlerInterceptor = () => (error) => {
  const status = error.response ? error.response.status : null;

  console.log("An error occurred!", error);
  console.log("status", status);

  return Promise.reject(error);
};
