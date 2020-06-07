import { AxiosRequestConfig } from "axios";
import { moonAPI as API } from "utils/request";

const getMenuList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/system/menu", config);

const createMenu = (config) => API.post('/system/menu', config);

const updateMenu = (id: string, config): Promise<any> =>
  API.put(`/system/menu/${id}`, config);

const deleteMenu = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/system/menu/${id}`, config);

const sortMenuList = (config: AxiosRequestConfig): Promise<any> =>
  API.put('/system/menu/sort', config);

export default {
  getMenuList,
  createMenu,
  updateMenu,
  deleteMenu,
  sortMenuList,
};
