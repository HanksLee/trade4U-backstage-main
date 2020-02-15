import * as React from 'react';
import { Button, Icon, Dropdown } from 'antd';
import StatusText from 'components/StatusText';
import utils from 'utils';
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
      // width: 120,
      title: '券商 ID',
      dataIndex: 'id',
    },
    {
      // width: 120,
      title: '配图',
      dataIndex: 'img',
      render: (text, record) => {
        return (
          text &&
          <div style={{
            backgroundColor: '#e8e8e8',
            border: '1px solid rgba(232, 232, 232, 1)',
            width: 60, height: 60,
          }} >
            <img src={text} style={{ objectFit:'contain', }} />
          </div >
        );
      },
    },
    {
      title: '券商名称',
      render: (text, record) => {
        return `${record.brokerName}`;
      },
    },
    {
      // width: 120,
      title: '操作',
      render: (text, record) => {
        return (
          <div className='common-list-table-operation'>
            <span onClick={() => self.goToEditor(record)}>编辑</span>
            <span className='common-list-table-operation-spliter'></span>
            <span onClick={() => self.deleteRecord(record.shoeSaleId)}>授权</span>
            <span className='common-list-table-operation-spliter'></span>
            <span onClick={() => self.deleteRecord(record.shoeSaleId)}>登录</span>
            <span className='common-list-table-operation-spliter'></span>
            <span onClick={() => self.deleteRecord(record.shoeSaleId)}>删除</span>
          </div>
        );
      },
    }
  ];

  const pagination = {
    ...self.props.common.paginationConfig,
    total: self.props.broker.brokerListMeta.total,
    current: self.state.currentPage,
    onChange: (current, pageSize) => {
    },
    onShowSizeChange: (current, pageSize) => {
      // @todo 调用获取表接口
      self.resetPagination(pageSize, current);
    },
  };

  return (
    {
      // 是否显示增加按钮
      addBtn: {
        title: () => (
          <Button type='primary' onClick={() => self.goToEditor({})}><Icon type="plus" /> 添加</Button>
        ),
      },
      searcher: {
        batchControl: {
          placeholder: '请选择',
          showBatchControl: !utils.isEmpty(self.state.selectedRowKeys),
          options: [{
            title: '删除',
            value: 'delete',
          }],
          onBatch: (value) => {
            self.onBatch(value);
          },
        },
        widgets: [
          {
            type: 'SelectInput',
            label: '券商',
            placeholder: '请输入券商 ID 或券商名称',
            options: [{
              title: '券商 ID',
              value: 'brokerId',
            }, {
              title: '券商名称',
              value: 'brokerName',
            }],
            inputValue: self.state.brokerValue,
            selectValue: self.state.brokerField,
            onSelectChange(value) {
              self.setBrokerField(value);
            },
            onInputChange(evt) {
              self.setBrokerValue(evt.target.value);
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
        rowKey: 'id',
        rowSelection,
        columns,
        dataSource: self.props.broker.brokerList,
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
            payload.sort = `${sorter.order === 'descend' ? 'desc' : 'asc'}`;
          } else {
            delete payload.orderBy;
            delete payload.sort;
          }

          self.setState({
            filter: {
              ...self.state.filter,
              ...payload,
            },
            currentPage: pagination.current,
          }, () => {
            self.getDataList(self.state.filter);
          });
        },
      },
    }
  );
};

export default config;