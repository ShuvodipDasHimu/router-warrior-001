import React from 'react';
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const {
    id,
    name,
    education,
    experience,
    registrationNumber,
    image
  } = doctor;

  return (
   <div className='max-w-8/12 mx-auto'>
       <div className='flex flex-col items-center gap-2 p-10 bg-white w-[400px] mx-auto rounded-lg'>
      <img src={image} alt="" className='object-cover w-46 h-50 rounded-md'/>
      <div className='flex'>
      <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
           Available
         </span>
         <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full">
           {experience}+ Years Experience
         </span>
      </div>
      <h1 className='text-lg font-semibold'>{name}</h1>
      <p className="text-sm text-gray-600">{education}</p>
      <p className="text-sm text-gray-500 mt-1">Reg No: {registrationNumber}</p>
      <Link
        key={id}
        to={`/doctor-details/${doctor.id}`}
        className="mt-4 inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white w-1/2"
      >
        View Details
      </Link>
    </div>
   </div>
  );
};

export default DoctorCard;
