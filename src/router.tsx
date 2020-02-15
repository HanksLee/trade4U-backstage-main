import * as React from 'react';
import loadable from '@loadable/component';

/**
 * @description 按需加载页面级别组件
 */
const routes: any[] = [
  // {
  //   component: loadable(() => import(/* webpackChunkName: "Index" */ './pages/Index')),
  // },
  {
    component: loadable(() => import(/* webpackChunkName: "community-tool-message" */ './pages/Broker')),
  },
];

export default function AppRouter(props) {
  return (
    <>
      {routes.map((route, index) => <route.component key={index} />)}
    </>
  );
}