import React from "react";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

export default function QuestionCard({ question }) {
  const { id, title, createdAt, categories } = question;

  const getCategories = categories.map((category) => (
    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">
      {category.category.toUpperCase()}
    </span>
  ));

  const dateFormatted = DateTime.fromISO(createdAt);
  const humanReadable = dateFormatted.toLocaleString(DateTime.DATE_MED);
  console.log(humanReadable); // =>  October 22, 9:38 PM

  return (
    <>
      <div className="py-8 flex flex-wrap md:flex-nowrap space-x-6">
        <div className="md:w-64 :mb-0md mb-6 flex-shrink-0 flex md:flex-col md: space-y-5 sm:flex-row sm">
          <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest hover:border-2 hover:border-indigo-500 duration-300 ease-in-out overflow-hidden">
            <FontAwesomeIcon
              className="pr-3"
              icon={icon({ name: "bookmark", style: "regular" })}
            />
            BOOKMARK
          </span>
          <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest hover:border-2 hover:border-indigo-500 duration-300 ease-in-out">
            <FontAwesomeIcon
              className="pr-3"
              icon={icon({ name: "chevron-up", style: "solid" })}
            />
            UPVOTE
          </span>
          <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest hover:border-2 hover:border-yellow-500 duration-300 ease-in-out">
            <FontAwesomeIcon
              className="pr-3"
              icon={icon({ name: "film", style: "solid" })}
            />
            ANSWERS: 3
          </span>
          <span className="mt-1 text-gray-500 text-sm">{humanReadable}</span>
        </div>

        <div className="md:flex-grow text-left ">
          <Link
            to={`/questions/${id}`}
            className="text-xl font-medium text-gray-900 title-font mb-2"
          >
            Q: {title}
          </Link>

          <div className="flex space-x-5 mt-5">
            {getCategories}
          </div>
        </div>


        <div className="md:w-64 :mb-0md mb-6 flex-shrink-0 flex md:flex-col md: space-y-5 sm:flex-row sm">
          <Link to={`/questions/${id}/answers/submit-answer`} className="inline-block p-3 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest space-x-6 hover:border-2 hover:border-yellow-500 hover:scale-105 duration-300 ease-in-out">
            <FontAwesomeIcon
              className="pr-3"
              icon={icon({ name: "plus", style: "solid" })}
            />
            SUBMIT ANSWER
          </Link>
        </div>
      </div>
    </>
  );
}
