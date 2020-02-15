import * as React from 'react';
import { BaseReact } from 'components/BaseReact';
import WithRoute from 'components/WithRoute';
import QRCode from 'qrcode.react';
import './index.scss';
import Cookies from 'js-cookie';

export interface ILoginProps {

}

export interface ILoginState {
  loginUrl: string;
}
/* eslint new-cap: "off" */
@WithRoute('/login')
export default class Login extends BaseReact<ILoginProps, ILoginState> {
  private timer: any = 0;

  state = {
    loginUrl: '',
  }
  async componentDidMount() {
    this.initLogin();
  }

  private initLogin = async (): Promise<any> => {
    // @todo
    // 一进入页面获取钉钉扫码登录 url
    // return;
    const res = await this.$api.common.getLoginInfo();
    this.setState({
      loginUrl: res.data.url,
    }, () => {
      this.timer = setInterval(() => {
        this.poolLogin();
      }, 1000);
    });
  }

  poolLogin = async (): Promise<any> => {
    // @todo 轮询查询用户登录状态
    const res = await this.$api.common.poolLogin();
    if (res.data.code === 1) {
      clearInterval(this.timer);
      Cookies.set('uid', res.data.uid);
      window.location.href = (window as any).$origin;
    }
  }

  test = () => {
    setTimeout(() => {
      Cookies.set('uid', 1);
      (window as any).location.href = (window as any).$origin + '/admin/';
    }, 3000);
  }

  render() {
    const { loginUrl, } = this.state;

    return (
      <div className='login'>
        <div className='form-wrapper'>
          <h1 className='brand'>
            <img src={''} alt="logo" />
          </h1>
          <div className='form'>
            <h2>悦跑圈 Boss 后台管理系统</h2>
            <p>钉钉扫码登录</p>
            <div className='qrcode'>
              <QRCode size={200} level={'H'} value={loginUrl} />,
            </div>
          </div>
          <div className='copyright'>
            <p>2014-2019 © Joyrun Inc - 悦跑圈</p>
            <p>粤ICP备13015116号</p>
          </div>
        </div>

      </div>
    );
  }
}
