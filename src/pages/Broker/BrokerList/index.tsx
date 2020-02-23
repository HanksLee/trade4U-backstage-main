import BrokerEditor from 'pages/Broker/BrokerEditor';
import BrokerPermissionEditor from 'pages/Broker/BrokerPermissionEditor';
import CommonHeader from "components/CommonHeader";
import CommonList from "components/CommonList";
import listConfig from "./config";
import utils from 'utils';
import WithRoute from "components/WithRoute";
import * as React from "react";
import { BaseReact } from "components/BaseReact";
import { inject, observer } from "mobx-react";
import { Route } from "react-router-dom";

export interface Broker {
  name:	string;
  domain:	string;
  broker_url: string;
  background_corner: string;
  logo:	string;
  permissions: string[];
}

interface BrokerListState {
  brokerList: Broker[];
  tableLoading: boolean;
  selectedRowKeys: string[];
  tempFilter: any;
  total: number;
};

/* eslint new-cap: "off" */
@WithRoute("/dashboard/broker", { exact: false, })
@inject("common", "broker")
@observer
export default class BrokerList extends BaseReact<{}, BrokerListState> {
  state = {
    brokerList: [],
    tableLoading: false,
    selectedRowKeys: [],
    tempFilter: {},
    total: 0,
  };

  async componentDidMount() {
    const { filter, } = this.props.broker;
    const { paginationConfig, } = this.props.common;

    this.getDataList({
      page_size: filter.page_size || paginationConfig.defaultPageSize,
      page: filter.page || 1,
    });
  }

  componentDidUpdate() {
    if (this.props.location.pathname === "/dashboard/broker") {
      this.props.history.replace("/dashboard/broker/list");
    }
  }

  getDataList = async (filter?: any) => {
    const payload = filter ? { ...this.props.broker.filter, ...filter, } : this.props.broker.filter;
    this.setState({
      tableLoading: true,
    });
    
    const res = await this.$api.broker.getBrokerList({ params: payload, });
    const { results, page_size, current_page, count, } = res.data;
    if ((res.data.results.length === 0) && res.data.offset !== 0) {
      // 删除非第一页的最后一条记录，自动翻到下一页
      this.getDataList({ ...payload, page: current_page - 1, });
    } else {
      this.props.broker.setFilter({
        page_size,
        page: current_page,
        name: payload.name,
      });
      this.setState({
        brokerList: results,
        tableLoading: false,
        total: count,
      });
    }
  };

  // @ts-ignore
  private onSearch = async () => {
    this.getDataList({
      page: 1,
      ...this.state.tempFilter,
    });
  };

  // @ts-ignore
  private onReset = async () => {
    // @ts-ignore
    this.getDataList({
      name: undefined,
      page: 1,
    });
    this.setState({
      tempFilter: {},
    });
  };

  onInputChanged = (field, value) => {
    this.setState((prevState: BrokerListState) => (
      {
        tempFilter: {
          ...prevState.tempFilter,
          [field]: value,
        },
      }
    ));
  }

  goToEditor = (record: any): void => {
    const url = `/dashboard/broker/editor?id=${!utils.isEmpty(record) ? record.id : 0}`;
    this.props.history.push(url);
  }

  goToPermissionEditor = (record: any): void => {
    const url = `/dashboard/broker/permission?id=${!utils.isEmpty(record) ? record.id : 0}`;
    this.props.history.push(url);
  }

  deleteBroker = async (id: string) => {
    const res = await this.$api.broker.deleteBroker(id);
    if (res.status === 204) {
      this.getDataList();
    } else {
      this.$msg.error(res.data.message);
    }
  }

  render() {
    const { match, } = this.props;
    return (
      <div>
        <CommonHeader {...this.props} links={[]} title="券商管理" />
        <Route
          path={`${match.url}/list`}
          render={props => <CommonList {...props} config={listConfig(this)} />}
        />
        <Route path={`${match.url}/editor`} render={props => (
          <BrokerEditor {...props} getBrokerList={this.getDataList} />
        )} />
        <Route path={`${match.url}/permission`} render={props => (
          <BrokerPermissionEditor {...props} getBrokerList={this.getDataList} />
        )} />
      </div>
    );
  }
}
