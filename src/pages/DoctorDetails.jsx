import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/doctors.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(doc => doc.id === Number(id));
        setDoctor(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading doctor details...</p>;
  if (!doctor) return <p>Doctor not found.</p>;

  const {
    name,
    image,
    education,
    speciality,
    fee,
    workplace,
    registrationNumber,
    availability,
  } = doctor;

  return (
    <div className="max-w-8/10 mx-auto p-4">
      <div className='text-center px-6 py-12 bg-white rounded-lg mb-4'>
        <h2 className="text-3xl font-bold mb-4">Doctor’s Profile Details</h2>
        <p className='text-gray-600 text-lg font-medium w-2/3 mx-auto'>This is a dedicated page where we display comprehensive information about each of our individual doctors, including their background, qualifications, specialties, experience, and availability for appointments."</p>
      </div>
      <div className="flex gap-6 px-8 py-10 bg-white">
        <img src={image} alt={name} className="w-100 object-cover rounded-lg" />
        <div>
          <h3 className="text-3xl font-bold mb-2">{name}</h3>
          <p className='text-gray-500 text-lg mb-2'>{education}</p>
          <p className='text-gray-500 text-lg mb-2'>{speciality}</p>
          <p className='text-gray-500 text-lg mb-2'>Working at:</p>
          <p className='font-semibold text-xl mb-2'>{workplace}</p>
          <hr className='border border-2 border-dashed text-gray-300'/>
          <p className='text-gray-400 font-medium'>Reg No: {registrationNumber}</p>
          <hr className='border border-2 border-dashed text-gray-300 mb-2'/>
          <span className="flex flex-wrap gap-2 items-center">
          Availability:{" "}
          {availability.map((day, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-600 px-2 py-1 rounded-xl text-sm"
            >
              {day}
            </span>
          ))}
          </span>
          <p>Consultation Fee: <span className='text-blue-400 font-semibold'>Taka: {fee} <span className='font-light text-gray-500'>(incl. Vat)</span> <span className='text-blue-400 font-light'>Per consultation</span></span></p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;