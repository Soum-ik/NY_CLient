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
        <meta charSet="utf-8" />
        <title>About Us - Farjax Institute of Technology</title>
        <link rel="canonical" href="https://www.farjaxit.com" />
 

        <meta property="og:title" content="Farjax Institute of Technology" />
        <meta name="description" content="The Farjax Institute of Technology is a training institute that provides training in various technology-related courses" />

        <PageLayout contact={true}>
          <Welcome />
          <Futures />
          <Work />
          <CEO />
          <SayTO />
        </PageLayout>
      </Helmet>

      <div className="  z-50 cursor-pointer h-16 rounded-full w-40  text-center bg-[#06074f]   bottom-20  hover:right-0 ease-in-out duration-300 sm:-right-5 fixed lg:flex shadow-sm shadow-red-500 items-center justify-center hidden">
        {" "}
        <WhatsAppLink
          textSize={" text-[18px]  text-white"}
          marginTop={""}
        />
      </div>
    </div>
  );
};
export default AboutPage;
