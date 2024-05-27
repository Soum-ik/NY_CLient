import { Link } from "react-router-dom";
import Layout from "../Layout/layout";

const Section = () => {
  return (
    <div
      className=" hidden sm:block mt-5 py-3 w-full bg-[#06074f]"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Layout>
        <nav className=" flex justify-between items-center text-white">
          <a href=""></a>
          <ul className=" flex justify-center items-center space-x-7">
            <a href={"#course"} className="cursor-pointer">
              COURSE
            </a>
            <Link to={"/aboutus"} className="cursor-pointer">
              ABOUT US
            </Link>
            <li className="cursor-pointer">APPLICATION</li>
            <li className="cursor-pointer">CONTACT US</li>
          </ul>
        </nav>
      </Layout>
    </div>
  );
};
export default Section;
