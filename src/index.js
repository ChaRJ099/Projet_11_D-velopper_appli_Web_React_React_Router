import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/Home.css';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/Errorpage';
import reportWebVitals from './reportWebVitals'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './pages/Details';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Apropos",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Details",
    element: <Details />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);



reportWebVitals();
