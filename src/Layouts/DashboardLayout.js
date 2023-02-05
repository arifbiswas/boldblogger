
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex flex-col  lg:flex-row '>
            <div className='flex flex-row  lg:flex-col items-center gap-2 w-[93%] lg:w-96 my-2 mx-2 lg:mx-3'>
             <NavLink className="bg-[#8482ff] py-1 lg:p-2 w-52 lg:w-full text-white font-bold rounded-md text-center" to='/dashboard'>Dashboard</NavLink>
             <NavLink className="bg-[#8482ff] py-1 lg:p-2 w-52 lg:w-full text-white font-bold rounded-md text-center" to='/dashboard/addTags'>Add Tags</NavLink>
             <NavLink className="bg-[#8482ff] py-1 lg:p-2 w-52 lg:w-full text-white font-bold rounded-md text-center" to='/dashboard/addContent'>AddContent</NavLink>
             {/* <NavLink className="bg-[#8482ff] p-2 w-full text-white font-bold rounded-md text-center" to='/dashboard'>Dashboard</NavLink> */}
            </div>
            <div className='flex-1 '>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;