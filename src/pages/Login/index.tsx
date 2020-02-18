import * as React from "react";
import { BaseReact } from "components/BaseReact";
import WithRoute from "components/WithRoute";
import "./index.scss";
import {
  Button,
  Form,
  Icon,
  Input
} from 'antd';

export interface ILoginProps { }

export interface ILoginState {
  loginUrl: string;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24, },
    sm: { span: 6, },
  },
  wrapperCol: {
    xs: { span: 24, },
    sm: { span: 18, },
  },
};

/* eslint new-cap: "off" */
@WithRoute("/login")
// @ts-ignore
@Form.create()
export default class Login extends BaseReact<ILoginProps, ILoginState> {
  state = {
    loginUrl: "",
    codeImg: 'https://cdn.pixabay.com/photo/2017/01/11/08/31/icon-1971130_1280.png',
  };

  async componentDidMount() {
    this.getCodeImg();
  }

  async getCodeImg() {
    return;
    const res: any = await this.$api.common.getCodeImg();

    if (res.data.status == 200) {
      this.setState({
        // codeImg: res.data.data,
      });
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const res = await this.$api.common.login(values);
        if (res.data.status == 200) {
          this.props.history.push('/dashboard');
        } else {
          this.$msg.error(res.data.message);
        }
      }
    });
  };

  render() {
    const { getFieldDecorator, } = this.props.form;
    const { codeImg, } = this.state;

    return (
      <div className="login">
        <div className="form-wrapper">
          <div className="form">
            <h2>Moon Admin 管理系统</h2>
            <section>
              <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
                <Form.Item label='用户名'>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入您的用户名', }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', }} />}
                      placeholder="用户名"
                    />
                  )}
                </Form.Item>
                <Form.Item label='密码'>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入您的密码', }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)', }} />}
                      type="password"
                      placeholder="密码"
                    />
                  )}
                </Form.Item>
                <Form.Item label='验证码'>
                  {getFieldDecorator('code', {
                    rules: [{ required: true, message: '请输入验证码', }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)', }} />}
                      placeholder="验证码"
                    />
                  )}

                </Form.Item>
                <Form.Item wrapperCol={24} className='login-code-refresh'>
                  <span className='login-code-img' onClick={this.getCodeImg}>
                    <img src={codeImg} alt=""/>
                  </span>
                  <span className="login-refresh" onClick={this.getCodeImg}>
                    刷新
                  </span>
                </Form.Item>
                <Form.Item  className='login-confirm-btn' wrapperCol={24}>
                  <Button block type="primary" htmlType="submit" className="login-form-button">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
