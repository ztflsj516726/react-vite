// src/LoginPage.js
import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import loginBg from '@/assets/login/login-bg.jpg';
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import * as userApi from "@/api/user.js";
import "./login.scss";
import auth from "@/util/auth.js";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () => {
    userApi.userlogin({ username, password }).then((res) => {
      auth.setToken(res.data.token);
      message.success('登录成功！',3);
      navigate('/dashboard');
    })
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
