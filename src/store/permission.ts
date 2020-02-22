import { action, observable, computed } from "mobx";
import BaseStore from "store/base";
import utils from "utils";

class PermissionStore extends BaseStore {
  @observable
  permissionList = [];
  @observable
  permissionListMeta = {};
  @action
  getPermissionList = async config => {
    const res = await this.$api.permission.getPermissionList(config);
    this.setPermissionList(res.data);
  };
  @action
  setPermissionList = data => {
    this.permissionList = data.results;
    this.permissionListMeta = {
      total: data.count,
      offset: data.offset,
      limit: data.limit,
    };
  };
  @observable
  currentPermission: any = {};

  @computed
  get currentShowPermission() {
    const obj: any = {};

    return {
      ...this.currentPermission,
      ...obj,
    };
  }

  @action
  setCurrentPermission = (permission, overwrite = true, store = true) => {
    if (overwrite) {
      this.currentPermission = permission;
    } else {
      this.currentPermission = {
        ...this.currentPermission,
        ...permission,
      };
    }

    if (store) {
      utils.setLStorage("currentPermission", this.currentPermission);
    }
  };
}

export default new PermissionStore();