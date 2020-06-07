import { action, observable } from "mobx";
import BaseStore from "store/base";

export interface Filter {
  page_size: number;
  page: number;
  name?: string;
  code?: string;
}

class PermissionStore extends BaseStore {
  @observable
  filter: Filter = {
    page_size: 10,
    page: 1,
  };
  @action
  setFilter = (filter: Filter) => {
    this.filter = { ...this.filter, ...filter, };
  };
}

export default new PermissionStore();