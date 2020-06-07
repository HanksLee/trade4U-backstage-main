import * as React from "react";
import { BaseReact } from "components/BaseReact";
import { Form, Input, Modal } from "antd";
import { FormComponentProps } from 'antd/lib/form';
import { MenuType } from "./index";

const FormItem = Form.Item;

const getFormItemLayout = (label, wrapper, offset?) => ({
  labelCol: { span: label, offset, },
  wrapperCol: { span: wrapper, },
});

interface IEditMenuModalProps extends FormComponentProps {
  menu: MenuType | null;
  onOk: () => void;
  onCancel: () => void;
}

class EditMenuModal extends BaseReact<IEditMenuModalProps> {
  handleSubmit = () => {
    const { form, menu, } = this.props;
    form.validateFields(async (err, values) => {
      if (!err) {
        let newValues = values;

        if (!menu) {
          await this.$api.menus.createMenu(newValues);
          this.$msg.success('创建成功');
        } else {
          await this.$api.menus.updateMenu(menu.id, newValues);
          this.$msg.success('编辑成功');
        }
        this.props.onOk();
      }
    });
  };

  render() {
    const { menu, onCancel, form, } = this.props;
    const { getFieldDecorator, } = form;

    return (
      <Modal
        visible={true}
        title={menu ? '编辑菜单' : '添加菜单'}
        onOk={this.handleSubmit}
        onCancel={onCancel}
      >
        <Form>
          <FormItem label='菜单名称' {...getFormItemLayout(4, 20)} required>
            {getFieldDecorator('name', {
              initialValue: menu && menu.name,
              rules: [
                { required: true, message: '请填写菜单名称', }
              ],
            })(<Input placeholder="请输入菜单名称" style={{ display: 'inline-block', width: 200, }} />
            )}
          </FormItem>
          <FormItem label='菜单路径' {...getFormItemLayout(4, 20)} required>
            {getFieldDecorator('path', {
              initialValue: menu && menu.path,
              rules: [
                { required: true, message: '请填写菜单路径', }
              ],
            })(<Input placeholder="请输入菜单路径" style={{ display: 'inline-block', width: 200, }} />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create<IEditMenuModalProps>()(EditMenuModal);