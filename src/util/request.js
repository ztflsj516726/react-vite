// request.js
import axios from "axios";
import { message } from "antd";

// 创建axios实例
const service = axios.create({
  baseURL: "/api", // 使用代理配置
  timeout: 5000, // 请求超时
});

// 请求拦截器：比如带上token
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 或其他存储token方式
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器：统一处理错误
service.interceptors.response.use(
  (response) => response.data, // 直接返回数据部分
  (error) => {
    // 你可以根据状态码做不同处理
    if (error.response) {
      if (error.response.status === 401) {
        message.error("用户登录信息失效");
        // 判断当前是否在登录页
        const isLoginPage = window.location.pathname === "/login";
        if (!isLoginPage) {
          // 不在登录页才跳转
          setTimeout(() => {
            window.location.href = "/login";
          }, 1000);
        }
      } else if (error.response.status === 403) {
        message.error("该用户被禁用");
        // 判断当前是否在登录页
        const isLoginPage = window.location.pathname === "/login";
        if (!isLoginPage) {
          // 不在登录页才跳转
          setTimeout(() => {
            window.location.href = "/login";
          }, 1000);
        }
      } else {
        // 显示错误信息
        message.error(error.response.data?.message || "请求失败");
        // 其它错误处理
        return Promise.reject(error.response.data);
      }
    }
  }
);

/**
 * 通用请求方法
 * @param {Object} options 请求配置对象
 * @param {string} options.url 请求地址
 * @param {string} options.method 请求方法，GET/POST/PUT/DELETE 等
 * @param {object} [options.params] GET请求时的查询参数
 * @param {object} [options.data] POST/PUT请求时的请求体
 * @returns Promise
 */
export function request({ url, method = "GET", params = {}, data = {} }) {
  method = method.toLowerCase();

  const config = {
    url,
    method,
  };

  if (method === "get" || method === "delete") {
    config.params = params;
  } else {
    config.data = data;
  }

  return service(config);
}

export default service;
