/* eslint-disable react/prop-types */
import { IoMdArrowRoundForward } from "react-icons/io";
import styles, { layout } from "../style/style";

const CustomData = ({
  heading,
  tittle,
  button,
  offer,
  more,
  customStyle,
  customStyleHeading,
}) => {
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
        className={`${styles.paragraph} max-w-[500px] text-justify    mt-5 text-black`}
      >
        {tittle}
      </p>
      <div className=" flex  sm:gap-10 items-center justify-center">
        {button && (
          <button className=" -tracking-tight  mt-5 hidden sm:block active:p-3 ease-in-out  botton px-[18px] py-3 font-Headingfont">
            {button}
          </button>
        )}
        {more && (
          <div className="     hover:bg-color px-[18px]  py-[18px] rounded-lg hover:text-white ease-in-out duration-300 mt-4 font-medium flex cursor-pointer items-center justify-center gap-5 font-Poppins">
            {" "}
            {more} <IoMdArrowRoundForward size={20} />
          </div>
        )}
      </div>
    </div>
  );
};
export default CustomData;
