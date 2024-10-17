import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
