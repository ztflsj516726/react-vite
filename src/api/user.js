import { request } from "../util/request";

export function userlogin(data) {
  return request({
    method: "post",
    url: "/user/login",
    data,
  });
}
