import { action, observable, computed } from "mobx";
import BaseStore from "store/base";
import utils from "utils";

class BrokerStore extends BaseStore {
  @observable
  brokerList = [
    {
      id: 1,
      brokerName: "摩根大通",
      img:
        "https://cdn.pixabay.com/photo/2017/01/11/08/31/icon-1971130_1280.png",
    }
  ];
  @observable
  brokerListMeta = {};
  @action
  getBrokerList = async config => {
    const res = await this.$api.broker.getBrokerList(config);
    const { data, } = res.data;
    this.setBrokerList(data);
  };
  @action
  setBrokerList = data => {
    this.brokerList = data.list;
    this.brokerListMeta = {
      total: data.total,
      offset: data.offset,
      limit: data.limit,
    };
  };
  @observable
  currentBroker: any = {};

  @computed
  get currentShowBrokeer() {
    const obj: any = {};

    return {
      ...this.currentBroker,
      ...obj,
    };
  }
  @action
  getCurrentBrokeer = async config => {
    const res = await this.$api.broker.getCurrentBroker(config);
    let broker = res.data.data;

    this.setCurrentBroker(broker, true, false);
  };
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
