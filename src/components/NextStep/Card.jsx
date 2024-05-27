/* eslint-disable react/prop-types */

const Card = ({ image, name, btn, shortD, id, contactForm }) => {
  console.log(name, "name");
  return (
    <div
      className=" rounded-2xl  px-8  z-30
     bg-white/70 py-10 duration-500 flex items-center justify-center flex-col space-y-4"
    >
      <img className="w-[200px] h-[200px]" src={image} alt="" />
      <h3 className=" text-center text-[22px] sm:text-[26px] py-3 font-Headingfont ">
        {name}
      </h3>
      <p className=" max-w-xs text-center tracking-wide text-[12px] sm:text-[14px] line-clamp-3">
        {shortD}
      </p>
      {contactForm ? (
        <button className=" px-3 flex items-center gap-2 py-3 cursor-pointer botton text-center">
          <a href={`#form`}>{btn}</a>
        </button>
      ) : (
        <button className=" px-3 flex items-center gap-2 py-3 cursor-pointer botton text-center">
          <a href={`/coures/${name}`}>{btn}</a>
        </button>
      )}
    </div>
  );
};
export default Card;
