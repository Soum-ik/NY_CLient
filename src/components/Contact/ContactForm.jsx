/* eslint-disable react/prop-types */
 
export default function ContactInp({  type, placeholder, pad,  ...rest }) {
  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={` ${pad} w-full rounded-md shadow-md  border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-4 text-black`}
          {...rest}
        />
      </div>
    </>
  );
}