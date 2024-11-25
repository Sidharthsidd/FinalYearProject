import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa"
import {MdOutlineSpaceDashboard,MdOutlineManageAccounts, MdDashboardCustomize} from "react-icons/md"
import {HiTemplate} from "react-icons/hi"
import {TiThMenuOutline} from "react-icons/ti"
import logo from "/logo.png"
import { BiLogOutCircle } from "react-icons/bi";
import {TbReorder} from "react-icons/tb"



const sharedLinks=(
  <>
  <li className="mt-3"><Link to ="/dashboard"><MdOutlineSpaceDashboard/> Dashboard</Link></li>
   <li className="mt-3"><Link to ="/menu"><TiThMenuOutline/> Menu</Link></li>
   <li className="mt-3"><Link to ="/orders"><TbReorder/> Orders</Link></li>
   </>
)
function DashboadLayout() {
  return (
    <div><div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center  justify-center">
      {/* Page content here */}
      <div className="flex items-center justify-start  sm:items-center ms:items-start ">
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
        Open drawer
      <MdDashboardCustomize/></label><button className="btn rounded-full px-6  flex items-center gap-2  bg-green text-w sm:hidden"><BiLogOutCircle />Logout</button></div>
      <div> 
      <Outlet/></div>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li> <Link to ="/dashboard"><img src={logo} alt="image" className="w-24 h-24 rounded-full object-cover"></img>
        <div className="badge badge-primary">Admin</div></Link></li>
        <hr></hr>
        <li><Link to="/dashboard" className=" "><MdOutlineSpaceDashboard/>Dashboard</Link></li>
        <li><Link to ="/dashboard/users"><FaUserAlt/>All user data</Link></li>
        <li><Link to ="/dashboard/users"><TiThMenuOutline/>Add Menu</Link></li>
        <li><Link to ="/dashboard/users"><MdOutlineManageAccounts/>ManageBookings</Link></li>
        <li><Link to ="/dashboard/users"><HiTemplate/>Manage Items</Link></li>
        <li><Link to ="/dashboard/users"><FaUserAlt/>All Users</Link></li>
        {/* shared links */}
        {sharedLinks} 
      </ul>
    </div>
  </div></div>
  )
}

export default DashboadLayout