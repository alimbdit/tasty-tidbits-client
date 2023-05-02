import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Recipes from "../pages/Home/Recipes/Recipes";
import ErrorPage from "../pages/ErrorPage";

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
        path: 'recipe/:id',
        element: <Recipes></Recipes>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
