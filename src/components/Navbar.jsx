import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return <div className='bg-[#EFEFEF]'>
    <div className="navbar w-8/10 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/bookings'>My Bookings</NavLink></li>
        <li><NavLink to='blogs'>Blogs</NavLink></li>
        <li><NavLink to='contact'>Contact Us</NavLink></li>
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <img src="https://i.ibb.co.com/HTD6jSWR/logo.png" alt="logo" />
    <h1 className='font-bold text-4xl'>Phudu</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-sm md:text-lg font-medium gap-10">
       <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/bookings'>My Bookings</NavLink></li>
        <li><NavLink to='blogs'>Blogs</NavLink></li>
        <li><NavLink to='contact'>Contact Us</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn bg-blue-500 text-xl text-white rounded-2xl font-semibold pb-1">Emergency</button>
  </div>
</div>
  </div>
};

export default Navbar;