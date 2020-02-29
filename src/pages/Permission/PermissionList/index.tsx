import CommonHeader from 'components/CommonHeader';
import CommonList from 'components/CommonList';
import listConfig from './config';
import EditPermissionModal from 'pages/Permission/EditPermissionModal';
import WithRoute from 'components/WithRoute';
import * as React from "react";
import { BaseReact } from "components/BaseReact";
import { inject, observer } from "mobx-react";
import { Route } from "react-router-dom";

interface Permission {
  id: string;
  name: string;
  code: string;
  parent_menu: number;
  parent_menu_name:	string;
  child_menu: number;
  child_menu_name?:	string;
}

interface PermissionListState {
  permissionList: Permission[];
  tableLoading: boolean;
  selectedRowKeys: string[];
  currentPermission: Permission | null;
  isShowEditPermissionModal: boolean;
  tempFilter: any;
  total: number;
};

/* eslint new-cap: "off" */
@WithRoute("/dashboard/permission", { exact: false, })
@inject("common", "permission")
@observer
export default class PermissionList extends BaseReact<{}, PermissionListState> {
  state = {
    permissionList: [],
    tableLoading: false,
    selectedRowKeys: [],
    currentPermission: null,
    isShowEditPermissionModal: false,
    tempFilter: {},
    total: 0,
  };

  async componentDidMount() {
    const { paginationConfig, } = this.props.common;
    this.getDataList({
      page_size: paginationConfig.defaultPageSize,
      page: 1,
    });
  }

  componentDidUpdate() {
    if (this.props.location.pathname === "/dashboard/permission") {
      this.props.history.replace("/dashboard/permission/list");
    }
  }

  getDataList = async (filter?: any) => {
    const payload = filter ? { ...this.props.permission.filter, ...filter, } : this.props.permission.filter;
    this.setState({
      tableLoading: true,
    });
    
    const res = await this.$api.permission.getPermissionList({ params: payload, });
    const { results, page_size, current_page, count, } = res.data;
    if ((res.data.results.length === 0) && res.data.current_page !== 1) {
      // 删除非第一页的最后一条记录，自动翻到下一页
      this.getDataList({ ...payload, page: current_page - 1, });
    } else {
      this.props.permission.setFilter({
        page_size,
        page: current_page,
        name: payload.name,
        code: payload.code,
      });
      this.setState({
        permissionList: results,
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
      code: undefined,
      page: 1,
    });
    this.setState({
      tempFilter: {},
    });
  };

  onInputChanged = (field, value) => {
    this.setState((prevState: PermissionListState) => (
      {
        tempFilter: {
          ...prevState.tempFilter,
          [field]: value,
        },
      }
    ));
  }

  showEditPermissionModal = (record?: any): void => {
    this.setState({
      currentPermission: record ? record : null,
      isShowEditPermissionModal: true,
    });
  }

  hideEditPermissionModal = () => {
    this.setState({
      currentPermission: null,
      isShowEditPermissionModal: false,
    });
  }

  handleEditPermission = () => {
    this.hideEditPermissionModal();
    this.getDataList();
  }

  deletePermission = async (id: string) => {
    const res = await this.$api.permission.deletePermission(id);
    if (res.status === 204) {
      this.getDataList();
    } else {
      this.$msg.error(res.data.message);
    }
  }

  render() {
    const { match, } = this.props;
    const { currentPermission, isShowEditPermissionModal, } = this.state;
    return (
      <div>
        <CommonHeader {...this.props} links={[]} title="权限管理" />
        <Route
          path={`${match.url}/list`}
          render={props => <CommonList {...props} config={listConfig(this)} />}
        />
        {
          isShowEditPermissionModal && (
            <EditPermissionModal
              permission={currentPermission}
              onOk={this.handleEditPermission}
              onCancel={this.hideEditPermissionModal}
            />
          )
        }
      </div>
    );
  }
}
