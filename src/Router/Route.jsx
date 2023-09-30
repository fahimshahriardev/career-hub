import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import Jobs from "../components/Jobs/Jobs";
import Statistics from "../components/Statistics/Statistics";
import Blogs from "../components/Blogs/Blogs";
import Error from "../components/Error/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
            
        },
        {
            path: '/jobs',
            element: <Jobs></Jobs>
        },
        {
            path: '/applied',
            element: <AppliedJobs></AppliedJobs>
        },{
            path: '/statistics',
            element: <Statistics></Statistics>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        }
      ]
    },
  ]);


  export default router;