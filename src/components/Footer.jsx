import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook , FaSquareXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
  <nav className='flex flex-row'>
    <img src="https://i.ibb.co.com/HTD6jSWR/logo.png" alt="logo" />
    <h1 className='font-bold text-3xl'>Phudu</h1>
  </nav>
  <ul className="grid grid-flow-col gap-6 font-semibold text-gray-500 text-lg">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/bookings'>My-Bookings</NavLink></li>
        <li><NavLink to='blogs'>Blogs</NavLink></li>
        <li><NavLink to='contact'>Contact Us</NavLink></li>
  </ul>
  <hr className='border border-1 border-[#0f0f0f28] w-3/5'/>
  <nav>
    <div className="grid grid-flow-col gap-4 items-center">
      <a href='https://www.facebook.com/' target='_blank'>
        <FaFacebook className='cursor-pointer text-blue-500' size='40'></FaFacebook>
      </a>
      <a href='https://x.com/' target='_blank'>
        <FaSquareXTwitter className='cursor-pointer' size='40'></FaSquareXTwitter>
      </a>
      <a href='https://www.linkedin.com/' target='_blank'>
        <FaLinkedin className='cursor-pointer text-cyan-600' size='40'></FaLinkedin>
      </a>
      <a href='https://www.youtube.com/' target='_blank'>
        <FaYoutube className='cursor-pointer text-red-500' size='45'></FaYoutube>
      </a>
    </div>
  </nav>
</footer>
};

export default Footer;