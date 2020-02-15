export const SHARE_DATA = {
  title: "",
  desc: "",
  link: "",
  imgUrl: "",
};

export const UPLOAD_URL = "https://upyun.com";

export const ROUTES = {
  home: {
    name: "index",
    path: "/",
  },
  login: {
    name: "login",
    path: "/login",
  },
};

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
    path: "/dashboard/auth",
    children: [],
  }
];
