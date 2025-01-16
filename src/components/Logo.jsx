import { Link } from "react-router";
import { assets } from "../assets/assets";

const Logo = () => {
  return (
    <Link className="flex items-center gap-3" to={"/"}>
      <img src={assets.logo} className="w-24 md:w-32" alt="" />
    </Link>
  );
};

export default Logo;
