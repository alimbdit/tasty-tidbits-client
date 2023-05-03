import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Recipes from "../pages/Home/Recipes/Recipes";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('http://localhost:5000/chef')
      },
      {
        path: 'recipe/:_id',
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params._id}`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch('http://localhost:5000/blog')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
