import * as React from "react";
import { Button, Icon, Popconfirm } from "antd";
import utils from "utils";
import { WeeklyOrder } from 'constant';
import moment from 'moment';

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
      width: 100,
      title: "品种 ID",
      dataIndex: "id",
      ellipsis: true,
    },
    {
      width: 100,
      title: "品种名称",
      dataIndex: "name",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      width: 100,
      title: "品种类型",
      dataIndex: "type_display",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      width: 100,
      title: "行情产品",
      dataIndex: "product_display",
      render: (text, record) => {
        return text.name || '--';
      },
    },
    {
      width: 100,
      title: "小数位",
      dataIndex: "decimals_place",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      width: 100,
      title: "合约大小",
      dataIndex: "contract_size",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      width: 100,
      title: "点差",
      dataIndex: "spread",
      render: (text, record) => {
        return text || '--';
      },
    },
    // {
    //   width: 100,
    //   title: "止盈止损位",
    //   dataIndex: "limit_stop_level",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "预付款货币",
    //   dataIndex: "margin_currency_display",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "获利货币",
    //   dataIndex: "profit_currency_display",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "最大交易量",
    //   dataIndex: "max_trading_volume",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 200,
    //   title: "最小交易量",
    //   dataIndex: "min_trading_volume",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "交易量步长",
    //   dataIndex: "volumne_step",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "价格变动最小单位",
    //   dataIndex: "min_unit_of_price_change",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "成交模式",
    //   dataIndex: "transaction_mode",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "买入库存费",
    //   dataIndex: "purchase_fee",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "卖出库存费",
    //   dataIndex: "selling_fee",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 200,
    //   title: "三日库存费",
    //   dataIndex: "three_days_swap",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 220,
    //   title: "交易时间段",
    //   dataIndex: "trading_times",
    //   render: (text, record) => {
    //     const ret = text && JSON.parse(text);

    //     return ret && (
    //       WeeklyOrder.map(item => {
    //         return `
    //           ${
    //       item
    //       }: ${
    //         ret[item].trades.map(t => moment(t).format('HH:mm')).join('-')
    //       }
    //         `;
    //       })
    //     ) || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "描述",
    //   dataIndex: "description",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "背景颜色",
    //   dataIndex: "background_display",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "挂单模式",
    //   dataIndex: "orders_mode_display",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "盈亏计算（多）",
    //   dataIndex: "profit_calculate_for_bought",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "盈亏计算（空）",
    //   dataIndex: "profit_calculate_for_sale",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "交易手续费（多）",
    //   dataIndex: "hands_fee_for_bought",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "交易手续费（空）",
    //   dataIndex: "hands_fee_for_sale",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "税金计算",
    //   dataIndex: "calculate_for_tax",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "库存费计算",
    //   dataIndex: "calculate_for_fee",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    // {
    //   width: 100,
    //   title: "保证金计算",
    //   dataIndex: "calculate_for_cash_deposit",
    //   render: (text, record) => {
    //     return text || '--';
    //   },
    // },
    {
      width: 100,
      // fixed: 'right',
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
                const res = await self.$api.exchange.deleteProduct(record.id);

                if (res.status === 204) {
                  self.$msg.success('当期记录删除成功');
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
      // hideSearcher: true,
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
          label: '品种名称',
          placeholder: '请输入品种名称',
          value: self.state.name || undefined,
          onChange(evt) {
            self.onInputChanged('name', evt.target.value);
          },
          onPressEnter(evt) {
            self.onSearch();
          },
        },
        {
          type: 'Select',
          label: '品种类型',
          showSearch: false,
          placeholder: '请选择品种类型',
          allowClear: false,
          width: 150,
          value: self.state.type,
          option: {
            key: 'id',
            value: 'id',
            title: 'name',
            data: self.state.typeOptions || [],
          },
          onSelect(val, elem) {
            self.onTypeSelected(val, elem);
          },
        }
        ],
        {
          type: 'Input',
          label: '产品编码',
          placeholder: '请输入产品编码',
          value: self.state.product_code || undefined,
          onChange(evt) {
            self.onInputChanged('product_code', evt.target.value);
          },
          onPressEnter(evt) {
            self.onSearch();
          },
        }
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
      // rowSelection,
      tableLayout: 'fixed',
      columns,
      dataSource: self.props.exchange.productList,
      pagination,
      scroll: { x: (columns.length - 1) * 100 + 240, },
      onChange(pagination, filters, sorter) {
        const payload: any = {
          page: pagination.current,
          page_size: pagination.pageSize,
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

        self.props.exchange.setFilterProduct(payload);

        self.setState(
          {
            currentPage: pagination.current,
          },
          () => {
            self.getDataList(self.props.exchange.filterProduct);
          }
        );
      },
    },
  };
};

export default config;
