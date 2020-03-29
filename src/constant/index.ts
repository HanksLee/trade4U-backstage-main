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

export const WeeklyOrder = [
  6,
  0,
  1,
  2,
  3,
  4,
  5,
];

export const WeeklyMap = {
  6: 'Sunday',
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
};

export const THREE_DAY_OPTIONS = [
  {
    id: 6,
    name: '周日',
  },
  {
    id: 0,
    name: '周一',
  },
  {
    id: 1,
    name: '周二',
  },
  {
    id: 2,
    name: '周三',
  },
  {
    id: 3,
    name: '周四',
  },
  {
    id: 4,
    name: '周五',
  },
  {
    id: 5,
    name: '周六',
  }
];

export const PAGE_ROUTES = [
  {
    title: "券商管理",
    path: "/dashboard/broker",
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
  }
];
