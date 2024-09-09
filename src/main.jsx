import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/home/Home';
import About from './components/about/About';
import PostFeature from './components/postFeature/PostFeature';
import Contacts from './components/about/contact/Contacts';
import FAQs from './components/about/faqs/FAQs';
import Pricing from './components/about/pricing/Pricing';
import Journal from './components/journal/Journal';
import Events from './components/events/Events';
import EventDetails from './components/events/EventDetails';
import Login from './components/login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/postfeature",
      element: <PostFeature></PostFeature>,
    },
    {
      path: "/about/contact",
      element: <Contacts></Contacts>,
    },
    {
      path: "/about/faqs",
      element: <FAQs></FAQs>,
    },
    {
      path: '/about/pricing',
      element: <Pricing></Pricing>,
    },
    {
      path: '/journal',
      element: <Journal></Journal>,
    },
    {
      path: '/events',
      element: <Events></Events>,
    },
    {
      path: '/events/:id',
      element: <EventDetails></EventDetails>,
    },
    {
      path: '/login',
      element: <Login></Login>,
    }
  ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
