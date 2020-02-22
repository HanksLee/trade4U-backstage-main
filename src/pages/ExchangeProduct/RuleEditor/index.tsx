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
    scopeOptions: [],
  }

  async componentDidMount() {
    this.props.onRef(this);
    this.initData();
  }

  initData = async () => {
    const res = await this.$api.exchange.getScopeOptions();

    this.setState({
      scopeOptions: res.data.data,
    });
  }

  render() {
    const { scopeOptions, } = this.state;
    const { currentRule, currentShowRule, setCurrentRule, } = this.props.exchange;
    const { getFieldDecorator, } = this.props.form;

    return (
      <div className='editor talent-editor'>
        <Form className='editor-form'>
          <FormItem label='规则名称' {...getFormItemLayout(6, 16)} required>
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
            {...getFormItemLayout(6, 6)}
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

                  }}
                >
                  {
                    scopeOptions.map(item => (
                      // @ts-ignore
                      <Option key={item.field}>
                        {item.translation}
                      </Option>
                    ))
                  }
                </Select>
              )
            }
          </FormItem>
          <FormItem label='规则函数' {...getFormItemLayout(6, 16)} required>
            {getFieldDecorator('func_name', {
              initialValue: currentRule.func_name,
              rules: [
              ],
            })(<Input placeholder='请输入规则函数' onChange={evt => {
              setCurrentRule({
                func_name: evt.target.value,
              }, false);
            }} />)}
          </FormItem>
        </Form>
      </div>
    );
  }
}