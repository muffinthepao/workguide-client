import axios from "axios";
import React, { useRef, useState } from "react";
import getBlobDuration from 'get-blob-duration'
import { toast } from "react-toastify";
import Webcam from "react-webcam";

const WebcamStreamCapture = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [previewUrl, setPreviewUrl] = useState("");
  const [createdBlob, setCreatedBlob] = useState(null);
  const [blobArray, setBlobArray] = useState([]);
  const [blobDuration, setBlobDuration] = useState([])

  const userId = 2;
  const questionId = 1;
  const baseAnswerURL = `${process.env.REACT_APP_QNS_BASE_URL}/${questionId}/answers/create`;

  const handleStartRecording = () => {
    setCapturing(true);
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

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  };

  const handleHowLong = () => {
  }

  const handleRetake = () => {
    window.URL.revokeObjectURL(previewUrl);
    setRecordedChunks([]);
    setPreviewUrl("");
    setCreatedBlob(null);
  };

  const handleNext = () => {
    setBlobArray([...blobArray, createdBlob]);
    
    getBlobDuration(createdBlob).then(function(duration) {
      console.log(duration + ' seconds');
      setBlobDuration([...blobDuration, duration])
    });

    handleRetake();
  };

  const handleSubmit = async () => {
    console.log("clicked submit");

    try {
      // // There are two ways to upload forms with multipart/form-data encoding.
      // // The first is by using the enctype attribute: enctype='multipart/form-data'
      // // But since i dont have a form nor input fields in my html, I need to use the second way. Second way being to create my own FormData()

      const form = new FormData();
      form.append("questionId", questionId);
      form.append("userId", userId);
      form.append("blobDurations", blobDuration)

      blobArray.forEach((blob) => {
        return form.append("file", blob);
      });

      console.log("form: ", form);

      // form.append("file", createdBlob);
      const response = await axios.post(baseAnswerURL, form);

      if (response.status === 200 || response.status === 201) {
        toast.success("Answer Submitted");
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };




  // const handleWatchAnswer = (arrayOfVideos) => {
  //   let videoSource = new Array();
  //   videoSource[0] =
  //   "https://ik.imagekit.io/7m4pg6sx4/workguide/blob_F8LczPgJW.mp4"
  //   videoSource[1] =
  //   "https://ik.imagekit.io/7m4pg6sx4/workguide/blob_UeD0BlUdrd.mp4"
  //   videoSource[2] =
  //   "https://ik.imagekit.io/7m4pg6sx4/workguide/blob_W0TkUBqXR.mp4"
  //   videoSource[3] =
  //   "https://ik.imagekit.io/7m4pg6sx4/workguide/blob_W0ljRhezj.mp4"

  //   let i = 0; // global
  //   const videoCount = videoSource.length;
  //   const element = document.getElementById("videoPlayer");

  //   function videoPlay(videoNum) {
  //     element.setAttribute("src", videoSource[videoNum]);
  //     element.autoplay = true;
  //     element.load();
  //   }
  //   document
  //     .getElementById("videoPlayer")
  //     .addEventListener("ended", myHandler, false);
  //     {/* add listener after video renders*/}

  //   videoPlay(0); // load the first video
  //   ensureVideoPlays(); // play the video automatically

  //   function myHandler() {
  //     i++;
  //     if (i == videoCount) {
  //       i = 0;
  //       videoPlay(i);
  //     } else {
  //       videoPlay(i);
  //     }
  //   }

  //   function ensureVideoPlays() {
  //     const video = document.getElementById("videoPlayer");

  //     if (!video) return;

  //     const promise = video.play();
  //     if (promise !== undefined) {
  //       promise
  //         .then(() => {
  //           // Autoplay started
  //         })
  //         .catch((error) => {
  //           // Autoplay was prevented.
  //           video.muted = true;
  //           video.play();
  //         });
  //     }
  //   }
  // };

  // {/*should e in a use effect. An action should invoke a function. */}
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   handleWatchAnswer();
  // }, []);

  
  return (
    <>
      {/* if left is true, return right. Right side is a jsx therefore always true */}
      {previewUrl !== "" ? (
        <div>
          <p>Video Parts: {blobArray.length}</p>
          <video autoplay controls id="videoPreview" src={previewUrl}></video>
          <button onClick={handleHowLong}>How Long???</button>
          <button onClick={handleRetake}>Retake</button>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleNext}>Record Next Part</button>
          {/* <button onClick={handleWatchAnswer}>Watch Answer</button> */}
        </div>
      ) : (
        <div>
          <p>Video Parts: {blobArray.length}</p>
          <Webcam audio={false} ref={webcamRef} />
          {capturing ? (
            <button onClick={handleStopRecording}>Stop Capture</button>
          ) : (
            <button onClick={handleStartRecording}>Start Capture</button>
          )}
          <button onClick={handleSubmit}>Submit</button>
          {/* <video autoplay controls id="videoPlayer" height="200"></video> */}
        </div>
      )}
    </>
  );
};

export default WebcamStreamCapture;
