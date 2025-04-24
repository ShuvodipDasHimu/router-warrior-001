import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Appointments from "../pages/Appointments";
import Blogs from "../pages/Blogs";
import DoctorDetails from "../pages/DoctorDetails";
import DoctorsContainer from "../components/DoctorsContainer";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/bookings",
        Component: Bookings,
      },
      {
        path: "/appointments",
        Component: Appointments,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/doctor-details/:id",
        Component: DoctorDetails,
      },
      {
        path: "/doctors",
        Component: DoctorsContainer,
        loader: () => fetch('/doctors.json'),
        hydrateFallbackElement: <p>Loading....</p>,
      },
    ],
  },
]);

export default router;
