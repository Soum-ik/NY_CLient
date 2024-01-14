/* eslint-disable react/prop-types */
const Card = ({ comment, role, name, image }) => {
  return (
    <div className="  px-4 py-5 bg-white rounded-lg shadow-lg hover:shadow-xl hover:px-[15px]">
      <div className=" flex items-center gap-5 sm:gap-10">
        <div className=" ring-2 shadow-xl ring-red-500  rounded-full w-[100px] h-[100px] items-center justify-center text-center flex">
          <img
            className="  w-24 h-24 mx-auto rounded-full object-cover"
            src={image}
            alt="customer review"
          />
          <span></span>
        </div>

        <div className=" flex flex-col">
          <h1 className=" font-Headingfont text-[18px] sm:text-[20px] text-black/80 font-semibold">
            {name}
          </h1>
          <h4 className=" text-[12px] sm:text-[15px] text-black/60 font-medium">
            {role}
          </h4>
        </div>
      </div>

      <p className=" text-[12px]  sm:text-[15px] my-5 font-textFont">
        {comment}
      </p>
    </div>
  );
};
export default Card;
