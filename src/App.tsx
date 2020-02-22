import * as React from "react";
import { Provider } from "mobx-react";
import { BaseReact } from "components/BaseReact";
import ErrorBoundary from 'components/ErrorBoundary';
import store from "store";
import Index from "pages/Index";
import Login from "pages/Login";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "./app.scss";
import utils from 'utils';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const isProd = process.env.NODE_ENV === "production";
(window as any).$origin = `${window.location.origin}${isProd ? "" : "/#"}`;

const Router: any = !isProd ? HashRouter : BrowserRouter;

class App extends BaseReact {
  state = {
    token: undefined,
  }

  async componentDidMount() {
    this.init();
  }

  private init = async (): Promise<any> => {
    // @todo 一进入页面调起获取用户信息接口
    const token = utils.getLStorage('MOON_ADMIN_MAIN_TOKEN');
    this.setState({ token, });
  };

  render() {
    const { token, } = this.state;

    return (
      <ErrorBoundary>
        <Provider {...store}>
          {/* <Router basename={basename}> */}
          <ConfigProvider locale={zhCN}>
            <Router>
              <Switch>
                {/* 这里在 io 拦截器进行拦截一进入首页就进行路由跳转 */}
                <Route exact path="/">
                  {!!token ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <Redirect to="/login" />
                  )}
                </Route>
                <Route path="/dashboard">
                  <Index />
                </Route>
                <Route exact path="/login" render={props => <Login {...props} />} />
                <Route path="*">
                  <div>404</div>
                </Route>
              </Switch>
            </Router>
          </ConfigProvider>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default hot(App);
