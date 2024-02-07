import { Link } from "react-router-dom";
import Layout from "../Layout/layout";

const Section = () => {
  return (
    <div
      className=" hidden sm:block mt-5 py-3 w-full bg-gradient-to-r from-red-800 to-red-700"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Layout>
        <nav className=" flex justify-between items-center text-white">
          <a href=""></a>
          <ul className=" flex justify-center items-center space-x-7">
            <Link to={"/coures"} className="cursor-pointer">
              COURSE
            </Link>
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
