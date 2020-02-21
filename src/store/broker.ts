import { action, observable, computed } from "mobx";
import BaseStore from "store/base";
import utils from "utils";

class BrokerStore extends BaseStore {
  @observable
  brokerList = [];
  @observable
  brokerListMeta = {};
  @action
  getBrokerList = async config => {
    const res = await this.$api.broker.getBrokerList(config);
    this.setBrokerList(res.data);
  };
  @action
  setBrokerList = data => {
    this.brokerList = data.results;
    this.brokerListMeta = {
      total: data.count,
      offset: data.offset,
      limit: data.limit,
    };
  };
  @observable
  currentBroker: any = {};

  @computed
  get currentShowBroker() {
    const obj: any = {};

    return {
      ...this.currentBroker,
      ...obj,
    };
  }

  @action
  setCurrentBroker = (broker, overwrite = true, store = true) => {
    if (overwrite) {
      this.currentBroker = broker;
    } else {
      this.currentBroker = {
        ...this.currentBroker,
        ...broker,
      };
    }

    if (store) {
      utils.setLStorage("currentBroker", this.currentBroker);
    }
  };
}

export default new BrokerStore();