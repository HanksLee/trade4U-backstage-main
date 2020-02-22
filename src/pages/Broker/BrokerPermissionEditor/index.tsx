import * as React from 'react';
import { BaseReact } from 'components/BaseReact';
import {
  Table,
  Checkbox,
  Button
} from 'antd';
import { inject, observer } from 'mobx-react';
import utils from 'utils';
import { ColumnProps } from "antd/lib/table";
import './index.scss';

interface Permission {
  id: string;
  name: string;
}
interface MenuType {
  id: string;
  name: string;
  permission: Permission[] | null;
  children: MenuType[] | null;
}
interface FormatedMenuType {
  parentMenuId: string;
  parentMenuName: string;
  childMenuId?: string;
  childMenuName?: string;
  permission: Permission[] | null;
  rowSpan: number;
}

export interface IBrokerPermissionEditorProps {

}

export interface IBrokerPermissionEditorState {
  isEditing: boolean;
  menuList: MenuType[];
  formatedMenuList: FormatedMenuType[];
  selectedPermissions: string[];
}

// @ts-ignore
@inject('common', 'broker')
@observer
export default class BrokerPermissionEditor extends BaseReact<IBrokerPermissionEditorProps, IBrokerPermissionEditorState> {
  brokerId: string
  state: IBrokerPermissionEditorState = {
    isEditing: false,
    menuList: [],
    formatedMenuList: [],
    selectedPermissions: [],
  }

  constructor(props) {
    super(props);
    this.brokerId = this.$qs.parse(this.props.location.search).id;
  }
  

  async componentDidMount() {
    this.getBrokerMenuList();
    this.getBrokePermission();
  }

  componentWillUnmount() {
    this.props.broker.setCurrentBroker({}, true, false);
  }

  formateMenuList = (menuList: MenuType[]) => {
    const formatedMenuList = [];

    menuList.forEach(menu => {
      if (menu.children && menu.children.length > 0) {
        menu.children.forEach((m, index)=> {
          formatedMenuList.push({
            parentMenuId: menu.id,
            parentMenuName: menu.name,
            childMenuId: m.id,
            childMenuName: m.name,
            permission: m.permission,
            rowSpan: index === 0 ? menu.children.length : 0,
          });
        });
      } else {
        formatedMenuList.push({
          parentMenuId: menu.id,
          parentMenuName: menu.name,
          permission: menu.permission,
          rowSpan: 1,
        });
      }
    });

    return formatedMenuList;
  }

  getBrokerMenuList = async () => {
    const res = await this.$api.broker.getBrokerMenuList();
    this.setState({
      menuList: res.data,
      formatedMenuList: this.formateMenuList(res.data),
    });
  }

  getBrokePermission = async () => {
    const res = await this.$api.broker.getBrokerDetail(this.brokerId);
    this.setState({
      selectedPermissions: res.data.permissions,
    });
  }

  goBack = () => {
    setTimeout(() => {
      this.props.history.goBack();
      this.props.broker.setCurrentBroker({});
      utils.rmLStorage('currentBroker');
    }, 300);
  }

  editPermission = () => {
    this.setState({
      isEditing: true,
    });
  }

  savePermission = async () => {
    const { selectedPermissions, } = this.state;
    this.$api.broker.updateBrokerPermission({
      broker_id: this.brokerId,
      permission_ids: selectedPermissions,
    })
      .then(() => {
        this.$msg.success('权限更新成功');
        setTimeout(() => {
          this.goBack();
          this.props.broker.getBrokerList({
            offset: 0,
            limit: 10,
          });
        }, 1500);
      });
  }

  getTableColumns = (): ColumnProps<FormatedMenuType>[] => {
    const { isEditing, } = this.state;
    return [
      {
        key: "parentMenuName",
        title: "父菜单名称",
        dataIndex: "parentMenuName",
        align: 'center',
        render: (text, record) => {
          return {
            children: (
              <>
                <div style={{ marginBottom: '5px', }}>{text}</div>
                {
                  record.permission.length > 0 && (
                    <Checkbox
                      checked={this.isCheck(record.parentMenuId)}
                      disabled={!isEditing}
                      onChange={(e) => this.handleSelectAllChange(e.target.checked, record.parentMenuId)}
                    >
                      全选
                    </Checkbox>
                  )
                }
              </>
            ),
            props: {
              rowSpan: record.rowSpan,
            },
          };
        },
      },
      {
        key: "childMenuName",
        title: "子菜单名称",
        dataIndex: "childMenuName",
        align: 'center',
      },
      {
        key: "permission",
        title: "权限名称",
        className: "broker-permission-column",
        render: (_, record) => {
          return (
            <>
              {
                record.permission.length > 0 && (
                  <div className="select-all-permission-row">
                    <Checkbox
                      disabled={!isEditing}
                      checked={this.isCheck(record.childMenuId)}
                      onChange={(e) => this.handleSelectAllChange(e.target.checked, record.childMenuId)}
                    >
                      全选
                    </Checkbox>
                  </div>
                )
              }
              <div className="select-permission-row">
                {
                  record.permission.map(p => {
                    return (
                      <Checkbox
                        disabled={!isEditing}
                        checked={this.state.selectedPermissions.indexOf(p.id) !== -1}
                        onChange={(e) => this.handlePermissionCheckboxChange(p.id, e.target.checked)}
                      >
                        {p.name}
                      </Checkbox>
                    );
                  })
                }
              </div>
            </>
          );
        },
      }
    ];
  }

  handlePermissionCheckboxChange = (permissionId: string, checked: boolean) => {
    const { selectedPermissions, } = this.state;
    if (checked) {
      this.setState({
        selectedPermissions: [...selectedPermissions, permissionId],
      });
    } else {
      const index = selectedPermissions.indexOf(permissionId);
      if (index !== -1) {
        const newselectedPermissions = [...selectedPermissions];
        newselectedPermissions.splice(index, 1);
        this.setState({
          selectedPermissions: newselectedPermissions,
        });
      }
    }
  }

  handleSelectAllChange = (checked: boolean, menuId: string) => {
    const { formatedMenuList, selectedPermissions, } = this.state;
    const newSelectedPermissions = [...selectedPermissions];
    if (checked) {
      formatedMenuList.forEach(menu => {
        if (menu.parentMenuId === menuId || menu.childMenuId === menuId) {
          menu.permission.forEach(permission => {
            if (newSelectedPermissions.indexOf(permission.id) === -1) {
              newSelectedPermissions.push(permission.id);
            }
          });
        }
      });
    } else {
      formatedMenuList.forEach(menu => {
        if (menu.parentMenuId === menuId || menu.childMenuId === menuId) {
          menu.permission.forEach(permission => {
            if (newSelectedPermissions.indexOf(permission.id) !== -1) {
              newSelectedPermissions.splice(newSelectedPermissions.indexOf(permission.id), 1);
            }
          });
        }
      });
    }
    this.setState({
      selectedPermissions: newSelectedPermissions,
    });
  }

  isCheck = (menuId: string) => {
    const { formatedMenuList, selectedPermissions, } = this.state;
    for (let i = 0; i < formatedMenuList.length; i++) {
      const menu = formatedMenuList[i];
      if (menu.parentMenuId === menuId || menu.childMenuId === menuId) {
        for (let j = 0; j < menu.permission.length; j++) {
          if (selectedPermissions.indexOf(menu.permission[j].id) === -1) {
            return false;
          }
        }
      }
    }
    return true;
  }

  render() {
    const { formatedMenuList, isEditing, } = this.state;

    return (
      <div className='editor'>
        <section className='editor-content panel-block common-list'>
          <section className='common-list-addbtn'>
            {
              isEditing ? (
                <Button onClick={() => this.savePermission()}>保存编辑</Button>
              ) : (
                <Button type="primary" onClick={this.editPermission}>编辑权限</Button>
              )
            }
            <Button onClick={() => this.goBack()}>取消</Button>
          </section>
          <Table
            className="broker-permission-table"
            columns={this.getTableColumns()}
            // childrenColumnName="children"
            dataSource={formatedMenuList}
            pagination={false}
            bordered
          />
        </section>
      </div>
    );
  }
}