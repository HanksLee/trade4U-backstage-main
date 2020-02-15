import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError
} from "axios";
import { message } from "antd";
import NProgress from "nprogress";

export interface IAPI {
  getInstance(): AxiosInstance;
}

export default class API implements IAPI {
  private api: AxiosInstance = null;

  private created(config: AxiosRequestConfig): void {
    this.api = axios.create(config);
  }

  private handleInterceptors() {
    this.api.interceptors.request.use((res: AxiosResponse) => {
      NProgress.start();
      return res;
    }, (err: AxiosError) => {
      NProgress.done();
      return Promise.reject(err);
    });

    this.api.interceptors.response.use(
      async (res: AxiosResponse) => {
        let {
          data: { statusCode, msg, },
        } = res;

        if (statusCode === 401) {
          window.location.href =
            process.env.NODE_ENV === "production"
              ? "/login"
              : window.location.origin + "/#/";
        }

        if (Number(statusCode) >= 400) {
          message.error(msg);
          NProgress.done();
          return Promise.reject(msg);
        } else {
          NProgress.done();
          return res;
        }
      },
      (err: AxiosError) => {
        NProgress.done();
        return Promise.reject(err);
      }
    );
  }

  constructor(config: AxiosRequestConfig) {
    this.created(config);
    this.handleInterceptors();
  }

  public getInstance(): AxiosInstance {
    return this.api;
  }
}

export const moonAPI = new API({
  baseURL: "/api/moon",
}).getInstance();
