import React from "react";
import PageLayout from "./Layout/PageLayout";
import Section from "./Navbar/courseNav";
import BootCamp from "./Bootcapm/bootCapm";
import Timesection from "./Timeing/timesection";
import About from "./About/About";
import Learn from "./Learn/learn";
import TimeLine from "./Timeing/TimeLine";
import Support from "./support/Support";
import NextStep from "./NextStep/NextStep";
import Contact from "./Contact/Contact";
import Work from "./WorkImag/Work";
import SayTO from "../components/sayToknow/Register";
import WhatsAppLink from "./WhatsApp";
import { useData } from "../Context/Context-api";
import { Helmet } from 'react-helmet';
function CouserPageContent() {
    const { data } = useData();
    console.log(data, 'data checking');

    if (!data) {
        return <h1>Loading.....</h1>;
    }

    return (
        <div className=" relative">
            <Helmet>
                {/* HTML Meta Tags */}
                <title>{`${data.name} - Farjax Institute of Technology`}</title>
                <meta name="description" content={data.shortDetails} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={`https://www.farjaxit.com/course/${data.heading}`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={data.name || 'Farjax Institute of Technology'} />
                <meta property="og:description" content={data.shortDetails || 'The Farjax Institute of Technology is a training institute that provides training in various technology-related courses'} />
                <meta property="og:image" content={data.banner} />
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
            <div className="  z-50 cursor-pointer h-16 rounded-full w-40  text-center bg-[#06074f]  backdrop-blur-3xl  bottom-20  hover:right-0 ease-in-out duration-300 sm:-right-5 fixed lg:flex shadow-sm  items-center justify-center hidden">
                {" "}
                <WhatsAppLink
                    textSize={" text-[18px] text-white"}
                    marginTop={""}
                />
            </div>;
        </div>);

}

export default CouserPageContent;
