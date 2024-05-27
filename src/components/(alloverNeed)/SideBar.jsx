import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

const items = [
  {
    name: "Hero Component",
    key: "hero",
    icon: <MailOutlined />,
    href: "admin/hero",
  },
  {
    name: "Course We Offer",
    key: "course-offer",
    icon: <AppstoreOutlined />,
    href: "admin/course-offer",
  },
  {
    name: "Knowledge",
    key: "knowledge",
    icon: <MailOutlined />,
    href: "admin/knowledge",
  },
  {
    name: "CEO",
    key: "CEO",
    icon: <MailOutlined />,
    href: "admin/CEO",
  },
  {
    name: "Courses",
    key: "courses",
    icon: <AppstoreOutlined />,
    href: "admin/courses",
  },
  {
    name: "Categories",
    key: "Catagori",
    icon: <ContainerOutlined />,
    href: "admin/categories",
  },
  {
    name: "Customer Review",
    key: "customer-review",
    icon: <DesktopOutlined />,
    href: "admin/customer-review",
  },
  {
    name: "Social Media",
    key: "social-media",
    icon: <ContainerOutlined />,
    href: "admin/social-media",
  },
  {
    name: "Banner",
    key: "Banner",
    icon: <ContainerOutlined />,
    href: "admin/Banner",
  },
  {
    name: "Apply Student Data",
    key: "Apply Student Data",
    icon: <ContainerOutlined />,
    href: "admin/Apply-now-data",
  },
  {
    name: "Images",
    key: "Images",
    icon: <ContainerOutlined />,
    href: "admin/Images",
  },
  {
    name: "Logo",
    key: "Images",
    icon: <ContainerOutlined />,
    href: "admin/Logo",
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className=" mt-10">
      <div
        className=""
        style={{
          minWidth: 300,
          height: 500,
        }}
      >
        <Button
          className=" flex items-center justify-center"
          type="dashed"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <div className=" shadow-xl rounded-xl">
          <Menu
            defaultSelectedKeys={["overview"]}
            mode="inline"
            theme="light"
            className=" rounded-xl "
            inlineCollapsed={collapsed}
          >
            {items.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={`/${item.href}`}admin>{item.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default App;
