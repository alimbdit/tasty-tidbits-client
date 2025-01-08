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
import Conditions from "../components/TermsConditions/Conditions";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('https://tasty-tidbits-server-alimbdit.vercel.app/chef')
      },
      {
        path: "recipe/:_id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tasty-tidbits-server-alimbdit.vercel.app/chef/${params._id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () =>
          fetch("https://tasty-tidbits-server-alimbdit.vercel.app/blog"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      // {
      //   path: '/conditions',
      // element: <Conditions></Conditions>
      // }
    ],
  },
]);

export default router;
