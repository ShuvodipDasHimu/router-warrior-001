import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [bookedDoctors, setBookedDoctors] = useState([]);

  useEffect(() => {
    const bookingIds = JSON.parse(localStorage.getItem("bookings")) || [];

    fetch("/doctors.json")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(doc => bookingIds.includes(String(doc.id)));
        setBookedDoctors(filtered);
      });
  }, []);

  const cancelAppointment = (id) => {
    const updatedBookings = bookedDoctors.filter(doc => doc.id !== id);
    setBookedDoctors(updatedBookings);

    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    const updated = stored.filter(bookedId => bookedId !== String(id));
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {bookedDoctors.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-2">My Today Appointments</h1>
          <p className="text-center text-gray-500 mb-6">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
          </p>

          {bookedDoctors.map(doctor => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-lg font-semibold">{doctor.name}</h2>
                  <p className="text-gray-500">{doctor.education}</p>
                </div>
                <p className="text-sm text-gray-500">
                  Appointment Fee: {doctor.fee} Taka + Vat
                </p>
              </div>
              <button
                onClick={() => cancelAppointment(doctor.id)}
                className="w-full border border-red-500 text-red-500 hover:bg-red-50 transition px-4 py-2 rounded-full font-medium"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center mt-16">
          <p className="text-5xl font-bold mb-4">You have no appointments booked.</p>
          <p className="text-gray-500 mb-6 text-lg">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition mb-56"
          >
            Book an Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

export default Bookings;
