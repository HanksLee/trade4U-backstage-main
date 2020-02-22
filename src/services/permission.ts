import { AxiosRequestConfig } from "axios";
import { moonAPI as API } from "utils/request";

const getPermissionList = (config: AxiosRequestConfig): Promise<any> =>
  API.get("/system/permission", config);

const createPermission = (config) => API.post('/system/permission', config);

const updatePermission = (id: string, config): Promise<any> =>
  API.put(`/system/permission/${id}`, config);

const deletePermission = (id: string, config: AxiosRequestConfig): Promise<any> =>
  API.delete(`/system/permission/${id}`, config);

export default {
  getPermissionList,
  createPermission,
  updatePermission,
  deletePermission,
};
