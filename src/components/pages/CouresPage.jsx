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
import CouserPageContent from "../CouserPageContent";
// import logo from '../../../public/images/new_logo.png';

const CouresPage = () => {
  const { id } = useParams();
  const removeBlack = id.split('-').join(' ');

  return (
    <DataProvider id={removeBlack}>
      <CouserPageContent />
    </DataProvider>
  );
};
export default CouresPage;
