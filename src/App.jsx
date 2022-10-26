import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import WebCamTest from "./pages/webcamtest";
import LandingPage from "./pages/LandingPage";
import Navbar from "../src/components/Navbar";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/videobooth" element={<WebCamTest />} />
        </Routes>

        <ToastContainer />
      </ChakraProvider>
    </div>
  );
}

export default App;
