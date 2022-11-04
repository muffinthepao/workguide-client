import axios from "axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useAnswer } from "../../context/AnswerContext";

import SelectCategories from '../../components/SelectCategories'
import { Question } from "../AskQuestion/AskQuestionValidation";


export default function AskQuestion() {
  const {selectedCategories} = useAnswer()
  const question = document.getElementById('message')

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(Question),
    defaultValues: {
      answerUrl: "https://youtu.be/yvoO_ErTy6Q?t=11",
    },
  });

  const onSubmit = () => {
    console.log(selectedCategories)
    console.log(question)
  }

  return (
    <>
      <div className="container px-5 py-24 pb-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="lg:w-2/3 md:w-full bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              ASK A QUESTION
            </h2>
            {/* <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p> */}
            {/* <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div> */}
            <div className="relative mb-4">
              <textarea
                placeholder="Your question here..."
                {...register("question")}
                id="question"
                name="question"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <p className="text-red-500 text-left">
                      {errors.question?.message}
                    </p>
            <SelectCategories />
            <button onClick={handleSubmit(onSubmit)} className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              We won't show that you were the one who asked the question
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
