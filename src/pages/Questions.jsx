import React, {useEffect, useState} from 'react';
import { DateTime } from 'luxon';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Questions() {

  const [question, setQuestion] = useState([])
  
  //on page load
  useEffect(() => {
    const axiosCall = async () => {
      try {
        const questions = await axios.get(process.env.REACT_APP_QNS_BASE_URL)
        // const questions = await axios.get('http://localhost:8000/api/v1/questions')
  
        console.log(questions.data[1])
        console.log("id: ", questions.data[1].id)
        console.log("question: ", questions.data[1].question)

        const categories = questions.data[1].categories
      
        categories.forEach(category => console.log("category: ", category.category))
        
        const date = questions.data[1].createdAt
        const dateFormatted = DateTime.fromISO(date)
        const humanReadable = dateFormatted.toLocaleString(DateTime.DATE_MED);

        console.log(humanReadable); // =>  October 22, 9:38 PM

        console.log(humanReadable)
      } catch (error) {
        console.log(error)
      }
    }

    axiosCall()
  },[])



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
              <div className="py-8 flex flex-wrap md:flex-nowrap space-x-6">
                <div className="md:w-64 :mb-0md mb-6 flex-shrink-0 flex md:flex-col md: space-y-5 sm:flex-row sm">
                  <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest space-x-6">
                    <FontAwesomeIcon className="pr-3" icon={icon({name: 'bookmark', style: 'regular'})} /> 
                    BOOKMARK
                  </span>
                  <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest">
                  <FontAwesomeIcon className="pr-3" icon={icon({name: 'chevron-up', style: 'solid'})} />
                    UPVOTE
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow text-left ">
                  <Link to="/questions/1" className="text-xl font-medium text-gray-900 title-font mb-2">Q: Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</Link>
                  {/* <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p> */}
                  <div className="flex space-x-5 mt-5">
                    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">CATEGORY</span>
                    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">CATEGORY</span>
                    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">CATEGORY</span>
                  </div>
                  {/* <a className="text-yellow-500 inline-flex items-center mt-4">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap space-x-6">
                <div className="md:w-64 :mb-0md mb-6 flex-shrink-0 flex md:flex-col md: space-y-5 sm:flex-row sm">
                  <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest space-x-6">
                    <FontAwesomeIcon className="pr-3" icon={icon({name: 'bookmark', style: 'regular'})} /> 
                    BOOKMARK
                  </span>
                  <span className="inline-block p-3 rounded bg-slate-50 text-indigo-500 text-xs font-medium tracking-widest">
                  <FontAwesomeIcon className="pr-3" icon={icon({name: 'chevron-up', style: 'solid'})} />
                    UPVOTE
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow text-left ">
                  <p className="text-xl font-medium text-gray-900 title-font mb-2">Q:Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</p>
                  {/* <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p> */}
                  <div className="flex space-x-5 mt-5">
                    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">CATEGORY</span>
                    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">CATEGORY</span>
                    <span className="inline-block py-1 px-2 rounded bg-slate-100 text-slate-500 text-xs font-medium tracking-widest">CATEGORY</span>
                  </div>
                  {/* <a className="text-yellow-500 inline-flex items-center mt-4">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
