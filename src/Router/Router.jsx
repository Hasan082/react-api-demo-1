import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Mainlayout from "../Layout/Mainlayout";
import AllPost from "../Pages/AllPost";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
  


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <AllPost />
      },
    ]
  },
]);

export default router;