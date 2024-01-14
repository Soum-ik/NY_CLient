/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ image, name, btn, shortD }) => {
  return (
    <div
      className=" rounded-2xl  px-8  z-30
     bg-white/70 py-10 duration-500 flex items-center justify-center flex-col space-y-4"
    >
      <img src={image} alt="" />
      <h3 className=" text-[20px] sm:text-[27px] py-3 font-Headingfont  max-w-xs">
        {name}
      </h3>
      <p className=" max-w-xs text-center tracking-wide font-textFont">{shortD}</p>
      <button
        to={"/"}
        className=" px-3 flex items-center gap-2 py-3 cursor-pointer botton text-center"
      >
        <Link>{btn}</Link>
      </button>
    </div>
  );
};
export default Card;
