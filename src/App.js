import React from 'react';
import CreateAcc from './components/form/CreateAcc';
import Login from './components/form/Login';
import NewC from './components/form/NewC';
import Products from './components/products/Products';
import Productmain from './components/products/Productmain';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <Outlet></Outlet>
      </div>
      {/* <CreateAcc></CreateAcc> */}
      {/* <Login></Login> */}
      {/* <NewC></NewC> */}
      {/* <Products></Products> */}
      {/* <Productmain></Productmain> */}
    </>
  );
}

export default App;
