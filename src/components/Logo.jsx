import { Link } from "react-router";
import { assets } from "../assets/assets";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={assets.logo} className="w-24 md:w-32" alt="" />
    </Link>
  );
};

export default Logo;
