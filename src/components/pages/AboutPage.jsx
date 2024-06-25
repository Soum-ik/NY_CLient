import WhatsAppLink from "../WhatsApp";

import Work from "../WorkImag/Work";
import SayTO from "../sayToknow/Register";
import PageLayout from "../Layout/PageLayout";
import Welcome from "../welcome";
import Futures from "../Motivation/Feture";
import CEO from "../CEO/Ceo"; 

const AboutPage = () => {
  return (
    <div className=" relative">
      <PageLayout contact={true}>
        <Welcome />
        <Futures />
        <Work />
        <CEO />
        <SayTO />
      </PageLayout>
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
 