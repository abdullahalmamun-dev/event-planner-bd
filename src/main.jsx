import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contacts from "./components/about/contact/Contacts";
import FAQs from "./components/about/faqs/FAQs";
import Journal from "./components/journal/Journal";
import Events from "./components/events/Events";
import EventDetails from "./components/events/EventDetails";
import Login from "./components/login/Login";
import Authprovider from "./providers/Authprovider";
import Register from "./components/register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>,
      },
      {
        path: "/faqs",
        element: <FAQs></FAQs>,
      },
      {
        path: "/journal",
        element: (
          <PrivateRoute>
            <Journal></Journal>
          </PrivateRoute>
        ),
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/events/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
