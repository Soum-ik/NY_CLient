import { Tab } from "@headlessui/react";
import Categories from "./WorkData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="w-full py-10 px-10 ">
      <Tab.Group>
        <Tab.List className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
          {Categories.map((Categorie) => (
            <Tab
              key={Categorie.id}
              className="w-full bg-black/5  outline-none rounded-lg py-2.5 text-sm font-Poppins leading-5"
            >
              {Categorie.name}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2  flex flex-col items-center justify-center relative">
          {Categories.map((Categorie) => (
            <Tab.Panel
              key={Categorie.id}
              className={classNames("rounded-xl bg-white p-3 text-black/80")}
            >
              <h1 className=" text-[18px] font-Poppins text-center">
                {Categorie.title}
              </h1>

              <div
                data-aos="fade-down"
                className="p-4 h-auto max-w-2xl  sm:min-h-[350px] min-w-[280px] rounded-2xl mt-10  bg-black/5"
              >
                <img
                  className=" bg-cover rounded-2xl"
                  src={Categorie.Image}
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
