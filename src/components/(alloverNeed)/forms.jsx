import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Security = () => {
  const [reset, setReset] = useState("");
  const router = useNavigate();
  const email = "farjax@gmail.com";
  const pass = "farjax120";
  
  const forgotPasswordHandler = () => {
    setReset(pass);
  };

  console.log(reset);
  const onFinish = (values) => {
    const { username, password } = values;
    if (username === email || password === pass) {
      router("/panel");
    } else {
      alert("Sorry you're not Authenticate");
      router("/admin");
    }
  };
  return (
    <div className="  min-h-screen grid place-content-center">
      <Form
        name="normal_login"
        className="login-form min-w-[400px]"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={reset || "password"}
            value={reset || ""}
            onChange={(e) => setReset(e.target.value)}
          />
        </Form.Item>

        <Form.Item className=" flex">
          <Button
            type="default"
            htmlType="submit"
            className="login-form-button mr-10"
            disabled={reset}
          >
            Log in
          </Button>
          <Button onClick={forgotPasswordHandler} className=" text-blue-600">
            forgot-password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Security;
