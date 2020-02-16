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
  // @action
  // getCurrentBrokeer = async config => {
  //   const res = await this.$api.genre.getcurrentProduct(config);
  //   let genre = res.data.data;

  //   this.setcurrentProduct(genre, true, false);
  // };
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
}

export default new ExchangeStore();
