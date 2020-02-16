import { AxiosRequestConfig } from "axios";
import { moonAPI as API } from "utils/request";

const getProductList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/markets", config);

const updateProduct = (id: string, config): Promise<any> =>
  API.put(`/market/${id}`, config);

const deleteProduct = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/market/${id}`, config);

const getMarketList = config => API.get('/markets', config);

export default {
  getMarketList,
  getProductList,
  updateProduct,
  deleteProduct,
};
