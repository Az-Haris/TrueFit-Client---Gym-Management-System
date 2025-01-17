import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Main";
import Home from "../pages/Home";
import AllTrainer from "../pages/AllTrainer";
import AllClass from "../pages/AllClass";
import TrainerDetails from "../pages/TrainerDetails";
import TrainerBooked from "../pages/TrainerBooked";
import PaymentPage from "../pages/Payment/PaymentPage";
import BeATrainer from "../pages/BeATrainer";
import Forum from "../pages/Forum";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../layouts/Dashboard";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
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
                path: '/trainers/:id/trainer-booked',
                element: <TrainerBooked></TrainerBooked>
            },
            {
                path: '/classes',
                element: <AllClass></AllClass>
            },
            {
                path: '/forum',
                element: <Forum></Forum>
            },
            {
                path: '/payment',
                element: <PaymentPage></PaymentPage>
            },
            {
                path: '/become-trainer',
                element: <BeATrainer></BeATrainer>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <div>hello dashboard</div>
            },
            {
                path: 'admin-home',
                element: <div>admin home</div>
            },
            {
                path: 'manage',
                element: <div>manage</div>
            },
        ]
    },
])

export default Router;