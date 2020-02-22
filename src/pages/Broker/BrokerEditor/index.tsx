import * as React from 'react';
import { BaseReact } from 'components/BaseReact';

import {
  Form,
  Input,
  Button,
  Modal,
  Upload,
  Icon
} from 'antd';
import './index.scss';
import Validator from 'utils/validator';
import { inject, observer } from 'mobx-react';
import utils from 'utils';
import { RcFile } from 'antd/lib/upload';

const FormItem = Form.Item;
const confirm = Modal.confirm;

const getFormItemLayout = (label, wrapper, offset?) => ({
  labelCol: { span: label, offset, },
  wrapperCol: { span: wrapper, },
});

export interface IBrokerEditorProps {

}

export interface IBrokerEditorState {
}

// @ts-ignore
@Form.create()
@inject('common', 'broker')
@observer
export default class BrokerEditor extends BaseReact<IBrokerEditorProps, IBrokerEditorState> {
  state = {
    mode: 'add',
    brokerOptions: [],
  }

  async componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.props.broker.setCurrentBroker({}, true, false);
  }

  init = async () => {
    const search = this.$qs.parse(this.props.location.search);

    if (search.id !== 0) {
      this.props.broker.setCurrentBroker({
        id: search.id,
      }, false);
    }

    this.setState({
      mode: search.id == 0 ? 'add' : 'edit',
    }, async () => {
      const currentBroker = utils.getLStorage('currentBroker');

      if (currentBroker) {
        confirm({
          title: '券商恢复操作',
          content: '检测到您存在未提交的券商记录，请问是否从上次编辑中恢复状态？',
          onOk: () => {
            this.props.broker.setCurrentBroker(currentBroker);
          },
          onCancel: () => {
            this.init();
            utils.rmLStorage('currentBroker');
          },
        });
      } else {
        if (this.state.mode === 'edit') {
        } else {
          this.props.broker.setCurrentBroker({}, true, false);
        }
      }
    });
  }

  renderEditor = () => {
    const { getFieldDecorator, } = this.props.form;
    const { setCurrentBroker, currentShowBroker, } = this.props.broker;

    return (
      <Form className='editor-form'>
        <FormItem label="券商名称" {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('name', {
            initialValue: currentShowBroker && currentShowBroker.name,
          })(
            <Input placeholder="请输入券商名称" onChange={evt => {
              setCurrentBroker({
                name: evt.target.value,
              }, false);
            }} style={{ display: 'inline-block', width: 200, }} />
          )}
        </FormItem>
        <FormItem label="域名" {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('domain', {
            initialValue: currentShowBroker && currentShowBroker.pinyin,
          })(
            <Input placeholder="请输入域名" onChange={evt => {
              setCurrentBroker({
                domain: evt.target.value,
              }, false);
            }} style={{ display: 'inline-block', width: 200, }} />
          )}
        </FormItem>
        <FormItem label="后台角标" {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('background_corner')(
            <Upload
              accept="image/*"
              listType="picture-card"
              showUploadList={false}
              beforeUpload={this.beforeBackgroundCornerUpload}
            >
              {
                currentShowBroker && currentShowBroker.background_corner
                  ? (
                    <div
                      className="upload-image-preview"
                      style={{ backgroundImage: `url(${currentShowBroker.background_corner})`, }}
                    />
                  )
                  : <div className="upload-image-preview"><Icon type="plug" /></div>
              }
            </Upload>
          )}
        </FormItem>
        <FormItem label="logo" {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('logo')(
            <Upload
              accept="image/*"
              listType="picture-card"
              showUploadList={false}
              beforeUpload={this.beforeLogoUpload}
            >
              {
                currentShowBroker && currentShowBroker.logo
                  ? (
                    <div
                      className="upload-image-preview"
                      style={{ backgroundImage: `url(${currentShowBroker.logo})`, }}
                    />
                  )
                  : <div className="upload-image-preview"><Icon type="plus" /></div>
              }
            </Upload>
          )}
        </FormItem>
        <FormItem className='editor-form-btns'>
          <Button type='primary' onClick={this.handleSubmit}>
            {this.state.mode === 'edit' ? '确认修改' : '保存'}
          </Button>
          <Button onClick={this.goBack}>取消</Button>
        </FormItem>
      </Form>
    );
  }

  beforeBackgroundCornerUpload = (file: RcFile) => {
    this.uploadFile(file, 'background_corner');
    return false;
  }

  beforeLogoUpload = (file: RcFile) => {
    this.uploadFile(file, 'logo');
    return false;
  }

  uploadFile = async (file: RcFile, name: string) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await this.$api.common.uploadFile(formData);
    this.props.broker.setCurrentBroker({
      [name]: res.data.file_path,
    }, false);
  }

  goBack = () => {
    setTimeout(() => {
      this.props.history.goBack();
      this.props.broker.setCurrentBroker({});
      utils.rmLStorage('currentBroker');
    }, 300);
  }

  handleSubmit = async (evt) => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { currentBroker, } = this.props.broker;

        const { mode, } = this.state;
        let payload: any = {
          name: currentBroker.name,
          domain: currentBroker.domain,
          background_corner: currentBroker.background_corner,
          logo: currentBroker.logo,
        };

        const errMsg = this.getValidation(payload);
        if (errMsg) return this.$msg.warn(errMsg);

        if (mode == 'add') {
          this.$api.broker.createBroker(payload)
            .then(res => {
              this.$msg.success('券商创建成功');
              setTimeout(() => {
                this.goBack();
                this.$store.broker.getBrokerList({
                  offset: 0,
                  limit: 10,
                });
              }, 1500);
            });
        } else {
          this.$api.broker.updateBroker(currentBroker.id, payload)
            .then(res => {
              this.$msg.success('券商更新成功');
              setTimeout(() => {
                this.goBack();
                this.props.broker.getBrokerList({
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

    validator.add(payload.name, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请输入券商名称',
      }
    ]);

    validator.add(payload.domain, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请输入域名',
      }
    ]);

    validator.add(payload.background_corner, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请上传后台角标',
      }
    ]);

    validator.add(payload.logo, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请上传logo',
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