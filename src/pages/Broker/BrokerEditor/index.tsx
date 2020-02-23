import Validator from 'utils/validator';
import utils from 'utils';
import * as React from 'react';
import { BaseReact } from 'components/BaseReact';
import { Form, Input, Button, Modal, Upload, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import { RcFile } from 'antd/lib/upload';

const FormItem = Form.Item;
const confirm = Modal.confirm;

const getFormItemLayout = (label, wrapper, offset?) => ({
  labelCol: { span: label, offset, },
  wrapperCol: { span: wrapper, },
});

// @ts-ignore
@Form.create()
@inject('common', 'broker')
@observer
export default class BrokerEditor extends BaseReact<{}> {
  state = {
    mode: 'add',
    brokerOptions: [],
    brokerDetail: null,
  }

  async componentDidMount() {
    const { location, } = this.props;
    const search = this.$qs.parse(location.search);
    this.setState({
      mode: search.id == 0 ? 'add' : 'edit',
    });

    if (search.id) {
      const res = await this.$api.broker.getBrokerDetail(search.id);
      this.setState({
        brokerDetail: res.data,
      });
    }
  }

  renderEditor = () => {
    const { getFieldDecorator, } = this.props.form;
    const { brokerDetail, } = this.state;

    return (
      <Form className='editor-form'>
        <FormItem label="券商名称" {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('name', {
            initialValue: brokerDetail && brokerDetail.name,
          })(
            <Input placeholder="请输入券商名称" onChange={evt => {
              this.setCurrentBroker({
                name: evt.target.value,
              });
            }} style={{ display: 'inline-block', width: 200, }} />
          )}
        </FormItem>
        <FormItem label="域名" {...getFormItemLayout(3, 12)} required extra="示例：http://www.baidu.com">
          {getFieldDecorator('domain', {
            initialValue: brokerDetail && brokerDetail.domain,
          })(
            <Input placeholder="请输入域名" onChange={evt => {
              this.setCurrentBroker({
                domain: evt.target.value,
              });
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
                brokerDetail && brokerDetail.background_corner
                  ? (
                    <div
                      className="upload-image-preview"
                      style={{ backgroundImage: `url(${brokerDetail.background_corner})`, }}
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
                brokerDetail && brokerDetail.logo
                  ? (
                    <div
                      className="upload-image-preview"
                      style={{ backgroundImage: `url(${brokerDetail.logo})`, }}
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

  setCurrentBroker = (field: any) => {
    this.setState({
      brokerDetail: { ...this.state.brokerDetail, ...field, },
    });
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
    this.setCurrentBroker({
      [name]: res.data.file_path,
    });
  }

  goBack = () => {
    this.props.history.goBack();
  }

  handleSubmit = async (evt) => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { brokerDetail, } = this.state;

        const { mode, } = this.state;
        let payload: any = {
          name: brokerDetail.name,
          domain: brokerDetail.domain,
          background_corner: brokerDetail.background_corner,
          logo: brokerDetail.logo,
        };

        const errMsg = this.getValidation(payload);
        if (errMsg) return this.$msg.warn(errMsg);

        if (mode == 'add') {
          this.$api.broker.createBroker(payload)
            .then(res => {
              this.$msg.success('券商创建成功');
              this.goBack();
              this.$store.broker.getBrokerList({
                offset: 0,
                limit: 10,
              });
            });
        } else {
          this.$api.broker.updateBroker(brokerDetail.id, payload)
            .then(res => {
              this.$msg.success('券商更新成功');
              this.goBack();
              this.props.broker.getBrokerList({
                offset: 0,
                limit: 10,
              });
            });
        }
      }
    });
  }

  getValidation = (payload: any) => {
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
      },
      {
        strategy: 'isUrl',
        errMsg: '不合法的域名格式',
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