import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const DoctorsContainer = () => {
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/doctors.json")
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  const toggleShow = () => {
    setShowAll(prev => !prev);
  };

  const displayedDoctors = showAll ? doctors : doctors.slice(0, 6);
  const buttonLabel = showAll ? "Show Less" : "View All Doctors";

  return (
    <div className="text-center my-10">
      <h2 className="text-3xl font-bold mb-2">Our Expert Doctors</h2>
      <p className="text-gray-600 mb-8">Meet our team of highly experienced professionals</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 m-0">
        {displayedDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <button
        onClick={toggleShow}
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default DoctorsContainer;

