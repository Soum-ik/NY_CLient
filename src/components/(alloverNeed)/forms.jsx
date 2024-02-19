import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../config";

const Security = () => {
  const navigate = useNavigate();

  const generateToken = () => {
    const token = "Hello World";
    sessionStorage.setItem("token", token);
  };

  const onFinish = async (values) => {
    const { username, password } = values;
    try {
      const res = await axios.get(`${config.apiUrl}admin`);

      if (res.status === 200) {
        const adminData = res.data;
        if (adminData.email === username && adminData.password === password) {
          navigate("/panel");
          generateToken();
        } else {
          navigate("/admin");
          alert("Your credential is not valid");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen grid place-content-center">
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
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item className="flex">
          <Button
            type="default"
            htmlType="submit"
            className="login-form-button mr-10"
          >
            Log in
          </Button>
          <Link to={"/forgot-password"} className="text-blue-600">
            Forgot Password
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Security;
