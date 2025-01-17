import { Button } from "flowbite-react";
import { assets } from "../../assets/assets";
import { Link } from "react-router";

const DashboardNav = () => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
      <Link to={"/dashboard"}>
        <img src={assets.logo} className="w-[max(10%,80px)]" alt="" />
      </Link>
      <Button color="blue" size="xs" pill className="px-5">
        Logout
      </Button>
    </div>
  );
};

export default DashboardNav;
