import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import SubmitUrlModal from "./SubmitUrl/SubmitUrlModal";
import SubmitVideoFileModal from "./SubmitVideoFile/SubmitVideoFileModal";

export default function AnswerMethodSelection() {
  
  const [showUrlModal, setShowUrlModal] = useState(false);
  const [showVideoFileModal, setShowVideoFileModal] = useState(false);

  const { questionId } = useParams();

  return (
    <>
      <section className="text-gray-600 body-font mx-auto">
        <div className="container px-5 py-24 pb-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500">
              SUBMIT ANSWER
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Select ONE of the three options to submit and answer
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <Link to={`/questions/${questionId}/answers/submit-answer/videobooth`} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("video")}
                  style={{ fontSize: "3rem" }}
                />
                <p className="title-font font-medium text-3xl">Video Booth</p>
                <p className="leading-relaxed">Guided video booth</p>
              </div>
            </Link>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <button type="button" onClick={() => setShowVideoFileModal(true)}>
                  <FontAwesomeIcon
                    className="mb-3"
                    icon={solid("upload")}
                    style={{ fontSize: "3rem" }}
                  />
                  <h2 className="title-font font-medium text-3xl">Upload File(s)</h2>
                  <p className="leading-relaxed">Upload up to 4x video parts</p>
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <button type="button" onClick={() => setShowUrlModal(true)}>
                  <FontAwesomeIcon
                    className="mb-3"
                    icon={solid("link")}
                    style={{ fontSize: "3rem" }}
                  />
                  <h2 className="title-font font-medium text-3xl">URL</h2>
                  <p className="leading-relaxed">Submit an answer via video URL</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mx-auto">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap justify-center -m-4 text-center">
            <Link to={`/questions/${questionId}`}className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("left-long")}
                  style={{ fontSize: "3rem" }}
                />
                <h2 className="title-font font-medium text-3xl">BACK</h2>
                <p className="leading-relaxed">To question</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <SubmitUrlModal showUrlModal={showUrlModal} setShowUrlModal={setShowUrlModal}/>
      <SubmitVideoFileModal showVideoFileModal={showVideoFileModal} setShowVideoFileModal={setShowVideoFileModal}/>

      
    </>
  );
}
