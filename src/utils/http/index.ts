import Axios, {
    AxiosInstance,
    AxiosRequestConfig,
    CustomParamsSerializer
} from "axios";
import {
    HttpError,
    RequestMethods,
    HttpResponse,
    HttpRequestConfig
} from "./types.d";
import {stringify} from "qs";
import NProgress from "../nprogress";
import {getToken, formatToken} from "@/utils/auth";

/**
 * 请求白名单
 */
const whiteList = [];

// Axios基础配置
const defaultConfig: AxiosRequestConfig = {
    // 请求超时时间
    timeout: 10000,
    // 后端请求地址
    baseURL: '/api',
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    // 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
    paramsSerializer: {
        serialize: stringify as unknown as CustomParamsSerializer
    }
};

/**
 * 参考自vue-pure-admin
 * https://github.com/pure-admin/vue-pure-admin/tree/main
 */
class Http {
    // 初始化配置对象
    private static initConfig: HttpRequestConfig = {};
    // 保存当前Axios实例对象
    private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);
    // 拦截器
    constructor() {
        this.httpInterceptorsRequest();
        this.httpInterceptorsResponse();
    }

    /**
     * 请求拦截器
     * @private
     */
    private httpInterceptorsRequest(): void {
        Http.axiosInstance.interceptors.request.use(
            async (config: HttpRequestConfig): Promise<any> => {
                // 开启进度条动画
                NProgress.start();

                // 优先判断post/get等方法是否传入回调，否则执行初始化设置等回调
                if (typeof config.beforeRequestCallback === "function") {
                    config.beforeRequestCallback(config);
                    return config;
                }
                if (Http.initConfig.beforeRequestCallback) {
                    Http.initConfig.beforeRequestCallback(config);
                    return config;
                }

                // 请求在白名单内，直接放行
                return whiteList.some(v => config.url.indexOf(v) > -1)
                    ? config
                    : new Promise(resolve => {
                        // 将Token放入请求头
                        const token = getToken();
                        if (token) {
                            config.headers["Authorization"] = formatToken(token);
                            resolve(config);
                        } else {
                            resolve(config);
                        }
                    });
            },
            error => {
                return Promise.reject(error);
            }
        );
    }

    /** 响应拦截 */
    private httpInterceptorsResponse(): void {
        const instance = Http.axiosInstance;
        instance.interceptors.response.use(
            (response: HttpResponse) => {
                const $config = response.config;
                // 关闭进度条动画
                NProgress.done();
                // 优先判断post/get等方法是否传入回调，否则执行初始化设置等回调
                if (typeof $config.beforeResponseCallback === "function") {
                    $config.beforeResponseCallback(<HttpResponse>response);
                    return response.data;
                }
                if (Http.initConfig.beforeResponseCallback) {
                    Http.initConfig.beforeResponseCallback(<HttpResponse>response);
                    return response.data;
                }
                return response.data;
            },
            (error: HttpError) => {
                const $error = error;
                $error.isCancelRequest = Axios.isCancel($error);
                // 关闭进度条动画
                NProgress.done();
                // 所有的响应异常 区分来源为取消请求/非取消请求
                return Promise.reject($error);
            }
        );
    }

    /**
     * 通用请求工具函数
     */
    public request<T>(
        method: RequestMethods,
        url: string,
        param?: AxiosRequestConfig,
        axiosConfig?: HttpRequestConfig
    ): Promise<T> {
        const config = {
            method,
            url,
            ...param,
            ...axiosConfig
        } as HttpRequestConfig;

        // 单独处理自定义请求/响应回调
        return new Promise((resolve, reject) => {
            Http.axiosInstance
                .request(config)
                .then((response: undefined) => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    /**
     * 单独抽离的get工具函数
     */
    public get<T, P>(
        url: string,
        params?: AxiosRequestConfig<T>,
        config?: HttpRequestConfig
    ): Promise<P> {
        return this.request<P>("get", url, params, config);
    }

    /**
     * 单独抽离的post工具函数
     */
    public post<T, P>(
        url: string,
        params?: AxiosRequestConfig<T>,
        config?: HttpRequestConfig
    ): Promise<P> {
        return this.request<P>("post", url, params, config);
    }

}

export const http = new Http();
