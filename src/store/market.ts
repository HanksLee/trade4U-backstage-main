import { action, observable, computed } from "mobx";
import BaseStore from "store/base";
import utils from "utils";

class MarketStore extends BaseStore {
  @observable
  filterMarket = {
    page_size: 10,
    current_page: 1,
  };
  @action
  setFilterMarket = (filter, overwrite = false) => {
    if (overwrite) {
      this.filterMarket = filter;
    } else {
      this.filterMarket = {
        ...this.filterMarket,
        ...filter,
      };
    }
  };
  @observable
  marketList = [];
  @action
  getMarketList = async config => {
    const res = await this.$api.market.getMarketList(config);
    this.setMarketList(res.data);
  }
  @action setMarketList = data => {
    this.marketList = data.data;
  }
  @observable
  productList = [];
  @observable
  productListMeta = {};
  @action
  getProductList = async config => {
    const res = await this.$api.market.getProductList(config);
    this.setProductList(res.data);
  };
  @action
  setProductList = data => {
    this.productList = data.results;
    this.productListMeta = {
      total: data.count,
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
  getCurrentProduct = async (id, config = {}) => {
    const res = await this.$api.market.getCurrentProduct(id, config);
    let product = res.data;

    this.setCurrentProduct(product, true, false);
  };
  @action
  setCurrentProduct = (product, overwrite = true, store = true) => {
    if (overwrite) {
      this.currentProduct = product;
    } else {
      this.currentProduct = {
        ...this.currentProduct,
        ...product,
      };
    }

    if (store) {
      utils.setLStorage("currentMarketProduct", this.currentProduct);
    }
  };
}

export default new MarketStore();
