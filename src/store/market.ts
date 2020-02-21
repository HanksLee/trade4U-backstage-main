import { action, observable, computed } from "mobx";
import BaseStore from "store/base";
import utils from "utils";

class MarketStore extends BaseStore {
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
  // @action
  // getCurrentBrokeer = async config => {
  //   const res = await this.$api.product.getcurrentProduct(config);
  //   let product = res.data.data;

  //   this.setcurrentProduct(product, true, false);
  // };
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
