import WhatsAppLink from "../WhatsApp";
import Work from "../WorkImag/Work";
import Contact from "../Contact/Contact";
import Testimonial from "../review/testimonal";
import SayTO from "../sayToknow/Register";
import PageLayout from "../Layout/PageLayout";
import NextStep from "../NextStep/NextStep";
import Section from "../Navbar/courseNav";
import BootCamp from "../Bootcapm/bootCapm";
import Timesection from "../Timeing/timesection";
import About from "../About/About";
import Learn from "../Learn/learn";
import TimeLine from "../Timeing/TimeLine";
import Support from "../support/Support";

const CouresPage = () => {
  return (
    <div className=" relative">
      <PageLayout>
        <Section />
        <BootCamp />
        <Timesection />
        <About />
        <Learn />
        <TimeLine />
        <Support />
        <NextStep />
        {/* <Contact /> */}
        <Work />
        <Testimonial />
        <SayTO />
      </PageLayout>
      <div className="  cursor-pointer h-16 rounded-full w-40  text-center bg-black/5  border-red-500  backdrop-blur-2xl  bottom-20  hover:right-0 ease-in-out duration-300 sm:-right-5 fixed sm:flex shadow-xl items-center justify-center hidden">
        {" "}
        <WhatsAppLink textSize={" text-[18px] font-bold"} marginTop={""} />
      </div>
    </div>
  );
};
export default CouresPage;
