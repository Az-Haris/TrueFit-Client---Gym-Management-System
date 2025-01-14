import "../../index.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-24" alt="Logo" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 uppercase">

        
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>Home</p> <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>


        <NavLink to={"/all-trainer"} className="flex flex-col items-center gap-1">
          <p>All Trainer</p> <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>


        <NavLink to={"/classes"} className="flex flex-col items-center gap-1">
          <p>All Classes</p> <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>


        <NavLink to={"/community"} className="flex flex-col items-center gap-1">
          <p>Community</p> <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>


    </div>
  );
};

export default Navbar;
