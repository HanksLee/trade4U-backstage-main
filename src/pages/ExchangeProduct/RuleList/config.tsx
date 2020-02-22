import * as React from "react";
import { Button, Icon, Popconfirm } from "antd";
import utils from "utils";

const config = self => {
  const { selectedRowKeys, } = self.state;
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      self.setState({ selectedRowKeys: selectedRowKeys, });
    },
  };

  const columns = [
    {
      title: "规则 ID",
      dataIndex: "id",
    },
    {
      title: "规则名称",
      dataIndex: "name",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "作用域",
      dataIndex: "scope",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "规则函数",
      dataIndex: "func_name",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      // width: 120,
      title: "操作",
      render: (text, record) => {
        return (
          <div className="common-list-table-operation">
            <span onClick={() => {
              self.props.exchange.setCurrentRule(record, true, false);
              self.toggleRuleModal();
            }}>编辑</span>
            <span className="common-list-table-operation-spliter"></span>
            <Popconfirm
              title="请问是否确定删除当前规则"
              onConfirm={async () => {
                const res = await self.$api.exchange.deleteRule(record.id);

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
    total: self.props.exchange.ruleListMeta.total,
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
        <Button type='primary' onClick={() => {
          self.props.exchange.setCurrentRule({});
          self.toggleRuleModal();
        }}><Icon type="plus" />添加</Button>
      ),
    },
    searcher: {
      hideSearcher: true,
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
      ],
      onSearch() {
      },
      onReset() {
      },
    },
    table: {
      rowKey: "id",
      rowSelection,
      columns,
      dataSource: self.props.exchange.ruleList,
      pagination,
      onChange(pagination, filters, sorter) {
        const payload: any = {
          pageNum: pagination.current,
          pageSize: pagination.pageSize,
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
