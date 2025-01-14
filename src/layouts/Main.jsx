import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
            </footer>
        </>
    );
};

export default Main;