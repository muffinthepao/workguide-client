import React from "react";

import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UrlSchema } from "../SubmitUrl/SubmitUrlValidation";
import axios from "axios";

export default function SubmitUrlModal({ showUrlModal, setShowUrlModal }) {
  const { questionId } = useParams();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(UrlSchema),
    defaultValues: {
      answerUrl: "https://youtu.be/yvoO_ErTy6Q?t=11",
    },
  });

  async function onSubmit(data) {  
   try {
      const response = await axios.post(
        `${process.env.REACT_APP_QNS_BASE_URL}/${questionId}/answers/url-insertion`,
        {
          data
        }
      );
  
      if (response.status === 201) {
        toast.success("Answer created via URL")
      } else (
        toast.warning("From TRY Unable to create answer")
      )
    } catch (error) {
      console.log(error)
      toast.warning("From CATCH Unable to create answer")
    }

  }

  return (
    <>
      {showUrlModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 id="UrlFormHeader" className="text-3xl font-semibold">
                    Submit via URL
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowUrlModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative p-6 flex-auto">
                    <textarea
                      placeholder="Paste video URL here"
                      id="answerUrl"
                      {...register("answerUrl")}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    <p className="text-red-500 text-left">
                      {errors.answerUrl?.message}
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowUrlModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
