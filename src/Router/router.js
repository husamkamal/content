import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import ServiceSingle from "../Pages/ServiceSingle";
import Portfolio from "../Pages/portfolio";
import PortfolioSingle from "../Pages/PortfolioSingle";
import Mail from "../Pages/Mail";
import Pricing from "../Pages/Pricing";
import BlogGrid from "../Pages/BlogGrid";
import BlogGridSidebar from "../Pages/BlogGridSidebar";
import BlogSingle from "../Pages/blogSingle";
import Contanct from "../Pages/Contanct";
import NotFound from "../Pages/NotFound";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<NotFound />,
      children:[
        {
          path: '/',
          element:<Home/>
        },
        {
          path: '/about',
          element:<About/>
        }
        ,
        {
          path: '/services',
          element:<Services/>
        },
        {
          path: '/service-single',
          element:<ServiceSingle/>
        },
        {
          path: '/portfolio',
          element:<Portfolio/>
        },
        {
          path: '/portfolio-single',
          element:<PortfolioSingle/>
        }
        ,
        {
          path: '/mail',
          element:<Mail/>
        }
        ,
        {
          path: '/mail',
          element:<Mail/>
        },
        {
          path: '/blog',
          element:<BlogGrid/>
        },
        {
          path: '/blog-single',
          element:<BlogSingle/>
        },
        {
          path: '/contact',
          element:<Contanct/>
        }
      ]
    },
  ]);

  export default router;