import styles from "../../style/style";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import WhatsAppLink from "../WhatsApp";
import { Link } from "react-router-dom";
import { useFetch } from "../../libs/fetchData";
import config from "../../../config";
import { FaPhone } from "react-icons/fa6";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function onClick() {
    setIsNavOpen(!isNavOpen);
  }
  const { image } = useFetch(`${config.apiUrl}logo`);

  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter} my-10`}>
        <div className=" flex items-center justify-between w-full">
          <Link to={"/"}>
            <img
              className=" w-[230px] h-20 object-cover"
              src={image}
              alt="Farjax Institute of Technology"
            />
          </Link>
          <p className=" text-black/75" onClick={onClick}>
            {isNavOpen ? <IoMdClose size={40} /> : <IoMdMenu size={40} />}
          </p>
        </div>
      </div>

      {isNavOpen ? (
        <div className=" overscroll-none min-h-screen mt-10 bg-amber-200/5 p-10  rounded-lg">
          <ul className=" flex flex-col justify-center items-center space-y-7 text-[22px]">
            <a
              href="#course"
              onClick={() => setIsNavOpen(false)}
              className="cursor-pointer"
            >
              COURSES
            </a>
            <Link
              to={"/aboutus"}
              onClick={() => setIsNavOpen(false)}
              className="cursor-pointer"
            >
              ABOUT US
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setIsNavOpen(false)}
              className="cursor-pointer"
            >
              CONTACT US
            </Link>
            <h1 className=" text-lg flex items-center justify-center gap-2">
              <FaPhone />
              (718) 785-4636
            </h1>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default MobileNav;
