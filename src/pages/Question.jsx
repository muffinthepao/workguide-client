import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Question() {
  return (
    <div className="relative pt-24 bg-no-repeat bg-cover bg-center mx-10">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div className="sticky top-16 flex flex-wrap w-full flex-col items-center text-center py-4 border-bottom-width: 4px; bg-white border-b-8 border-b-solid">
          <h1 className="sm:text-sm md:text-2xl font-medium title-font mb-2 text-black">
            Q: Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?
          </h1>
        </div>
        

        <section className="text-gray-600 body-font mx-auto my-8">
          <div className="grid gap-y-8">

            <div className="">
              <video className="w-full" controls src="https://cdn.shotstack.io/au/stage/2icq3dufwg/824460bb-cd15-45f8-a610-3132747addb6.mp4" style={{width: 720}}></video>
              <div className="w-full flex flex-row ">
                <span className="grow inline-block p-3 rounded-bl-lg bg-slate-200 text-slate-500 border-r-2 border-slate-300 text-xs font-medium tracking-widest space-x-6 text-center">
                  <FontAwesomeIcon className="pr-3" icon={icon({name: 'heart', style: 'regular'})} /> 
                  LIKE
                </span>
                <span className="grow inline-block p-3 rounded-br-lg bg-slate-200 text-slate-500 text-xs font-medium tracking-widest text-center">
                <FontAwesomeIcon className="pr-3" icon={icon({name: 'share-nodes', style: 'solid'})} />
                  SHARE
                </span>
              </div>
            </div>
            <div className="">
              <video className="w-full" controls src="https://cdn.shotstack.io/au/stage/2icq3dufwg/824460bb-cd15-45f8-a610-3132747addb6.mp4" style={{width: 720}}></video>
              <div className="w-full flex flex-row ">
                <span className="grow inline-block p-3 rounded-bl-lg bg-slate-200 text-slate-500 border-r-2 border-slate-300 text-xs font-medium tracking-widest space-x-6 text-center">
                  <FontAwesomeIcon className="pr-3" icon={icon({name: 'heart', style: 'regular'})} /> 
                  LIKE
                </span>
                <span className="grow inline-block p-3 rounded-br-lg bg-slate-200 text-slate-500 text-xs font-medium tracking-widest text-center">
                <FontAwesomeIcon className="pr-3" icon={icon({name: 'share-nodes', style: 'solid'})} />
                  SHARE
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
