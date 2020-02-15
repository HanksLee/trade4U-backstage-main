import * as React from "react";
import { Provider } from "mobx-react";
import { BaseReact } from "components/BaseReact";
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

const isProd = process.env.NODE_ENV === "production";
(window as any).$origin = `${window.location.origin}${isProd ? "" : "/#"}`;

const Router: any = !isProd ? HashRouter : BrowserRouter;

class App extends BaseReact {
  async componentDidMount() {
    this.init();
  }

  private init = async (): Promise<any> => {
    // @todo 一进入页面调起获取用户信息接口
    await this.$store.common.getUserInfo();
  };

  render() {
    const { userInfo, } = this.$store.common;

    return (
      <Provider {...store}>
        {/* <Router basename={basename}> */}
        <Router>
          <Switch>
            {/* 这里在 io 拦截器进行拦截一进入首页就进行路由跳转 */}
            <Route exact path="/">
              {!!userInfo ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/dashboard">
              <Index />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="*">
              <div>404</div>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default hot(App);
