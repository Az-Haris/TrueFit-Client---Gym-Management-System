import { NavLink } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { LuCirclePlus } from "react-icons/lu";
import { LuFileUser } from "react-icons/lu";
import { LuBookUser } from "react-icons/lu";
import { MdFormatListBulleted, MdFormatListBulletedAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxActivityLog } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="dashboard-link flex flex-col gap-4 pt-6 pl-[20%] text[15px]">
        {/* Admin Routes */}

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"admin-home"}
        >
          <AiOutlineHome className="text-2xl" />{" "}
          <p className="hidden md:block">Admin Home</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"trainers"}
        >
          <LuFileUser className="text-2xl" />{" "}
          <p className="hidden md:block">Trainers</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"add-class"}
        >
          <LuCirclePlus className="text-2xl" />{" "}
          <p className="hidden md:block">Add Class</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"subscribers"}
        >
          <LuBookUser className="text-2xl" />{" "}
          <p className="hidden md:block">Subscribers</p>
        </NavLink>





        {/* Trainer Routes */}

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"trainer-home"}
        >
          <AiOutlineHome className="text-2xl" />{" "}
          <p className="hidden md:block">Trainer Home</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"add-slot"}
        >
          <MdFormatListBulletedAdd className="text-2xl" />{" "}
          <p className="hidden md:block">Add Slot</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"manage-slots"}
        >
          <MdFormatListBulleted className="text-2xl" />{" "}
          <p className="hidden md:block">Manage Slots</p>
        </NavLink>



        {/* Admin & Trainer Route */}

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"new-post"}
        >
          <LuCirclePlus className="text-2xl" />{" "}
          <p className="hidden md:block">New Forum Post</p>
        </NavLink>




        {/* Member Route */}

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"member-home"}
        >
          <AiOutlineHome className="text-2xl" />{" "}
          <p className="hidden md:block">Member Home</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"activity-log"}
        >
          <RxActivityLog className="text-xl" />{" "}
          <p className="hidden md:block">Activity Log</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"booked-trainer"}
        >
          <LuFileUser className="text-2xl" />{" "}
          <p className="hidden md:block">Booked Trainer</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg rounded-r-none"
          to={"booked-trainer"}
        >
          <CgProfile className="text-2xl" />{" "}
          <p className="hidden md:block">Profile</p>
        </NavLink>



      </div>
    </div>
  );
};

export default Sidebar;
