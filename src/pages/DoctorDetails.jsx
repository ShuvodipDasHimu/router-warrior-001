import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleBookNow = () => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const alreadyBooked = bookings.includes(id);

    if (alreadyBooked) {
      toast.error(`You have already booked Dr. ${doctor.name}`);
      return;
    }

    bookings.push(id);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    toast.success(`Successfully booked Dr. ${doctor.name}`);

    setTimeout(() => {
      navigate("/bookings");
    }, 2000);
  };

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
      <ToastContainer />
      <div className='text-center px-6 py-12 bg-white rounded-lg mb-4'>
        <h2 className="text-3xl font-bold mb-4">Doctor’s Profile Details</h2>
        <p className='text-gray-600 text-lg font-medium w-2/3 mx-auto'>
          This is a dedicated page where we display comprehensive information about each of our individual doctors, including their background, qualifications, specialties, experience, and availability for appointments.
        </p>
      </div>

      <div className="flex gap-6 px-8 py-10 bg-white">
        <img src={image} alt={name} className="w-100 object-cover rounded-lg" />
        <div>
          <h3 className="text-3xl font-bold mb-2">{name}</h3>
          <p className='text-gray-500 text-lg mb-2'>{education}</p>
          <p className='text-gray-500 text-lg mb-2'>{speciality}</p>
          <p className='text-gray-500 text-lg mb-2'>Working at:</p>
          <p className='font-semibold text-xl mb-2'>{workplace}</p>
          <hr className='border border-2 border-dashed text-gray-300' />
          <p className='text-gray-400 font-medium'>Reg No: {registrationNumber}</p>
          <hr className='border border-2 border-dashed text-gray-300 mb-2' />
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
          <p>
            Consultation Fee: <span className='text-blue-400 font-semibold'>Taka: {fee} <span className='font-light text-gray-500'>(incl. Vat)</span> <span className='text-blue-400 font-light'>Per consultation</span></span>
          </p>

          <button
            onClick={handleBookNow}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
