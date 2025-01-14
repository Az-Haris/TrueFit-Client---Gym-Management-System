import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </>
    );
};

export default Main;