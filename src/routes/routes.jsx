import { createBrowserRouter, Routes } from "react-router";
import Bookings from '../pages/Bookings'
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Appointments from "../pages/Appointments";
import Blogs from "../pages/Blogs";
import DoctorDetails from "../pages/DoctorDetails";
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: '/bookings',
        Component:<Bookings></Bookings>
      },
      {
        path: '/appointments',
        Component: <Appointments></Appointments>,
      },
      {
        path: '/blogs',
        Component: <Blogs></Blogs>,
      },
      {
        path: 'doctor-details',
        Component: <DoctorDetails></DoctorDetails>
      }
    ],
  },
]);

export default router