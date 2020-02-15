import * as React from 'react';
import { BaseReact } from 'components/BaseReact';
import WithRoute from 'components/WithRoute';
import { Route } from 'react-router-dom';
import { Menu, Modal } from 'antd';
import './index.scss';
import { inject, observer } from 'mobx-react';
import isEmpty from 'lodash/isEmpty';
import CommonHeader from 'components/CommonHeader';
import CommonList from 'components/CommonList';
import listConfig from './config';
import utils from 'utils';


export interface IBrokerProps {

}

export interface IBrokerState {
  // filter: any;
}

/* eslint new-cap: "off" */
@WithRoute('/dashboard/broker', { exact: false, })
@inject('common', 'broker')
@observer
export default class Broker extends BaseReact<IBrokerProps, IBrokerState> {
  state = {
    brokerField: 'brokerId',
    filter: {},
    brokerValue: undefined,
    tableLoading: false,
    currentPage: 1,
    selectedRowKeys: [],
  }

  async componentDidMount() {
    // @todo 这里需要从 commonStore 中设置默认的分页
    const { paginationConfig: {
      defaultPageSize,
      defaultCurrent,
    }, } = this.props.common;

    this.resetPagination(defaultPageSize, defaultCurrent);
  }

  componentDidUpdate() {
    if (this.props.location.pathname === '/dashboard/broker') {
      this.props.history.replace('/dashboard/broker/list');
    }
  }

  getDataList = (payload = {}) => {
    this.setState({
      tableLoading: true,
      filter: {
        ...this.state.filter,
        ...payload,
      },
    }, async () => {
      await this.props.broker.getBrokerList({
        ...this.state.filter,
        ...payload,
      });
      this.setState({ tableLoading: false, });
    });
  }

  resetPagination = async (pageSize, pageNum) => {
    this.setState({
      filter: {
        ...this.state.filter,
        pageSize,
        pageNum,
      },
    }, async () => {
      const filter = this.state.filter;
      this.getDataList(filter);
    });
  }
  // @ts-ignore
  private onSearch = async () => {
    const filter: any = this.state.filter;

    this.setState({
      filter: {
        ...filter,
        pageNum: 1,
      },
      currentPage: 1,
    }, () => {
      this.getDataList(this.state.filter);
    });
  }
  // @ts-ignore
  private onReset = async () => {
    // @ts-ignore
    const filter: any = { pageNum: 1, pageSize: this.state.filter.pageSize, };

    this.setState({
      filter,
      currentPage: 1,
    }, () => {
      this.getDataList(this.state.filter);
    });
  }

  setBrokerField = (brokerField): void => {
    const filter: any = this.state.filter;
    if (brokerField !== 'brokerId') {
      delete filter.brokerId;
    } else if (brokerField !== 'brokerName') {
      delete filter.brokerName;
    }

    this.setState({
      brokerField,
      brokerValue: undefined,
      filter: {
        ...filter,
        [brokerField]: undefined,
      },
    });
  }

  setBrokerValue = (value): void => {
    this.setState({
      brokerValue: value,
      filter: {
        ...this.state.filter,
        [this.state.brokerField]: value ? value : undefined,
      },
    });
  }

  goToEditor = (record: any): void => {

  }

  renderMenu = (record): JSX.Element => {
    return null;
  }

  // @ts-ignore
  private onBatch = async (value) => {
  }

  render() {
    const { match, } = this.props;
    const computedTitle = '券商管理';

    return (
      <div>
        <CommonHeader {...this.props} links={[]} title={computedTitle} />
        <Route path={`${match.url}/list`} render={
          props => (
            <CommonList {...props} config={listConfig(this)} />
          )} />
      </div>
    );
  }
}