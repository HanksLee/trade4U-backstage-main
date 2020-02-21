import * as React from "react";
import { BaseReact } from "components/BaseReact";
import { Form, Input, Modal } from "antd";
import { MenuType } from "./index";

interface IEditMenuModalProps {
  currentMenu: MenuType | null;
  onOk: () => {};
  onCancel: () => {};
}

class EditMenuModal extends BaseReact<IEditMenuModalProps> {
  handleSubmit = () => {
    this.props.onOk();
  };

  render() {
    const { currentMenu, onCancel, } = this.props;

    return (
      <Modal
        visible={true}
        title={currentMenu ? "新增菜单" : "编辑菜单"}
        onOk={this.handleSubmit}
        onCancel={onCancel}
      >
        <Form>
          <Form.Item>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(EditMenuModal);
