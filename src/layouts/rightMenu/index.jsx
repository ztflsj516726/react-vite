import React from "react";
import "./style.scss";
import { Dropdown, Button, Space, message, Modal } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import authTool from "@/util/auth";
import { useNavigate } from "react-router-dom";
import { useComContext } from "@/context/Context";
const RightMenu = () => {
  const navigate = useNavigate();

  const { getUserInfo } = useComContext();
  const UserInfo = getUserInfo();
  const { confirm } = Modal;

  const handleLogout = () => {
    confirm({
      title: "确认退出登录？",
      okText: "确认",
      okType: "danger",
      cancelText: "取消",
      onOk() {
        authTool.clearToken();
        navigate("/login");
        message.success("退出登录成功");
      },
    });
  };
  const handleProfile = () => {
    navigate("/profile");
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
    <div>
      欢迎您，
      <Dropdown menu={{ items }}>
        <Button>
          <Space>
            {UserInfo?.username}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default RightMenu;
