import { INTERCEPTOR_TYPES } from "../../constants";

const defaultErrorHandler = (err) => Promise.reject(err);
const defaultInterceptorHandler = (res) => res;

export const interceptorManagerSetup = (instance) => {
  const allInterceptors = {};

  const findInterceptorByUsingName = (name) => allInterceptors[name];
  const executeInterceptor = (type, actions) =>
    INTERCEPTOR_TYPES.REQUEST === type
      ? instance.interceptors.request.use(...actions)
      : instance.interceptors.response.use(...actions);
  const ejectInterceptor = (type, id) =>
    INTERCEPTOR_TYPES.REQUEST === type
      ? instance.interceptors.request.eject(id)
      : instance.interceptors.response.eject(id);

  const add = (payload) => {
    const {
      type,
      name,
      handler = defaultInterceptorHandler,
      errorHandler = defaultErrorHandler,
    } = payload;
    const interceptorPayload = [handler, errorHandler];

    if (!type || !name) return;

    allInterceptors[name] = {
      id: executeInterceptor(type, interceptorPayload),
      type,
      name,
      interceptorPayload,
    };
  };

  const remove = (name) => {
    const interceptor = findInterceptorByUsingName(name);
    if (!interceptor) return;

    ejectInterceptor(interceptor.type, interceptor.id);
    interceptor.id === null;
  };

  const set = (name) => {
    const interceptor = findInterceptorByUsingName(name);
    if (!interceptor) return;

    interceptor.id = executeInterceptor(
      interceptor.type,
      interceptor.interceptorPayload
    );
  };

  return {
    add,
    remove,
    set,
  };
};
