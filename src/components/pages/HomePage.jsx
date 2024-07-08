import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import WhatsAppLink from "../WhatsApp";

import Work from "../WorkImag/Work";
// import Contact from "../Contact/Contact";
import Testimonial from "../review/testimonal";
import SayTO from "../sayToknow/Register";
import PageLayout from "../Layout/PageLayout";
import NextStep from "../NextStep/NextStep";
import Contact from "../Contact/Contact";
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div className="">

      <Helmet>
        <title>Home - Farjax Institute of Technology</title>
        <meta name="description" content="The Farjax Institute of Technology is a training institute that provides training in various technology-related courses" />


        <meta property="og:title" content="Farjax Institute of Technology" />
        <meta property="og:description" content="The Farjax Institute of Technology is a training institute that provides training in various technology-related courses" />
        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwNLcCUBaC99r3nN10jX1asJQgcmxVzbtkgg&s" />
        <meta property="og:url" content="https://www.farjaxit.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageLayout contact={true}>
        <Hero />
        <Explore />
        <NextStep />
        <Contact />
        <Work />
        <SayTO />
      </PageLayout>  


      {/* <div className="  z-50 cursor-pointer h-16 rounded-full w-40  text-center bg-[#06074f]  backdrop-blur-3xl  bottom-20  hover:right-0 ease-in-out duration-300 sm:-right-5 fixed lg:flex shadow-sm  items-center justify-center hidden">
        {" "}
        <WhatsAppLink
          textSize={" text-[18px] text-white"}
          marginTop={""}
        />
      </div> */}
    </div>
  );
};
export default HomePage;
