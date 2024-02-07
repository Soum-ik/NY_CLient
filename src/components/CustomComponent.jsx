/* eslint-disable react/prop-types */
import { layout } from "../style/style";
import CustomData from "./CustomData";
import Layout from "./Layout/layout";

const CustomComponent = ({ Data, img, dic, offer, imageSize, button, what }) => {
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
            what={what}
          />
        ) : (
          <CustomData offer={offer} heading={Data} tittle={dic} />
        )}

        {/* right section */}
        <div className={`${layout.sectionReverse} `}>
           
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
