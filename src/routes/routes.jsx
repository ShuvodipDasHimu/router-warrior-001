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
        hydrateFallbackElement: <p>Loading....</p>,
      },
      {
        path: "/bookings",
        Component: Bookings,
        hydrateFallbackElement: <p>Loading....</p>,
      },
      {
        path: "/appointments",
        Component: Appointments,
        hydrateFallbackElement: <p>Loading....</p>,
      },
      {
        path: "/blogs",
        Component: Blogs,
        hydrateFallbackElement: <p>Loading....</p>,
      },
      {
        path: "/doctor-details/:id",
        Component: DoctorDetails,
        hydrateFallbackElement: <p>Loading....</p>,
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
