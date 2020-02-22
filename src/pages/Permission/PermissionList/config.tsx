import * as React from "react";
import { Button, Icon, Popconfirm } from "antd";
import utils from "utils";

const config = self => {
  const { selectedRowKeys, } = self.state;
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      self.setState({ selectedRowKeys: selectedRowKeys, });
    },
  };

  const columns = [
    {
      // width: 120,
      title: "权限名",
      dataIndex: "name",
    },
    {
      // width: 120,
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
      // width: 120,
      title: "操作",
      render: (text, record) => {
        return (
          <div className="common-list-table-operation">
            <span onClick={() => self.goToEditor(record)}>编辑</span>
            <span className="common-list-table-operation-spliter"></span>
            <Popconfirm
              title="请问是否确定删除权限"
              onConfirm={async () => {
                const res = await self.$api.permission.deletePermission(record.id);
                if (res.status === 204) {
                  self.getDataList(self.state.filter);
                } else {
                  self.$msg.error(res.data.message);
                }
              }}
              onCancel={() => {}}
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
    total: self.props.permission.permissionListMeta.total,
    current: self.state.currentPage,
    onChange: (current, pageSize) => {},
    onShowSizeChange: (current, pageSize) => {
      // @todo 调用获取表接口
      self.resetPagination(pageSize, current);
    },
  };

  return {
    // 是否显示增加按钮
    addBtn: {
      title: () => (
        <Button type="primary" onClick={() => self.goToEditor({})}>
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
          value: self.state.name || undefined,
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
          value: self.state.code || undefined,
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
      rowSelection,
      columns,
      dataSource: self.props.permission.permissionList,
      pagination,
      onChange(pagination, filters, sorter) {
        const payload: any = {
          offset: pagination.current - 1,
          limit: pagination.pageSize,
        };

        if (!utils.isEmpty(filters)) {
          for (let [key, value] of Object.entries(filters)) {
            payload[key] = value ? value[0] : undefined;
          }
        }

        if (!utils.isEmpty(sorter)) {
          payload.orderBy = `${sorter.field}`;
          payload.sort = `${sorter.order === "descend" ? "desc" : "asc"}`;
        } else {
          delete payload.orderBy;
          delete payload.sort;
        }

        self.setState(
          {
            filter: {
              ...self.state.filter,
              ...payload,
            },
            currentPage: pagination.current,
          },
          () => {
            self.getDataList(self.state.filter);
          }
        );
      },
    },
  };
};

export default config;
