import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='flex items-center justify-center mt-36 flex-col gap-6'>
      <img src="https://i.ibb.co.com/bMXNS0cq/error.jpg" alt="404 error" className='p-4 bg-white rounded-3xl shadow-2xl'/>
      <h1 className='text-red-400 font-bold text-5xl'>404 - Page Not Found</h1>
      <p className='font-medium text-xl'>Oops! The page you're looking for doesn't exist.</p>
      <button className='btn bg-blue-500 text-xl text-white rounded-2xl font-semibold px-6 pb-5 pt-4 h-14'><Link to="/">Go Back Home</Link></button>
    </div>
    {/* <h1 className='font-bold text-2xl'>No Doctor Found!</h1>
    <p className='text-lg'>No Doctor Found with this registration No.</p>
    <p>{}Dynamic</p>
    <button className='btn'>View All Doctors</button> */}
    </>
  );
};

export default ErrorPage;