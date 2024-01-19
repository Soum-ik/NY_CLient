import { Link } from "react-router-dom";
import Layout from "../Layout/layout";
import WhatsAppLink from "../WhatsApp";
import { Button, Dropdown } from "antd";
const Section = () => {
  return (
    <Layout>
      <nav className=" font-Headingfont flex justify-between items-center text-white">
        <ul className=" flex justify-center items-center space-x-7">
          <Dropdown menu={{}} placement="bottomLeft">
            <Button className="text-white hover:text-black outline-none border-none focus:outline-none active:outline-none hover:outline-none text-[16px] focus:border-none">
              COURSE
            </Button>
          </Dropdown>

          <Link to={"/aboutus"} className="cursor-pointer">
            ABOUT US
          </Link>
          <li className="cursor-pointer">APPLICATION</li>
          <li className="cursor-pointer">CONTACT US</li>
        </ul>
        <WhatsAppLink textSize={"text-[19px]"} />
      </nav>
    </Layout>
  );
};
export default Section;
