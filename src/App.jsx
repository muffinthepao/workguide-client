import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';

import WebCamTest from './pages/webcamtest';


import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<WebCamTest />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
