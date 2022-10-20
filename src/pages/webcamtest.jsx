import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Webcam from "react-webcam";

const WebcamStreamCapture = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [previewUrl, setPreviewUrl] = useState("");
  const [createdBlob, setCreatedBlob] = useState(null);

  const userId = 2;
  const questionId = 1;
  const baseAnswerURL = `${process.env.REACT_APP_QNS_BASE_URL}/${questionId}/answers`;

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
        codecs:"avc1.424028, mp4a.40.2"
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

  const handleRetake = () => {
    window.URL.revokeObjectURL(previewUrl);
    setRecordedChunks([]);
    setPreviewUrl("");
    setCreatedBlob(null);
  };

  const handleSubmit = async () => {
    //formdata()
    // {
    // video data + userId +
    //}
    // so userId, etc will remain in req.body
    // video data will go to req.files

    console.log("clicked submit");

    try {
      // // There are two ways to upload forms with multipart/form-data encoding. 
      // // The first is by using the enctype attribute: enctype='multipart/form-data'
      // // But since i dont have a form nor input fields in my html, I need to use the second way. Second way being to create my own FormData() 
      const form = new FormData();
      form.append("questionId", questionId);
      form.append("userId", userId);
      form.append("file", createdBlob);
      const response = await axios.post(baseAnswerURL,  form );

      // const response = await axios.post(baseAnswerURL, {
      //   questionId,
      //   userId,
      //   file: createdBlob
      // } );
  

      if (response.status === 200 || response.status === 201) {
        toast.success("Answer Submitted");
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <>
      {/* if left is true, return right. Right side is a jsx therefore always true */}
      {previewUrl !== "" ? (
        <div>
          <video controls className="videoPreview" src={previewUrl}></video>
          <button onClick={handleRetake}>Retake</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <Webcam audio={false} ref={webcamRef} />
          {capturing ? (
            <button onClick={handleStopRecording}>Stop Capture</button>
          ) : (
            <button onClick={handleStartRecording}>Start Capture</button>
          )}
        </div>
      )}
    </>
  );
};

export default WebcamStreamCapture;
