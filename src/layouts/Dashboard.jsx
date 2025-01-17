import { Outlet } from "react-router";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <>
        <DashboardNav></DashboardNav>
        <hr />
        <div className="flex w-full">
            <Sidebar></Sidebar>
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
            <Outlet></Outlet>
            </div>
        </div>
      </>
      
    </div>
  );
};

export default Dashboard;
