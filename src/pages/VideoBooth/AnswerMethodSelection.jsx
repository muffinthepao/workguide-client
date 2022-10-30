import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import ButtonStandard from "../../components/ButtonStandard";

export default function AnswerMethodSelection() {


  return (
    <>
      <div className="relative pt-24 bg-no-repeat bg-cover bg-center mx-10">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-wrap w-full flex-col items-center text-center py-4 border-bottom-width: 4px; border-b-8 border-b-solid">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-black">
              SUBMIT ANSWER
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-black">
              Select ONE method of Answering the Question
            </p>
          </div>
          <div className="md:w-64 :mb-0md mb-6 flex-shrink-0 flex md:flex-col md: space-y-5 sm:flex-row sm">
          <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest hover:border-2 hover:border-indigo-500 duration-300 ease-in-out">
            <FontAwesomeIcon
              className="pr-3"
              icon={icon({ name: "chevron-up", style: "solid" })}
            />
            VIDEO BOOTH
          </span>

          <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest hover:border-2 hover:border-indigo-500 duration-300 ease-in-out">
            <FontAwesomeIcon
              className="pr-3"
              icon={icon({ name: "chevron-up", style: "solid" })}
            />
            VIDEO UPLOAD
          </span>

          <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest hover:border-2 hover:border-indigo-500 duration-300 ease-in-out">
            <FontAwesomeIcon
              className="pr-3"
              icon={icon({ name: "chevron-up", style: "solid" })}
            />
            SUBMIT URL
          </span>
          </div>
        </div>
      </div>
    </>
  );
}
