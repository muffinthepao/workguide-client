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

        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-8 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap space-x-6">

                <div className="md:w-8/12 text-left ">
                  <video controls src="https://cdn.shotstack.io/au/stage/2icq3dufwg/824460bb-cd15-45f8-a610-3132747addb6.mp4" style={{width: 720}}></video>
                  <div className="w-full flex flex-row ">
                    <span className="grow inline-block p-3 rounded-bl-lg bg-slate-200 text-slate-500 text-xs font-medium tracking-widest space-x-6 text-center">
                      <FontAwesomeIcon className="pr-3" icon={icon({name: 'heart', style: 'regular'})} /> 
                      LIKE
                    </span>
                    <span className="grow inline-block p-3 rounded-br-lg bg-slate-200 text-slate-500 text-xs font-medium tracking-widest text-center">
                    <FontAwesomeIcon className="pr-3" icon={icon({name: 'share-nodes', style: 'solid'})} />
                      SHARE
                    </span>
                  </div>
                </div>
                <div className="md:w-4/12 mb-6 flex md:flex-col md: space-y-5 sm:flex-row sm">
                  <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                  <div class="border-r border-gray-300 lg:col-span-2">
                    <ul class="overflow-auto h-80">
                      <li>
                        <a
                          class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                          <img class="object-cover w-10 h-10 rounded-full"
                            src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                          <div class="w-full pb-2">
                            <div class="flex justify-between">
                              <span class="block ml-2 font-semibold text-gray-600">Jhon Don</span>
                              <span class="block ml-2 text-sm text-gray-600">25 minutes</span>
                            </div>
                            <span class="block ml-2 text-sm text-gray-600">bye</span>
                          </div>
                        </a>
                        <a
                          class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                          <img class="object-cover w-10 h-10 rounded-full"
                            src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png" alt="username" />
                          <div class="w-full pb-2">
                            <div class="flex justify-between">
                              <span class="block ml-2 font-semibold text-gray-600">Same</span>
                              <span class="block ml-2 text-sm text-gray-600">50 minutes</span>
                            </div>
                            <span class="block ml-2 text-sm text-gray-600">Good night</span>
                          </div>
                        </a>
                        <a
                          class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                          <img class="object-cover w-10 h-10 rounded-full"
                            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                          <div class="w-full pb-2">
                            <div class="flex justify-between">
                              <span class="block ml-2 font-semibold text-gray-600">Emma</span>
                              <span class="block ml-2 text-sm text-gray-600">6 hour</span>
                            </div>
                            <span class="block ml-2 text-sm text-gray-600">Good Morning</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <form>
                    <label for="chat" class="sr-only">Your message</label>
                    <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                        <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                            <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            <span class="sr-only">Send message</span>
                        </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
          <div className="container px-5 py-8 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap space-x-6">

                <div className="md:w-8/12 text-left ">
                  <video controls src="https://cdn.shotstack.io/au/stage/2icq3dufwg/824460bb-cd15-45f8-a610-3132747addb6.mp4" style={{width: 720}}></video>
                </div>
                <div className="md:w-4/12 mb-6 flex md:flex-col md: space-y-5 sm:flex-row sm">
              
                  <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                  <form>
                    <label for="chat" class="sr-only">Your message</label>
                    <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                        <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                            <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            <span class="sr-only">Send message</span>
                        </button>
                    </div>
                </form>
                </div>
              </div>

            </div>
          </div>
          <div className="container px-5 py-8 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap space-x-6">

                <div className="md:w-8/12 text-left ">
                  <video controls src="https://cdn.shotstack.io/au/stage/2icq3dufwg/824460bb-cd15-45f8-a610-3132747addb6.mp4" style={{width: 720}}></video>
                </div>
                <div className="md:w-4/12 mb-6 flex md:flex-col md: space-y-5 sm:flex-row sm">
                  <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                  <form>
                    <label for="chat" class="sr-only">Your message</label>
                    <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                        <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                            <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            <span class="sr-only">Send message</span>
                        </button>
                    </div>
                </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
