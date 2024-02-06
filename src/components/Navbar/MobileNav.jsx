import styles from "../../style/style";
import image from "../../../public/images/mainLogo.png";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import WhatsAppLink from "../WhatsApp";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function onClick() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter} my-10`}>
        <div className=" flex items-center justify-between w-full">
          <Link to={"/"}>
          <img
            src={image}
            className="  max-w-[200px]"
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
          </ul>
          <WhatsAppLink marginTop={"mt-[20px]"} textSize={"text-[25px]"} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default MobileNav;
