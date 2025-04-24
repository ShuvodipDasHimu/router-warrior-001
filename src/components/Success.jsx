import React from 'react';
import CountUp from 'react-countup';

const Success = () => {
  return (
    <div className='px-10 py-16 w-8/10 mx-auto'>
      <h1 className='font-bold text-5xl text-center mb-4'>We Provide Best Medical Services</h1>
      <p className='text-gray-500 font-medium text-center text-lg'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
      <div className='grid grid-cols-4 mt-12'>
        <div className="p-10 bg-white w-8/10 rounded-lg">
          <img className='w-16 mb-4' src="https://i.ibb.co.com/ZvB5cfw/success-doctor.png" alt="" />
          <h1 className='text-6xl mb-4 font-extrabold'><CountUp start={0} end={199} duration={5} suffix="+" /></h1>
          <p className='text-2xl font-semibold text-gray-400'>Total Doctors</p>
        </div>

        <div className="p-10 bg-white w-8/10 rounded-lg">
          <img className='w-16 mb-4' src="https://i.ibb.co.com/md0vQsr/success-review.png" alt="" />
          <h1 className='text-6xl mb-4 font-extrabold'><CountUp start={0} end={467} duration={5} suffix="+" /></h1>
          <p className='text-2xl font-semibold text-gray-400'>Total Reviews</p>
        </div>

        <div className="p-10 bg-white w-8/10 rounded-lg">
          <img className='w-16 mb-4' src="https://i.ibb.co.com/GvVncWQX/success-patients.png" alt="" />
          <h1 className='text-6xl mb-4 font-extrabold'><CountUp start={0} end={1900} duration={5} suffix="+" /></h1>
          <p className='text-2xl font-semibold text-gray-400'>Patients</p>
        </div>

        <div className="p-10 bg-white w-8/10 rounded-lg">
          <img className='w-16 mb-4' src="https://i.ibb.co.com/Kpspn164/success-staffs.png" alt="" />
          <h1 className='text-6xl mb-4 font-extrabold'><CountUp start={0} end={300} duration={5} suffix="+" /></h1>
          <p className='text-2xl font-semibold text-gray-400'>Total Staffs</p>
        </div>
      </div>
    </div>
  );
};

export default Success;