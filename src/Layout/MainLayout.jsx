import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
           <section className="flex justify-between p-5 shadow-lg mb-3">
            <div className="text-2xl font-bold">Amazon</div>
            <nav>
               <ul className="flex gap-3">
    
                <NavLink
                to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-400 p-1 px-2 rounded-lg" : ""
                    }>
                   Home
                   </NavLink>
                <NavLink
                to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ?  "bg-red-400 p-1 px-2 rounded-lg" : ""
                    }>
                  Products
                   </NavLink>

                   <NavLink
                to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-400 p-1 px-2 rounded-lg" : ""
                    }>
                 Dashboard
                   </NavLink>
                </ul> 
            </nav>


           
            </section> 

            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;