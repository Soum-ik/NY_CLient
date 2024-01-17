import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

const { SubMenu } = Menu;
const items = [
  {
    name: "Overview",
    key: "overview",
    icon: <PieChartOutlined />,
    href: "panel",
  },
  {
    name: "Components",
    key: "panel",
    icon: <MailOutlined />,
    // href: "/",
    subItems: [
      { name: "Hero Component", key: "hero", href: "hero" },
      {
        name: "Course We offer",
        key: "course-offer",
        href: "course-offer",
      },
      {
        name: "About This Course",
        key: "about-course",
        href: "about-course",
      },
      { name: "knowledge", key: "knowledge", href: "knowledge" },
    ],
  },
  {
    name: "Courses",
    key: "courses",
    icon: <AppstoreOutlined />,
    href: "courses",
  },
  {
    name: "Customer Review",
    key: "customer-review",
    icon: <DesktopOutlined />,
    href: "customer-review",
  },
  {
    name: "Social Media",
    key: "social-media",
    icon: <ContainerOutlined />,
    href: "social-media",
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
            {items.map((item) => {
              if (item.subItems) {
                return (
                  <SubMenu key={item.key} icon={item.icon} title={item.name}>
                    {item.subItems.map((subItem) => (
                      <Menu.Item key={subItem.key}>
                        <Link to={`/${subItem.href}`}>{subItem.name}</Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={`/${item.href}`}>{item.name}</Link>
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default App;
