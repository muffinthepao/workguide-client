import axios from "axios";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Stepper, Step } from "react-form-stepper";
import { toast } from "react-toastify";
import ScrollDownGif from "../../pages/LandingPage/down-arrow.gif"

export default function VideoBooth() {
  const [step, setStep] = useState(1);
  const [part, setPart] = useState(1);
  const [recordingStatus, setRecordingStatus] = useState("beforeRecord")
  const [notes, setNotes] = useState("Type out your thoughts/notes here...");

  const notepadOne = document.getElementById("notepad-one");
  const notepadTwo = document.getElementById("notepad-two");

  // notepadOne.value = notes
  // notepadTwo.value = notes

  const nextStep = (e) => {
    setStep(2);
  };

  const handleChange = (event) => {
    setNotes(event.target.value);
  };

  const back = () => {
    setStep(1);
  };

  const record = () => {
    setRecordingStatus("recording")
  }

  const stopAndReview = () => {
    setRecordingStatus("review")
  }

  const retake = () => {
    setRecordingStatus("beforeRecord")
  }

  const proceed = () => {
    if (part < 3) {
      setPart(part+1)
      setStep(1);
      setRecordingStatus("beforeRecord")
      setNotes("Type out your thoughts/notes here...");
    }

    if (part === 3) {
      toast.success("wow sending to imagekit/shotstack")
    }
  }
  return (
    <>
      <div className="container px-5 py-24 pb-4 mx-auto">
        {/* <section className="text-gray-600 body-font mx-auto">
          <Stepper activeStep={2}>
            <Step label="Step 1 " />
            <Step label="Step 2" />
            <Step label="Step 3" />
          </Stepper>

      </section> */}
        {step === 1 && (
          <div id="explain" className="mx-auto flex flex-col justify-center">
            <div className="flex justify-center gap-3">
              <video
                controls
                style={{ height: "520px", width: "290px" }}
                src="https://ik.imagekit.io/7m4pg6sx4/AAA_Template/mixkit-waves-in-the-water-1164-medium_7urzHHJCM.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667459008535"
              ></video>
              <textarea
                style={{ height: "520px", width: "520px" }}
                onChange={handleChange}
                defaultValue={notes}
                id="notepadOne"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              onClick={nextStep}
              className=" p-1 m-3 rounded-[12px] border-2 hover:shadow-lg  bg-green-400 text-white"
            >
              PROCEED
            </button>
          </div>
        )}

        {step === 2 && (

          <div id="record" className="mx-auto flex flex-col justify-center">
   
              <div className="w-full text-center ">
                <img className="mx-auto -mt-7" src={ScrollDownGif} style={{width: "100px", height: "70px", objectFit: "cover", transform: "rotate(180deg)"}} alt="scrolldown.gif"/>
                <p className="mx-auto -mt-2 z-10">look at your webcam when recording</p>
              </div>
            {recordingStatus === "beforeRecord" && 

              <div className="flex">
                <button onClick={back} className=" basis-1/4 m-3 rounded-[12px] border-2 hover:shadow-lg">
                  BACK TO EXPLAINER
                </button>
                <button onClick={record} className=" basis-3/4 p-5 m-3 rounded-[12px] border-2 hover:shadow-lg  bg-green-400 text-white">
                  RECORD
                </button>
              </div>
  
            } 

            {recordingStatus === "recording" && 
              <button onClick={stopAndReview} className=" w-50 p-5 m-2 rounded-[12px] border-2 hover:shadow-lg bg-red-500 text-white">
                STOP & REVIEW
              </button>
            }

            {recordingStatus === "review" &&
              <div className="flex">
              <button onClick={back} className=" basis-1/3 m-3 rounded-[12px] border-2 hover:shadow-lg">
                  BACK TO EXPLAINER
                </button>
                <button onClick={retake}className=" basis-1/3 p-5 m-3 rounded-[12px] border-2 hover:shadow-lg">
                  RETAKE
                </button>
                <button onClick={proceed} className=" basis-1/3 p-5 m-3 rounded-[12px] border-2 hover:shadow-lg  bg-green-400 text-white">
                  PROCEED
                </button>
              </div>
            }
            

            <div className="flex justify-center gap-3 w-full">
              {recordingStatus === "review" &&
              <video
                style={{ width: "493px" }}
                controls
                background-color="black"
                src="https://ik.imagekit.io/7m4pg6sx4/workguide/blob_EvvSJ17GN.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667374814479"
              ></video>
              }
              <textarea
                style={{ width: "493px", height: "340px" }}
                defaultValue={notes}
                onChange={handleChange}
                id="notepad-two"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
