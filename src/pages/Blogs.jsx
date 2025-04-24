import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [faqs, setFaqs] = useState([]);
  
  useEffect(() => {
    fetch('/blogs.json')
      .then(response => response.json())
      .then(data => setFaqs(data.blogs))
      .catch(error => console.error('Error fetching blogs data:', error));
  }, []);
  
  return (
    <div className='w-8/10 mx-auto'>
      <h1 className='font-bold text-4xl text-center mt-10 mb-8'>Blogs</h1>
      <p className='mb-8 text-xl text-gray-500 text-center font-medium'>Let's explore some basic concepts that will make you a a good developer</p>
      {faqs.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 gap-10'>
          {faqs.map((faq, index) => (
            <div key={index} className='p-8 bg-white rounded-lg'>
              <h1 className='text-3xl font-bold mb-2'>{faq.question}</h1>
              <hr className='border border-dashed text-gray-300 mb-2'/>
              <h2 className='text-sky-600 font-medium text-xl'>Answer:</h2>
              <p className='text-lg font-light'>{faq.answer}</p>
              <hr className='border border-dashed text-gray-300 mb-2 mt-2'/>
              <p>Added at: {faq.date_added}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;