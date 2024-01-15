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

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Overview", "overview", <PieChartOutlined />),
  getItem("Components", "components", <MailOutlined />, [
    getItem("Hero Component", "hero"),
    getItem("Course We offer", "course-offer"),
    getItem("About This Course", "about-course"),
    getItem("knowledge ", "knowledge"),
  ]),
  getItem("Courses", "courses", <AppstoreOutlined />),
  getItem("Customer Review", "customer-review", <DesktopOutlined />),
  getItem("Social Media", "social-media", <ContainerOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div
        className=" mt-10"
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
        <Menu
          defaultSelectedKeys={["overview"]}
          mode="inline"
          theme="light"
          className=" rounded-lg shadow-2xl backdrop-blur-2xl"
          inlineCollapsed={collapsed}
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map((subItem) => (
                    <Menu.Item key={subItem.key}>
                      <Link to={`/panel/${subItem.key}`}>{subItem.label}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={`/panel/${item.key}`}>{item.label}</Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </div>
    </div>
  );
};

export default App;
