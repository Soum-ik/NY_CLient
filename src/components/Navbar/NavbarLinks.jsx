/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Navlink = ({icon, path}) => {
  return (
    <Link to={path}>
      {icon}
    </Link>
  );
};
export default Navlink;
