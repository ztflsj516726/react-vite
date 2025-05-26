import { Input, Form, Radio, Button, message } from "antd";
import { useEffect, useState } from "react";
import { useComContext } from "@/context/Context";
import "./style.scss";
import * as userApi from "@/api/user.js";

const Profile = () => {
  const { setUserInfo } = useComContext();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userApi.getUserInfo().then((res) => {
      form.setFieldsValue(res.data);
      setUserInfo(res.data);
    });
  });

  const handleSubmit = (values) => {
    setLoading(true);
    userApi
      .updateUserInfo(values)
      .then(() => {
        message.success("用户信息更新成功");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="profile">
      <div className="left"></div>
      <div className="right">
        <Form
          form={form}
          onFinish={handleSubmit}
          labelCol={{ span: 4, offset: 0 }}
          labelAlign="left"
          initialValues={{
            username: "",
            email: "",
            phone: "",
            avatar: "",
            status: 1,
          }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: "请输入邮箱" },
              { type: "email", message: "请输入有效的邮箱地址" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="电话"
            name="phone"
            rules={[{ required: true, message: "请输入电话" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="头像" name="avatar">
            <Input />
          </Form.Item>
          <Form.Item
            label="状态"
            name="status"
            rules={[{ required: true, message: "请选择状态" }]}
          >
            <Radio.Group
              options={[
                {
                  label: "启用",
                  value: 1,
                },
                {
                  label: "禁用",
                  value: 0,
                },
              ]}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
