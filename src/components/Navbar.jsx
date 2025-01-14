import "../index.css";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router";
import { Button } from "flowbite-react";
import { FaRegUser } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="navbar container mx-auto px-3 flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <img src={assets.logo} className="w-24" alt="Logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 uppercase">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>Home</p>{" "}
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to={"/trainers"} className="flex flex-col items-center gap-1">
          <p>All Trainer</p>{" "}
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to={"/classes"} className="flex flex-col items-center gap-1">
          <p>All Class</p>{" "}
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to={"/community"} className="flex flex-col items-center gap-1">
          <p>Community</p>{" "}
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-3">
        <Button size="sm" color="blue">
          Login / Register
        </Button>

        <div className="group relative">
          <FaRegUser className="text-2xl sm:text-4xl cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 border rounded-md">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <BiMenuAltRight
          onClick={() => setVisible(true)}
          className="text-4xl sm:text-5xl cursor-pointer sm:hidden"
        />
      </div>



      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="text-gray-600 mt-5 px-3">
          <div className="flex items-center justify-between border-b-2 pb-5 mb-10">
            <Link onClick={() => setVisible(false)} to={"/"}>
              <img src={assets.logo} className="w-24" alt="Logo" />
            </Link>
            <button onClick={() => setVisible(false)}>
              <RxCross1 className="text-2xl text-red-500 font-bold cursor-pointer" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <NavLink
              onClick={() => setVisible(false)}
              to={"/"}
              className="py-2 pl-5 border"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/trainers"}
              className="py-2 pl-5 border"
            >
              All Trainer
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/classes"}
              className="py-2 pl-5 border"
            >
              All Class
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/community"}
              className="py-2 pl-5 border"
            >
              Community
            </NavLink>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
