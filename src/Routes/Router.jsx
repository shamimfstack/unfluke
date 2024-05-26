import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    }
])

export default router;