import { Link } from "react-router-dom";
import config from "../../../config";
import { useFetch } from "../../libs/fetchData";

const AdminNav = () => {
  const { image } = useFetch(`${config.apiUrl}logo`);
  return (
    <div className=" ">
      <nav className=" mt-3 sm:flex items-center justify-between hidden font-Headingfont">
        {/* left bar */}
        <div className=" flex items-center gap-3 justify-center">
          <Link to={"/"} className="mix-blend-multiply">
            <img
              className=" w-[230px] h-20 object-cover"
              src={image}
              alt="Farjax Institute of Technology"
            />
          </Link> 
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
