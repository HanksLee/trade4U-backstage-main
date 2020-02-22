export const SHARE_DATA = {
  title: "",
  desc: "",
  link: "",
  imgUrl: "",
};

export const FORMAT_TIME = 'YYYY.MM.DD HH:mm';

export const UPLOAD_URL = "https://upyun.com";

export const marketOptions = [
  {
    id: 1,
    name: '上证',
  },
  {
    id: 2,
    name: '日经',
  },
  {
    id: 3,
    name: '纳斯达克',
  }
];


export const PAGE_ROUTES = [
  {
    title: "券商管理",
    path: "/dashboard/broker",
    children: [],
  },
  {
    title: "菜单管理",
    path: "/dashboard/menu",
    children: [],
  },
  {
    title: "权限管理",
    path: "/dashboard/permission",
    children: [],
  },
  {
    title: '行情产品管理',
    path: '/dashboard/market-product',
  },
  {
    title: '交易品种管理',
    path: '/dashboard/exchange',
    children: [
      {
        title: '交易类型设置',
        path: '/dashboard/exchange/genre',
      },
      {
        title: '交易品种设置',
        path: '/dashboard/exchange/product',
      },
      {
        title: '利润规则设置',
        path: '/dashboard/exchange/rule',
      }
    ],
  }
];
