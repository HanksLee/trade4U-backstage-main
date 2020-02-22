import CommonHeader from "components/CommonHeader";
import cloneDeep from "lodash/cloneDeep";
import DragableTableRow from "./DragableTableRow";
import EditMenuModal from "./EditMenuModal";
import EditSubMenuModal from './EditSubMenuModal';
import HTML5Backend from "react-dnd-html5-backend";
import WithRoute from "components/WithRoute";
import * as React from "react";
import { BaseReact } from "components/BaseReact";
import { DndProvider } from "react-dnd";
import { Button, Icon, Table, Popconfirm } from "antd";
import { ColumnProps } from "antd/lib/table";
import "./index.scss";

export interface MenuType {
  id: string;
  name: string;
  children?: MenuType[];
  parent?: string;
}

interface IMenusProps {}

interface IMenusState {
  menuList: MenuType[];
  currentMenu: MenuType | null;
  currentMode: string;
  isShowEditMenuModal: boolean;
  isShowEditSubMenuModal: boolean;
  isSorting: boolean;
}

/* eslint new-cap: "off" */
@WithRoute("/dashboard/menu", { exact: false, })
export default class Menus extends BaseReact<IMenusProps, IMenusState> {
  state = {
    menuList: [],
    currentMenu: null,
    currentMode: 'add',
    isShowEditMenuModal: false,
    isShowEditSubMenuModal: false,
    isSorting: false,
  };

  componentDidMount() {
    this.getMenuList();
  }
  
  getMenuList = async () => {
    const res = await this.$api.menus.getMenuList();
    this.setState({
      menuList: res.data,
    });
  }

  getTableColumns = (): ColumnProps<MenuType>[] => {
    return [
      {
        key: "name",
        title: "菜单名称",
        dataIndex: "name",
      },
      {
        key: "action",
        title: "操作",
        render: (_, record) => {
          return (
            <div className="common-list-table-operation">
              {!record.parent && (
                <>
                  <span onClick={() => this.showEditSubMenuModal(record, 'add')}>添加</span>
                  <span className="common-list-table-operation-spliter"></span>
                </>
              )}
              {record.parent ? (
                <span onClick={() => this.showEditSubMenuModal(record, 'edit')}>编辑</span>
              ) : (
                <span onClick={() => this.showEditMenuModal(record)}>编辑</span>
              )}
              <span className="common-list-table-operation-spliter"></span>
              {
                this.state.isSorting ? (
                  <span>删除</span>
                ) : (
                  <Popconfirm title="确认删除？" onConfirm={() => this.deleteMenu(record.id)}>
                    <span>删除</span>
                  </Popconfirm>
                )
              }
            </div>
          );
        },
      }
    ];
  };

  showEditMenuModal = (menu?: MenuType) => {
    if (this.state.isSorting) return;
    if (menu) {
      this.setState({
        currentMenu: menu,
      });
    }

    this.setState({
      isShowEditMenuModal: true,
    });
  };

  hideEditMenuModal = () => {
    this.setState({
      isShowEditMenuModal: false,
      currentMenu: null,
    });
  };

  showEditSubMenuModal = (menu: MenuType, mode: string) => {
    if (this.state.isSorting) return;
    this.setState({
      currentMenu: menu,
    });

    this.setState({
      isShowEditSubMenuModal: true,
      currentMode: mode,
    });
  };

  hideEditSubMenuModal = () => {
    this.setState({
      isShowEditSubMenuModal: false,
      currentMenu: null,
    });
  };

  handleUpdateMenu = () => {
    this.hideEditMenuModal();
    this.hideEditSubMenuModal();
    this.getMenuList();
  };

  deleteMenu = async (id: string) => {
    await this.$api.menus.deleteMenu(id);
    this.getMenuList();
  };

  editMenusSort = () => {
    this.setState({
      isSorting: true,
    });
  };

  moveRow = (dragIndex: number, hoverIndex: number, dragRecord: any) => {
    const { menuList, } = this.state;
    const newMenuData = cloneDeep(menuList);
    if (!dragRecord.parent) {
      newMenuData.splice(hoverIndex, 0, newMenuData.splice(dragIndex, 1)[0]);
    } else {
      for (let i = 0; i < newMenuData.length; i++) {
        if (newMenuData[i].id === dragRecord.parent) {
          const children = newMenuData[i].children;
          children.splice(hoverIndex, 0, children.splice(dragIndex, 1)[0]);
          break;
        }
      }
    }
    this.setState({
      menuList: newMenuData,
    });
  };

  formatMenuListWithPriority = (menuList: MenuType[]) => {
    const newMenuData = cloneDeep(menuList);
    newMenuData.forEach((menu, index) => {
      menu.priority = index;
      if (menu.children) {
        menu.children.forEach((m, i) => {
          m.priority = i;
        });
      }
    });

    return newMenuData.map((menu) => {
      const result: any = {};
      result.id = menu.id;
      result.priority = menu.priority;

      if (menu.children) {
        result.children = menu.children.map((menu) => ({
          id: menu.id,
          priority: menu.priority,
        }));
      }
      return result;
    });
  }

  saveMenusSort = async () => {
    const sortedMenuList = this.formatMenuListWithPriority(this.state.menuList);
    await this.$api.menus.sortMenuList({ data: JSON.stringify(sortedMenuList), });
    this.setState({
      isSorting: false,
    });
    this.getMenuList();
  };

  render() {
    const { currentMenu, menuList, isShowEditMenuModal, isShowEditSubMenuModal, currentMode, isSorting, } = this.state;

    return (
      <div>
        <CommonHeader {...this.props} links={[]} title="菜单管理" />
        <div className="panel-block common-list">
          <section className='common-list-addbtn'>
            <Button type="primary" onClick={() => this.showEditMenuModal()} disabled={isSorting}>
              <Icon type="plus" /> 添加
            </Button>
            {
              isSorting ? (
                <Button onClick={() => this.saveMenusSort()}>保存菜单顺序</Button>
              ) : (
                <Button type="primary" onClick={this.editMenusSort}>编辑菜单顺序</Button>
              )
            }
            
          </section>
          <section className='common-list-table'>
            <DndProvider backend={HTML5Backend}>
              <Table
                columns={this.getTableColumns()}
                childrenColumnName="children"
                dataSource={menuList}
                pagination={false}
                components={{ body: { row: DragableTableRow, }, }}
                onRow={(record, index) => ({
                  record,
                  isSorting,
                  index,
                  moveRow: this.moveRow,
                })}
              />
            </DndProvider>
          </section>
        </div>
        {
          isShowEditMenuModal  && (
            <EditMenuModal
              menu={currentMenu}
              onOk={this.handleUpdateMenu}
              onCancel={this.hideEditMenuModal}
            />
          )
        }
        {
          isShowEditSubMenuModal && (
            <EditSubMenuModal
              mode={currentMode}
              menu={currentMenu}
              onOk={this.handleUpdateMenu}
              onCancel={this.hideEditSubMenuModal}
            />
          )
        }
      </div>
    );
  }
}
