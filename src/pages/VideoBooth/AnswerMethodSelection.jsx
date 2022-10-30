import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  icon,
  regular,
  solid,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import ButtonStandard from "../../components/ButtonStandard";

export default function AnswerMethodSelection() {
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
                <p class="title-font font-medium text-3xl">
                  Video Booth
                </p>
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
                <h2 class="title-font font-medium text-3xl">
                  Upload File(s)
                </h2>
                <p class="leading-relaxed">Upload up to 4x video parts</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div class="border-2 border-slate-300 text-slate-400 px-4 py-6 rounded-lg hover:scale-105 duration-300 ease-in-out hover:border-yellow-400 hover:text-yellow-400">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("link")}
                  style={{ fontSize: "3rem" }}
                />
                <h2 class="title-font font-medium text-3xl">
                  URL
                </h2>
                <p class="leading-relaxed">Submit an answer via video URL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font mx-auto">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap justify-center -m-4 text-center">
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-300 px-4 py-6 rounded-lg text-gray-400 hover:border-gray-500 hover:text-gray-600 ">
                <FontAwesomeIcon
                  className="mb-3"
                  icon={solid("left-long")}
                  style={{ fontSize: "3rem" }}
                />
                <h2 class="title-font font-medium text-3xl">
                  BACK
                </h2>
                <p class="leading-relaxed">To question</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
