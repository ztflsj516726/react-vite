import { request } from "../util/request";

export function userLogin(data) {
  return request({
    method: "post",
    url: "/user/login",
    data,
  });
}
export function userRegister(data) {
  return request({
    method: "post",
    url: "/user/register",
    data,
  });
}
