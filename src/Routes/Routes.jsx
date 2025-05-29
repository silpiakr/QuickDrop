import { createBrowserRouter } from "react-router-dom";
import Main from "@/Layout/Main";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Auth/Login/Login";
import Register from "@/Pages/Auth/Register/Register";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import BookParcels from "@/Pages/BookParcels/BookParcels";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import MyParcels from "@/Pages/MyParcels/MyParcels";
import MyProfile from "@/Pages/MyProfile/MyProfile";
import MyDeliveryList from "@/Pages/MyDeliveryList/MyDeliveryList";
import MyReviews from "@/Pages/MyReviews/MyReviews";
import AllParcels from "@/Pages/AllParcels/AllParcels";
import AllUsers from "@/Pages/AllUsers/AllUsers";
import DeliveryMen from "@/Pages/DeliveryMen/DeliveryMen";
import Statistics from "@/Pages/Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
      // {
      //   path: 'parcels',
      //   element: <AllParcels></AllParcels>,
      // },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: 'book-parcle',
        element: <BookParcels></BookParcels>
      },
      {
        path: 'my-parcels',
        element: <MyParcels></MyParcels>
      },
      {
        path: 'my-profile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'delivery-list',
        element: <MyDeliveryList></MyDeliveryList>
      },
      {
        path: 'my-reviews',
        element: <MyReviews></MyReviews>
      },
      {
        path: 'all-parcels',
        element: <AllParcels></AllParcels>
      },
      {
        path: 'all-users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'delivery-men',
        element: <DeliveryMen></DeliveryMen>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      }
    ],
  },
]);
