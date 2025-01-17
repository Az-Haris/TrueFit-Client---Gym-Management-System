import { NavLink } from "react-router";
import { MdHome } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="dashboard-link flex flex-col gap-4 pt-6 pl-[20%] text[15px]">

        
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"admin-home"}
        >
          <MdHome className="text-2xl" />{" "}
          <p className="hidden md:block">Admin Home</p>
        </NavLink>


        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"manage"}
        >
          <MdHome className="text-2xl" />{" "}
          <p className="hidden md:block">Admin Home</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
