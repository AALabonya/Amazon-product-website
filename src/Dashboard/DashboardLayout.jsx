import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex">
          <div className="bg-white w-[20%] shadow-lg h-60 px-2">
              <ul>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/dashboard/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/dashboard/editprofile'>EditProfile</Link>
                </li>
              </ul>
             
          </div>
         <div className="w-[80%]">  
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;