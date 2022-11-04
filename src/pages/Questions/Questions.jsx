import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useApp } from '../../context/AppContext';

import QuestionCard from './QuestionCard';

export default function Questions() {
  const {questions, setQuestions} =useApp()
  
  //on page load
  useEffect(() => {
    const axiosCall = async () => {
      try {
        const questions = await axios.get(process.env.REACT_APP_QNS_BASE_URL)
  
          setQuestions(questions.data)
          // console.log(questions.status)
          console.log(questions)
          // console.log("id: ", questions.data[1].id)
          // console.log("question: ", questions.data[1].title)
  
          // const categories = questions.data[1].categories
        
          // categories.forEach(category => console.log("category: ", category.category))
          
          // const date = questions.data[1].createdAt
          // const dateFormatted = DateTime.fromISO(date)
          // const humanReadable = dateFormatted.toLocaleString(DateTime.DATE_MED);
  
          // console.log(humanReadable); // =>  October 22, 9:38 PM

        // if (!questions) return null;
      } catch (error) {
        console.log(error)
      }
    }

    axiosCall()
  },[])

  console.log("questions from questionspage:", questions)

  const questionCards = questions.map((question) => (
    <QuestionCard key={question.id} question={question} />
));

  return (

    <div className="relative pt-24 bg-no-repeat bg-cover bg-center mx-10">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div className="flex flex-wrap w-full flex-col items-center text-center py-4 border-bottom-width: 4px; border-b-8 border-b-solid">
          <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-black">QUESTIONS</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-black">Including the top upoted questions from the SGWork Subreddit</p>
        </div>

        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-8 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              {questions.length !== 0 ? (
                <>
                  {questionCards}

                </>
              ) : (
                <>
                  <p>Loading...</p>
                </>
              )}
              {/* <div className="py-8 flex flex-wrap md:flex-nowrap space-x-6">
                <div className="md:w-64 :mb-0md mb-6 flex-shrink-0 flex md:flex-col md: space-y-5 sm:flex-row sm">
                  <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest space-x-6">
                    <FontAwesomeIcon className="pr-3" icon={icon({name: 'bookmark', style: 'regular'})} /> 
                    BOOKMARK
                  </span>
                  <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest">
                    <FontAwesomeIcon className="pr-3" icon={icon({name: 'chevron-up', style: 'solid'})} />
                    UPVOTE
                  </span>
                  <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest">
                    <FontAwesomeIcon className="pr-3" icon={icon({name: 'film', style: 'solid'})} />
                    ANSWERS: 3
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow text-left ">
                  <p className="text-xl font-medium text-gray-900 title-font mb-2">Q:Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</p>
                  <div className="flex space-x-5 mt-5">
                    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">CATEGORY</span>
                    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">CATEGORY</span>
                    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">CATEGORY</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
