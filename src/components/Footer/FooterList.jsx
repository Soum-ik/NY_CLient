/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function FooterList({ items }) {
  const { name, menu } = items || {};
  // console.log(items);
  // console.log(name, "data footer");
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-5 w-full">
          <h4 className="mb-2 text-[20px] font-normal text-dark ">{name}</h4>
          <ul>
            {menu &&
              menu.map((menu, id) => {
                const { name, link } = menu || {};
                return (
                  <li key={id}>
                    <Link
                      target="_top"
                      to={link}
                      className=" block text-base leading-loose text-black/70 hover:text-black"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
