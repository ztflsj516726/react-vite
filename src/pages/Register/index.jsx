// src/LoginPage.js
import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import loginBg from "@/assets/login/login-bg.jpg";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import * as userApi from "@/api/user.js";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    setLoading(true);
    userApi
      .userRegister(values)
      .then(() => {
        message.success("注册成功", 3);
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
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
      <Form 
        form={form}
        onFinish={handleSubmit} 
        style={{ width: 300 }} 
        className="ant-form"
      >
        <Title
          level={3}
          style={{ textAlign: "center", marginBottom: 20, color: "white" }}
        >
          用户注册
        </Title>
        <Form.Item
          name="username"
          required
          rules={[
            { required: true, message: '请输入用户名' },
            { max: 20, message: '用户名不能超过20个字符' }
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "white" }} />}
            placeholder="用户名"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          required
          rules={[
            { required: true, message: '请输入密码' },
            { max: 20, message: '密码不能超过20个字符' },
            { min: 6, message: '密码不能少于6个字符' }
          ]}
        >
          <Input.Password
            prefix={<KeyOutlined style={{ color: "white" }} />}
            placeholder="密码"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            注册
          </Button>
        </Form.Item>
        <Form.Item>
          <div className="tip">
            已有账户？去
            <span className="high-light" onClick={() => navigate("/login")}>
              登录
            </span>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
