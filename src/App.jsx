import React from 'react';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </div>
  );
};

export default App;