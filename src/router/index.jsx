import React from "react";
import { Navigate } from "react-router-dom";
import BasicLayout from "@/layouts/BasicLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import User from "@/pages/User";
import Register from "@/pages/Register";
import Draw from "@/pages/Draw";
import ProFile from "@/pages/Profile";
import { UserOutlined, DashboardOutlined } from "@ant-design/icons";
export const customeRoutes = () => {
  return [
    {
      path: "/",
      element: <BasicLayout />,
      children: [
        {
          label: "仪表盘",
          path: "dashboard",
          element: <Dashboard />,
          icon: <DashboardOutlined />,
        },
        {
          label: "用户管理",
          path: "user",
          element: <User />,
          icon: <UserOutlined />,
        },
        {
          label: "画画专属",
          path: "draw",
          element: <Draw />,
          icon: <UserOutlined />,
        },
        {
          label: "个人信息",
          path: "profile",
          element: <ProFile />,
          hidden: true,
        },
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ];
};
const routes = [
  {
    label: "登录",
    path: "/login",
    element: <Login />,
  },
  {
    label: "注册",
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
  ...customeRoutes(),
];

export default routes;
