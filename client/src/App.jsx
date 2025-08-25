import LayoutRoute from "@components/LayoutRoute.jsx";
import Explore from "@screens/Expolre";
import HomeScreen from "@screens/Home";
import PostCard from "@screens/PostCard";

import PostDetails from "@screens/PostDetails";
import PostScreen from "@screens/PostScreen/inex";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <LayoutRoute />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/post/:slug",
        element: <PostScreen />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
