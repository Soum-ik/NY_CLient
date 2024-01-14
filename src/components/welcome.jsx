import React from "react";
import Layout from "./Layout/layout";

export default function Welcome() {
  return (
    <div className=" mt-2 sm:mt-5 min-h-[40vh] xs:min-h[60vh] sm:min-h-[80vh] backgroundImage object-fill bg-cover bg-black relative">
      <span className=" min-h-[40vh] xs:min-h[60vh] sm:min-h-[80vh] backdrop-blur-sm bg-black/50 w-full absolute   top-0 left-0">
        {" "}
      </span>
      <Layout>
        <div className=" px-10  sm:px-20 sm:min-w-[1400px] absolute py-8 sm:py-16 ">
          <div>
            <h1 className=" text-white text-[12px]">WHO WE ARE</h1>
            <hr className=" border-y-2 w-full" />
          </div>

          <h1 className=" text-[30px] sm:text-[60px]  mt-20 sm:mt-32  text-white ">
            Building On belief
          </h1>
        </div>
      </Layout>
    </div>
  );
}
