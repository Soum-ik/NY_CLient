import { Tab } from "@headlessui/react";
import axios from "axios";
import config from "../../../config";
import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const res = async () => {
      const data = await axios.get(`${config.apiUrl}images`);
      setCategories(data.data);
    };
    res();
  }, []);

  return (
    <div className="w-full py-10 px-10 ">
      <Tab.Group>
        <Tab.List className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
          {categories.map((item, index) => (
            <Tab
              key={index}
              className="w-full bg-black/5  outline-none rounded-lg py-2.5 text-sm font-Poppins leading-5"
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2  flex flex-col items-center justify-center relative">
          {categories.map((item, index) => (
            <Tab.Panel
              key={index}
              className={classNames(
                "rounded-xl bg-white p-3 text-black/80 max-w-2xl"
              )}
            >
              <h1 className=" text-[18px]  text-center">{item.title}</h1>

              <div className="p-4 h-auto max-w-2xl  sm:min-h-[350px]  min-w-[280px] rounded-2xl mt-10  bg-black/5">
                <img
                  className=" bg-cover rounded-2xl"
                  src={item.image}
                  alt=""
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
