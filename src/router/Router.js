import {createBrowserRouter} from "react-router-dom"
import Main from "../layout/Main.js";
import Home from "../pages/home/Home.js";


const router =createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    },
]);

export default router;