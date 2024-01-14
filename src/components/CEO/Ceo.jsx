import { layout } from "../../style/style";
import CustomData from "../CustomData";
import Layout from "../Layout/layout";
import { bio, name } from "./info";
import image from "../../../public/images/CEO.jpg";

const CEO = () => {
  return (
    // <div className="mt-10 py-10">
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
        <span className=" hidden sm:block mt-40 absolute left-[750px] font-medium tracking-wider text-maincolor">
          CHAIRMAN
        </span>
        {/* <span className=" hidden sm:block mt-40 absolute -top-[130px] font-medium  tracking-wider">Board of director</span> */}
        <CustomData heading={name} tittle={bio} more={"More"} />
      </section>
    </Layout>
    // </div>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default CEO;
