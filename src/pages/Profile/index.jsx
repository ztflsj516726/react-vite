import { Input, Form, Radio, Button } from "antd";

const Profile = () => {
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div style={{ width: "400px" }}>
      <Form
        onFinish={handleSubmit}
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
          <Button type="primary" htmlType="submit" block>
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
