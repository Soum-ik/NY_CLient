import WhatsAppLink from "../WhatsApp";
import Work from "../WorkImag/Work";
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
import Contact from "../Contact/Contact";
import { DataProvider } from "../../Context/Context-api";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from '../../../public/images/new_logo.png';

const CouresPage = () => {
  const { id } = useParams();

  return (
    <DataProvider id={id}>
      <div className=" relative">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Course  - Farjax Institute of Technology</title>
          <meta name="description" content="The Farjax Institute of Technology is a training institute that provides training in various technology-related courses" />
          <link rel="canonical" href="https://www.farjaxit.com" />
          <link rel="icon" type="image/svg+xml" href={logo} />

          {/* facebook meta */}
          <meta charSet="utf-8" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Farjax Institute of Technology" />
          <meta name="description" content="The Farjax Institute of Technology is a training institute that provides training in various technology-related courses" />

          {/* twitter meta data */}
          <meta name="twitter:site" content="Farjax Institute of Technology" />
          <meta name="twitter:title" content="Farjax Institute of Technology" />
          <meta name="twitter:description" content="The Farjax Institute of Technology is a training institute that provides training in various technology-related courses" />
          <link rel="icon" type="image/svg+xml" href={logo} />
        </Helmet>
        <PageLayout>
          <Section />
          <BootCamp />
          <Timesection />
          <About />
          <Learn />
          <TimeLine />
          <Support />
          <NextStep />
          <Contact />
          <Work />
          {/* <Testimonial /> */}
          <SayTO />
        </PageLayout>
        <div className="  z-50 cursor-pointer h-16 rounded-full w-40  text-center bg-[#06074f]  border-red-500  backdrop-blur-3xl  bottom-20  hover:right-0 ease-in-out duration-300 sm:-right-5 fixed lg:flex shadow-sm shadow-red-500 items-center justify-center hidden">
          {" "}
          <WhatsAppLink
            textSize={" text-[18px]  text-white"}
            marginTop={""}
          />
        </div>
      </div>
    </DataProvider>
  );
};
export default CouresPage;
