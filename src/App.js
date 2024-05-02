import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './Components/Layout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout/>} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Nopage />} /> */}
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
