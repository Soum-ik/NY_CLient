import styles from "../../style/style";
import MobileNav from "./MobileNav";
import NavContact from "./NavbarContact";
import Section from "./NavSection";
const Navbar = ({ contact }) => {
  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} `}
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
      >
        <div className={`${styles.boxWidth} `}>
          <NavContact />
        </div>
      </div>
      {contact && (
        <div
          className=" hidden sm:block mt-5 py-3 w-full bg-gradient-to-r from-red-800 to-red-700"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Section />
        </div>
      )}
      <div
        className="sm:hidden"
        data-aos="fade-top"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <MobileNav />
      </div>
    </>
  );
};
export default Navbar;
