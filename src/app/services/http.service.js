import axios from "axios";
import config from "../config.json";
import { toast } from "react-toastify";
import logger from "./log.service";
axios.defaults.baseURL = config.apiEndPoint;
axios.interceptors.response.use(
  (res) => res,
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedErrors) {
      logger.log(error);
      toast.error("Something is wrong");
    }
    return Promise.reject(error);
  }
);
const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
