// src/LoginPage.js
import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import loginBg from "@/assets/login/login-bg.jpg";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import "./index.scss";
const { Title } = Typography;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    // 在这里执行登录逻辑，比如API调用
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <Form onFinish={handleSubmit} style={{ width: 300 }} className="ant-form">
        <Title
          level={3}
          style={{ textAlign: "center", marginBottom: 20, color: "white" }}
        >
          用户登录
        </Title>
        <Form.Item>
          <Input
            prefix={<UserOutlined style={{ color: "white" }} />}
            placeholder="用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Input.Password 
            prefix={<KeyOutlined style={{ color: "white" }} />}
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
