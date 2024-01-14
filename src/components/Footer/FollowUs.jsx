/* eslint-disable react/prop-types */
export default function FollowUs({ link, icon }) {
  return (
    <>
      <a href={link || "#"} target="_blank" rel="noreferrer">
        <div
          className="h-8 w-8   border 
           rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-500"
        >
          {icon}
        </div>
      </a>
    </>
  );
}
