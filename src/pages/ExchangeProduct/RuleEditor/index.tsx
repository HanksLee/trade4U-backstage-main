import * as React from 'react';
import { BaseReact } from 'components/BaseReact';
import {
  Form,
  Input,
  Select
} from 'antd';
import './index.scss';
import {
  inject
} from 'mobx-react';

const FormItem = Form.Item;
const Option = Select.Option;

const getFormItemLayout = (label, wrapper, offset?) => ({
  labelCol: { span: label, offset, },
  wrapperCol: { span: wrapper, },
});

export interface IGenreEditorProps {

}

export interface IGenreEditorState {

}

// @ts-ignore
@Form.create()
@inject('common', 'exchange')
export default class GenreEditor extends BaseReact<IGenreEditorProps, IGenreEditorState> {
  state = {
    scopeOptions: [
      {
        id: 1,
        name: '保证金计算',
      },
      {
        id: 2,
        name: '盈亏计算',
      },
      {
        id: 3,
        name: '预付款计算',
      }
    ],
  }

  async componentDidMount() {
    this.props.onRef(this);
  }

  render() {
    const { scopeOptions, } = this.state;
    const { currentRule, currentShowRule, setCurrentRule, } = this.props.exchange;
    const { getFieldDecorator, } = this.props.form;

    return (
      <div className='editor talent-editor'>
        <Form className='editor-form'>
          <FormItem label='规则名称' {...getFormItemLayout(8, 16)}>
            {getFieldDecorator('name', {
              initialValue: currentRule.name,
              rules: [
              ],
            })(<Input placeholder='请输入规则名称' onChange={evt => {
              setCurrentRule({
                name: evt.target.value,
              }, false);
            }} />)}
          </FormItem>
          <FormItem
            label='交易市场'
            className='push-type-select'
            {...getFormItemLayout(2, 6)}
            required
          >
            {
              getFieldDecorator('scope', {
                initialValue: currentShowRule && currentShowRule.scope,
              })(
                <Select
                  // @ts-ignore
                  getPopupContainer={() => document.getElementsByClassName('push-type-select')[0]}
                  placeholder='请选择作用域'
                  onChange={(value, elem: any) => {
                    setCurrentRule({
                      scope: value,
                    }, false);
                  }}
                  onFocus={async () => {
                    const res = await this.$api.exchange.getScopeOptions({ offset: 0, limit: 200, });

                    this.setState({
                      scopeOptions: res.data.list,
                      scopeOptionsMeta: {
                        total: res.data.meta.total,
                        limit: res.data.meta.limit,
                        offset: res.data.meta.offset,
                      },
                    });
                  }}
                >
                  {
                    scopeOptions.map(item => (
                      // @ts-ignore
                      <Option key={item.id}>
                        {item.name}
                      </Option>
                    ))
                  }
                </Select>
              )
            }
          </FormItem>
          <FormItem label='规则函数' {...getFormItemLayout(6, 16)}>
            {getFieldDecorator('function', {
              initialValue: currentRule.function,
              rules: [
              ],
            })(<Input placeholder='请输入规则函数' onChange={evt => {
              setCurrentRule({
                function: evt.target.value,
              }, false);
            }} />)}
          </FormItem>
        </Form>
      </div>
    );
  }
}