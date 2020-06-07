import CommonHeader from "components/CommonHeader";
import CommonList from "components/CommonList";
import listConfig from "./config";
import WithRoute from "components/WithRoute";
import * as React from "react";
import { BaseReact } from "components/BaseReact";
import ProductEdtior from 'pages/ExchangeProduct/ProductEditor';
import { inject, observer } from "mobx-react";
import { Route } from "react-router-dom";
import "./index.scss";
import utils from 'utils';

export interface IProductListProps { }

export interface IProductListState {
  // filter: any;
}

/* eslint new-cap: "off" */
@WithRoute("/dashboard/exchange/product", { exact: false, })
@inject("common", "exchange")
@observer
export default class ProductList extends BaseReact<IProductListProps, IProductListState> {
  state = {
    filter: {},
    tableLoading: false,
    currentPage: 1,
    selectedRowKeys: [],
    name: undefined,
    product_code: undefined,
    type: undefined,
  };

  async componentDidMount() {
    // @todo 这里需要从 commonStore 中设置默认的分页
    const {
      paginationConfig: { defaultPageSize, defaultCurrent, },
    } = this.props.common;

    this.resetPagination(defaultPageSize, defaultCurrent);
    this.getTypetOptions();
  }

  componentDidUpdate() {
    if (this.props.location.pathname === "/dashboard/exchange/product") {
      this.props.history.replace("/dashboard/exchange/product/list");
    }
  }

  onInputChanged = (field, value) => {
    this.setState({
      [field]: value,
    });
    this.props.exchange.setFilterProduct({
      [field]: value ? value : undefined,
    });
  }


  getTypetOptions = async () => {
    const res = await this.$api.exchange.getGenreList({
      params: {
        page: 1,
        page_size: 200,
      },
    });

    if (res.status === 200) {
      this.setState({
        typeOptions: res.data.results,
      });
    }
  }

  onTypeSelected = (val, elem) => {
    this.setState({
      type: val,
    }, () => {
      this.props.exchange.setFilterProduct({
        type: val,
      });
    });
  }

  getDataList = (payload = {}) => {
    this.setState(
      {
        tableLoading: true,
      },
      async () => {
        this.props.exchange.setFilterProduct({
          ...payload,
        });
        await this.props.exchange.getProductList({
          params: this.props.exchange.filterProduct,
        });
        this.setState({ tableLoading: false, });
      }
    );
  };

  resetPagination = async (page_size, page) => {
    this.props.exchange.setFilterProduct({
      page_size,
      page,
    });
    this.setState(
      {
        page,
      },
      async () => {
        const filter = this.props.exchange.filterProduct;

        this.getDataList(filter);
      }
    );
  };
  // @ts-ignore
  private onSearch = async () => {
    this.props.exchange.setFilterProduct({
      page: 1,
    });
    this.setState(
      {
        currentPage: 1,
      },
      () => {
        this.getDataList(this.props.exchange.filterProduct);
      }
    );
  };
  // @ts-ignore
  private onReset = async () => {
    // @ts-ignore
    const filter: any = {
      page: 1,
    };

    this.props.exchange.setFilterProduct(filter, true);

    this.setState(
      {
        currentPage: 1,
        name: undefined,
        type: undefined,
        product_code: undefined,
      },
      () => {
        this.getDataList(this.props.exchange.filterProduct);
      }
    );
  };

  goToEditor = (record: any): void => {
    const url = `/dashboard/exchange/product/editor?id=${!utils.isEmpty(record) ? record.id : 0}`;
    this.props.history.push(url);
  }

  renderMenu = (record): JSX.Element => {
    return null;
  };

  // @ts-ignore
  private onBatch = async value => { };

  render() {
    const { match, } = this.props;
    const computedTitle = '交易品种设置';

    return (
      <div>
        <CommonHeader {...this.props} links={[]} title={computedTitle} />
        <Route
          path={`${match.url}/list`}
          render={props => <CommonList {...props} config={listConfig(this)} />}
        />
        <Route path={`${match.url}/editor`} render={props => (
          <ProductEdtior {...props} />
        )} />
      </div>
    );
  }
}
