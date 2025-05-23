import React from "react";
import { Navigate } from "react-router-dom";
import BasicLayout from "@/layouts/BasicLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import User from "@/pages/User";

const routes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: "",
        element: <Dashboard />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />
  }
];

export default routes;
