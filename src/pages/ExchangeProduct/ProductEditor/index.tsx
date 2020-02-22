import * as React from 'react';
import { BaseReact } from 'components/BaseReact';

import {
  Form,
  Input,
  Select,
  Button,
  Modal,
  Radio,
  InputNumber,
} from 'antd';
import './index.scss';
import Validator from 'utils/validator';
import { inject, observer } from 'mobx-react';
import utils from 'utils';

const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;
const TextArea = Input.TextArea;
const radioStyle = { display: 'block', marginBottom: 12, };

const getFormItemLayout = (label, wrapper, offset?) => ({
  labelCol: { span: label, offset, },
  wrapperCol: { span: wrapper, },
});

export interface IProductEditorProps {

}

export interface IProductEditorState {
}

// @ts-ignore
@Form.create()
@inject('common', 'exchange')
@observer
export default class ProductEditor extends BaseReact<IProductEditorProps, IProductEditorState> {
  state = {
    mode: 'add',
    typeOptions: [],
    marketOptions: [],
  }

  async componentDidMount() {
    this.init();
    this.getGenreOptions();
    this.getMarketOptions();
  }

  componentWillUnmount() {
    this.props.exchange.setCurrentProduct({}, true, false);
  }

  init = async () => {
    const search = this.$qs.parse(this.props.location.search);

    this.setState({
      mode: search.id == 0 ? 'add' : 'edit',
    }, async () => {
      const currentProduct = utils.getLStorage('currentExchangeProduct');

      if (currentProduct) {
        confirm({
          title: '行情产品恢复操作',
          content: '检测到您存在未提交的行情产品记录，请问是否从上次编辑中恢复状态？',
          onOk: () => {
            this.props.exchange.setCurrentProduct(currentProduct);
          },
          onCancel: () => {
            this.init();
            utils.rmLStorage('currentExchangeProduct');
          },
        });
      } else {
        if (this.state.mode === 'edit') {
          // await this.$store.exchange.getCurrentFoodCard({
          //   params: {
          //     id: search.id,
          //   },
          // });
        } else {
          this.props.exchange.setCurrentProduct({}, true, false);
        }
      }
    });
  }

  getGenreOptions = async () => {
    const res = await this.$api.exchange.getGenreList({ offset: 0, limit: 200, });
    this.setState({
      marketOptions: res.data.results,
      marketMeta: {
        total: res.count,
      },
    });
  }

  getMarketOptions = async () => {
    const res = await this.$api.market.getProductList({ offset: 0, limit: 200, });
    this.setState({
      marketOptions: res.data.results,
      marketMeta: {
        total: res.count,
      },
    });
  }

  renderEditor = () => {
    const { getFieldDecorator, } = this.props.form;
    const { setCurrentProduct, currentShowProduct, } = this.props.exchange;
    const {
      typeOptions,
      marketOptions} = this.state;

    return (
      <Form className='editor-form'>
        <FormItem>
          <h2 className='editor-form-title form-title'>基本配置</h2>
        </FormItem>

        <FormItem label='产品名称' {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('name', {
            initialValue: currentShowProduct && currentShowProduct.name,
          })(<Input placeholder="请输入产品名称" onChange={evt => {
            setCurrentProduct({
              name: evt.target.value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
          {/* <span style={{ color: 'rgb(153, 153, 153)', fontSize: 12, marginLeft: 8, }}>*</span> */}
        </FormItem>
        <FormItem
          label='行情产品'
          className='push-type-select'
          {...getFormItemLayout(3, 6)}
          required
        >
          {
            getFieldDecorator('product_id', {
              initialValue: currentShowProduct && currentShowProduct.product_id,
            })(
              <Select
                // @ts-ignore
                getPopupContainer={() => document.getElementsByClassName('push-type-select')[0]}
                placeholder='请选择行情产品'
                onChange={(value, elem: any) => {
                  setCurrentProduct({
                    product_id: value,
                  }, false);
                }}
                onFocus={async () => {

                }}
              >
                {
                  marketOptions.map(item => (
                    // @ts-ignore
                    <Option key={item.id.toString()}>
                      {item.name}
                    </Option>
                  ))
                }
              </Select>
            )
          }
        </FormItem>

        <FormItem label='小位数' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('decimals_place', {
            initialValue: currentShowProduct && currentShowProduct.decimals_place,
          })(<InputNumber min={0} type='number' placeholder="请输入小位数" onChange={value => {
            setCurrentProduct({
              decimals_place: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
          {/* <span style={{ color: 'rgb(153, 153, 153)', fontSize: 12, marginLeft: 8, }}>*</span> */}
        </FormItem>
        <FormItem label='描述' {...getFormItemLayout(3, 8)}>
          {getFieldDecorator('description', {
            initialValue: currentShowProduct && currentShowProduct.description,
            rules: [
            ],
          })(<TextArea placeholder='请输入产品描述' rows={6} onChange={evt => {
            setCurrentProduct({
              description: evt.target.value,
            }, false);
          }} />)}
        </FormItem>
        <FormItem
          label='交易品种类型'
          className='push-type-select'
          {...getFormItemLayout(3, 6)}
          required
        >
          {
            getFieldDecorator('type', {
              initialValue: currentShowProduct && currentShowProduct.type,
            })(
              <Select
                // @ts-ignore
                getPopupContainer={() => document.getElementsByClassName('push-type-select')[0]}
                placeholder='请选择交易品种类型'
                onChange={(value, elem: any) => {
                  setCurrentProduct({
                    type: value,
                  }, false);
                }}
                onFocus={async () => {

                }}
              >
                {
                  typeOptions.map(item => (
                    // @ts-ignore
                    <Option key={item.id.toString()}>
                      {item.name}
                    </Option>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem
          label='成交模式'
          className='push-type-select'
          {...getFormItemLayout(3, 6)}
          required
        >
          {
            getFieldDecorator('profit_currency', {
              initialValue: currentShowProduct && currentShowProduct.profit_currency,
            })(
              <Select
                // @ts-ignore
                getPopupContainer={() => document.getElementsByClassName('push-type-select')[0]}
                placeholder='请选择成交模式'
                onChange={(value, elem: any) => {
                  setCurrentProduct({
                    profit_currency: value,
                  }, false);
                }}
                onFocus={async () => {

                }}
              >
                {
                  marketOptions.map(item => (
                    // @ts-ignore
                    <Option key={item.id.toString()}>
                      {item.name}
                    </Option>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem
          label='背景颜色'
          className='push-type-select'
          {...getFormItemLayout(3, 6)}
          required
        >
          {
            getFieldDecorator('background', {
              initialValue: currentShowProduct && currentShowProduct.background,
            })(
              <Select
                // @ts-ignore
                getPopupContainer={() => document.getElementsByClassName('push-type-select')[0]}
                placeholder='请选择背景颜色'
                onChange={(value, elem: any) => {
                  setCurrentProduct({
                    background: value,
                  }, false);
                }}
                onFocus={async () => {

                }}
              >
                {
                  marketOptions.map(item => (
                    // @ts-ignore
                    <Option key={item.id.toString()}>
                      {item.name}
                    </Option>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem
          label='获利货币'
          className='push-type-select'
          {...getFormItemLayout(3, 6)}
          required
        >
          {
            getFieldDecorator('profit_currency', {
              initialValue: currentShowProduct && currentShowProduct.profit_currency,
            })(
              <Select
                // @ts-ignore
                getPopupContainer={() => document.getElementsByClassName('push-type-select')[0]}
                placeholder='请选择获利货币'
                onChange={(value, elem: any) => {
                  setCurrentProduct({
                    profit_currency: value,
                  }, false);
                }}
                onFocus={async () => {

                }}
              >
                {
                  marketOptions.map(item => (
                    // @ts-ignore
                    <Option key={item.id.toString()}>
                      {item.name}
                    </Option>
                  ))
                }
              </Select>
            )
          }
        </FormItem>

        <FormItem
          label='预付款货币'
          className='push-type-select'
          {...getFormItemLayout(3, 6)}
          required
        >
          {
            getFieldDecorator('margin_currency', {
              initialValue: currentShowProduct && currentShowProduct.margin_currency,
            })(
              <Select
                // @ts-ignore
                getPopupContainer={() => document.getElementsByClassName('push-type-select')[0]}
                placeholder='请选择预付款货币'
                onChange={(value, elem: any) => {
                  setCurrentProduct({
                    margin_currency: value,
                  }, false);
                }}
                onFocus={async () => {

                }}
              >
                {
                  marketOptions.map(item => (
                    // @ts-ignore
                    <Option key={item.id.toString()}>
                      {item.name}
                    </Option>
                  ))
                }
              </Select>
            )
          }
        </FormItem>

        <FormItem label='最大交易量' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('max_trading_volume', {
            initialValue: currentShowProduct && currentShowProduct.max_trading_volume,
          })(<InputNumber min={0} type='number' placeholder="请输入最大交易量" onChange={value => {
            setCurrentProduct({
              max_trading_volume: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>
        <FormItem label='最小交易量' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('min_trading_volume', {
            initialValue: currentShowProduct && currentShowProduct.min_trading_volume,
          })(<InputNumber min={0} type='number' placeholder="请输入最小交易量" onChange={value => {
            setCurrentProduct({
              min_trading_volume: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>
        <FormItem
          label='挂单模式
          '
          className='push-type-select'
          {...getFormItemLayout(3, 6)}
          required
        >
          {
            getFieldDecorator('orders_mode', {
              initialValue: currentShowProduct && currentShowProduct.orders_mode,
            })(
              <Select
                // @ts-ignore
                getPopupContainer={() => document.getElementsByClassName('push-type-select')[0]}
                placeholder='请选择挂单模式'
                onChange={(value, elem: any) => {
                  setCurrentProduct({
                    orders_mode: value,
                  }, false);
                }}
                onFocus={async () => {

                }}
              >
                {
                  marketOptions.map(item => (
                    // @ts-ignore
                    <Option key={item.id.toString()}>
                      {item.name}
                    </Option>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem label='点差' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('spread', {
            initialValue: currentShowProduct && currentShowProduct.spread,
          })(<InputNumber min={0} type='number' placeholder="请输入点差" onChange={value => {
            setCurrentProduct({
              spread: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>
        <FormItem label='止盈止损位' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('limit_stop_level', {
            initialValue: currentShowProduct && currentShowProduct.limit_stop_level,
          })(<InputNumber min={0} type='number' placeholder="请输入点差" onChange={value => {
            setCurrentProduct({
              limit_stop_level: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>

        <FormItem label='交易量步长' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('volume_step', {
            initialValue: currentShowProduct && currentShowProduct.volume_step,
          })(<InputNumber min={0} type='number' placeholder="请输入交易量步长" onChange={value => {
            setCurrentProduct({
              volume_step: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>
        <FormItem label='价格变动最小单位
' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('volume_step', {
            initialValue: currentShowProduct && currentShowProduct.min_unit_of_price_change,
          })(<InputNumber min={0} type='number' placeholder="请输入价格变动最小单位
          " onChange={value => {
            setCurrentProduct({
              min_unit_of_price_change: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>
        <FormItem>
          <h2 className='editor-form-title form-title'>保证金计算</h2>
        </FormItem>

        <FormItem label='合约大小' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('contract_size', {
            initialValue: currentShowProduct && currentShowProduct.contract_size,
          })(<InputNumber min={0} type='number' placeholder="请输入合约大小" onChange={value => {
            setCurrentProduct({
              contract_size: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>
        {/* 保证金计算 */}
        <FormItem>
          <h2 className='editor-form-title form-title'>利润设定</h2>
        </FormItem>
        <FormItem label='买入库存费' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('purchase_fee', {
            initialValue: currentShowProduct && currentShowProduct.purchase_fee,
          })(<InputNumber min={0} type='number' placeholder="请输入买入库存费
          " onChange={value => {
            setCurrentProduct({
              purchase_fee: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>
        <FormItem label='卖出库存费
' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('selling_fee', {
            initialValue: currentShowProduct && currentShowProduct.selling_fee,
          })(<InputNumber min={0} type='number' placeholder="请输入卖出库存费" onChange={value => {
            setCurrentProduct({
              selling_fee: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>
        <FormItem label='交易手续费（多）' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('hands_fee_for_bought', {
            initialValue: currentShowProduct && currentShowProduct.hands_fee_for_bought,
          })(<InputNumber min={0} type='number' placeholder="交易手续费（多）" onChange={value => {
            setCurrentProduct({
              hands_fee_for_bought: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
        </FormItem>
        <FormItem label='交易手续费（空）' {...getFormItemLayout(3, 12)}>
          {getFieldDecorator('hands_fee_for_sale', {
            initialValue: currentShowProduct && currentShowProduct.hands_fee_for_sale,
          })(<InputNumber min={0} type='number' placeholder="请输入交易手续费（空）" onChange={value => {
            setCurrentProduct({
              hands_fee_for_sale: value,
            }, false);
          }} style={{ display: 'inline-block', width: 200, }} />)}
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
      this.props.exchange.setCurrentProduct({});
      utils.rmLStorage('currentExchangeProduct');
    }, 300);
  }

  handleSubmit = async (evt) => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { currentProduct, } = this.props.exchange;
        const { mode, } = this.state;
        let payload: any = {
          name: currentProduct.name,
          type: currentProduct.type,
          product_id: currentProduct.product_id,
          decimals_place: currentProduct.decimals_place,
          contract_size: currentProduct.contract_size,
          spread: currentProduct.spread,
          limit_stop_level: currentProduct.limit_stop_level,
          margin_currency: currentProduct.margin_currency,
          profit_currency: currentProduct.profit_currency,
          max_trading_volume: currentProduct.max_trading_volume,
          min_trading_volume: currentProduct.min_trading_volume,
          volume_step: currentProduct.volume_step,
          min_unit_of_price_change: currentProduct.min_unit_of_price_change,
          transaction_mode: currentProduct.transaction_mode,
          purchase_fee: currentProduct.purchase_fee,
          selling_fee: currentProduct.selling_fee,
          description: currentProduct.description,
          background: currentProduct.background,
          orders_mode: currentProduct.orders_mode,
          hands_fee_for_bought: currentProduct.hands_fee_for_bought,
          hands_fee_for_sale: currentProduct.hands_fee_for_sale,
        };

        // console.log('payload', payload);
        const errMsg = this.getValidation(payload);
        if (errMsg) return this.$msg.warn(errMsg);

        if (mode == 'add') {
          const res = await this.$api.exchange.createProduct(payload);

          if (res.status == 201) {
            this.$msg.success('交易品种创建成功');
            setTimeout(() => {
              this.goBack();
              this.$store.exchange.getProductList({
                offset: 0,
                limit: 10,
              });
            }, 1500);
          }
        } else {
          const res = await this.$api.exchange.updateProduct(currentProduct.id, payload);

          if (res.status == 200) {
            this.$msg.success('交易品种更新成功');
            setTimeout(() => {
              this.goBack();
              this.$store.exchange.getProductList({
                offset: 0,
                limit: 10,
              });
            }, 1500);
          }
        }
      }
    });
  }

  getValidation = (payload: any) => {
    const validator = new Validator();

    validator.add(payload.name, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请输入交易品种名字',
      }
    ]);

    validator.add(payload.type, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请选择交易品种类型',
      }
    ]);

    validator.add(payload.product_id, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请选择行情产品',
      }
    ]);

    validator.add(payload.margin_currency, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请选择预售货币款',
      }
    ]);

    validator.add(payload.profit_currency, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请选择获利货币',
      }
    ]);

    validator.add(payload.transaction_mode, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请选择成交模式',
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