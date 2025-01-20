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
import Login from "../pages/Login";
import Subscribers from "../pages/Dashboard/Admin/Subscribers";
import Trainers from "../pages/Dashboard/Admin/Trainers";
import AddClass from "../pages/Dashboard/Admin/AddClass";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import TrainerHome from "../pages/Dashboard/Trainer/TrainerHome";
import AddSlot from "../pages/Dashboard/Trainer/AddSlot";
import ManageSlots from "../pages/Dashboard/Trainer/ManageSlots";
import AddForum from "../pages/Dashboard/AddForum";
import MemberHome from "../pages/Dashboard/Member/MemberHome";
import ActivityLog from "../pages/Dashboard/Member/ActivityLog";
import BookedTrainer from "../pages/Dashboard/Member/BookedTrainer";
import Profile from "../pages/Dashboard/Member/Profile";
import Welcome from "../pages/Dashboard/Welcome";
import AppliedTrainers from "../pages/Dashboard/Admin/AppliedTrainers";
import AppliedTrainerDetails from "../pages/Dashboard/Admin/AppliedTrainerDetails";
import SignUp from "../pages/SignUp";
import ForgotPass from "../pages/ForgotPass";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/forgot-pass',
                element: <ForgotPass></ForgotPass>
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
                element: <Welcome></Welcome>
            },
            {
                path: 'admin-home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'trainers',
                element: <Trainers></Trainers>
            },
            {
                path: 'applied-trainers',
                element: <AppliedTrainers></AppliedTrainers>
            },
            {
                path: 'applied-trainers/:id',
                element: <AppliedTrainerDetails></AppliedTrainerDetails>
            },
            {
                path: 'add-class',
                element: <AddClass></AddClass>
            },
            {
                path: 'subscribers',
                element: <Subscribers></Subscribers>
            },
            {
                path: 'trainer-home',
                element: <TrainerHome></TrainerHome>
            },
            {
                path: 'add-slot',
                element: <AddSlot></AddSlot>
            },
            {
                path: 'manage-slots',
                element: <ManageSlots></ManageSlots>
            },
            {
                path: 'add-forum',
                element: <AddForum></AddForum>
            },
            {
                path: 'member-home',
                element: <MemberHome></MemberHome>
            },
            {
                path: 'activity-log',
                element: <ActivityLog></ActivityLog>
            },
            {
                path: 'booked-trainer',
                element: <BookedTrainer></BookedTrainer>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
        ]
    },
])

export default Router;