import { layout } from "../../style/style";
import CustomData from "../CustomData";
import Layout from "../Layout/layout";
import { useFetch } from "../../libs/fetchData";
import config from "../../../config";
const CEO = () => {
  const CEO = useFetch(`${config.apiUrl}aboutus/ceo`);

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
              src={CEO.image}
              alt="CEO"
            />
          </div>

          {/* right section */}

          {/* <span className=" hidden sm:block mt-40 absolute -top-[130px] font-medium  tracking-wider">Board of director</span> */}
          <CustomData
            heading={CEO.heading}
            tittle={CEO.dic}
            more={CEO.button}
            sub={CEO.sub}
            customStyle={`md:-ml-10`}
          />
        </section>
      </Layout>
    </div>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default CEO;
