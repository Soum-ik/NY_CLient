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
// import logo from '../../../public/images/new_logo.png';

const CouresPage = () => {
  const { id } = useParams();
  const removeBlack = id.split('-').join(' ');

  const getMetaTags = () => {
    switch (id) {
      case 'SQL-Server-Database-Admin':
        return {
          title: 'SQL-Server-Database-Admin',
          description: 'Master the art of SQL Server Database Administration with our expert-led course. Elevate your skills and advance your career today',
          image: 'https://images.app.goo.gl/VWAhjP6rgsm3q9bU6',
        };
      case 'Azure-SQL-Database-Administrator':
        return {
          title: 'Azure-SQL-Database-Administrator',
          description: 'Explore the intricacies of managing Azure SQL Server databases with our comprehensive course on Azure SQL Server Database Administration. Designed for both novice and experienced professionals, this course delves into the essential concepts and practical techniques required to effectively administer Azure SQL databases',
          image: 'https://images.app.goo.gl/AuMgQX6e9EVhLjrL6',
        };
      case 'Oracle-Database-Administrator':
        return {
          title: 'Oracle-Database-Administrator',
          description: 'This course provides essential training for managing Oracle databases, covering installation, configuration, maintenance, and security. Participants will learn through both theory and practical exercises, preparing them for Oracle certification exams and real-world challenges.',
          image: 'https://example.com/images/default.jpg',
        };

      default: {
        return {

        };
      }
    }
  };

  const meta = getMetaTags();

  return (
    <DataProvider id={removeBlack}>
      <Helmet>
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={`https://www.farjaxit.com/${id}`} />
      </Helmet>
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
