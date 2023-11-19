import axios from "axios";
import { DEFAULT_REQUEST_TIMEOUT } from "../../constants";
import { interceptorManagerSetup } from "../interceptorManager";

const createInstance = (payload) => {
  const newInstance = axios.create(payload);

  newInstance.defaults.timeout = DEFAULT_REQUEST_TIMEOUT;
  newInstance.interceptorManager = interceptorManagerSetup(newInstance);

  return newInstance;
};

export default createInstance;
