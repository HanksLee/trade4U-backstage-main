import * as React from 'react';
import { BaseReact } from 'components/BaseReact';
import {
  Form,
  Input
} from 'antd';
import './index.scss';
import {
  inject
} from 'mobx-react';

const FormItem = Form.Item;
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
  }

  async componentDidMount() {
    this.props.onRef(this);
  }

  render() {
    const { currentGenre, setCurrentGenre, } = this.props.exchange;
    const { getFieldDecorator, } = this.props.form;

    return (
      <div className='editor talent-editor'>
        <Form className='editor-form'>
          {
            <FormItem label='' {...getFormItemLayout(4, 16)}>
              {getFieldDecorator('name', {
                initialValue: currentGenre.name,
                rules: [
                ],
              })(<Input placeholder='请输入品种类型名称' onChange={evt => {
                setCurrentGenre({
                  name: evt.target.value,
                }, false);
              }} />)}
            </FormItem>
          }
        </Form>
      </div>
    );
  }
}