import React from 'react';
import Hero from '../components/Hero.';
import DoctorsContainer from '../components/DoctorsContainer';
import Success from '../components/Success';

const Home = () => {
  return (
    <>
    <Hero></Hero>
    <DoctorsContainer></DoctorsContainer>
    <Success></Success>
    </>
  );
};

export default Home;