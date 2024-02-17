/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Layout from "./Layout/layout";
import axios from "axios";
import config from "../../config";

export default function Welcome() {
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${config.apiUrl}about/banner`);
      // /
      setImage(res.data[0].Image);
    };
    fetch();
  }, []);
  const [image, setImage] = useState("");
  console.log(image);
  return (
    <div className=" mt-2  min-h-[40vh] xs:min-h[60vh] sm:min-h-[75vh] object-fill bg-cover bg-black relative">
      <img
        src={image}
        className=" opacity-60 w-full  object-cover  z-50 max-h-[40vh] xs:max-h[60vh] sm:max-h-[75vh]"
      />
      <Layout>
        <div className=" px-10 sm:px-20 sm:min-w-[1400px] bg-fixed absolute top-0 py-8 sm:py-16 z-50">
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
