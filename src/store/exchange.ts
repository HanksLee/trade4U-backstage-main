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
  get currentShowGenre() {
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
  ruleList = [];
  @observable
  ruleListMeta = {};
  @action
  getRuleList = async config => {
    const res = await this.$api.exchange.getRuleList(config);
    this.setRuleList(res.data);
  };
  @action
  setRuleList = data => {
    this.ruleList = data.results;
    this.ruleListMeta = {
      total: data.count,
      // offset: data.offset,
      // limit: data.limit,
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
  @observable
  productList = [
    {
      id: 1,
      symbol: "SRE",
      scope: 1,
      source: 'Forex',
      function: 'XXX',
      price_gap: '123',
      stop_point: 1,
      buy_point: 2,
      sale_point: 3,
      digits: 123,
      exchange: '123',
      description: 'XXXX',
      trade: 1,
      background: 1,
      profit_currency: 'USD',
      margin_currency: 'USD',
      min_exchange: 1,
      max_exchange: 2,
      orders: 1,
      point_gap: 2,
      stop_level: 23,
      exchange_step: 2,
      contract: 123,
      security: 123,
      balance_long: 123,
      balance_short: 123,
      buy_fare: 123,
      sale_fare: 123,
      store_fare: 123,
      three_store_fare: 123,
      exchange_long_fare: 123,
      exchnage_short_fare: 123,
      tax_fare: 123,
      ex_start_time: new Date('2020-02-12').valueOf(),
      ex_end_time:  new Date('2020-03-12').valueOf(),
    }
  ];
  @observable
  productListMeta = {};
  @action
  getProductList = async config => {
    const res = await this.$api.exchange.getProductList(config);
    const { data, } = res.data;
    this.setProductList(data);
  };
  @action
  setProductList = data => {
    this.productList = data.list;
    this.productListMeta = {
      total: data.total,
      offset: data.offset,
      limit: data.limit,
    };
  };
  @observable
  currentProduct: any = {};

  @computed
  get currentShowProduct() {
    const obj: any = {};

    return {
      ...this.currentProduct,
      ...obj,
    };
  }
  @action
  setCurrentProduct = (rule, overwrite = true, store = true) => {
    if (overwrite) {
      this.currentProduct = rule;
    } else {
      this.currentProduct = {
        ...this.currentProduct,
        ...rule,
      };
    }

    if (store) {
      utils.setLStorage("currentExchangeProduct", this.currentProduct);
    }
  };
}

export default new ExchangeStore();
