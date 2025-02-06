import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayoutes = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <section className="min-h-screen">
            <Outlet></Outlet>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayoutes;