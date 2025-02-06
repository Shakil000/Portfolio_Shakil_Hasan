import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import WhatIDo from "../WhatIDo/WhatIDo";
import ToolsTechnologies from "../ToolsTechnologies/ToolsTechnologies";
import Footer from "../Footer/Footer";

const MainLayoutes = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <WhatIDo></WhatIDo>
            </section>
            <section>
                <ToolsTechnologies></ToolsTechnologies>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayoutes;