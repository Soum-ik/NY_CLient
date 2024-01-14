/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const PageLayout = ({ children, contact }) => {
  return (
    <div>
      <Navbar contact={contact} />
      {children}
      <Footer />
    </div>
  );
};
export default PageLayout;
