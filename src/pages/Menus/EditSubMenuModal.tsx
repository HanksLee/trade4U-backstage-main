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

interface IEditSubMenuModalProps extends FormComponentProps {
  mode: string;
  menu: MenuType | null;
  onOk: () => void;
  onCancel: () => void;
}

class EditSubMenuModal extends BaseReact<IEditSubMenuModalProps> {
  componentDidMount() {
    const { form, mode, menu, } = this.props;
    if (mode === 'edit') {
      form.setFieldsValue({
        name: menu.name,
        path: menu.path,
      });
    }
  }
  
  handleSubmit = () => {
    const { form, menu, mode, } = this.props;
    form.validateFields(async (err, values) => {
      if (!err) {
        if (mode === 'add') {
          await this.$api.menus.createMenu({ ...values, parent: menu.id, });
          this.$msg.success('创建成功');
        } else {
          await this.$api.menus.updateMenu(menu.id, values);
          this.$msg.success('编辑成功');
        }
        this.props.onOk();
      }
    });
  };

  render() {
    const { onCancel, form, mode, } = this.props;
    const { getFieldDecorator, } = form;

    return (
      <Modal
        visible={true}
        title={mode === 'add' ? "新增子菜单" : "编辑子菜单"}
        onOk={this.handleSubmit}
        onCancel={onCancel}
      >
        <Form>
          <FormItem label='子菜单名称' {...getFormItemLayout(5, 19)} required>
            {getFieldDecorator('name', {
              rules: [
                { required: true, message: '请填写子菜单名称', }
              ],
            })(<Input placeholder="请输入子菜单名称" style={{ display: 'inline-block', width: 200, }} />
            )}
          </FormItem>
          <FormItem label='子菜单路径' {...getFormItemLayout(5, 19)} required>
            {getFieldDecorator('path', {
              rules: [
                { required: true, message: '请填写子菜单路径', }
              ],
            })(<Input placeholder="请输入子菜单路径" style={{ display: 'inline-block', width: 200, }} />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create<IEditSubMenuModalProps>()(EditSubMenuModal);
