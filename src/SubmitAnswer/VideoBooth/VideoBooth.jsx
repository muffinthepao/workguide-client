import axios from "axios";
import getBlobDuration from "get-blob-duration";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate, useParams } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { Stepper, Step } from "react-form-stepper";
import { toast } from "react-toastify";

import ScrollDownGif from "../../pages/LandingPage/down-arrow.gif";

export default function VideoBooth() {
  const navigate = useNavigate()
  const { questionId } = useParams();

  const [step, setStep] = useState(1);
  const [part, setPart] = useState(1);
  const [recordingStatus, setRecordingStatus] = useState("beforeRecord");
  const [notes, setNotes] = useState("Type out your thoughts/notes here...");

  const userId = 1;
  const baseAnswerURL = `${process.env.REACT_APP_QNS_BASE_URL}/${questionId}/answers/process-multi`;

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  // const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [previewUrl, setPreviewUrl] = useState("");
  const [createdBlob, setCreatedBlob] = useState(null);
  const [blobArray, setBlobArray] = useState([]);
  const [blobDuration, setBlobDuration] = useState([]);

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
    setRecordingStatus("recording");

    // setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });

    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  };

  const handleDataAvailable = ({ data }) => {
    if (data.size > 0) {
      const newRecordedChunks = recordedChunks.concat(data);
      setRecordedChunks(newRecordedChunks);
      console.log("data available");

      const blob = new Blob(newRecordedChunks, {
        type: "video/mp4",
      });
      const url = URL.createObjectURL(blob);
      console.log("url: ", url);
      setCreatedBlob(blob);
      setPreviewUrl(url);
    }
  };

  const stopAndReview = () => {
    setRecordingStatus("review");
    mediaRecorderRef.current.stop();
    // setCapturing(false);
  };

  const retake = () => {
    setRecordingStatus("beforeRecord");
    window.URL.revokeObjectURL(previewUrl);
    setRecordedChunks([]);
    setPreviewUrl("");
    setCreatedBlob(null);
  };

  const proceed = () => {
    if (part < 3) {
      setPart(part + 1);
      setStep(1);
      setRecordingStatus("beforeRecord");
      setNotes("Type out your thoughts/notes here...");

      setBlobArray([...blobArray, createdBlob]);

      getBlobDuration(createdBlob).then(function (duration) {
        console.log(duration + " seconds");
        setBlobDuration([...blobDuration, duration]);
      });

      retake();
    }

    if (part === 3) {
      setBlobArray([...blobArray, createdBlob]);

      getBlobDuration(createdBlob).then(function (duration) {
        console.log(duration + " seconds");
        setBlobDuration([...blobDuration, duration]);
      });

      setPart(part + 1);
    }
  };

  const startOver = () => {
    setStep(1);
    setPart(1);
    setRecordingStatus("beforeRecord");
    setNotes("Type out your thoughts/notes here...");

    webcamRef.current = null;
    mediaRecorderRef.current = null;

    // setCapturing(false);
    setRecordedChunks([]);
    setPreviewUrl("");
    setCreatedBlob(null);
    setBlobArray([]);
    setBlobDuration([]);
  };
  const handleSubmit = async () => {
    try {
      // // There are two ways to upload forms with multipart/form-data encoding.
      // // The first is by using the enctype attribute: enctype='multipart/form-data'
      // // But since i dont have a form nor input fields in my html, I need to use the second way. Second way being to create my own FormData()

      document.getElementById("startOver").disabled = true;

      const form = new FormData();
      form.append("questionId", questionId);
      form.append("userId", userId);
      form.append("blobDurations", blobDuration);

      blobArray.forEach((blob) => {
        return form.append("file", blob);
      });

      console.log("form: ", form);

      // form.append("file", createdBlob);
      const response = await axios.post(baseAnswerURL, form);

      if (response.status === 200 || response.status === 201) {
        toast.success("Answer Submitted");
        navigate(`/questions/${questionId}`)
      }
    } catch (error) {
      console.log(error);
      document.getElementById("startOver").disabled = false;
      return;
    }
  };
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
        {part === 4 ? (
          <div className="flex justify-center">
            <button
              id="startOver"
              onClick={startOver}
              className=" basis-1/3 p-5 m-3 rounded-[12px] border-2 hover:shadow-lg"
            >
              START FROM THE BEGINNING
            </button>
            {/* {submitPending ? (
              <button
                disabled
                onClick={handleSubmit}
                className=" basis-1/3 p-5 m-3 rounded-[12px] border-2 hover:shadow-lg  bg-green-400 text-white"
              >
                Pending...
              </button>
            ) : ( */}
              <button
                onClick={handleSubmit}
                className=" basis-1/3 p-5 m-3 rounded-[12px] border-2 hover:shadow-lg  bg-green-400 text-white"
              >
                SUBMIT
              </button>
            {/* )} */}
          </div>
        ) : step === 1 ? (
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
        ) : (
          <>
            <div id="record" className="mx-auto flex flex-col justify-center">
              <div className="w-full text-center ">
                <img
                  className="mx-auto -mt-7"
                  src={ScrollDownGif}
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                    transform: "rotate(180deg)",
                  }}
                  alt="scrolldown.gif"
                />
                <p className="mx-auto -mt-2 z-10">
                  look at your webcam when recording
                </p>
              </div>
              {recordingStatus === "beforeRecord" && (
                <div className="flex">
                  <button
                    onClick={back}
                    className=" basis-1/4 m-3 rounded-[12px] border-2 hover:shadow-lg"
                  >
                    BACK TO EXPLAINER
                  </button>
                  <button
                    onClick={record}
                    className=" basis-3/4 p-5 m-3 rounded-[12px] border-2 hover:shadow-lg  bg-green-400 text-white"
                  >
                    RECORD
                  </button>
                </div>
              )}

              {recordingStatus === "recording" && (
                <button
                  onClick={stopAndReview}
                  className=" w-50 p-5 m-2 rounded-[12px] border-2 hover:shadow-lg bg-red-500 text-white"
                >
                  STOP & REVIEW
                </button>
              )}

              {recordingStatus === "review" && (
                <div className="flex">
                  <button
                    onClick={back}
                    className=" basis-1/3 m-3 rounded-[12px] border-2 hover:shadow-lg"
                  >
                    BACK TO EXPLAINER
                  </button>
                  <button
                    onClick={retake}
                    className=" basis-1/3 p-5 m-3 rounded-[12px] border-2 hover:shadow-lg"
                  >
                    RETAKE
                  </button>
                  <button
                    onClick={proceed}
                    className=" basis-1/3 p-5 m-3 rounded-[12px] border-2 hover:shadow-lg  bg-green-400 text-white"
                  >
                    PROCEED
                  </button>
                </div>
              )}

              <div className="flex justify-center gap-3 w-full">
                {recordingStatus === "review" ? (
                  <video
                    style={{ width: "493px" }}
                    controls
                    background-color="black"
                    src={previewUrl}
                  ></video>
                ) : (
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    style={{ width: "493px" }}
                  />
                )}
                <textarea
                  style={{ width: "493px", height: "340px" }}
                  defaultValue={notes}
                  onChange={handleChange}
                  id="notepad-two"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
