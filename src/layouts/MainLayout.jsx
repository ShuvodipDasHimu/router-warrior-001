import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </>
  );
};

export default MainLayout;