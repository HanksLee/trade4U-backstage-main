import * as React from "react";
import { BaseReact } from "components/BaseReact";
import WithRoute from "components/WithRoute";
import "./index.scss";
import Cookies from "js-cookie";

export interface ILoginProps {}

export interface ILoginState {
  loginUrl: string;
}
/* eslint new-cap: "off" */
@WithRoute("/login")
export default class Login extends BaseReact<ILoginProps, ILoginState> {
  private timer: any = 0;

  state = {
    loginUrl: "",
  };
  async componentDidMount() {
    this.initLogin();
  }

  private initLogin = async (): Promise<any> => {
    // @todo
    // 一进入页面获取钉钉扫码登录 url
    // return;
    const res = await this.$api.common.getLoginInfo();
    this.setState(
      {
        loginUrl: res.data.url,
      },
      () => {
        this.timer = setInterval(() => {
          this.poolLogin();
        }, 1000);
      }
    );
  };

  poolLogin = async (): Promise<any> => {
    // @todo 轮询查询用户登录状态
    const res = await this.$api.common.poolLogin();
    if (res.data.code === 1) {
      clearInterval(this.timer);
      Cookies.set("uid", res.data.uid);
      window.location.href = (window as any).$origin;
    }
  };

  test = () => {
    setTimeout(() => {
      Cookies.set("uid", 1);
      (window as any).location.href = (window as any).$origin + "/admin/";
    }, 3000);
  };

  render() {
    return (
      <div className="login">
        <div className="form-wrapper">
          <h1 className="brand">
            <img src={""} alt="logo" />
          </h1>
          <div className="form">
            <h2>Moon Admin 管理系统</h2>
          </div>
        </div>
      </div>
    );
  }
}
