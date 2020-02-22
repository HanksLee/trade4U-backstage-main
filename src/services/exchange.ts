import { AxiosRequestConfig } from "axios";
import { moonAPI as API } from "utils/request";

const getGenreList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/markets", config);

const updateGenre = (id: string, config): Promise<any> =>
  API.put(`/market/${id}`, config);

const deleteGenre = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/market/${id}`, config);

const getRuleList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/system/profit_rule", config);

const createRule = (config): Promise<any> =>
  API.post(`/system/profit_rule`, config);

const updateRule = (id: string, config): Promise<any> =>
  API.patch(`/system/profit_rule/${id}`, config);

const deleteRule = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/system/profit_rule/${id}`, config);

const getScopeOptions = (config) => API.get('/constant/profit_rule_scope_choices', config);

const getProductList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/markets", config);

const updateProduct = (id: string, config): Promise<any> =>
  API.put(`/market/${id}`, config);

const deleteProduct = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/market/${id}`, config);

export default {
  getGenreList,
  updateGenre,
  deleteGenre,
  getRuleList,
  createRule,
  updateRule,
  deleteRule,
  getScopeOptions,
  getProductList,
  updateProduct,
  deleteProduct,
};
