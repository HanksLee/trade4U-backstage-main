import { action, observable, computed } from "mobx";
import BaseStore from "store/base";
import utils from "utils";

class ExchangeStore extends BaseStore {
  @observable
  genreList = [
    {
      id: 1,
      name: "SRE",
    }
  ];
  @observable
  genreListMeta = {};
  @action
  getGenreList = async config => {
    const res = await this.$api.exchange.getGenreList(config);
    const { data, } = res.data;
    this.setGenreList(data);
  };
  @action
  setGenreList = data => {
    this.genreList = data.list;
    this.genreListMeta = {
      total: data.total,
      offset: data.offset,
      limit: data.limit,
    };
  };
  @observable
  currentGenre: any = {};

  @computed
  get currentShowProduct() {
    const obj: any = {};

    return {
      ...this.currentGenre,
      ...obj,
    };
  }
  @action
  setCurrentGenre = (genre, overwrite = true, store = true) => {
    if (overwrite) {
      this.currentGenre = genre;
    } else {
      this.currentGenre = {
        ...this.currentGenre,
        ...genre,
      };
    }

    if (store) {
      utils.setLStorage("currentExchangeGenre", this.currentGenre);
    }
  };
  @observable
  ruleList = [
    {
      id: 1,
      name: "SRE",
      scope: 1,
      function: 'Test',
    }
  ];
  @observable
  ruleListMeta = {};
  @action
  getRuleList = async config => {
    const res = await this.$api.exchange.getRuleList(config);
    const { data, } = res.data;
    this.setRuleList(data);
  };
  @action
  setRuleList = data => {
    this.ruleList = data.list;
    this.ruleListMeta = {
      total: data.total,
      offset: data.offset,
      limit: data.limit,
    };
  };
  @observable
  currentRule: any = {};

  @computed
  get currentShowRule() {
    const obj: any = {};

    return {
      ...this.currentRule,
      ...obj,
    };
  }
  @action
  setCurrentRule = (rule, overwrite = true, store = true) => {
    if (overwrite) {
      this.currentRule = rule;
    } else {
      this.currentRule = {
        ...this.currentRule,
        ...rule,
      };
    }

    if (store) {
      utils.setLStorage("currentExchangeRule", this.currentRule);
    }
  };
}

export default new ExchangeStore();
