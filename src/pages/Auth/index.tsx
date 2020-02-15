import * as React from "react";
import { BaseReact } from "components/BaseReact";
import WithRoute from "components/WithRoute";
import "./index.scss";
import { inject, observer } from "mobx-react";
import CommonHeader from "components/CommonHeader";

export interface IAuthProps {}

export interface IAuthState {
  // filter: any;
}

/* eslint new-cap: "off" */
@WithRoute("/dashboard/auth", { exact: false, })
@inject("common")
@observer
export default class Auth extends BaseReact<IAuthProps, IAuthState> {
  state = {};

  render() {
    const computedTitle = "权限管理";

    return (
      <div>
        <CommonHeader {...this.props} links={[]} title={computedTitle} />
      </div>
    );
  }
}
