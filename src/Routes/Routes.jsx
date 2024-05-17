import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import About from "../Pages/Home/About/About";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
          loader: ({params}) => fetch(`https://m-59-car-doctor-server.vercel.app/services/${params.id}`)
        },
        {
          path:"/bookings",
          element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;