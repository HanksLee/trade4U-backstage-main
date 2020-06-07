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

const getCurrentProduct = (id: string, config): Promise<any> =>
  API.get(`/system/symbol/${id}`, config);

const createProduct = (config): Promise<any> =>
  API.post(`/system/symbol`, config);

const updateProduct = (id: string, config): Promise<any> =>
  API.patch(`/system/symbol/${id}`, config);

const deleteProduct = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/system/symbol/${id}`, config);

const getTransactionModeOptions = (config) => API.get('/constant/system_symbol_transaction_mode_choices', config);

const getBgColorOptions = (config) => API.get('/constant/background_color_choices', config);

const getProfitOptioins = (config) => API.get('/constant/system_profit_currency_choices', config);

const getMarginCurrencyOptions = (config) => API.get('/constant/system_margin_currency_choices', config);

const getOrderModeOptions = (config) => API.get('/constant/system_symbol_order_mode_choices', config);

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
  getCurrentProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getTransactionModeOptions,
  getBgColorOptions,
  getProfitOptioins,
  getMarginCurrencyOptions,
  getOrderModeOptions,
};
