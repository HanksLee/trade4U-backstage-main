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
      title: "交易品种 ID",
      dataIndex: "id",
    },
    {
      title: "交易品种",
      dataIndex: "symbol",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "行情品种",
      dataIndex: "source",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "类型",
      dataIndex: "type",
      render: (text, record) => {
        // const matched = self.state.scopeOptions.find(item => item.id == text);

        return (text || '--');
      },
    },
    {
      title: "执行",
      dataIndex: "function",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "价差",
      dataIndex: "price_gap",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "停止",
      dataIndex: "stop_point",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "买入",
      dataIndex: "buy_point",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "卖出",
      dataIndex: "sale_point",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "位数",
      dataIndex: "digits",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "交易",
      dataIndex: "exchange",
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
              self.goToEditor(record);
            }}>编辑</span>
            <span className="common-list-table-operation-spliter"></span>
            <Popconfirm
              title="请问是否确定删除当前规则"
              onConfirm={async () => {
                const res = await self.$api.exchange.deleteProduct({
                  id: record.id,
                });

                if (res.data.status === 200) {
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
    total: self.props.exchange.productListMeta.total,
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
          self.goToEditor({});
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
      dataSource: self.props.exchange.productList,
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
