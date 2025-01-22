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
import MemberHome from "../pages/Dashboard/Member/MemberHome";
import ActivityLog from "../pages/Dashboard/Member/ActivityLog";
import BookedTrainer from "../pages/Dashboard/Member/BookedTrainer";
import Profile from "../pages/Dashboard/Member/Profile";
import Welcome from "../pages/Dashboard/Welcome";
import AppliedTrainers from "../pages/Dashboard/Admin/AppliedTrainers";
import AppliedTrainerDetails from "../pages/Dashboard/Admin/AppliedTrainerDetails";
import SignUp from "../pages/SignUp";
import ForgotPass from "../pages/ForgotPass";
import PrivateRoute from "./PrivateRoute";
import MemberRoute from "./MemberRoute";
import AdminRoute from "./AdminRoute";
import TrainerRoute from "./TrainerRoute";
import AddForum from "../pages/Dashboard/AddForum";
import AdminTrainerRoute from "./AdminTrainerRoute";

const Router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/forgot-pass",
        element: <ForgotPass></ForgotPass>,
      },
      {
        path: "/trainers",
        element: <AllTrainer></AllTrainer>,
      },
      {
        path: "/trainers/:id",
        element: <TrainerDetails></TrainerDetails>,
      },
      {
        path: "/trainers/:id/trainer-booked",
        element: <TrainerBooked></TrainerBooked>,
      },
      {
        path: "/classes",
        element: <AllClass></AllClass>,
      },
      {
        path: "/forum",
        element: (
          <AdminTrainerRoute>
            <Forum></Forum>
          </AdminTrainerRoute>
        ),
      },
      {
        path: "/payment",
        element: <PaymentPage></PaymentPage>,
      },
      {
        path: "/become-trainer",
        element: <BeATrainer></BeATrainer>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Welcome></Welcome>,
      },

      // Admin Routes
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "trainers",
        element: (
          <AdminRoute>
            <Trainers></Trainers>
          </AdminRoute>
        ),
      },
      {
        path: "applied-trainers",
        element: (
          <AdminRoute>
            <AppliedTrainers></AppliedTrainers>
          </AdminRoute>
        ),
      },
      {
        path: "applied-trainers/:id",
        element: (
          <AdminRoute>
            <AppliedTrainerDetails></AppliedTrainerDetails>
          </AdminRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <AdminRoute>
            <AddClass></AddClass>
          </AdminRoute>
        ),
      },
      {
        path: "subscribers",
        element: (
          <AdminRoute>
            <Subscribers></Subscribers>
          </AdminRoute>
        ),
      },

      // Trainer Routes
      {
        path: "trainer-home",
        element: (
          <TrainerRoute>
            <TrainerHome></TrainerHome>
          </TrainerRoute>
        ),
      },
      {
        path: "add-slot",
        element: (
          <TrainerRoute>
            <AddSlot></AddSlot>
          </TrainerRoute>
        ),
      },
      {
        path: "manage-slots",
        element: (
          <TrainerRoute>
            <ManageSlots></ManageSlots>
          </TrainerRoute>
        ),
      },
      {
        path: "add-forum",
        element: <AddForum></AddForum>,
      },
      {
        path: "member-home",
        element: (
          <MemberRoute>
            <MemberHome></MemberHome>
          </MemberRoute>
        ),
      },
      {
        path: "activity-log",
        element: (
          <MemberRoute>
            <ActivityLog></ActivityLog>
          </MemberRoute>
        ),
      },
      {
        path: "booked-trainer",
        element: (
          <MemberRoute>
            <BookedTrainer></BookedTrainer>
          </MemberRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <MemberRoute>
            <Profile></Profile>
          </MemberRoute>
        ),
      },
    ],
  },
]);

export default Router;
