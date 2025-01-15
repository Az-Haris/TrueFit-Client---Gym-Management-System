import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";

const Main = () => {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <FooterSection></FooterSection>
    </>
  );
};

export default Main;
