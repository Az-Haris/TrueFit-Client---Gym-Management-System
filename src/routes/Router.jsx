import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Main";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <div>err</div>
    },
    {
        path: '/',
        element: <MainLayout></MainLayout>
    },
])

export default Router;