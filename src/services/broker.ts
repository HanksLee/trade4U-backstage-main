import { AxiosRequestConfig } from "axios";
import { moonAPI as API } from "utils/request";

const getBrokerList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/system/broker_dealer", config);

const createBroker = (config) => API.post('/system/broker_dealer', config);

const updateBroker = (id: string, config): Promise<any> =>
  API.put(`/system/broker_dealer/${id}`, config);

const deleteBroker = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/system/broker_dealer/${id}`, config);

const getBrokerMenuList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/system/broker-menu", config);

const updateBrokerPermission = (config): Promise<any> =>
  API.post(`/system/broker-menu`, config);

const getBrokerDetail = (id, config: AxiosRequestConfig): Promise<any> =>
  API.get(`/system/broker_dealer/${id}`, config);

export default {
  getBrokerList,
  createBroker,
  updateBroker,
  deleteBroker,
  getBrokerMenuList,
  updateBrokerPermission,
  getBrokerDetail,
};
