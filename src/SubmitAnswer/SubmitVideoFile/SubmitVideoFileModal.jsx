import React, { useCallback, useState } from "react";
import axios from "axios";

import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import Dropzone from "../../components/Dropzone";

export default function SubmitVideoFileModal({
  showVideoFileModal,
  setShowVideoFileModal,
}) {
  const { questionId } = useParams();
  const [files, setFiles] = useState([])

  // const {
  //   register,
  //   handleSubmit,
  //   // watch,
  //   formState: { errors },
  // } = useForm({
  //   resolver: joiResolver(),
  //   defaultValues: {},
  // });

  async function handleSubmit() {
    const userId = 1
    const blobDurations = [2,2]
    const form = new FormData();
    form.append("userId", userId);
    form.append("blobDurations", blobDurations)
    files.forEach((file) => {
      return form.append("file", file);
    });

    try {
      const response = await axios.post(`${process.env.REACT_APP_QNS_BASE_URL}/${questionId}/answers/process-multi`, form);

      if (response.status === 201) {
        toast.success("Answer created via File Upload");
      } else toast.warning("From TRY Unable to create answer");
    } catch (error) {
      console.log(error);
      toast.warning("From CATCH Unable to create answer");
    }
  }



  return (
    <>
      {showVideoFileModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3
                    id="FileUploadFormHeader"
                    className="text-3xl font-semibold"
                  >
                    Submit via File Upload
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowVideoFileModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form>
                  <div className="relative m-7 p-6 flex-auto">
                    <h1 className="text-center"></h1>
                    <Dropzone files={files} setFiles={setFiles}/>
                    <p className="text-red-500 text-left">
                      {/* {errors.answerUrl?.message} */}
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowVideoFileModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
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
