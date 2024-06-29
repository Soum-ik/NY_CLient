import Layout from "../Layout/layout";
import { support } from "./data";
export default function Support() {
  return (
    <Layout>
      <div className=" sm:px-10">
        <h1 className=" text-4xl font-semibold">
          Carrere Support & Access Study Material{" "}
        </h1>
        <div className=" grid sm:grid-cols-2 grid-cols-1 my-10 gap-5 sm:gap-10">
          {support.map((item, index) => (
            <div
              data-aos="zoom-out-up"
              data-aos-duration="500"
              className=" bg-color text-white   px-5 py-6 rounded-md shadow-xl hover:px-[15px] duration-300 ease-in-out flex items-center  gap-5 sm:gap-10"
              key={index}
            >
              <div>{<item.icon className="" size={50} />}</div>
              <div className=" flex  space-y-2 flex-col">
                <h1 className=" font-extralight text-[12px] tracking-widest">
                  {item.name}
                </h1>
                <h1 className=" text-[20px]  font-semibold">{item.nameMain}</h1>
                <p className=" opacity-70  text-[14px] ">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
