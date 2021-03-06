import * as React from 'react';
import { BaseReact } from 'components/BaseReact';
import { ColumnProps } from "antd/lib/table";
import { Table, Checkbox, Button } from 'antd';
import { inject, observer } from 'mobx-react';
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
  key: string;
  parentMenuId: string;
  parentMenuName: string;
  childMenuId?: string;
  childMenuName?: string;
  permission: Permission[] | null;
  rowSpan: number;
  totalPermissionCount: number;
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
export default class BrokerPermissionEditor extends BaseReact<{}, IBrokerPermissionEditorState> {
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

  formateMenuList = (menuList: MenuType[]) => {
    const formatedMenuList = [];

    menuList.forEach(menu => {
      if (menu.children && menu.children.length > 0) {
        const results = [];
        menu.children.forEach((m, index)=> {
          results.push({
            key: `${menu.id}-${m.id}`,
            parentMenuId: menu.id,
            parentMenuName: menu.name,
            childMenuId: m.id,
            childMenuName: m.name,
            permission: m.permission,
            rowSpan: index === 0 ? menu.children.length : 0,
          });
        });
        const totalPermissionCount = results.reduce((sum, value) => sum + value.permission.length, 0);
        results.forEach(result => {
          result.totalPermissionCount = totalPermissionCount;
          formatedMenuList.push(result);
        });
      } else {
        formatedMenuList.push({
          key: String(menu.id),
          parentMenuId: menu.id,
          parentMenuName: menu.name,
          permission: menu.permission,
          rowSpan: 1,
          totalPermissionCount: menu.permission.length,
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
    this.props.history.goBack();
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
        this.$msg.success('??????????????????');
        this.goBack();
        this.props.getBrokerList();
      });
  }

  getTableColumns = (): ColumnProps<FormatedMenuType>[] => {
    const { isEditing, } = this.state;
    return [
      {
        key: "parentMenuName",
        title: "???????????????",
        dataIndex: "parentMenuName",
        align: 'center',
        render: (text, record) => {
          return {
            children: (
              <>
                <div style={{ marginBottom: '5px', }}>{text}</div>
                {
                  record.totalPermissionCount > 0 && (
                    <Checkbox
                      checked={this.isCheck(record.parentMenuId)}
                      disabled={!isEditing}
                      onChange={(e) => this.handleSelectAllChange(e.target.checked, record.parentMenuId)}
                    >
                      ??????
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
        title: "???????????????",
        dataIndex: "childMenuName",
        align: 'center',
      },
      {
        key: "permission",
        title: "????????????",
        className: "broker-permission-column",
        render: (_, record) => {
          return (
            <>
              {
                record.permission.length > 0 && (
                  <div className="select-all-permission-row">
                    <Checkbox
                      disabled={!isEditing}
                      checked={this.isCheck(record.childMenuId || record.parentMenuId)}
                      onChange={(e) => {
                        this.handleSelectAllChange(e.target.checked, record.childMenuId || record.parentMenuId);
                      }}
                    >
                      ??????
                    </Checkbox>
                  </div>
                )
              }
              <div className="select-permission-row">
                {
                  record.permission.map(p => {
                    return (
                      <Checkbox
                        key={p.id}
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
                <Button onClick={() => this.savePermission()}>????????????</Button>
              ) : (
                <Button type="primary" onClick={this.editPermission}>????????????</Button>
              )
            }
            <Button onClick={() => this.goBack()}>??????</Button>
          </section>
          <Table
            rowKey="key"
            className="broker-permission-table"
            columns={this.getTableColumns()}
            dataSource={formatedMenuList}
            pagination={false}
            bordered
          />
        </section>
      </div>
    );
  }
}