import { createBrowserRouter } from "react-router-dom";
import Main from "@/Layout/Main";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Auth/Login/Login";
import Register from "@/Pages/Auth/Register/Register";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import AllParcels from "@/Pages/AllParcels/AllParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />, // Handle routing errors gracefully
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: 'parcels',
        element: <AllParcels></AllParcels>,
      }
    ],
  },
]);
