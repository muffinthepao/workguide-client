import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamStreamCapture = () => {
  // const video = document.querySelector(".videoPreview");
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleStartCaptureClick = () => {
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
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      console.log("url: ", url);
      setPreviewUrl(url);
    }
  };

  const handleStopCaptureClick = () => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  };

  // const handleSubmit = () => {
  //   //formdata()
  //   // {
  //   // video data + userId +
  //   //}
  //   // so userId, etc will remain in req.body
  //   // video data will go to req.files
  // };

  return (
    <>
      {/* if left is true, return right. Right side is a jsx therefore always true */}
      {previewUrl !== "" && (
        <video controls className="videoPreview" src={previewUrl}></video>
      )}

      <Webcam audio={false} ref={webcamRef} />
      {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {/* {recordedChunks.length > 0 && (
        <button onClick={handlePreview}>Preview</button>
      )} */}
    </>
  );
};

export default WebcamStreamCapture;
