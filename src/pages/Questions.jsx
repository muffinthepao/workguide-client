import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative pt-24 bg-no-repeat bg-cover bg-center mx-10">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">


        {/* <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Options
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu> */}
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Questions</h1>
              <p className="mx-auto leading-relaxed text-base">Includes top questions about work from Reddit</p>
            </div>x
            <div className="w-full mx-auto ">
              <table className="table-auto ">
                <thead>
                  <tr>
                    <th className="w-6/12 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">QUESTION</th>
                    <th className="w-2/12 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
                    <th className="w-2/12 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                    <th className="w-2/12px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="w-2/12 px-4 py-3 flex flex-wrap ">ergergergedfbdfbdfbdbfdbdfbdfbdfbdbdbdbdfbrgergegergergergergergergergergergergergggergergergergergergergergergergergergergergergergergergergergergergergerg</td>
                    <td className="w-2/12 px-4 py-3">5 Mb/s</td>
                    <td className="w-2/12 px-4 py-3">15 GB</td>
                    <td className="w-2/12 px-4 py-3 text-lg text-gray-900">Free</td>
                    <td className="w-10 text-center">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
              <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Button</button>
            </div>
          </div>
        </section> */}

        {/* <table class="table-fixed">
          <thead>
            <tr>
              <th>Question</th>
              <th>Oi</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table> */}
        
        {/* <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8">Question</div>
          <div class="col-span-2">Bookmark</div>
          <div class="col-span-2">Upvote</div>


          <div class="col-span-8">Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</div>
          <div class="col-span-2">Bookmark</div>
          <div class="col-span-2">Upvote</div>

          <div class="col-span-8">Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</div>
          <div class="col-span-2">Bookmark</div>
          <div class="col-span-2">Upvote</div>

          <div class="col-span-8">Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</div>
          <div class="col-span-2">Bookmark</div>
          <div class="col-span-2">Upvote</div>

          <div class="col-span-8">Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</div>
          <div class="col-span-2">Bookmark</div>
          <div class="col-span-2">Upvote</div>
        </div> */}

        {/* <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-6 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Questions</h1>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Including top upvoted questions from SGWork Subreddit</p>
            </div>
            <div class="mx-auto">
              <div class=" w-25 p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</h2>
                
                </div>
              </div>
              <div class=" p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Was there a time when you thought you hired the right person, but your judgement turned out to be wrong? If so, what are the mistakes that I should avoid to make sure that this never happens?</h2>
                
                </div>
              </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
          </div>
        </section> */}

        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                  <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                  <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                  <a class="text-yellow-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                  <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                  <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                  <a class="text-yellow-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                  <span class="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
                  <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                  <a class="text-yellow-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
