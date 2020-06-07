import CommonHeader from "components/CommonHeader";
import CommonList from "components/CommonList";
import listConfig from "./config";
import WithRoute from "components/WithRoute";
import * as React from "react";
import { BaseReact } from "components/BaseReact";
import MarketEditor from 'pages/MarketProduct/MarketEditor';
import { inject, observer } from "mobx-react";
import { Route } from "react-router-dom";
import "./index.scss";
import utils from 'utils';

export interface IMarketProductProps { }

export interface IMarketProductState {
  // filter: any;
}

/* eslint new-cap: "off" */
@WithRoute("/dashboard/market-product", { exact: false, })
@inject("common", "market")
@observer
export default class MarketProduct extends BaseReact<IMarketProductProps, IMarketProductState> {
  state = {
    filter: {
    },
    tableLoading: false,
    currentPage: 1,
    selectedRowKeys: [],
    name: undefined,
    code: undefined,
    market: undefined,
  };

  async componentDidMount() {
    // @todo 这里需要从 commonStore 中设置默认的分页
    const {
      paginationConfig: { defaultPageSize, defaultCurrent, },
    } = this.props.common;

    this.resetPagination(defaultPageSize, defaultCurrent);
    this.props.market.getMarketList();
    this.getMarketOptions();
  }

  componentDidUpdate() {
    if (this.props.location.pathname === "/dashboard/market-product") {
      this.props.history.replace("/dashboard/market-product/list");
    }
  }

  getMarketOptions = async () => {
    const res = await this.$api.market.getMarketList();

    if (res.status === 200) {
      this.setState({
        marketOptions: res.data.data,
      });
    }
  }

  onMarketSelected = (val, elem) => {
    this.setState({
      market: val,
    }, () => {
      this.props.market.setFilterMarket({
        market: val,
      });
    });
  }

  getDataList = (payload = {}) => {
    this.setState(
      {
        tableLoading: true,
      },
      async () => {
        this.props.market.setFilterMarket({
          ...payload,
        });
        await this.props.market.getProductList({
          params: this.props.market.filterMarket,
        });
        this.setState({ tableLoading: false, });
      }
    );
  };

  resetPagination = async (page_size, page) => {
    this.props.market.setFilterMarket({
      page_size,
      page,
    });
    this.setState(
      {
        page,
      },
      async () => {
        const filter = this.props.market.filterMarket;

        this.getDataList(filter);
      }
    );
  };
  // @ts-ignore
  private onSearch = async () => {
    this.props.market.setFilterMarket({
      page: 1,
    });
    this.setState(
      {
        currentPage: 1,
      },
      () => {
        this.getDataList(this.props.market.filterMarket);
      }
    );
  };
  // @ts-ignore
  private onReset = async () => {
    // @ts-ignore
    const filter: any = {
      page: 1,
    };

    this.props.market.setFilterMarket(filter, true);

    this.setState(
      {
        currentPage: 1,
        name: undefined,
        market: undefined,
        code: undefined,
      },
      () => {
        this.getDataList(this.props.market.filterMarket);
      }
    );
  };

  onInputChanged = (field, value) => {
    this.setState({
      [field]: value,
    });
    this.props.market.setFilterMarket({
      [field]: value ? value : undefined,
    });
  }


  goToEditor = (record: any): void => {
    const url = `/dashboard/market-product/editor?id=${!utils.isEmpty(record) ? record.id : 0}`;
    this.props.history.push(url);
  }

  renderMenu = (record): JSX.Element => {
    return null;
  };

  // @ts-ignore
  private onBatch = async value => { };

  render() {
    const { match, } = this.props;
    const computedTitle = "行情产品管理";

    return (
      <div>
        <CommonHeader {...this.props} links={[]} title={computedTitle} />
        <Route
          path={`${match.url}/list`}
          render={props => <CommonList {...props} config={listConfig(this)} />}
        />
        <Route path={`${match.url}/editor`} render={props => (
          <MarketEditor {...props} />
        )} />
      </div>
    );
  }
}
