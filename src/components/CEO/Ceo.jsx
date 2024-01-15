import { layout } from "../../style/style";
import CustomData from "../CustomData";
import Layout from "../Layout/layout";
import { bio, name } from "./info";
// import image from "../../../public/images/CEO.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const CEO = () => {
  const [image, setImage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/aboutus/ceo");
      setImage(data.data[0].image);
      // console.log( );
    };
    fetchData();
  }, []);

  return (
    <div className="mt-10 py-10">
      <Layout>
        <h1 className="   text-[45px] font-semibold text-black/70">
          Our <br />
          <span>Leadership</span>
        </h1>
        <section
          className={`${layout.section} w-full justify-between gap-16 relative`}
        >
          {/* left section */}
          <div className={`${layout.sectionImgReverse} `}>
            <img
              className={` object-cover sm:max-w-xl rounded-md shadow-xl shadow-neutral-700/25 items-center max-w-[285px]`}
              src={image}
              alt="CEO"
            />
          </div>

          {/* right section */}

          {/* <span className=" hidden sm:block mt-40 absolute -top-[130px] font-medium  tracking-wider">Board of director</span> */}
          <CustomData heading={name} tittle={bio} more={"More"} />
        </section>
      </Layout>
    </div>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default CEO;
