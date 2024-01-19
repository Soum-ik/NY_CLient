/* eslint-disable react/prop-types */
import { layout } from "../style/style";
import CustomData from "./CustomData";
import Layout from "./Layout/layout";

const CustomComponent = ({ Data, img, dic, offer, imageSize, button }) => {
  return (
    <Layout>
      <section className={`${layout.section} w-full gap-5`}>
        {/* left section */}
        {button ? (
          <CustomData
            offer={offer}
            heading={Data}
            tittle={dic}
            button={button}
          />
        ) : (
          <CustomData offer={offer} heading={Data} tittle={dic} />
        )}

        {/* right section */}
        <div className={`${layout.sectionReverse} `}>
          {/* <div className=" candy absolute   top-0 -left-28   z-10 w-[60%] h-[60%] rounded-full"></div>
            <div className=" absolute left-0 bottom-0   z-90 w-[50%] h-[50%] rounded-full"></div> */}
          <img
            className={` object-cover max-w-xl rounded-md shadow-xl shadow-neutral-700/25 ${imageSize}`}
            src={img}
            alt=""
          />
        </div>
      </section>
    </Layout>
  );
};
export default CustomComponent;
