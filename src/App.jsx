import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Navbar from "../src/components/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Question from "./pages/Question"
import Questions from "./pages/Questions/Questions"
import AnswerMethodSelection from "./pages/VideoBooth/AnswerMethodSelection";
import VideoBooth from "./pages/VideoBooth/VideoBooth";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AnswerMethodSelection />} />
          <Route path="login" />
          <Route path="join" />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:questionId" element={<Question />}/>
          <Route path="/questions/:questionId/answers/:answerId" />
          <Route path="/questions/:questionId/answers/submit-answer" />
          <Route path="/guides"/>
          <Route path="/guides/:guideId" />
          <Route path="/user" />
          <Route path="/user/questions" />
          <Route path="/user/answers" />
          <Route path="/videobooth" element={<VideoBooth />} />
        </Routes>

        <ToastContainer />
    </div>
  );
}

export default App;
