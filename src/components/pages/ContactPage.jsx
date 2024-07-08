import SayTo from "../sayToknow/Register";
import PageLayout from "../Layout/PageLayout";
import Chatbot from "../Bot/chatBot";
import Question, { Contact_us } from "../Officelocation/Question";
import NextStep from "../NextStep/NextStep";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/layout";
import axios from "axios";
import config from "../../../config";
import { Helmet } from "react-helmet";
import logo from '../../../public/images/new_logo.png';

function ContactPage() {
  return (
    <div className="relative">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - Farjax Institute of Technology</title>
        <meta name="description" content="The Farjax Institute of Technology is a training institute that provides training in various technology-related courses" />
        <link rel="canonical" href="https://www.farjaxit.com" />                <img src={logo} alt="" />

        {/* facebook meta */}
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Farjax Institute of Technology" />


        <PageLayout contact={true}>
          <ContactBaner />
          <Question />
          <Chatbot />
          <Contact_us />
          <p className="text-center max-w-xl mx-auto font-semibold mt-10 text-4xl">
            The Information Technology Course we offer
          </p>
          <NextStep />
          <SayTo />
        </PageLayout>
      </Helmet>
    </div>
  );
}

export default ContactPage;

// contact banner
function ContactBaner() {
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${config.apiUrl}about/banner`);
      // /
      setImage(res.data[1].Image);
    };
    fetch();
  }, []);
  const [image, setImage] = useState("");

  return (
    <div className=" z-0 min-h-[40vh] xs:min-h[60vh] sm:min-h-[75vh] object-fill bg-cover bg-black relative">
      <img
        src={image}
        className=" opacity-60 w-full  object-cover  z-50 max-h-[40vh] xs:max-h[60vh] sm:max-h-[75vh]"
      />
      <Layout>
        <div className=" px-10 sm:px-20 sm:min-w-[1400px] bg-fixed absolute top-0 py-8 sm:py-16 z-50">
          <div>
            <h1 className=" text-white text-[12px]">Connect With Us</h1>
            <hr className=" border-y-2 w-full" />
          </div>

          <h1 className=" text-[30px] sm:text-[60px]  mt-20 sm:mt-32  text-white ">
            How can we help
          </h1>
        </div>
      </Layout>
    </div>
  );
}
