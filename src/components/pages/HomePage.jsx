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

const HomePage = () => {
  return (
    <div className="  ">
      <PageLayout contact={true}>
        <Hero />
        <Explore />
        <NextStep />
        <Contact />
        <Work />
        {/* <Testimonial /> */}
        <SayTO />
      </PageLayout>

      <div className="  z-50 cursor-pointer h-16 rounded-full w-40  text-center bg-gradient-to-r from-red-800 to-red-700  border-red-500  backdrop-blur-3xl  bottom-20  hover:right-0 ease-in-out duration-300 sm:-right-5 fixed lg:flex shadow-sm shadow-red-500 items-center justify-center hidden">
        {" "}
        <WhatsAppLink
          textSize={" text-[18px] font-bold text-white"}
          marginTop={""}
        />
      </div>
    </div>
  );
};
export default HomePage;
