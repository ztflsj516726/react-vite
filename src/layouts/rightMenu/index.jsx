import React from "react";
import "./style.scss";
import { Dropdown, Button, Space, message } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import authTool from "@/util/auth";
import { useNavigate } from "react-router-dom";
const RightMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authTool.clearToken();
    navigate("/login");
    message.success("退出登录成功");
  };
  const handleProfile = () => {
    window.open("https://ztflsj516726.github.io/");
  };
  const items = [
    {
      key: "1",
      label: "个人信息",
      icon: <UserOutlined />,
      onClick: handleProfile,
    },
    {
      key: "2",
      label: "退出登录",
      icon: <UserOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Button>
        <Space>
          设置
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default RightMenu;
