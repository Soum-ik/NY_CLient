import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const FormFeild = () => {
  const router = useNavigate();
  const onFinish = (values) => {
    const { username, password } = values;
    if (username === "farjax@gmail.com" || password === "farjax120") {
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
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item className="">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item> */}

        <Form.Item>
          <Button
            type="default"
            htmlType="submit"
            className="login-form-button mr-10"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormFeild;
