import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../../Layoutes/MainLayoutes";
import Home from "../../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayoutes></MainLayoutes>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default Router;