/* eslint-disable react/prop-types */

const Card = ({ image, name, btn, shortD, id, contactForm }) => {
  console.log(name, "name");
  return (
    <div className="z-30 flex flex-col items-center justify-center space-y-4 rounded-2xl bg-white/70 px-8 py-10 duration-500">
      <img className="h-[200px] w-[200px]" src={image} alt="" />
      <h3 className="text-center text-2xl font-semibold text-black/85">
        {name}
      </h3>
      <p className="line-clamp-3 max-w-xs text-center opacity-70">
        {shortD}
      </p>
      {contactForm ? (
        <button className="botton flex cursor-pointer items-center gap-2 px-3 py-3 text-center">
          <a href={`#form`}>{btn}</a>
        </button>
      ) : (
        <button className="botton flex cursor-pointer items-center gap-2 px-3 py-3 text-center">
          <a href={`/course/${name}`}>{btn}</a>
        </button>
      )}
    </div>
  );
};
export default Card;
