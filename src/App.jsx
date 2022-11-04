import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import AnswerMethodSelection from "./pages/SubmitAnswer/AnswerMethodSelection";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import AuthPage from "./pages/AuthPage/AuthPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "../src/components/Navbar";
import Question from "./pages/Question";
import Questions from "./pages/Questions/Questions";
import VideoBooth from "./pages/SubmitAnswer/VideoBooth/VideoBooth";
import { AppProvider } from "./context/AppContext";
// import WebcamStreamCapture from "./pages/webcamtest"

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />}/>
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:questionId" element={<Question />} />
          <Route path="/questions/:questionId/answers/:answerId" />
          <Route
            path="/questions/:questionId/answers/submit-answer"
            element={<AnswerMethodSelection />}
          />
          <Route
            path="/questions/:questionId/answers/submit-answer/videobooth"
            element={<VideoBooth />}
          />
          <Route path="/guides" />
          <Route path="/guides/:guideId" />
          <Route path="/user" />
          <Route path="/user/questions" />
          <Route path="/user/answers" />
        </Routes>

        <ToastContainer />
      </AppProvider>
    </div>
  );
}

export default App;
