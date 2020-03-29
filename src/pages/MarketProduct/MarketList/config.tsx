import * as React from "react";
import { Button, Icon, Popconfirm, Checkbox } from "antd";
import utils from "utils";
import StatusText from 'components/StatusText';
import moment from 'moment';
import { FORMAT_TIME } from 'constant';

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
      // width: 120,
      title: "产品 ID",
      dataIndex: "id",
    },
    {
      // width: 120,
      title: "交易市场",
      dataIndex: "market",
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "产品名称",
      dataIndex: 'name',
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: '简拼',
      dataIndex: 'pinyin',
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: '股票代码',
      dataIndex: 'code',
      render: (text, record) => {
        return text || '--';
      },
    },
    {
      title: "上架状态",
      width: 200,
      dataIndex: "status",
      render: (text, record) => {
        const handleChange = async (e) => {
          const res = await self.$api.market.updateProduct(record.id, {
            status: text == 0 ? 1 : 0,
          });
          if (res.status === 200) {
            self.getDataList(self.props.market.filterProduct);
          } else {
            self.$msg.error(res.data.message);
          }
        };
        return <Checkbox checked={text} onChange={handleChange} />;
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
              title="请问是否确定删除行情产品"
              onConfirm={async () => {
                const res = await self.$api.market.deleteProduct(record.id);
                debugger;
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
    total: self.props.market.productListMeta.total,
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
          label: '产品名称',
          placeholder: '请输入产品名称',
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
          label: '交易市场',
          showSearch: false,
          placeholder: '请选择交易市场',
          allowClear: false,
          width: 150,
          value: self.state.market,
          option: {
            key: 'field',
            value: 'field',
            title: 'translation',
            data: self.state.marketOptions || [],
          },
          onSelect(val, elem) {
            self.onMarketSelected(val, elem);
          },
        }
        ],
        {
          type: 'Input',
          label: '产品编码',
          placeholder: '请输入产品编码',
          value: self.state.code || undefined,
          onChange(evt) {
            self.onInputChanged('code', evt.target.value);
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
      columns,
      dataSource: self.props.market.productList,
      pagination,
      onChange(pagination, filters, sorter) {
        const payload: any = {
          current_page: pagination.current,
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

        self.props.market.setFilterMarket(payload);

        self.setState(
          {
            currentPage: pagination.current,
          },
          () => {
            self.getDataList(self.props.market.filterMarket);
          }
        );
      },
    },
  };
};

export default config;
