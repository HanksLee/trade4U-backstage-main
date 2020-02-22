import CommonHeader from "components/CommonHeader";
import CommonList from "components/CommonList";
import listConfig from "./config";
import WithRoute from "components/WithRoute";
import * as React from "react";
import { BaseReact } from "components/BaseReact";
import BrokerEditor from 'pages/Broker/BrokerEditor';
import BrokerPermissionEditor from 'pages/Broker/BrokerPermissionEditor';
import { inject, observer } from "mobx-react";
import { Route } from "react-router-dom";
import "./index.scss";
import utils from 'utils';

export interface IBrokerProps {}

export interface IBrokerState {
  // filter: any;
}

/* eslint new-cap: "off" */
@WithRoute("/dashboard/broker", { exact: false, })
@inject("common", "broker")
@observer
export default class BrokerList extends BaseReact<{}, IBrokerState> {
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
  }

  componentDidUpdate() {
    if (this.props.location.pathname === "/dashboard/broker") {
      this.props.history.replace("/dashboard/broker/list");
    }
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
        await this.props.broker.getBrokerList({
          params: {
            ...this.state.filter,
            ...payload,
          },
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
          limit: pageSize,
          offset: (pageNum - 1) * pageSize,
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

    this.setState(
      {
        filter: {
          ...filter,
          pageNum: 1,
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
    const filter: any = { offset: 0, pageSize: this.state.filter.pageSize, };

    this.setState(
      {
        filter,
        currentPage: 1,
        name: undefined,
        market: undefined,
        code: undefined,
      },
      () => {
        this.getDataList(this.state.filter);
      }
    );
  };

  onInputChanged = (field, value) => {
    this.setState({
      [field]: value,
      filter: {
        ...this.state.filter,
        [field]: value ? value : undefined,
      },
    });
  }


  goToEditor = (record: any): void => {
    const url = `/dashboard/broker/editor?id=${!utils.isEmpty(record) ? record.id : 0}`;
    this.props.history.push(url);
    this.props.broker.setCurrentBroker(record, true, false);
  }

  goToPermissionEditor = (record: any): void => {
    const url = `/dashboard/broker/permission?id=${!utils.isEmpty(record) ? record.id : 0}`;
    this.props.history.push(url);
    this.props.broker.setCurrentBroker(record, true, false);
  }

  renderMenu = (record): JSX.Element => {
    return null;
  };

  // @ts-ignore
  private onBatch = async value => {};

  render() {
    const { match, } = this.props;
    const computedTitle = "券商管理";

    return (
      <div>
        <CommonHeader {...this.props} links={[]} title={computedTitle} />
        <Route
          path={`${match.url}/list`}
          render={props => <CommonList {...props} config={listConfig(this)} />}
        />
        <Route path={`${match.url}/editor`} render={props => (
          <BrokerEditor {...props} />
        )} />
        <Route path={`${match.url}/permission`} render={props => (
          <BrokerPermissionEditor {...props} />
        )} />
      </div>
    );
  }
}
