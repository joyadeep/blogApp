import React, { useState } from 'react';
import Createblog from './pages/Createblog';
import Home from './pages/Home';
// import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Route,Routes,useNavigate,Navigate} from "react-router-dom"

function App() {
  const[loggedin,setLoggedin]=useState(false);
  const navigate=useNavigate();
  return (
    <>
    {/* <Routes> */}
      {/* <Route path='/' element={<Home/>} /> */}
      {/* <Route path="/login" element={<Login/>} /> */}
      {/* <Route path="/signup" element={<Signup/>} /> */}
      {/* {loggedin && <> */}
      {/* <Route path="/createblog" element={<Createblog/>} /> */}
      {/* </> */}
      {/* } */}
      {/* <Route path="*" element={<Navigate to="/"/>} /> */}
    {/* </Routes> */}
     {/* TODO: create header + routing   */}
    {/* <Home/> */}
    <Createblog/>
      {/* <Signup/> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
