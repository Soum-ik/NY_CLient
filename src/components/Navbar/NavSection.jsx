import { Link } from "react-router-dom";
import Layout from "../Layout/layout";
import WhatsAppLink from "../WhatsApp";

import { useEffect, useState } from "react";
const Section = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/choosepath");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const names = data.map((item) => item.name);
  console.log(names);
  return (
    <Layout>
      <nav className=" font-Headingfont flex justify-between items-center text-white">
        <ul className=" flex justify-center items-center space-x-7">
          <div className="relative inline-block group">
            <button className="text-white   px-4 py-2 rounded-md focus:outline-none   transition duration-300">
              COURSE
            </button>
            <div className="absolute bg-white rounded-md p-2 hidden bg-transparent shadow-md mt-2 group-hover:block">
              {/* Your dropdown content goes here */}
              {names.map((name, index) => (
                <li className=" text-[12px] min-w-max  text-black font-Poppins" key={index}>
                  {name}
                  <br />
                </li>
              ))}
            </div>
          </div>

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
