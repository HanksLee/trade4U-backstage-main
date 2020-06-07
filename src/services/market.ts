import { AxiosRequestConfig } from "axios";
import { moonAPI as API } from "utils/request";

const getProductList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/system/product", config);

const getCurrentProduct = (id, config: AxiosRequestConfig): Promise<any> =>
  API.get(`/system/product/${id}`, config);

const createProduct = (config) => API.post('/system/product', config);

const updateProduct = (id: string, config): Promise<any> =>
  API.patch(`/system/product/${id}`, config);

const deleteProduct = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/system/product/${id}`, config);

const getMarketList = config => API.get('/constant/system_product_product_choices', config);

export default {
  getMarketList,
  getProductList,
  getCurrentProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
