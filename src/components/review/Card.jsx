/* eslint-disable react/prop-types */
const Card = ({ comment, role, name, image }) => {
  return (
    <div className=" min-w-[420px] px-4 py-5 my-5 snap-center bg-white rounded-lg shadow-lg hover:shadow-xl hover:px-[15px]">
      <div className=" flex items-center gap-5 sm:gap-10">
        {image && (
          <div className=" ring-2 shadow-xl ring-red-500  rounded-full w-[100px] h-[100px] items-center justify-center text-center flex">
            <img
              className="  w-24 h-24 mx-auto rounded-full object-contain"
              src={image}
              alt="customer review"
            />
          </div>
        )}

        <div className=" flex flex-col">
          <h1 className="  text-[18px] sm:text-[20px] text-black/80 font-semibold">
            {name}
          </h1>
          <p className="  text-[12px] sm:text-[15px] text-black/60 font-medium">
            {role}
          </p>
        </div>
      </div>

      <p className=" text-[10px] line-clamp-6 hover:line-clamp-[7] max-w-[360px]  sm:max-w-[400px]   sm:text-[13px] my-5 transition-all duration-700">
        {comment}
      </p>
    </div>
  );
};
export default Card;
