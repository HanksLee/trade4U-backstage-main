import * as React from "react";
import { Button, Icon, Popconfirm } from "antd";
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
      title: '上架状态',
      render: (text, record) => {
        const statusType = {
          1: 'normal',
          0: 'block',
        };
        const statusText = {
          1: '上架',
          0: '下架',
        };

        return <StatusText type={
          statusType[record.status]
        } text={
          statusText[record.status]
        } />;
      },
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      render: (text, record) => {
        return (text && moment(text).format(FORMAT_TIME))  || '--';
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

                if (res.data.status === 204) {
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
          type: 'Input',
          label: '交易市场',
          placeholder: '请输入交易市场',
          value: self.state.market || undefined,
          onChange(evt) {
            self.onInputChanged('market', evt.target.value);
          },
          onPressEnter(evt) {
            self.onSearch();
          },
        }],
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
      rowSelection,
      columns,
      dataSource: self.props.market.productList,
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
