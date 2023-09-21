import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Products from "../Products/Products";
import Product from "../Product/Product";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Profile from "../Profile/Profile";
import EditProfile from "../EditProfile/EditProfile";
import Dashboard from "../Dashboards/Dashboard";

const router = createBrowserRouter([
 {
    path:'/',
    element:<MainLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/products',
            element:<Products/>,
            loader:()=> fetch(`https://dummyjson.com/products`)
        },
        {
          path:'/products/:id',
          element:<Product/>,
          loader:({params})=> fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
            path:'/dashboard',
            element:<DashboardLayout/>,
            children:[
                {
                    path:'/dashboard/',
                    element:<Dashboard/>
                  },
                {
                  path:'/dashboard/profile',
                  element:<Profile/>
                },
                {
                    path:"/dashboard/editprofile",
                    element:<EditProfile></EditProfile>
                }
            ]
        }
    ]
 }

])

export default router;