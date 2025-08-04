import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NAvbar from './componant/Home/NAvbar/NAvbar';
import Layout from './componant/Home/Layout/Layout';
import About from './componant/Home/About/About';
import Portfolio from './componant/Home/portfolio/Portfolio';
import Contant from "src/App.jsx ./componant/Contant/Contant";
import Home from './componant/Home/Home';
import Notfound from './componant/contant/Notfound/Notfound';
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [

        {
          path: "/About",
          element: <About />,
        },
        {
          index: true,
          element: <Home />,
        },


        {
          path: "/Portfolio",
          element: <Portfolio />,
        },

        {
          path: "/Contant",
          element: <Contant />,
        },

             {
          path: "*",
          element: <Notfound />,
        },

      ],
    },

  ]);
  return <RouterProvider router={routes} />;
}

export default App;
