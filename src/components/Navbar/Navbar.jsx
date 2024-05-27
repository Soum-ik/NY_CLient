/* eslint-disable react/prop-types */
import styles from "../../style/style";
import MobileNav from "./MobileNav";
import NavContact from "./NavbarContact";
import Section from "./NavSection";
const Navbar = ({ contact }) => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth} `}>
          <NavContact />
        </div>
      </div>
      {contact && (
        <div className=" hidden sm:block mt-5 py-3 w-full bg-[#06074f]">
          <Section />
        </div>
      )}
      <div className="sm:hidden">
        <MobileNav />
      </div>
    </>
  );
};
export default Navbar;
