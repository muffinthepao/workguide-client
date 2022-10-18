import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import WebCamTest from './pages/webcamtest';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<WebCamTest />} />
      </Routes>
    </div>
  );
}

export default App;
