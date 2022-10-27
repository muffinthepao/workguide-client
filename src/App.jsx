import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import WebCamTest from "./pages/webcamtest";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "../src/components/Navbar";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/videobooth" element={<WebCamTest />} />
        </Routes>

        <ToastContainer />
    </div>
  );
}

export default App;
