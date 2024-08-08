import WhatsAppLink from "../WhatsApp";

import Work from "../WorkImag/Work";
import SayTO from "../sayToknow/Register";
import PageLayout from "../Layout/PageLayout";
import Welcome from "../welcome";
import Futures from "../Motivation/Feture";
import CEO from "../CEO/Ceo";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div className=" relative">
      <Helmet>
        {/* HTML Meta Tags */}
        <title>{`Farjax Institute of Technology`}</title>
        <meta name="description" content={'The Farjax Institute of Technology is a training institute that provides training in various technology-related courses'} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={`https://www.farjaxit.com/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={'Farjax Institute of Technology'} />
        <meta property="og:description" content={'The Farjax Institute of Technology is a training institute that provides training in various technology-related courses'} />
        {/* <meta p?roperty="og:image" content={hero.image} /> */}
      </Helmet>
      <PageLayout contact={true}>
        <Welcome />
        <Futures />
        <Work />
        <CEO />
        <SayTO />
      </PageLayout>

      <div className="  z-50 cursor-pointer h-16 rounded-full w-40  text-center bg-[#06074f]  backdrop-blur-3xl  bottom-20  hover:right-0 ease-in-out duration-300 sm:-right-5 fixed lg:flex shadow-sm  items-center justify-center hidden">
        {" "}
        <WhatsAppLink
          textSize={" text-[18px] text-white"}
          marginTop={""}
        />
      </div>
    </div>
  );
};
export default AboutPage;
