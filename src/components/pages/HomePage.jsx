// import Contact from "../Contact/Contact";
// import Testimonial from "../review/testimonal";
import Work from "../WorkImag/Work";
import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import WhatsAppLink from "../WhatsApp";
import SayTO from "../sayToknow/Register";
import PageLayout from "../Layout/PageLayout";
import NextStep from "../NextStep/NextStep";
import Contact from "../Contact/Contact";
import { Bot } from "../Bot/chatBot";
import { useFetch } from "../../libs/fetchData";
import config from "../../../config";
import { Helmet } from "react-helmet";
const HomePage = () => {
  const hero = useFetch(`${config.apiUrl}hero`);
  console.log(hero, 'hero data');

  return (
    <div className="">

      <Helmet>
        {/* HTML Meta Tags */}
        <title>{`Farjax Institute of Technology`}</title>
        <meta name="description" content={'The Farjax Institute of Technology is a training institute that provides training in various technology-related courses'} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={`https://www.farjaxit.com/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={'Farjax Institute of Technology'} />
        <meta property="og:description" content={'The Farjax Institute of Technology is a training institute that provides training in various technology-related courses'} />
        <meta property="og:image" content={hero.image} />
      </Helmet>

      <PageLayout contact={true}>
        <Hero hero={hero} />
        <Explore />
        <NextStep />
        <Contact />
        <Work />
        <SayTO />
      </PageLayout>
      <Bot />


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
export default HomePage;

