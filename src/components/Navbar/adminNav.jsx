import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div>
      <nav className=" mt-3 sm:flex items-center justify-between hidden font-Headingfont">
        {/* left bar */}
        <div className=" flex items-center gap-3 justify-center">
          <Link to={"/"} className="">
            <img
              className=" w-[230px]"
              src="/images/mainLogo.png"
              alt="Farjax Institute of Technology"
            />
          </Link>
          <p className=" ">PROFESSIONAL EDUCATION</p>
        </div>

        {/* right bar */}
        <div className=" flex justify-center items-center gap-5 text-[20px]">
          <div className=" space-x-10  font-medium">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Coures</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default AdminNav;
