import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../../Layoutes/MainLayoutes";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Project from "../../Pages/Project/Project";
import Contact from "../../Pages/Contact/Contact";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayoutes></MainLayoutes>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'project',
                element: <Project></Project>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
        ]
    },
  
])

export default Router;