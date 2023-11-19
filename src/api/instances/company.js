import { API_BASE_URLS, INTERCEPTOR_TYPES } from "../../constants/index";
import {
  authTokenInterceptor,
  errorHandlerInterceptor,
  responseHeavyHandlerInterceptor,
} from "../interceptors";
import createInstance from "../helpers/createInstance";

const companyInstance = createInstance({
  baseURL: API_BASE_URLS.COMPANY,
});

companyInstance.interceptorManager.add({
  type: INTERCEPTOR_TYPES.REQUEST,
  name: "auth-token",
  handler: authTokenInterceptor({ token: "company-token" }),
});

companyInstance.interceptorManager.add({
  type: INTERCEPTOR_TYPES.RESPONSE,
  name: "heavy-compute",
  handler: responseHeavyHandlerInterceptor(),
});

companyInstance.interceptorManager.add({
  type: INTERCEPTOR_TYPES.RESPONSE,
  name: "error-handler",
  errorHandler: errorHandlerInterceptor(),
});

export default companyInstance;
