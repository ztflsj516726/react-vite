import { request } from "../util/request";

// 用户登录
export function userLogin(data) {
  return request({
    method: "post",
    url: "/user/login",
    data,
  });
}

// 用户注册
export function userRegister(data) {
  return request({
    method: "post",
    url: "/user/register",
    data,
  });
}

// hi
export function hi(data) {
  return request({
    method: "get",
    url: "/user/hi",
    data,
  });
}

// 获取用户信息
export function getUserInfo() {
  return request({
    method: "get",
    url: "/user/userInfo",
  });
}

// 更新用户信息
export function updateUserInfo(data) {
  return request({
    method: "post",
    url: "/user/updateInfo",
    data,
  });
}

