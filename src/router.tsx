import * as React from "react";
import loadable from "@loadable/component";

/**
 * @description 按需加载页面级别组件
 */
const routes: any[] = [
  // {
  //   component: loadable(() => import(/* webpackChunkName: "Index" */ './pages/Index')),
  // },
  {
    component: loadable(() =>
      import(/* webpackChunkName: "broker-page" */ "./pages/Broker")
    ),
  },
  {
    component: loadable(() =>
      import(/* webpackChunkName: "menus-page" */ "./pages/Menus")
    ),
  },
  {
    component: loadable(() =>
      import(/* webpackChunkName: "menus-page" */ "./pages/Auth")
    ),
  },
  {
    component: loadable(() =>
      import(/* webpackChunkName: "market-product-page" */ "./pages/MarketProduct/MarketList")
    ),
  }
];

export default function AppRouter(props) {
  return (
    <>
      {routes.map((route, index) => (
        <route.component key={index} />
      ))}
    </>
  );
}
