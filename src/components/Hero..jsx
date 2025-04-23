import React from 'react';

const Hero = () => {
  return <div className='w-9/10 mx-auto mt-8 text-center'>
  <h1 className='font-extrabold text-5xl w-6/10 mx-auto'>Dependable Care, Backed by Trusted Professionals.</h1>
  <p className='font-medium text-lg text-gray-400 w-6/10 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
  <input placeholder='Search any Doctor'type='text'
    className='w-2/3 h-12 px-4 mb-3  bg-white border border-gray-300 rounded-2xl shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline'/>
<button className="btn bg-blue-500 text-white rounded-2xl font-semibold">Search Now</button>
  <div className='flex flex-col gap-8 items-center justify-center lg:flex-row mt-8'>
    <img className='lg:w-[500px]' src="https://i.ibb.co.com/4gKx7rSW/banner-img-1.png" alt="" />
    <img className='lg:w-[500px]' src="https://i.ibb.co.com/spSS5907/banner2.jpg" alt=""/>
  </div>
</div>
};

export default Hero;