import axios from "axios";
import { useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useApp } from "../../context/AppContext";

import SelectCategories from "../../components/SelectCategories";
import { Question } from "../AskQuestion/AskQuestionValidation";
import { toast } from "react-toastify";

export default function AskQuestion() {
  const { selectedCategories, userData } = useApp();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // control,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(Question),
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_QNS_BASE_URL}/create`,
        {
          title: data.question,
          userId: userData?.id,
          categories: selectedCategories,
        }
      );

      console.log(response);

      if (response.status === 201) {
        toast.success("Question created!");
        navigate('/questions')
      }

      if (response.status === 400) {
        toast.warning("Unable to create question. Please try again");
      }
    } catch (error) {
      console.log(error);
      toast.warning("Unable to create question. Please try again");
    }
  };

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
            <div className="relative ">
              <textarea
                placeholder="Your question here..."
                {...register("question")}
                id="question"
                name="question"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <p className="text-red-500 text-left mb-4">
              {errors.question?.message}
            </p>
            <SelectCategories />
            {/* <Controller
                name="categories"
                defaultValue=""
                // options={[{ value: "", label: "Select Device Type" }, ...categoryList]}
                control={control}
                rules={{ required: true }}
                render={({field}) => (

                  <SelectCategories />
                )}
              /> */}
            {/* <Controller
              name="categories"
              control={control}
              render={({field}) => (

                <SelectCategories />
              )}
              /> */}
            <p className="text-red-500 text-left mb-4">
              {errors.categories?.message}
            </p>
            <button
              onClick={handleSubmit(onSubmit)}
              className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
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
