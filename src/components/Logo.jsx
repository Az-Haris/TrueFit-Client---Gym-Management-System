import { Link } from "react-router";
import { assets } from "../assets/assets";

const Logo = () => {
  return (
    <Link className="flex items-center gap-3" to={"/"}>
      <img src={assets.logo} className="w-20" alt="" />
      <p className="text-2xl font-black text-gray-800">TrueFit</p>
    </Link>
  );
};

export default Logo;
