import { Link } from "react-router-dom";
import Layout from "../Layout/layout";
import WhatsAppLink from "../WhatsApp";

const Section = () => {
  return (
    <Layout>
      <nav className=" font-Headingfont flex justify-between items-center text-white">
        <ul className=" flex justify-center items-center space-x-7">
          <Link to={"/coures"} className="cursor-pointer">COURSE</Link>
          <Link to={"/aboutus"} className="cursor-pointer">ABOUT US</Link>
          <li className="cursor-pointer">APPLICATION</li>
          <li className="cursor-pointer">CONTACT US</li>
        </ul>
        <WhatsAppLink textSize={"text-[19px]"} />
      </nav>
    </Layout>
  );
};
export default Section;
