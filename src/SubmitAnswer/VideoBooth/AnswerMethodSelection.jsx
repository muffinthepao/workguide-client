import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { joiResolver } from "@hookform/resolvers/joi";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useForm } from "react-hook-form";

import SelectCategories from "../../components/SelectCategories";

import { useAnswer } from "../../context/AnswerContext";



export default function AnswerMethodSelection() {

  const [showUrlModal, setShowUrlModal] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     // watch,
//     formState: { errors },
// } = useForm({
//     resolver: joiResolver(schema),
//     defaultValues: {
//         // email: "",
//         // password: "",

//         email: "mervin5@gmail.com",
//         password: "1234"
//     },
// });

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
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("video")}
                  style={{ fontSize: "3rem" }}
                />
                <p className="title-font font-medium text-3xl">Video Booth</p>
                <p className="leading-relaxed">Guided video booth</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("upload")}
                  style={{ fontSize: "3rem" }}
                />
                <h2 className="title-font font-medium text-3xl">Upload File(s)</h2>
                <p className="leading-relaxed">Upload up to 4x video parts</p>
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
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("left-long")}
                  style={{ fontSize: "3rem" }}
                />
                <h2 className="title-font font-medium text-3xl">BACK</h2>
                <p className="leading-relaxed">To question</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
        {showUrlModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 id="UrlFormHeader"className="text-3xl font-semibold">Submit via URL</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowUrlModal(false)}
                    >
                      <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <textarea
                      placeholder="Paste video URL here"
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                  <div>
                    <p className="text-left font-semibold pl-6 pb-1">Selet max. of 3 categories</p>
                    <SelectCategories />
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
                      Submit
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
