/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import styles, { layout } from "../style/style";
import ContactData from "./Contact/ContactData";
import { toast, Toaster } from "react-hot-toast";
import WhatsAppLink from "./WhatsApp";

const CustomData = ({
  heading,
  tittle,
  button,
  offer,
  more,
  customStyle,
  customStyleHeading,
  what,
}) => {
  // change not [proper set]
  const [click, setClick] = useState(false);
  const [btnColorChnager, setBtnColorChnager] = useState(false);
  const handleClick = () => {
    setClick(true);
  };

  const colorHandler = () => {
    setBtnColorChnager(true);
    setClick(false);
    toast.success(`Thank You, For Your Submitting`);
  };

  return (
    <div className={layout.sectionInfo}>
      {offer && (
        <h6
          className={`mb-4 font-Headingfont font-bold text-[15px] text-black/70  p-1 ${customStyle}`}
        >
          {offer}
        </h6>
      )}
      <h2
        className={`${styles.heading2} ${customStyleHeading} text-black/70 max-w-[700px] font-Headingfont `}
      >
        {heading}
      </h2>
      <p
        className={` text-justify xs:text-[18px] text-[13px] text mt-5 text-black`}
      >
        {tittle}
      </p>
      <div className=" flex  sm:gap-10 items-center justify-center">
        {button && (
          <button className=" -tracking-tight  mt-5  sm:block active:p-3 ease-in-out  botton px-[18px] py-3 font-Headingfont">
            {/* {button} */}
            <WhatsAppLink />
          </button>
        )}
        {more && (
          <button
            onClick={handleClick}
            className={` ${
              btnColorChnager ? `text-green-600` : ``
            }  border shadow
             px-[18px]  py-[18px] rounded-lg ease-in-out duration-300 mt-4 font-medium flex cursor-pointer items-center justify-center gap-5 font-Poppins`}
          >
            {" "}
            {click ? (
              <ContactData onSubmit={colorHandler} />
            ) : (
              <>
                {more} <IoMdArrowRoundForward size={20} />
              </>
            )}
          </button>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
export default CustomData;
