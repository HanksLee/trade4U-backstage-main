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
      filter: {
        ...this.state.filter,
        [field]: value ? value : undefined,
      },
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
      filter: {
        ...this.state.filter,
        type: val,
      },
    });
  }

  getDataList = (payload = {}) => {
    this.setState(
      {
        tableLoading: true,
        filter: {
          ...this.state.filter,
          ...payload,
        },
      },
      async () => {
        await this.props.exchange.getProductList({
          params: this.state.filter,
        });
        this.setState({ tableLoading: false, });
      }
    );
  };

  resetPagination = async (pageSize, pageNum) => {
    this.setState(
      {
        filter: {
          ...this.state.filter,
          pageSize,
          pageNum,
        },
      },
      async () => {
        const filter = this.state.filter;
        this.getDataList(filter);
      }
    );
  };
  // @ts-ignore
  private onSearch = async () => {
    const filter: any = this.state.filter;

    // console.log('filter', filter);

    this.setState(
      {
        filter: {
          ...filter,
          page_size: 1,
        },
        currentPage: 1,
      },
      () => {
        this.getDataList(this.state.filter);
      }
    );
  };
  // @ts-ignore
  private onReset = async () => {
    // @ts-ignore
    const filter: any = { pageNum: 1, pageSize: this.state.filter.pageSize, };

    this.setState(
      {
        filter,
        currentPage: 1,
        name: undefined,
        type: undefined,
        product_code: undefined,
      },
      () => {
        this.getDataList(this.state.filter);
      }
    );
  };

  goToEditor = (record: any): void => {
    const url = `/dashboard/exchange/product/editor?id=${!utils.isEmpty(record) ? record.id : 0}`;
    this.props.history.push(url);
    // this.props.exchange.setCurrentProduct(record, true, false);
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
