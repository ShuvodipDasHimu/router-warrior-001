import React from 'react';

const ErrorPage = () => {
  return (
    <>
    <h1 className='font-bold text-2xl'>No Doctor Found!</h1>
    <p className='text-lg'>No Doctor Found with this registration No.</p>
    <p>{}Dynamic</p>
    <button className='btn'>View All Doctors</button>
    </>
  );
};

export default ErrorPage;