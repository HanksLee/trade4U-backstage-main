import * as React from 'react';
import { BaseReact } from 'components/BaseReact';

import {
  Form,
  Input,
  Select,
  Button,
  Modal,
  Radio
} from 'antd';
import './index.scss';
import Validator from 'utils/validator';
import { inject, observer } from 'mobx-react';
import utils from 'utils';

const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;

const radioStyle = { display: 'block', marginBottom: 12, };

const getFormItemLayout = (label, wrapper, offset?) => ({
  labelCol: { span: label, offset, },
  wrapperCol: { span: wrapper, },
});

export interface IMarketEditorProps {

}

export interface IMarketEditorState {
}

// @ts-ignore
@Form.create()
@inject('common', 'market')
@observer
export default class AppPushEditor extends BaseReact<IMarketEditorProps, IMarketEditorState> {
  state = {
    mode: 'add',
    marketOptions: [],
  }

  async componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.props.market.setCurrentProduct({}, true, false);
  }

  init = async () => {
    const search = this.$qs.parse(this.props.location.search);

    this.setState({
      mode: search.id == 0 ? 'add' : 'edit',
    }, async () => {
      const currentProduct = utils.getLStorage('currentMarketProduct');

      if (currentProduct) {
        confirm({
          title: '行情产品恢复操作',
          content: '检测到您存在未提交的行情产品记录，请问是否从上次编辑中恢复状态？',
          onOk: () => {
            this.props.market.setCurrentProduct(currentProduct);
          },
          onCancel: () => {
            this.init();
            utils.rmLStorage('currentMarketProduct');
          },
        });
      } else {
        if (this.state.mode === 'edit') {
          await this.$store.market.getCurrentProduct( search.id);
        } else {
          this.props.market.setCurrentProduct({}, true, false);
        }
      }
    });
  }

  renderEditor = () => {
    const { getFieldDecorator, } = this.props.form;
    const { setCurrentProduct, currentShowProduct, marketList, } = this.props.market;
    const { marketOptions, } = this.state;

    return (
      <Form className='editor-form'>
        <FormItem
          label='交易市场'
          className='push-type-select'
          {...getFormItemLayout(2, 6)}
          required
        >
          {
            getFieldDecorator('market', {
              initialValue: currentShowProduct && currentShowProduct.market,
            })(
              <Select
                // @ts-ignore
                getPopupContainer={() => document.getElementsByClassName('push-type-select')[0]}
                placeholder='请选择交易'
                onChange={(value, elem: any) => {
                  setCurrentProduct({
                    market: value,
                  }, false);
                }}
                onFocus={async () => {
                  const res = await this.$api.market.getMarketList({ offset: 0, limit: 200, });

                  this.setState({
                    marketOptions: marketList,
                  });
                }}
              >
                {
                  marketOptions.map(item => (
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
        <FormItem label='产品名称' {...getFormItemLayout(2, 12)} required>
          {getFieldDecorator('name', {
            initialValue: currentShowProduct && currentShowProduct.name,
          })(<Input placeholder="请输入产品名称" onChange={evt => {
            setCurrentProduct({
              name: evt.target.value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
          {/* <span style={{ color: 'rgb(153, 153, 153)', fontSize: 12, marginLeft: 8, }}>*</span> */}
        </FormItem>
        <FormItem label='简拼' {...getFormItemLayout(2, 12)} required>
          {getFieldDecorator('jianpin', {
            initialValue: currentShowProduct && currentShowProduct.pinyin,
          })(<Input placeholder="请输入产品简拼" onChange={evt => {
            setCurrentProduct({
              pinyin: evt.target.value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
          {/* <span style={{ color: 'rgb(153, 153, 153)', fontSize: 12, marginLeft: 8, }}>*</span> */}
        </FormItem>
        <FormItem label='产品代码' {...getFormItemLayout(2, 12)} required>
          {getFieldDecorator('code', {
            initialValue: currentShowProduct && currentShowProduct.code,
          })(<Input placeholder="请输入产品编码" onChange={evt => {
            setCurrentProduct({
              code: evt.target.value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
          {/* <span style={{ color: 'rgb(153, 153, 153)', fontSize: 12, marginLeft: 8, }}>*</span> */}
        </FormItem>
        <FormItem label='是否上架' required {...getFormItemLayout(2, 6)} className='editor-upshelf'>
          {getFieldDecorator('status', {
            initialValue: currentShowProduct && currentShowProduct.status,
          })(
            <Radio.Group onChange={(evt) => {
              setCurrentProduct({
                status: evt.target.value,
              }, false);
            }}>
              <Radio style={radioStyle} value={1}>是</Radio>
              <Radio style={radioStyle} value={0}>否</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem className='editor-form-btns'>
          {
            <Button type='primary' onClick={this.handleSubmit}>{
              (this.state.mode == 'edit') ? '确认修改' : '保存'
            }</Button>
          }
          <Button onClick={this.goBack}>
            取消
          </Button>
        </FormItem>
      </Form>
    );
  }

  goBack = () => {
    setTimeout(() => {
      this.props.history.goBack();
      this.props.market.setCurrentProduct({});
      utils.rmLStorage('currentMarketProduct');
    }, 300);
  }

  handleSubmit = async (evt) => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { currentProduct, } = this.props.market;
        const { userInfo, } = this.props.common;

        const { mode, } = this.state;
        let payload: any = {
          market: currentProduct.market,
          name: currentProduct.name,
          pinyin: currentProduct.pinyin,
          code: currentProduct.code,
          status: currentProduct.status,
        };

        // console.log('payload', payload);
        const errMsg = this.getValidation(payload);
        if (errMsg) return this.$msg.warn(errMsg);

        if (mode == 'add') {
          this.$api.market.createProduct(payload)
            .then(res => {
              this.$msg.success('行情产品创建成功');
              setTimeout(() => {
                this.goBack();
                this.props.market.getProductList(this.props.market.filterMarket);
              }, 1500);
            });
        } else {
          // payload.id = currentProduct.id;

          this.$api.market.updateProduct(currentProduct.id, payload)
            .then(res => {
              this.$msg.success('行情产品更新成功');
              setTimeout(() => {
                this.goBack();
                this.props.market.getProductList({
                  offset: 0,
                  limit: 10,
                });
              }, 1500);
            });
        }
      }
    });
  }

  getValidation = (payload: any) => {
    // console.log('payload', payload);
    const validator = new Validator();

    validator.add(payload.market, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请选择交易市场',
      }
    ]);

    validator.add(payload.name, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请输入产品名称',
      }
      // {
      //   strategy: 'maxLength:10',
      //   errMsg: '图片配文字数不得超过 10 个字',
      // }
    ]);

    validator.add(payload.pinyin, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请输入简拼',
      }
    ]);

    validator.add(payload.code, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请输入产品编码',
      }
    ]);

    validator.add(payload.status, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请选择上架状态',
      }
    ]);

    let errMsg: any = validator.start();

    return errMsg;
  }

  render() {
    return (
      <div className='editor food-card-editor'>
        <section className='editor-content panel-block'>
          {this.renderEditor()}
        </section>
      </div>
    );
  }
}