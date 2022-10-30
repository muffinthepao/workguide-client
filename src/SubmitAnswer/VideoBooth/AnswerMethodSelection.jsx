import React, {useState} from "react";

import "flowbite";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function AnswerMethodSelection() {

  const [showUrlModal, setShowUrlModal] = useState(false);


  return (
    <>
      <section class="text-gray-600 body-font mx-auto">
        <div class="container px-5 py-24 pb-4 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500">
              SUBMIT ANSWER
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Select ONE of the three options to submit and answer
            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("video")}
                  style={{ fontSize: "3rem" }}
                />
                <p class="title-font font-medium text-3xl">Video Booth</p>
                <p class="leading-relaxed">Guided video booth</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("upload")}
                  style={{ fontSize: "3rem" }}
                />
                <h2 class="title-font font-medium text-3xl">Upload File(s)</h2>
                <p class="leading-relaxed">Upload up to 4x video parts</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <button         type="button"
                onClick={() => setShowUrlModal(true)}>
                  <FontAwesomeIcon
                    className="mb-3"
                    icon={solid("link")}
                    style={{ fontSize: "3rem" }}
                  />
                  <h2 class="title-font font-medium text-3xl">URL</h2>
                  <p class="leading-relaxed">Submit an answer via video URL</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font mx-auto">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap justify-center -m-4 text-center">
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("left-long")}
                  style={{ fontSize: "3rem" }}
                />
                <h2 class="title-font font-medium text-3xl">BACK</h2>
                <p class="leading-relaxed">To question</p>
              </div>
            </div>
          </div>
        </div>
      </section>    

      <>
      {showUrlModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowUrlModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowUrlModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowUrlModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
    </>
  );
}
