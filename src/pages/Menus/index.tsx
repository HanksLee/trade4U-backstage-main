import CommonHeader from "components/CommonHeader";
import cloneDeep from "lodash/cloneDeep";
import DragableTableRow from "./DragableTableRow";
import EditMenuModal from "./EditMenuModal";
import EditSubMenuModal from "./EditSubMenuModal";
import HTML5Backend from "react-dnd-html5-backend";
import WithRoute from "components/WithRoute";
import * as React from "react";
import { BaseReact } from "components/BaseReact";
import { DndProvider } from "react-dnd";
import { Button, Table, Popconfirm } from "antd";
import { ColumnProps } from "antd/lib/table";
import "./index.scss";

export interface MenuType {
  id: string;
  name: string;
  children?: MenuType[];
}

interface IMenusProps {}

interface IMenusState {
  menuData: MenuType[];
  currentMenu: MenuType | null;
  isShowEditMenuModal: boolean;
  isShowEditSubMenuModal: boolean;
}

const menuData: MenuType[] = [
  {
    id: "1",
    name: "客户管理",
    children: [],
  },
  {
    id: "2",
    name: "推广分成",
    children: [
      {
        id: "1.1",
        name: "经纪人分成",
      },
      {
        id: "1.2",
        name: "直客分成",
      }
    ],
  }
];

/* eslint new-cap: "off" */
@WithRoute("/dashboard/menu", { exact: false, })
export default class Menus extends BaseReact<IMenusProps, IMenusState> {
  state = {
    menuData: menuData,
    isShowEditMenuModal: false,
    isShowEditSubMenuModal: false,
    currentMenu: null,
  };

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
            <>
              {record.children && (
                <a onClick={() => this.showEditSubMenuModal()}>添加 </a>
              )}
              {record.children ? (
                <a onClick={() => this.showEditMenuModal(record)}>编辑</a>
              ) : (
                <a onClick={() => this.showEditSubMenuModal(record)}>编辑</a>
              )}
              <Popconfirm title="确认删除？">
                <a>删除</a>
              </Popconfirm>
            </>
          );
        },
      }
    ];
  };

  moveRow = (dragIndex: number, hoverIndex: number) => {
    const { menuData, } = this.state;
    const newMenuData = cloneDeep(menuData);
    newMenuData.splice(hoverIndex, 0, newMenuData.splice(dragIndex, 1)[0]);
    this.setState({
      menuData: newMenuData,
    });
  };

  showEditMenuModal = (menu?: MenuType) => {
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

  showEditSubMenuModal = (menu?: MenuType) => {
    if (menu) {
      this.setState({
        currentMenu: menu,
      });
    }

    this.setState({
      isShowEditSubMenuModal: true,
    });
  };

  hideEditSubMenuModal = () => {
    this.setState({
      isShowEditSubMenuModal: false,
      currentMenu: null,
    });
  };

  render() {
    const state = this.state;

    return (
      <div>
        <CommonHeader {...this.props} links={[]} title="菜单管理" />
        <Button onClick={() => this.showEditMenuModal()}>添加</Button>
        <DndProvider backend={HTML5Backend}>
          <Table
            columns={this.getTableColumns()}
            childrenColumnName="children"
            dataSource={menuData}
            pagination={false}
            components={{ body: { row: DragableTableRow, }, }}
            onRow={(_, index) => ({
              index,
              moveRow: this.moveRow,
            })}
          />
        </DndProvider>
        {state.isShowEditMenuModal && (
          <EditMenuModal
            currentMenu={state.currentMenu}
            onCancel={this.hideEditMenuModal}
          />
        )}
        {state.isShowEditSubMenuModal && (
          <EditSubMenuModal
            currentMenu={state.currentMenu}
            onCancel={this.hideEditSubMenuModal}
          />
        )}
      </div>
    );
  }
}
