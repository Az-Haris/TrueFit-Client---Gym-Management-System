import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Main";
import Home from "../pages/Home";
import AllTrainer from "../pages/AllTrainer";
import AllClass from "../pages/AllClass";
import Community from "../pages/Community";
import TrainerDetails from "../pages/TrainerDetails";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <div>err</div>
    },
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/trainers',
                element: <AllTrainer></AllTrainer>
            },
            {
                path: '/trainers/:id',
                element: <TrainerDetails></TrainerDetails>
            },
            {
                path: '/classes',
                element: <AllClass></AllClass>
            },
            {
                path: '/community',
                element: <Community></Community>
            },
        ]
    },
])

export default Router;