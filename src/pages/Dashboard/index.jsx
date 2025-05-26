import React from "react";
import * as userApi from "@/api/user.js";
import { message } from "antd";

const Dashboard = () => {
  userApi.hi().then(() => {
    message.success("DashBoard");
  });
  return (
    <div>
      <h1>仪表盘厉害</h1>
      <p>欢迎来到后台管理系统</p>
    </div>
  );
};

export default Dashboard;
