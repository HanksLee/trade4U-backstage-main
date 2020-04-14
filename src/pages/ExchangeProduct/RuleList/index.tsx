import CommonHeader from "components/CommonHeader";
import CommonList from "components/CommonList";
import listConfig from "./config";
import WithRoute from "components/WithRoute";
import * as React from "react";
import { BaseReact } from "components/BaseReact";
import RuleEdtior from 'pages/ExchangeProduct/RuleEditor';
import { inject, observer } from "mobx-react";
import { Route } from "react-router-dom";
import "./index.scss";
import utils from 'utils';
import { Modal } from 'antd';

export interface IRuleListProps { }

export interface IRuleListState {
  // filter: any;
}

/* eslint new-cap: "off" */
@WithRoute("/dashboard/exchange/rule", { exact: false, })
@inject("common", "exchange")
@observer
export default class RuleList extends BaseReact<IRuleListProps, IRuleListState> {
  private $ruleEditor = null;
  state = {
    filter: {},
    tableLoading: false,
    currentPage: 1,
    selectedRowKeys: [],
    ruleModalVisible: false,
    scopeOptions: [
      {
        id: 1,
        name: '保证金计算',
      },
      {
        id: 2,
        name: '盈亏计算',
      },
      {
        id: 3,
        name: '预付款计算',
      }
    ],
  };

  async componentDidMount() {
    // @todo 这里需要从 commonStore 中设置默认的分页
    const {
      paginationConfig: { defaultPageSize, defaultCurrent, },
    } = this.props.common;

    this.resetPagination(defaultPageSize, defaultCurrent);
    // this.getScopeOptions();
  }

  componentDidUpdate() {
    if (this.props.location.pathname === "/dashboard/exchange/rule") {
      this.props.history.replace("/dashboard/exchange/rule/list");
    }
  }

  getScopeOptions = async () => {
    const res = await this.$api.exchange.getScopeOptions();

    if (res.data.status == 200) {
      this.setState({
        scopeOptions: res.data.list,
      });
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
        await this.props.exchange.getRuleList({
          params: this.state.filter,
        });
        this.setState({ tableLoading: false, });
      }
    );
  };

  toggleRuleModal = () => {
    this.setState({
      ruleModalVisible: !this.state.ruleModalVisible,
    });
  }

  onModalConfirm = async () => {
    const { currentRule, } = this.props.exchange;

    let res;
    if (!currentRule.name) {
      return this.$msg.warn('请输入利润规则名称');
    }

    if (!currentRule.scope) {
      return this.$msg.warn('请选择利润规则作用域');
    }

    if (!currentRule.func_name) {
      return this.$msg.warn('请输入利润规则函数');
    }

    let payload: any = {
      name: currentRule.name,
      scope: currentRule.scope,
      func_name: currentRule.func_name,
    };

    if (currentRule.id) {
      // payload['id'] = currentRule.id,
      res = await this.$api.exchange.updateRule(currentRule.id, payload);
    } else {
      res = await this.$api.exchange.createRule(payload);
    }

    const statusCode = currentRule.id ? 200 : 201;

    if (res.status == statusCode) {
      this.$msg.success(!currentRule.id ? '利润规则添加成功' : '利润规则编辑成功');
      this.toggleRuleModal();
      this.getDataList(this.state.filter);
    } else {
      this.$msg.error(res.data.msg);
    }
  }

  onModalCancel = () => {
    this.setState({
      ruleModalVisible: false,
    });
    this.props.exchange.setCurrentRule({});
  }

  resetPagination = async (pageSize, pageNum) => {
    this.setState(
      {
        filter: {
          ...this.state.filter,
          page_size: pageSize,
          page: pageNum,
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
          page: 1,
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
    const filter: any = { page: 1, pageSize: this.state.filter.page_size, };

    this.setState(
      {
        filter,
        currentPage: 1,
      },
      () => {
        this.getDataList(this.state.filter);
      }
    );
  };

  goToEditor = (record: any): void => {
    const url = `/dashboard/exchange/rule/editor?id=${!utils.isEmpty(record) ? record.id : 0}`;
    this.props.history.push(url);
    this.props.exchange.setCurrentRule(record, true, false);
  }

  renderMenu = (record): JSX.Element => {
    return null;
  };

  // @ts-ignore
  private onBatch = async value => { };

  render() {
    const { match, } = this.props;
    const computedTitle = '利润规则设置';
    const { ruleModalVisible, } = this.state;
    const { currentRule, } = this.props.exchange;

    return (
      <div>
        <CommonHeader {...this.props} links={[]} title={computedTitle} />
        <Route
          path={`${match.url}/list`}
          render={props => <CommonList {...props} config={listConfig(this)} />}
        />
        {
          ruleModalVisible && (
            <Modal
              width={720}
              visible={ruleModalVisible}
              title={
                utils.isEmpty(currentRule.id) ? '添加利润规则' : '编辑利润规则'
              }
              onOk={this.onModalConfirm}
              onCancel={this.onModalCancel}
            >
              <RuleEdtior onRef={ref => this.$ruleEditor = ref} />
            </Modal>
          )
        }
      </div>
    );
  }
}
