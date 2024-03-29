import { Link } from "react-router-dom";
import Layout from "../Layout/layout";
import WhatsAppLink from "../WhatsApp";
import { useEffect, useState } from "react";
import config from "../../../config";
// import config from "../../../config";

const Section = () => {
  const [data, setData] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.apiUrl}choosepath`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <Layout>
      <nav className=" flex justify-between items-center text-white">
        <ul className="flex justify-center items-center space-x-7">
          <div className="relative inline-block group">
            <button
              onMouseEnter={() => setIsDropdownOpen(true)}
              className="text-white px-4 py-2 rounded-md focus:outline-none transition duration-300"
            >
              COURSE
            </button>
            {isDropdownOpen && (
              <div
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute bg-white rounded-md min-w-[1000px] p-2 shadow-md mt-2"
              >
                {/* Your dropdown content goes here */}
                {data.map((item, index) => (
                  <a
                    href={`/coures/${item._id}`} // Assuming you have routes based on the dropdown items
                    className="text-[12px] text-black font-bold font-Poppins"
                    key={index}
                  >
                    {`  ${item.name}`}
                    <br />
                  </a>
                ))}
              </div>
            )}
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
