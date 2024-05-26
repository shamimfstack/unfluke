import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx"
import Home from "../Pages/Home/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default router;