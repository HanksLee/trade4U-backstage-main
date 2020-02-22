import { AxiosRequestConfig } from "axios";
import { moonAPI as API } from "utils/request";

const getGenreList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/system/symbol_type", config);

const createGenre = (config): Promise<any> =>
  API.post(`/system/symbol_type`, config);

const updateGenre = (id: string, config): Promise<any> =>
  API.patch(`/system/symbol_type/${id}`, config);

const deleteGenre = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/system/symbol_type/${id}`, config);

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
  API.get("/system/symbol", config);

  const createProduct = (config): Promise<any> =>
  API.post(`/symbol`, config);

const updateProduct = (id: string, config): Promise<any> =>
  API.patch(`/symbol/${id}`, config);

const deleteProduct = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/symbol/${id}`, config);

export default {
  getGenreList,
  createGenre,
  updateGenre,
  deleteGenre,
  getRuleList,
  createRule,
  updateRule,
  deleteRule,
  getScopeOptions,
  getProductList,
  createProduct,
  updateProduct,
  deleteProduct,
};
