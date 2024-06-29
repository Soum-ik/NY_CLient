/* eslint-disable react/prop-types */
// import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import styles, { layout } from "../style/style";
// import ContactData from "./Contact/ContactData";
import { Toaster } from "react-hot-toast";

const CustomData = ({
  heading,
  tittle,
  button,
  offer,
  more,
  customStyle,
  customStyleHeading,
  what,
  forYellow,
  sub,
}) => {
  return (
    <div className={layout.sectionInfo}>
      {offer && (
        <h6
          className={`mb-4 p-1 font-Headingfont text-[15px] font-bold text-black/70 ${forYellow}`}
        >
          {offer}
        </h6>
      )}

      <h2 className="max-w-md text-4xl font-semibold">{heading}</h2>
      {sub && (
        <h4 className="mt-2 text-[13px] text-black/70 md:text-[15px]">{sub}</h4>
      )}
      <p
        className=" mt-5 text text-justify opacity-70 whitespace-pre-line"
        // className={`text mt-5 whitespace-pre-line text-justify  text-black opacity-70 xs:text-[18px]`}
      >
        {tittle}
      </p>
      <div className="flex items-center justify-center sm:gap-10">
        {what ? (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            href={what}
            target="_blank"
            className="botton mt-5 px-[18px] py-3 font-Headingfont -tracking-tight ease-in-out active:p-3 sm:block"
          >
            {button}
          </a>
        ) : (
          <span>
            {button && (
              <a
                href="#form"
                className="botton mt-5 hidden px-[18px] py-3 font-Headingfont -tracking-tight ease-in-out active:p-3 sm:block"
              >
                {button}
              </a>
            )}
          </span>
        )}

        {more && (
          <button
            className={`mt-4 flex cursor-pointer items-center justify-center gap-5 rounded-lg border px-[18px] py-[18px] font-Poppins font-medium shadow duration-300 ease-in-out ${customStyle}`}
          >
            <a className="flex gap-2" href="#form">
              {more} <IoMdArrowRoundForward size={20} />
            </a>
          </button>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
export default CustomData;
