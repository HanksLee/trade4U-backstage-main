import * as React from "react";
import { Button, Icon, Popconfirm } from "antd";
import utils from "utils";

const config = self => {
  const columns = [
    {
      title: "权限名",
      dataIndex: "name",
    },
    {
      title: "code",
      dataIndex: "code",
    },
    {
      title: "父菜单名称",
      dataIndex: 'parent_menu_name',
      render: (text) => {
        return text || '--';
      },
    },
    {
      title: "子菜单名称",
      dataIndex: 'child_menu_name',
      render: (text) => {
        return text || '--';
      },
    },
    {
      title: "是否默认",
      dataIndex: 'is_default',
      render: (text) => {
        return text ? '是' : '否';
      },
    },
    {
      title: "操作",
      render: (_, record) => {
        return (
          <div className="common-list-table-operation">
            <span onClick={() => self.showEditPermissionModal(record)}>编辑</span>
            <span className="common-list-table-operation-spliter"></span>
            <Popconfirm
              title="请问是否确定删除权限"
              onConfirm={() => self.deletePermission(record.id)}
            >
              <span>删除</span>
            </Popconfirm>
          </div>
        );
      },
    }
  ];

  const pagination = {
    ...self.props.common.paginationConfig,
    total: self.state.total,
    current: self.props.permission.filter.page,
    pageSize: self.props.permission.filter.page_size,
    onChange: (current, pageSize) => {},
    onShowSizeChange: (current, pageSize) => {
      self.getDataList({
        page_size: pageSize,
        page: current,
      });
    },
  };

  return {
    // 是否显示增加按钮
    addBtn: {
      title: () => (
        <Button type="primary" onClick={() => self.showEditPermissionModal()}>
          <Icon type="plus" /> 添加
        </Button>
      ),
    },
    searcher: {
      batchControl: {
        placeholder: "请选择",
        showBatchControl: !utils.isEmpty(self.state.selectedRowKeys),
        options: [
          {
            title: "删除",
            value: "delete",
          }
        ],
        onBatch: value => {
          self.onBatch(value);
        },
      },
      widgets: [
        [{
          type: 'Input',
          label: '权限名称',
          placeholder: '请输入权限名称',
          value: self.state.tempFilter.name || undefined,
          onChange(evt) {
            self.onInputChanged('name', evt.target.value);
          },
          onPressEnter(evt) {
            self.onSearch();
          },
        }, {
          type: 'Input',
          label: 'code',
          placeholder: '请输入权限code',
          value: self.state.tempFilter.code || undefined,
          onChange(evt) {
            self.onInputChanged('code', evt.target.value);
          },
          onPressEnter(evt) {
            self.onSearch();
          },
        }]
      ],
      onSearch() {
        self.onSearch();
      },
      onReset() {
        self.onReset();
      },
    },
    table: {
      rowKey: "id",
      columns,
      dataSource: self.state.permissionList,
      pagination,
      onChange(pagination, filters) {
        const payload: any = {};

        if (!utils.isEmpty(filters)) {
          for (let [key, value] of Object.entries(filters)) {
            payload[key] = value ? value[0] : undefined;
          }
        }

        self.getDataList({
          page_size: pagination.pageSize,
          page: pagination.current,
        });
      },
    },
  };
};

export default config;
