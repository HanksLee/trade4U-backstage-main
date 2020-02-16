import { action, observable, computed } from "mobx";
import BaseStore from "store/base";
import utils from "utils";

class MarketStore extends BaseStore {
  @observable
  productList = [
    {
      id: 1,
      market: "上证",
      name: '伊利股份',
      jianpin: 'YLGF',
      code: '123456',
      status: 1,
      openStatue: 2,
      operator: 'TY',
      updateTime: Date.now(),
    }
  ];
  @observable
  productListMeta = {};
  @action
  getProductList = async config => {
    const res = await this.$api.market.getProductList(config);
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
