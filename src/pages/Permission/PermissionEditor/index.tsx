
import utils from 'utils';
import Validator from 'utils/validator';
import * as React from 'react';
import { BaseReact } from 'components/BaseReact';
import { Form, Input, Button, Modal, Cascader, Checkbox } from 'antd';
import { inject, observer } from 'mobx-react';
import { MenuType } from 'pages/Menus';

const FormItem = Form.Item;
const confirm = Modal.confirm;

const getFormItemLayout = (label, wrapper, offset?) => ({
  labelCol: { span: label, offset, },
  wrapperCol: { span: wrapper, },
});

export interface IPermissionEditorState {
  mode: string;
  menuOptions: MenuType [];
}

// @ts-ignore
@Form.create()
@inject('common', 'permission')
@observer
export default class PermissionEditor extends BaseReact<{}, IPermissionEditorState> {
  state = {
    mode: 'add',
    menuOptions: [],
  }

  async componentDidMount() {
    this.init();
    const res = await this.$api.menus.getMenuList();
    this.setState({
      menuOptions: res.data,
    });
  }

  componentWillUnmount() {
    this.props.permission.setCurrentPermission({}, true, false);
  }

  init = async () => {
    const { permission, location, } = this.props;
    const search = this.$qs.parse(location.search);

    this.setState({
      mode: search.id == 0 ? 'add' : 'edit',
    }, async () => {
      const currentPermission = utils.getLStorage('currentPermission');

      if (currentPermission) {
        confirm({
          title: '权限恢复操作',
          content: '检测到您存在未提交的权限记录，请问是否从上次编辑中恢复状态？',
          onOk: () => {
            permission.setCurrentPermission(currentPermission);
          },
          onCancel: () => {
            this.init();
            utils.rmLStorage('currentPermission');
          },
        });
      } else if (this.state.mode === 'add') {
        permission.setCurrentPermission({}, true, false);
      }
    });
  }

  renderEditor = () => {
    const { menuOptions, } = this.state;
    const { getFieldDecorator, } = this.props.form;
    const { setCurrentPermission, currentShowPermission, } = this.props.permission;

    return (
      <Form className='editor-form'>
        <FormItem label='所属菜单' {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('menuIds', {
            initialValue: currentShowPermission && [currentShowPermission.parent_menu, currentShowPermission.child_menu],
          })(
            <Cascader
              placeholder="请选择菜单"
              options={menuOptions}
              fieldNames={{ label: 'name', value: 'id', }}
              onChange={values => {
                setCurrentPermission({
                  parent_menu: values[0],
                  child_menu: values[1],
                }, false);
              }}
              style={{ display: 'inline-block', width: 300, }}
            />)}
        </FormItem>
        <FormItem label='权限名称' {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('name', {
            initialValue: currentShowPermission && currentShowPermission.name,
          })(
            <Input placeholder="请输入权限名称" onChange={evt => {
              setCurrentPermission({
                name: evt.target.value,
              }, false);
            }} style={{ display: 'inline-block', width: 200, }} />
          )}
        </FormItem>
        <FormItem label='code' {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('code', {
            initialValue: currentShowPermission && currentShowPermission.code,
          })(
            <Input placeholder="请输入code" onChange={evt => {
              setCurrentPermission({
                code: evt.target.value,
              }, false);
            }} style={{ display: 'inline-block', width: 200, }} />
          )}
        </FormItem>
        <FormItem label='是否默认' {...getFormItemLayout(3, 12)} required>
          {getFieldDecorator('is_default', {
            initialValue: !!(currentShowPermission && currentShowPermission.is_default),
            valuePropName: 'checked',
          })(
            <Checkbox onChange={evt => {
              setCurrentPermission({
                is_default: evt.target.checked ? 1 : 0,
              }, false);
            }} style={{ display: 'inline-block', width: 200, }} />
          )}
        </FormItem>
        <FormItem className='editor-form-btns'>
          <Button type='primary' onClick={this.handleSubmit}>
            {this.state.mode == 'edit' ? '确认修改' : '保存'}
          </Button>
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
      this.props.permission.setCurrentPermission({});
      utils.rmLStorage('currentPermission');
    }, 300);
  }

  handleSubmit = async (evt) => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { currentPermission, } = this.props.permission;

        const { mode, } = this.state;
        let payload: any = {
          name: currentPermission.name,
          code: currentPermission.code,
          parent_menu: currentPermission.parent_menu,
          child_menu: currentPermission.child_menu,
          is_default: currentPermission.is_default,
        };

        const errMsg = this.getValidation(payload);
        if (errMsg) return this.$msg.warn(errMsg);

        if (mode == 'add') {
          this.$api.permission.createPermission(payload)
            .then(res => {
              this.$msg.success('权限创建成功');
              setTimeout(() => {
                this.goBack();
                this.$store.permission.getPermissionList({
                  offset: 0,
                  limit: 10,
                });
              }, 1500);
            });
        } else {
          this.$api.permission.updatePermission(currentPermission.id, payload)
            .then(res => {
              this.$msg.success('权限更新成功');
              setTimeout(() => {
                this.goBack();
                this.props.permission.getPermissionList({
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
    const validator = new Validator();

    validator.add(payload.name, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请输入权限名称',
      }
    ]);

    validator.add(payload.code, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请输入code',
      }
    ]);

    validator.add(payload.parent_menu, [
      {
        strategy: 'isNonEmpty',
        errMsg: '请选择菜单',
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